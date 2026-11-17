import { seenCount, videoCount, type Chapter } from './chapters'

// Merker finnes for disse kapitlene (filene ligger i /public/badges: <farge>.png og <farge>-last.png).
const HAVE = new Set(['2', '3', '4', '5', '6', '7', '8', 'nettverk', 'datasikkerhet'])

/** Er kapitlet gjennomført? Alle videoene må være sett, og kapitlet må ha videoer. */
export const isDone = (c: Chapter) => { const v = videoCount(c); return v > 0 && seenCount(c) >= v }

/** Merke for kapitlet, åpent (gjennomført) eller låst. Undefined hvis kapitlet ikke har noe merke. */
export function badgeOf(c: Chapter, open: boolean): string | undefined {
  return c.color && HAVE.has(c.color) ? `/badges/${c.color}${open ? '' : '-last'}.png` : undefined
}

// Hvilke kapitler du allerede har fått gratulasjonen for. Så den kommer én gang per kapittel.
const KEY = 'awarded'
export const getAwarded = (): string[] => {
  try { const v = JSON.parse(localStorage.getItem(KEY) ?? '[]'); return Array.isArray(v) ? v.filter(x => typeof x === 'string') : [] } catch { return [] }
}
export const addAwarded = (key: string) => {
  try { localStorage.setItem(KEY, JSON.stringify([...new Set([...getAwarded(), key])])) } catch { /* ignore */ }
}

// Merket for hele pensum: total.png og total-last.png i /public/badges.
export const TOTAL_BADGE = true
export const totalBadge = (open: boolean) => `/badges/total${open ? '' : '-last'}.png`
/** Alle videoene i alle kapitler er sett. */
export const allDone = (chapters: Chapter[]) => {
  const v = chapters.reduce((n, c) => n + videoCount(c), 0)
  return v > 0 && chapters.reduce((n, c) => n + seenCount(c), 0) >= v
}
export const removeAwarded = (key: string) => {
  try { localStorage.setItem(KEY, JSON.stringify(getAwarded().filter(k => k !== key))) } catch { /* ignore */ }
}
