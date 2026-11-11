// Hver teller stopper her og vises som «999+». Må være lik COUNTER_CAP i api/_lib.ts.
export const CAP = 999
export interface Stat { likes: number; dislikes: number; views: number; reports: number }
export type Vote = 'up' | 'down' | null

// Stemmer sendes først når brukeren har vært i ro så lenge. Trykk så mye du vil før det.
export const VOTE_DELAY_MS = 30_000

function read(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function write(key: string, value: string | null) {
  try { value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value) } catch { /* ignore */ }
}

// Anonym, tilfeldig enhets-id. Serveren bruker den til å huske at denne enheten allerede har
// stemt/sett en video. Det er ingen innlogging og kan ikke knyttes til en person.
function deviceId(): string {
  const existing = read('device')
  if (existing && /^[a-f0-9]{32}$/.test(existing)) return existing
  const bytes = crypto.getRandomValues(new Uint8Array(16))
  const id = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('')
  write('device', id)
  return id
}

export const videoId = (topic: string, i: number) => `${topic}:${i}`
const asVote = (v: string | null): Vote => (v === 'up' || v === 'down' ? v : null)
/** Hva brukeren har valgt (vises i grensesnittet med en gang). */
export const getVote = (id: string): Vote => asVote(read(`vote:${id}`))
/** Hva serveren sist fikk vite at denne enheten har stemt. */
export const getSentVote = (id: string): Vote => asVote(read(`vsent:${id}`))
export const hasViewed = (id: string) => read(`viewed:${id}`) === '1'

const post = (path: string, body: unknown, keepalive = false) =>
  fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), keepalive })

// Alle kall feiler stille: lokalt (uten API) og ved nettfeil skal siden fungere som før.
export async function fetchStats(ids: string[]): Promise<Record<string, Stat> | null> {
  try {
    const r = await fetch(`/api/stats?ids=${encodeURIComponent(ids.join(','))}`)
    return r.ok ? await r.json() : null
  } catch { return null }
}

// network=false: husk det lokalt, men ikke kall serveren (telleren er full).
export async function sendView(id: string, network = true): Promise<void> {
  if (hasViewed(id)) return
  write(`viewed:${id}`, '1')
  if (!network) return
  try { await post('/api/view', { id, device: deviceId() }) } catch { /* ignore */ }
}

// ---- Stemmer: samles opp og sendes først etter VOTE_DELAY_MS uten nye trykk ----

/** Avgjør om en endring fra `prev` til `next` fortsatt kan telle (ikke begge tellerne frosset). */
type CanSend = (prev: Vote, next: Vote) => boolean
interface Pending { vote: Vote; timer: ReturnType<typeof setTimeout>; canSend: CanSend }
const pending = new Map<string, Pending>()

async function flushVote(id: string, keepalive = false): Promise<void> {
  const p = pending.get(id)
  if (!p) return
  clearTimeout(p.timer)
  pending.delete(id)

  const sent = getSentVote(id)
  // Endte der den startet (eller trykket seg tilbake): ingenting å sende.
  if (p.vote === sent) return
  // Begge tellerne som berøres er på taket: husk valget lokalt, men ikke kall serveren.
  if (!p.canSend(sent, p.vote)) { write(`vsent:${id}`, p.vote); return }

  write(`vsent:${id}`, p.vote)
  try {
    const r = await post('/api/vote', { id, vote: p.vote, device: deviceId() }, keepalive)
    if (!r.ok) write(`vsent:${id}`, sent) // prøv igjen ved neste besøk
  } catch {
    write(`vsent:${id}`, sent)
  }
}

/** Registrer et valg. Valget vises og lagres lokalt med en gang, men sendes først etter VOTE_DELAY_MS i ro. */
export function queueVote(id: string, vote: Vote, canSend: CanSend): void {
  write(`vote:${id}`, vote)
  const old = pending.get(id)
  if (old) clearTimeout(old.timer)
  pending.set(id, { vote, canSend, timer: setTimeout(() => { void flushVote(id) }, VOTE_DELAY_MS) })
}

/** Ved sidelasting: hvis et valg aldri ble sendt (side lukket, nettfeil), planlegg det på nytt. */
export function resumeVote(id: string, canSend: CanSend): void {
  if (pending.has(id)) return
  const vote = getVote(id)
  if (vote !== getSentVote(id)) queueVote(id, vote, canSend)
}

// ---- «Meld feil i videoen»: samme mønster som stemmer. Av og på, sendes først etter ro. ----

/** Hva brukeren har valgt (vises med en gang). */
export const getReport = (id: string): boolean => read(`report:${id}`) === '1'
const getSentReport = (id: string): boolean => read(`rsent:${id}`) === '1'
const pendingReports = new Map<string, ReturnType<typeof setTimeout>>()

async function flushReport(id: string, keepalive = false): Promise<void> {
  const t = pendingReports.get(id)
  if (t === undefined) return
  clearTimeout(t)
  pendingReports.delete(id)
  const want = getReport(id), sent = getSentReport(id)
  if (want === sent) return // trykket seg tilbake dit den startet
  write(`rsent:${id}`, want ? '1' : null)
  try {
    const r = await post('/api/report', { id, report: want, device: deviceId() }, keepalive)
    if (!r.ok) write(`rsent:${id}`, sent ? '1' : null)
  } catch {
    write(`rsent:${id}`, sent ? '1' : null)
  }
}

export function queueReport(id: string, on: boolean): void {
  write(`report:${id}`, on ? '1' : null)
  const old = pendingReports.get(id)
  if (old !== undefined) clearTimeout(old)
  pendingReports.set(id, setTimeout(() => { void flushReport(id) }, VOTE_DELAY_MS))
}

/** Ved sidelasting: hvis en melding aldri ble sendt, planlegg den på nytt. */
export function resumeReport(id: string): void {
  if (pendingReports.has(id)) return
  if (getReport(id) !== getSentReport(id)) queueReport(id, getReport(id))
}

/** Send alt som venter nå, f.eks. når fanen lukkes, så ingenting går tapt i ventetiden. */
export function flushAllVotes(): void {
  for (const id of [...pending.keys()]) void flushVote(id, true)
  for (const id of [...pendingReports.keys()]) void flushReport(id, true)
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.addEventListener('pagehide', flushAllVotes)
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flushAllVotes() })
}
