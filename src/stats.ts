export interface Stat { likes: number; dislikes: number; views: number }
export type Vote = 'up' | 'down' | null

function read(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}
function write(key: string, value: string | null) {
  try { value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value) } catch { /* ignore */ }
}

export const videoId = (topic: string, i: number) => `${topic}:${i}`
export const getVote = (id: string): Vote => {
  const v = read(`vote:${id}`)
  return v === 'up' || v === 'down' ? v : null
}
export const hasViewed = (id: string) => read(`viewed:${id}`) === '1'

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
  try {
    await fetch('/api/view', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
  } catch { /* ignore */ }
}

export async function sendVote(id: string, vote: Vote, prev: Vote): Promise<void> {
  write(`vote:${id}`, vote)
  try {
    await fetch('/api/vote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, vote, prev }) })
  } catch { /* ignore */ }
}
