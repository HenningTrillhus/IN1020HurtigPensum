import { useMemo, useState, type CSSProperties } from 'react'
import type { Topic } from './types'
import { chColor, delBannerByColor } from './chapters'
import { norm, score, words } from './search'
import Mark from './Mark'
import SearchField from './SearchField'
import { SearchIcon } from './Icons'

interface Hit { topic: Topic; terms: { term: string; def: string; rank: number }[] }

/** Søk etter fagbegreper på tvers av alle delkapitlene i kapitlet. Viser hvilke delkapitler (og videoer) som tar dem opp. */
export default function ChapterSearch({ topics, compendiumUrl }: { topics: Topic[]; compendiumUrl?: string }) {
  const [q, setQ] = useState('')
  const ws = useMemo(() => words(q), [q])
  const n = norm(q.trim())

  const { hits, suggestions } = useMemo(() => {
    if (!n) return { hits: [] as Hit[], suggestions: [] as string[] }
    const hits: Hit[] = []
    const names = new Map<string, string>()
    for (const topic of topics) {
      // Alle videoene i et delkapittel deler de samme fagbegrepene.
      const terms = (topic.terms ?? []).map(t => ({ ...t, rank: score(t.term, t.def, ws) })).filter(t => t.rank >= 0).sort((a, b) => b.rank - a.rank)
      if (terms.length) hits.push({ topic, terms })
      for (const t of topic.terms ?? []) if (norm(t.term).includes(n)) names.set(norm(t.term), t.term)
    }
    const suggestions = [...names.values()].filter(s => norm(s) !== n).slice(0, 6)
    return { hits, suggestions }
  }, [topics, n, ws])

  return (
    <div className="chap-search">
      <SearchField className="tool-search" icon={<SearchIcon />} value={q} onChange={setQ} placeholder="Søk i fagbegreper i kapitlet" label="Søk etter fagbegrep" />
      {n && suggestions.length > 0 && (
        <div className="suggest" role="listbox" aria-label="Forslag">
          {suggestions.map(s => <button key={s} onClick={() => setQ(s)}>{s}</button>)}
        </div>
      )}
      {n && hits.length === 0 && (
        <p className="search-none">
          «{q.trim()}» finnes ikke i noen av videoene. Prøv et annet ord, eller slå det opp i{' '}
          {compendiumUrl ? <a href={compendiumUrl} target="_blank" rel="noreferrer">kompendiet</a> : 'kompendiet'} selv.
        </p>
      )}
      {hits.length > 0 && (
        <div className="search-hits">
          <small className="search-count">
            Funnet i {hits.length} {hits.length === 1 ? 'delkapittel' : 'delkapitler'}
          </small>
          {hits.map(({ topic, terms }) => {
            const v = topic.videos.length
            return (
              <a key={topic.id} className={`hit${delBannerByColor(chColor(topic)) ? ' has-banner term-banner' : ''}`} href={`#/${topic.id}/feed`} style={{ '--banner': delBannerByColor(chColor(topic)) ? `url(${delBannerByColor(chColor(topic))})` : undefined } as CSSProperties}>
                <div className="hit-head">
                  <strong>{topic.title}</strong>
                  <span className="badge">{v} {v === 1 ? 'video' : 'videoer'}</span>
                </div>
                <ul>{terms.map(t => <li key={t.term}><b><Mark text={t.term} ws={ws} /></b></li>)}</ul>
                <span className="hit-go">Se videoene ›</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
