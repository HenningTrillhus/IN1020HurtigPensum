import { useMemo, useState, type CSSProperties } from 'react'
import { delBannerByColor, type Chapter } from './chapters'
import { norm, score, words } from './search'
import Mark from './Mark'
import SearchField from './SearchField'
import { SearchIcon } from './Icons'
import ToTop from './ToTop'

interface Hit {
  term: string
  def: string
  chapterKey: string
  chapterLabel: string
  chapterIcon?: string
  color?: string
  topicTitle: string
  href: string
  rank: number
}

const MAX = 40
// Treff i videotitler og sammendrag, under fagbegrepene. Slå av her om det blir kaotisk: da er søket som før.
const VIDEO_SEARCH = true
const MAX_VIDEOS = 5

interface VideoHit { title: string; summary?: string; chapterKey: string; chapterLabel: string; color?: string; topicTitle: string; href: string; rank: number }

const snippet = (s: string, n = 130) => (s.length > n ? `${s.slice(0, n).replace(/\s+\S*$/, '')} …` : s)

/** Søkefelt på forsiden som finner fagbegreper i alle kapitler. Et treff tar deg rett til delkapittelet. */
export function GlobalSearchBox({ q, setQ, onClose, searching, onFocus, onBlur }: { q: string; setQ: (v: string) => void; onClose?: () => void; searching?: boolean; onFocus?: () => void; onBlur?: () => void }) {
  return (
    <SearchField
      className={`global-search tool-search${searching ? ' big' : ''}`} value={q} onChange={setQ} onClose={onClose} icon={<SearchIcon />}
      placeholder="Søk i fagbegreper" label="Søk etter fagbegrep i alle kapitler"
      onFocus={onFocus} onBlur={onBlur} keepFocus={searching}
    />
  )
}

// Begreper folk mest sannsynlig leter etter. Vises under søkefeltet før du har skrevet noe.
const POPULAR = [
  'Toerkomplement', 'Overflyt', 'Flyttall', 'UTF-8', 'ALU', 'Cache', 'Pipeline', 'Akkumulator', 'TCP', 'DNS', 'NAND',
  'Kryptografi', 'SQL-injeksjon', 'NAT', 'Transistor', 'Register', 'Assembler', 'GDPR', 'Spectre', 'Hashing', 'IEEE 754', 'Virtuelt minne',
]

/** Én linje med forslag rett under søkefeltet: populære begreper først, og mens du skriver, begreper som passer. */
export function SearchSuggestions({ chapters, q, setQ }: { chapters: Chapter[]; q: string; setQ: (v: string) => void }) {
  const ws = useMemo(() => words(q), [q])
  const names = useMemo(() => {
    const seen = new Set<string>()
    const out: string[] = []
    for (const c of chapters) for (const t of c.topics) for (const x of t.terms ?? []) {
      const k = norm(x.term)
      if (!seen.has(k)) { seen.add(k); out.push(x.term) }
    }
    return out
  }, [chapters])
  const list = useMemo(() => {
    if (!ws.length) return POPULAR
    const n = ws.join(' ')
    return names
      .map(t => ({ t, k: norm(t) }))
      .filter(x => ws.every(w => x.k.includes(w)))
      .sort((a, b) => Number(b.k.startsWith(n)) - Number(a.k.startsWith(n)) || a.t.length - b.t.length)
      .map(x => x.t)
      .filter(t => norm(t) !== n)
      .slice(0, 10)
  }, [ws, names])
  if (!list.length) return null
  return (
    <div className="search-suggest" role="group" aria-label={ws.length ? 'Forslag som passer' : 'Populære begreper'}>
      {list.map(t => (
        <button key={t} type="button" className="search-chip" onPointerDown={e => e.preventDefault()} onClick={() => setQ(t)}>{t}</button>
      ))}
    </div>
  )
}

