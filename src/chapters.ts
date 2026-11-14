import type { Topic } from './types'
import { seenIn } from './storage'

export interface Chapter {
  /** Brukes i adressen: #/kap/<key> */
  key: string
  n: number | null
  /** «Kapittel 6» */
  label: string
  /** «Transistor, strøm og spenning» (kan være tom) */
  title: string
  topics: Topic[]
  /** Ikonet til kapitlet, hvis det har et. */
  icon?: string
  /** Fargenøkkel (data-ch i CSS): kapittelnummeret, eller et navn for kapitler uten nummer. */
  color?: string
  /** Rekkefølge på forsiden. */
  sort: number
}

/**
 * Kapittel uten temaer ennå (f.eks. når kompendiet ikke er lagt inn). Settes i content/index.json.
 * Enten med nummer (n), eller med eget navn (key, label, slug) for kapitler som ikke har et eget nummer.
 */
export interface EmptyChapter { n?: number; key?: string; label?: string; slug?: string; sort?: number; title: string }

const hasIcon = (n: number | null) => n !== null && n >= 2 && n <= 8

const RE = /^Kapittel\s+(\d+)\s*[–-]\s*(.*)$/

/** Kapittelfargen til et delkapittel (samme navn som data-ch i CSS). */
export const chColor = (t: Topic) => { const c = chapterInfo(t); return c.n !== null ? String(c.n) : c.key }

export function chapterInfo(t: Topic): { key: string; n: number | null; label: string; title: string } {
  const name = t.chapter ?? 'Temaer'
  // Kapitler uten eget nummer (Datasikkerhet og Nettverk) peker til kapitlet med en nøkkel.
  if (t.chapterKey) return { key: t.chapterKey, n: null, label: name, title: '' }
  const m = RE.exec(name)
  if (m) return { key: m[1], n: Number(m[1]), label: `Kapittel ${m[1]}`, title: m[2] }
  return { key: 'andre', n: null, label: name, title: '' }
}

export function buildChapters(topics: Topic[], empty: EmptyChapter[] = []): Chapter[] {
  const map = new Map<string, Chapter>()
  const emptyByKey = new Map(empty.map(e => [e.key ?? String(e.n), e]))
  for (const t of topics) {
    const info = chapterInfo(t)
    let c = map.get(info.key)
    if (!c) {
      const e = emptyByKey.get(info.key)
      if (info.n === null && e?.key) {
        // Kapittel uten nummer: navn, ikon, farge og rekkefølge hentes fra index.json.
        c = { key: info.key, n: null, label: e.label ?? info.label, title: e.title, topics: [], sort: e.sort ?? 1e9, icon: e.slug ? `/chapter-icons/${e.slug}.png` : undefined, color: e.slug }
      } else {
        c = { ...info, topics: [], sort: info.n ?? 1e9, icon: hasIcon(info.n) ? `/chapter-icons/ch${info.n}.png` : undefined, color: info.n ? String(info.n) : undefined }
      }
      map.set(info.key, c)
    }
    c.topics.push(t)
  }
  for (const e of empty) {
    const key = e.key ?? String(e.n)
    if (map.has(key)) continue
    const n = e.n ?? null
    map.set(key, {
      key, n, label: e.label ?? `Kapittel ${e.n}`, title: e.title, topics: [], sort: e.sort ?? n ?? 1e9,
      icon: e.slug ? `/chapter-icons/${e.slug}.png` : hasIcon(n) ? `/chapter-icons/ch${n}.png` : undefined,
      color: e.slug ?? (n ? String(n) : undefined),
    })
  }
  return [...map.values()].sort((a, b) => a.sort - b.sort)
}

/** Bakgrunnsbildet til kapitlet (følger ikonets navn). */
export const bannerOf = (c: Chapter) => c.icon?.replace('/chapter-icons/', '/chapter-banners/').replace(/\.png$/, '.webp')

/** Høyere bakgrunn til delkapittelkortene inne i kapitlet: del<navn>.webp ved siden av kapittelbanneret. */
export const delBannerOf = (c: Chapter) => bannerOf(c)?.replace(/\/([^/]+)\.webp$/, (_, name: string) => `/del${name.replace(/^ch/, '')}.webp`)

/** Bakgrunn til «Kom i gang»-knappen: start<navn>.webp. Legg til kapittelnøkkelen her når bildet finnes. */
export const START_BANNERS = new Set(['2', '3', '4', '5', '6', '7', '8', 'nettverk', 'datasikkerhet'])
export const startBannerOf = (c: Chapter) => (START_BANNERS.has(c.key) ? bannerOf(c)?.replace(/\/([^/]+)\.webp$/, (_, name: string) => `/start${name.replace(/^ch/, '')}.webp`) : undefined)

export const podcastCount = (c: Chapter) => c.topics.reduce((sum, t) => sum + (t.podcasts?.length ?? 0), 0)
/** Hvor mange videoer i kapitlet du har sett (lagres bare i nettleseren din). */
export const seenCount = (c: Chapter) => c.topics.reduce((sum, t) => sum + seenIn(t.id, t.videos.length), 0)
export const videoCount = (c: Chapter) => c.topics.reduce((sum, t) => sum + t.videos.length, 0)