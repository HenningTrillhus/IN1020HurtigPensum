import type { Chapter } from '../chapters'
import { getQuizBest } from '../storage'

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
        <div className="wip">
          <div className="wip-icon" aria-hidden>🚧</div>
          <h2>Work in progress</h2>
          <p>Delkapitlene og videoene til dette kapitlet er ikke klare ennå. Kom tilbake senere!</p>
        </div>
      ) : (
        <div className="grid">
          {chapter.topics.map(t => {
            const n = t.videos.length
            const best = getQuizBest(t.id)
            return (
              <a key={t.id} className={`card${n === 0 ? ' wip' : ''}`} href={`#/${t.id}/feed`}>
                <h2>{t.title}</h2>
                {t.description && <p>{t.description}</p>}
                <small>
                  {n} {n === 1 ? 'video' : 'videoer'}
                  {best >= 0 ? ` · quiz best: ${best}` : ''}
                  {n === 0 && <span className="badge">🚧 Work in progress</span>}
                </small>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