export function GlobalSearchResults({ chapters, q, courseUrl }: { chapters: Chapter[]; q: string; courseUrl?: string }) {
  const ws = useMemo(() => words(q), [q])
  const [only, setOnly] = useState<string | null>(null)

  const all = useMemo<Hit[]>(() => {
    if (!ws.length) return []
    const out: Hit[] = []
    for (const c of chapters) {
      for (const t of c.topics) {
        // Delkapitler med videoer åpnes på videoene. Er de ikke klare, går du til kapittelet.
        const href = t.videos.length > 0 ? `#/${t.id}/feed` : `#/kap/${c.key}`
        for (const x of t.terms ?? []) {
          const rank = score(x.term, x.def, ws)
          if (rank >= 0) {
            out.push({ term: x.term, def: x.def, chapterKey: c.key, chapterLabel: c.label, chapterIcon: c.icon, color: c.color, topicTitle: t.title, href, rank })
          }
        }
      }
    }
    // Best treff først (eksakt navn, så navn som begynner med søket, så resten). Ellers i kapittelrekkefølge.
    return out.sort((a, b) => b.rank - a.rank)
  }, [chapters, ws])

  const videoAll = useMemo<VideoHit[]>(() => {
    if (!VIDEO_SEARCH || !ws.length) return []
    const out: VideoHit[] = []
    for (const c of chapters) {
      for (const t of c.topics) {
        t.videos.forEach((v, i) => {
          const title = norm(v.title), text = `${title} ${norm(v.summary ?? '')}`
          if (!ws.every(w => text.includes(w))) return
          // Treff i tittelen teller mest.
          const rank = ws.every(w => title.includes(w)) ? 2 : 1
          out.push({ title: v.title, summary: v.summary, chapterKey: c.key, chapterLabel: c.label, color: c.color, topicTitle: t.title, href: `#/${t.id}/feed/${i + 1}`, rank })
        })
      }
    }
    return out.sort((a, b) => b.rank - a.rank)
  }, [chapters, ws])

  // Hvor mange treff i hvert kapittel, som knapper du kan snevre inn med.
  const perChapter = useMemo(() => {
    const m = new Map<string, { key: string; label: string; color?: string; n: number }>()
    for (const h of all) {
      const e = m.get(h.chapterKey) ?? { key: h.chapterKey, label: h.chapterLabel, color: h.color, n: 0 }
      e.n++
      m.set(h.chapterKey, e)
    }
    return [...m.values()]
  }, [all])

  const active = only && perChapter.some(c => c.key === only) ? only : null
  const hits = active ? all.filter(h => h.chapterKey === active) : all
  const videoHits = (active ? videoAll.filter(h => h.chapterKey === active) : videoAll).slice(0, MAX_VIDEOS)

  if (!ws.length) return null

  if (all.length === 0 && videoAll.length === 0) {
    return (
      <p className="search-none">
        «{q.trim()}» finnes ikke som fagbegrep i noen av videoene. Prøv et annet ord, eller slå det opp i kompendiet selv
        {courseUrl && <>, som du finner på <a href={courseUrl} target="_blank" rel="noreferrer">emnesiden</a></>}.
      </p>
    )
  }

  return (
    <div className="search-hits">
      <ToTop />
      <small className="search-count">
        {videoHits.length > 0 && (
          <button type="button" className="video-jump" onClick={() => document.getElementById('video-hits')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            ▶ {videoHits.length} {videoHits.length === 1 ? 'video' : 'videoer'} ↓
          </button>
        )}
        {hits.length} {hits.length === 1 ? 'fagbegrep' : 'fagbegreper'}{hits.length > MAX ? `, viser de ${MAX} beste` : ''}
      </small>
      {perChapter.length > 1 && (
        <div className="hit-filters" role="group" aria-label="Snevre inn til ett kapittel">
          {perChapter.map(c => (
            <button
              key={c.key} type="button" data-ch={c.color} className={`hit-chip${active === c.key ? ' on' : ''}`}
              aria-pressed={active === c.key} onClick={() => setOnly(active === c.key ? null : c.key)}
            >
              {c.label} <b>{c.n}</b>
            </button>
          ))}
        </div>
      )}
      {hits.slice(0, MAX).map((h, i) => (
        <a key={`${h.href}:${h.term}:${i}`} className={`hit coloured${delBannerByColor(h.color) ? ' has-banner term-banner' : ''}`} data-ch={h.color} href={h.href} style={{ '--banner': delBannerByColor(h.color) ? `url(${delBannerByColor(h.color)})` : undefined } as CSSProperties}>
          <div className="hit-head">
            <strong><Mark text={h.term} ws={ws} /></strong>
            <span className="badge ch-badge">
              {h.chapterIcon && <img src={h.chapterIcon} alt="" width={16} height={16} />}
              {h.chapterLabel}
            </span>
          </div>
          <p className="hit-def"><Mark text={snippet(h.def)} ws={ws} /></p>
          <span className="hit-go">{h.topicTitle} ›</span>
        </a>
      ))}
      {videoHits.length > 0 && (
        <>
          <small id="video-hits" className="search-count video-hits-h">Videoer ({videoHits.length})</small>
          {videoHits.map((h, i) => (
            <a key={`${h.href}:${i}`} className="hit coloured video-hit" data-ch={h.color} href={h.href}>
              <div className="hit-head">
                <strong><Mark text={h.title} ws={ws} /></strong>
                <span className="badge ch-badge">{h.chapterLabel}</span>
              </div>
              {h.summary && <p className="hit-def"><Mark text={snippet(h.summary)} ws={ws} /></p>}
              <span className="hit-go">▶ {h.topicTitle} ›</span>
            </a>
          ))}
        </>
      )}
    </div>
  )
}
