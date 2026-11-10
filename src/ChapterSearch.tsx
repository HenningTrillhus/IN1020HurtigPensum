import { useMemo, useState } from 'react'
import type { Topic } from './types'
import { norm } from './search'

interface Hit { topic: Topic; terms: { term: string; def: string }[] }

/** Søk etter fagbegreper på tvers av alle delkapitlene i kapitlet. Viser hvilke delkapitler (og videoer) som tar dem opp. */
export default function ChapterSearch({ topics, compendiumUrl }: { topics: Topic[]; compendiumUrl?: string }) {
  const [q, setQ] = useState('')
  const n = norm(q.trim())

  const { hits, suggestions } = useMemo(() => {
    if (!n) return { hits: [] as Hit[], suggestions: [] as string[] }
    const hits: Hit[] = []
    const names = new Map<string, string>()
    for (const topic of topics) {
      // Alle videoene i et delkapittel deler de samme fagbegrepene.
      const terms = (topic.terms ?? []).filter(t => norm(t.term).includes(n) || norm(t.def).includes(n))
      if (terms.length) hits.push({ topic, terms })
      for (const t of topic.terms ?? []) if (norm(t.term).includes(n)) names.set(norm(t.term), t.term)
    }
    const suggestions = [...names.values()].filter(s => norm(s) !== n).slice(0, 6)
    return { hits, suggestions }
  }, [topics, n])

  return (
    <div className="chap-search">
      <input
        className="terms-search" type="search" value={q} onChange={e => setQ(e.target.value)}
        placeholder="Søk etter et fagbegrep i dette kapitlet" aria-label="Søk etter fagbegrep"
      />
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
              <a key={topic.id} className="hit" href={`#/${topic.id}/feed`}>
                <div className="hit-head">
                  <strong>{topic.title}</strong>
                  <span className="badge">{v} {v === 1 ? 'video' : 'videoer'}</span>
                </div>
                <ul>{terms.map(t => <li key={t.term}><b>{t.term}</b></li>)}</ul>
                <span className="hit-go">Se videoene ›</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
