function read<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback } catch { return fallback }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* ignore */ }
}
export const getSeen = (topic: string): number[] => read(`seen:${topic}`, [])
/** Antall sette videoer i et tema (bare de som fortsatt finnes). */
export const seenIn = (topic: string, videos: number): number => getSeen(topic).filter(i => i < videos).length
export const isSeen = (topic: string, i: number): boolean => getSeen(topic).includes(i)
export const markSeen = (topic: string, i: number) => {
  const s = new Set(getSeen(topic)); s.add(i); write(`seen:${topic}`, [...s])
}
export const getPos = (key: string): number => read(`pos:${key}`, 0)
export const setPos = (key: string, t: number) => write(`pos:${key}`, t)

/** Siste video du var på, så forsiden kan tilby «Fortsett». */
export const getLast = (): { topic: string; i: number } | null => {
  const v = read<{ topic?: string; i?: number } | null>('last', null)
  return v && typeof v.topic === 'string' && Number.isInteger(v.i) ? { topic: v.topic, i: v.i as number } : null
}
export const setLast = (topic: string, i: number) => write('last', { topic, i })
