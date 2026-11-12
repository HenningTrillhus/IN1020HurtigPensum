import { useEffect, useState, type CSSProperties } from 'react'
import { podcastCount, videoCount, type Chapter } from '../chapters'
import Disclaimer from '../Disclaimer'
import { ThemeToggle } from '../theme'
import { CalcButton } from '../Calculator'
import BugButton from '../BugButton'
import { RatingLine } from '../Rating'
import { fetchRatings, type Rating } from '../stats'
import ExamCountdown, { type Exam } from '../ExamCountdown'

// Forsiden: bare kapitlene. Trykk på et kapittel for å se delkapitlene.
export default function Overview({ chapters, courseUrl, exam }: { chapters: Chapter[]; courseUrl?: string; exam?: Exam }) {
  // Snitt på vurderingene av hvert kapittel, vist ved siden av antall videoer og podkaster.
  const [ratings, setRatings] = useState<Record<string, Rating>>({})
  useEffect(() => {
    let alive = true
    const ids = chapters.filter(c => c.topics.length > 0).map(c => c.key)
    if (ids.length) fetchRatings(ids).then(r => { if (alive && r) setRatings(r) })
    return () => { alive = false }
  }, [chapters])

  return (
    <div className="shell">
      <div className="top-row">
        {exam && <ExamCountdown exam={exam} />}
        <BugButton />
        <CalcButton />
        <ThemeToggle />
      </div>
      <header className="hero">
        <h1>IN1020 Hurtigpensum</h1>
        <p className="sub">Pensum i korte klipp. Velg et kapittel.</p>
      </header>
      <Disclaimer courseUrl={courseUrl} />
      <div className="grid">
        {chapters.map((c, i) => {
          const v = videoCount(c)
          const d = c.topics.length
          const p = podcastCount(c)
          return (
            <a
              key={c.key}
              className={`card${v === 0 ? ' wip' : ''}`}
              style={{ '--i': Math.min(i, 10) } as CSSProperties}
              href={`#/kap/${c.key}`}
            >
              <span className="num">{c.n ?? '•'}</span>
              <div className="body">
                <h2>{c.title || c.label}</h2>
                <small>
                  <span>{c.title ? `${c.label} · ` : ''}{d} {d === 1 ? 'delkapittel' : 'delkapitler'}</span>
                  <span>· {v} {v === 1 ? 'video' : 'videoer'}</span>
                  <span>· {p} {p === 1 ? 'podkast' : 'podkaster'}</span>
                  <RatingLine r={ratings[c.key]} />
                  {v === 0 && <span className="badge">Work in progress</span>}
                </small>
              </div>
              <span className="chev" aria-hidden>›</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
