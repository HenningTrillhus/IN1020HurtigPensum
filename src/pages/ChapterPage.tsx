import type { CSSProperties } from 'react'
import type { Chapter } from '../chapters'
import { getQuizBest } from '../storage'

// «6.2 Bryteren …» -> { num: '6.2', text: 'Bryteren …' }
function splitTitle(title: string) {
  const m = /^(\d+(?:\.\d+)*)\s+(.*)$/.exec(title)
  return m ? { num: m[1], text: m[2] } : { num: '•', text: title }
}

// Ett kapittel: alle delkapitlene.
export default function ChapterPage({ chapter, compendiumUrl }: { chapter: Chapter; compendiumUrl?: string }) {
  return (
    <div className="shell">
      <nav className="tabs">
        <a href="#/">← Alle kapitler</a>
      </nav>
      <span className="chapter-label">{chapter.label}</span>
      <h1 className="chapter-title">{chapter.title || chapter.label}</h1>
      {compendiumUrl && (
        <p className="compendium">
          📄 <a href={compendiumUrl} target="_blank" rel="noreferrer">Les kompendiet for {chapter.label.toLowerCase()} (PDF)</a>
        </p>
      )}
      {chapter.topics.length === 0 ? (
        <div className="wip-page">
          <div className="wip-icon" aria-hidden>🚧</div>
          <h2>Work in progress</h2>
          <p>Delkapitlene og videoene til dette kapitlet er ikke klare ennå. Kom tilbake senere!</p>
        </div>
      ) : (
        <div className="grid">
          {chapter.topics.map((t, i) => {
            const n = t.videos.length
            const best = getQuizBest(t.id)
            const { num, text } = splitTitle(t.title)
            return (
              <a
                key={t.id}
                className={`card${n === 0 ? ' wip' : ''}`}
                style={{ '--i': Math.min(i, 10) } as CSSProperties}
                href={`#/${t.id}/feed`}
              >
                <span className="num sm">{num}</span>
                <div className="body">
                  <h2>{text}</h2>
                  {t.description && <p>{t.description}</p>}
                  <small>
                    <span>{n} {n === 1 ? 'video' : 'videoer'}</span>
                    {best >= 0 && <span>· quiz best: {best}</span>}
                    {n === 0 && <span className="badge">🚧 Work in progress</span>}
                  </small>
                </div>
                <span className="chev" aria-hidden>›</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
