import { useMemo } from 'react'
import type { Chapter } from './chapters'
import { norm } from './search'
import SearchField from './SearchField'

interface Hit {
  term: string
  def: string
  chapterLabel: string
  topicTitle: string
  href: string
  inName: boolean
}

const MAX = 30

const snippet = (s: string, n = 130) => (s.length > n ? `${s.slice(0, n).replace(/\s+\S*$/, '')} …` : s)

/** Søkefelt på forsiden som finner fagbegreper i alle kapitler. Et treff tar deg rett til delkapittelet. */
export function GlobalSearchBox({ q, setQ, onClose }: { q: string; setQ: (v: string) => void; onClose?: () => void }) {
  return (
    <SearchField
      className="global-search" value={q} onChange={setQ} onClose={onClose} autoFocus
      placeholder="Søk etter et fagbegrep i alle kapitler" label="Søk etter fagbegrep i alle kapitler"
    />
  )
}

export function GlobalSearchResults({ chapters, q, courseUrl }: { chapters: Chapter[]; q: string; courseUrl?: string }) {
  const n = norm(q.trim())

  const hits = useMemo<Hit[]>(() => {
    if (!n) return []
    const out: Hit[] = []
    for (const c of chapters) {
      for (const t of c.topics) {
        // Delkapitler med videoer åpnes på videoene. Er de ikke klare, går du til kapittelet.
        const href = t.videos.length > 0 ? `#/${t.id}/feed` : `#/kap/${c.key}`
        for (const x of t.terms ?? []) {
          const inName = norm(x.term).includes(n)
          if (inName || norm(x.def).includes(n)) out.push({ term: x.term, def: x.def, chapterLabel: c.label, topicTitle: t.title, href, inName })
        }
      }
    }
    // Treff i selve begrepet først, så treff i forklaringen. Ellers i kapittelrekkefølge.
    return out.sort((a, b) => Number(b.inName) - Number(a.inName))
  }, [chapters, n])

  if (!n) return null

  if (hits.length === 0) {
    return (
      <p className="search-none">
        «{q.trim()}» finnes ikke som fagbegrep i noen av videoene. Prøv et annet ord, eller slå det opp i kompendiet selv
        {courseUrl && <>, som du finner på <a href={courseUrl} target="_blank" rel="noreferrer">emnesiden</a></>}.
      </p>
    )
  }

  return (
    <div className="search-hits">
      <small className="search-count">
        {hits.length} {hits.length === 1 ? 'treff' : 'treff'}{hits.length > MAX ? `, viser de ${MAX} beste` : ''}
      </small>
      {hits.slice(0, MAX).map((h, i) => (
        <a key={`${h.href}:${h.term}:${i}`} className="hit" href={h.href}>
          <div className="hit-head">
            <strong>{h.term}</strong>
            <span className="badge">{h.chapterLabel}</span>
          </div>
          <p className="hit-def">{snippet(h.def)}</p>
          <span className="hit-go">{h.topicTitle} ›</span>
        </a>
      ))}
    </div>
  )
}
