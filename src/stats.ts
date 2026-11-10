export interface Stat { likes: number; dislikes: number; views: number }
export type Vote = 'up' | 'down' | null

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
export const getVote = (id: string): Vote => {
  const v = read(`vote:${id}`)
  return v === 'up' || v === 'down' ? v : null
}
export const hasViewed = (id: string) => read(`viewed:${id}`) === '1'

const post = (path: string, body: unknown) =>
  fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

// Alle kall feiler stille: lokalt (uten API) og ved nettfeil skal siden fungere som før.
export async function fetchStats(ids: string[]): Promise<Record<string, Stat> | null> {
  try {
    const r = await fetch(`/api/stats?ids=${encodeURIComponent(ids.join(','))}`)
    return r.ok ? await r.json() : null
  } catch { return null }
}

export async function sendView(id: string): Promise<void> {
  if (hasViewed(id)) return
  write(`viewed:${id}`, '1')
  try { await post('/api/view', { id, device: deviceId() }) } catch { /* ignore */ }
}

export async function sendVote(id: string, vote: Vote): Promise<void> {
  write(`vote:${id}`, vote)
  try { await post('/api/vote', { id, vote, device: deviceId() }) } catch { /* ignore */ }
}
