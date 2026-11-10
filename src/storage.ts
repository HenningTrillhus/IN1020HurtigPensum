function read<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback } catch { return fallback }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* ignore */ }
}
export const getSeen = (topic: string): number[] => read(`seen:${topic}`, [])
export const markSeen = (topic: string, i: number) => {
  const s = new Set(getSeen(topic)); s.add(i); write(`seen:${topic}`, [...s])
}
export const getPos = (key: string): number => read(`pos:${key}`, 0)
export const setPos = (key: string, t: number) => write(`pos:${key}`, t)
export const getQuizBest = (topic: string): number => read(`quiz:${topic}`, -1)
export const setQuizBest = (topic: string, n: number) => write(`quiz:${topic}`, Math.max(n, getQuizBest(topic)))
