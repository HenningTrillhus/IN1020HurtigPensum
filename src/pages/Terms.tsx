import { useMemo, useState, type CSSProperties } from 'react'
import type { Topic } from '../types'
import { norm } from '../search'
import SearchField from '../SearchField'

/** Fagbegreper for ett delkapittel, med søk. */
export default function Terms({ topic }: { topic: Topic }) {
  const all = topic.terms ?? []
  const [q, setQ] = useState('')
  const shown = useMemo(() => {
    const n = norm(q.trim())
    return n ? all.filter(t => norm(t.term).includes(n) || norm(t.def).includes(n)) : all
  }, [all, q])

  if (all.length === 0) {
    return (
      <div className="pad wip-page">
        <h2>Fagbegreper kommer snart</h2>
        <p>Det er ingen fagbegreper for dette temaet ennå.</p>
      </div>
    )
  }

  return (
    <div className="pad">
      <div className="terms-head">
        <h2>Fagbegreper</h2>
        <small>{all.length} begreper i {topic.title}</small>
      </div>
      {all.length > 5 && (
        <SearchField value={q} onChange={setQ} placeholder="Søk i begrepene" label="Søk i fagbegreper" />
      )}
      {shown.length === 0 ? (
        <p className="sub terms-empty">Ingen begreper passer med «{q}».</p>
      ) : (
        <dl className="terms">
          {shown.map((t, i) => (
            <div className="term" key={t.term} style={{ '--i': Math.min(i, 10) } as CSSProperties}>
              <dt>{t.term}</dt>
              <dd>{t.def}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
