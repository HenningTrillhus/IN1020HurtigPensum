import type { Topic } from './types'

export interface Chapter {
  /** Brukes i adressen: #/kap/<key> */
  key: string
  n: number | null
  /** «Kapittel 6» */
  label: string
  /** «Transistor, strøm og spenning» (kan være tom) */
  title: string
  topics: Topic[]
}

/** Kapittel uten temaer ennå (f.eks. når kompendiet ikke er lagt inn). Settes i content/index.json. */
export interface EmptyChapter { n: number; title: string }

const RE = /^Kapittel\s+(\d+)\s*[–-]\s*(.*)$/

export function chapterInfo(t: Topic): { key: string; n: number | null; label: string; title: string } {
  const name = t.chapter ?? 'Temaer'
  const m = RE.exec(name)
  if (m) return { key: m[1], n: Number(m[1]), label: `Kapittel ${m[1]}`, title: m[2] }
  return { key: 'andre', n: null, label: name, title: '' }
}

export function buildChapters(topics: Topic[], empty: EmptyChapter[] = []): Chapter[] {
  const map = new Map<string, Chapter>()
  for (const t of topics) {
    const info = chapterInfo(t)
    let c = map.get(info.key)
    if (!c) { c = { ...info, topics: [] }; map.set(info.key, c) }
    c.topics.push(t)
  }
  for (const e of empty) {
    const key = String(e.n)
    if (!map.has(key)) map.set(key, { key, n: e.n, label: `Kapittel ${e.n}`, title: e.title, topics: [] })
  }
  return [...map.values()].sort((a, b) => (a.n ?? 1e9) - (b.n ?? 1e9))
}

export const podcastCount = (c: Chapter) => c.topics.reduce((sum, t) => sum + (t.podcasts?.length ?? 0), 0)
export const videoCount = (c: Chapter) => c.topics.reduce((sum, t) => sum + t.videos.length, 0)