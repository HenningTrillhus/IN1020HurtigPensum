import type { CSSProperties } from 'react'
import { chapterColor, colorVars, videoCount, type Chapter } from '../chapters'
import Disclaimer from '../Disclaimer'
import ExamCountdown, { type Exam } from '../ExamCountdown'

// Forsiden: bare kapitlene. Trykk på et kapittel for å se delkapitlene.
export default function Overview({ chapters, courseUrl, exam }: { chapters: Chapter[]; courseUrl?: string; exam?: Exam }) {
  return (
    <div className="shell">
      {exam && <ExamCountdown exam={exam} />}
      <header className="hero">
        <h1>IN1020 Hurtigpensum</h1>
        <p className="sub">Pensum i korte klipp. Velg et kapittel.</p>
      </header>
      <Disclaimer courseUrl={courseUrl} />
      <div className="grid">
        {chapters.map((c, i) => {
          const v = videoCount(c)
          const d = c.topics.length
          return (
            <a
              key={c.key}
              className={`card${v === 0 ? ' wip' : ''}`}
              style={{ '--i': Math.min(i, 10), ...colorVars(chapterColor(c.n)) } as CSSProperties}
              href={`#/kap/${c.key}`}
            >
              <span className="num">{c.n ?? '•'}</span>
              <div className="body">
                <h2>{c.title || c.label}</h2>
                <small>
                  <span>{c.title ? `${c.label} · ` : ''}{d} {d === 1 ? 'delkapittel' : 'delkapitler'}</span>
                  <span>· {v} {v === 1 ? 'video' : 'videoer'}</span>
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
