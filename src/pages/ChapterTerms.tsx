import { useMemo, useRef, useState } from 'react'
import type { Chapter } from '../chapters'
import { swipeHandlers, type SwipeStart } from '../swipe'
import { norm } from '../search'
import { ThemeToggle } from '../theme'
import { CalcButton } from '../Calculator'
import BugButton from '../BugButton'

interface Entry { term: string; def: string; topicId: string; topicTitle: string }

const collator = new Intl.Collator('nb', { sensitivity: 'base', numeric: true })
const letterOf = (s: string) => {
  const c = s.trim().replace(/^[^\p{L}\p{N}]+/u, '').charAt(0).toLocaleUpperCase('nb')
  return /\p{L}/u.test(c) ? c : '#'
}

/** Alle fagbegrepene i et kapittel, sortert alfabetisk, med søk. Hvert begrep viser hvilket delkapittel det hører til. */
export default function ChapterTerms({ chapter }: { chapter: Chapter }) {
  const [q, setQ] = useState('')
  const swipe = useRef<SwipeStart | null>(null)
  const back = `#/kap/${chapter.key}`

  const all = useMemo<Entry[]>(() => {
    const list = chapter.topics.flatMap(t => (t.terms ?? []).map(x => ({ term: x.term, def: x.def, topicId: t.id, topicTitle: t.title })))
    return list.sort((a, b) => collator.compare(a.term, b.term) || collator.compare(a.topicTitle, b.topicTitle))
  }, [chapter])

  const shown = useMemo(() => {
    const n = norm(q.trim())
    return n ? all.filter(e => norm(e.term).includes(n) || norm(e.def).includes(n)) : all
  }, [all, q])

  // Gruppert under bokstaven begrepet begynner med.
  const groups = useMemo(() => {
    const out: { letter: string; items: Entry[] }[] = []
    for (const e of shown) {
      const l = letterOf(e.term)
      const last = out[out.length - 1]
      if (last && last.letter === l) last.items.push(e)
      else out.push({ letter: l, items: [e] })
    }
    return out
  }, [shown])

  return (
    // Dra fingeren mot høyre for å gå tilbake til kapittelet.
    <div className="shell" {...swipeHandlers(swipe, undefined, () => { location.hash = back })}>
      <nav className="tabs">
        <a href={back}>← {chapter.label}</a>
        <BugButton className="push" />
        <CalcButton />
        <ThemeToggle />
      </nav>
      <span className="chapter-label">{chapter.label}</span>
      <h1 className="chapter-title">Fagbegreper</h1>
      <p className="sub">{all.length} begreper i {chapter.label.toLowerCase()}, sortert alfabetisk.</p>
      <input
        className="terms-search" type="search" placeholder="Søk i begrepene" value={q}
        onChange={e => setQ(e.target.value)} aria-label="Søk i fagbegreper i kapitlet"
      />
      {all.length === 0 ? (
        <div className="wip-page"><h2>Fagbegreper kommer snart</h2><p>Det er ingen fagbegreper for dette kapitlet ennå.</p></div>
      ) : shown.length === 0 ? (
        <p className="sub terms-empty">Ingen begreper passer med «{q}».</p>
      ) : (
        <div className="chapter-terms">
          {groups.map(g => (
            <section key={g.letter}>
              <h2 className="terms-letter">{g.letter}</h2>
              <dl className="terms">
                {g.items.map(e => (
                  <div className="term" key={`${e.topicId}:${e.term}`}>
                    <dt>{e.term}</dt>
                    <dd>{e.def}</dd>
                    <a className="term-from" href={`#/${e.topicId}/begreper`}>{e.topicTitle}</a>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
