import { videoCount, type Chapter } from '../chapters'
import Disclaimer from '../Disclaimer'

// Forsiden: bare kapitlene. Trykk på et kapittel for å se delkapitlene.
export default function Overview({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="shell">
      <h1>IN1020 Hurtigpensum</h1>
      <p className="sub">Pensum i korte klipp. Velg et kapittel.</p>
      <Disclaimer />
      <div className="grid">
        {chapters.map(c => {
          const v = videoCount(c)
          const d = c.topics.length
          return (
            <a key={c.key} className={`card chapter-card${v === 0 ? ' wip' : ''}`} href={`#/kap/${c.key}`}>
              <span className="chapter-label">{c.label}</span>
              {c.title && <h2>{c.title}</h2>}
              <small>
                {d} {d === 1 ? 'delkapittel' : 'delkapitler'} · {v} {v === 1 ? 'video' : 'videoer'}
                {v === 0 && <span className="badge">🚧 Work in progress</span>}
              </small>
            </a>
          )
        })}
      </div>
    </div>
  )
}
