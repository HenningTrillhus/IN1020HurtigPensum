import type { CSSProperties } from 'react'
import type { Chapter } from '../chapters'
import PodButtons from '../PodButtons'
import { ThemeToggle } from '../theme'
import ChapterSearch from '../ChapterSearch'
import { CalcButton } from '../Calculator'
import BugButton from '../BugButton'
import { ChapterRating } from '../Rating'

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
        <BugButton className="push" />
        <CalcButton />
        <ThemeToggle />
      </nav>
      <span className="chapter-label">{chapter.label}</span>
      <h1 className="chapter-title">{chapter.title || chapter.label}</h1>
      {compendiumUrl && (
        <p className="compendium">
          <a href={compendiumUrl} target="_blank" rel="noreferrer">Les kompendiet for {chapter.label.toLowerCase()} (PDF)</a>
        </p>
      )}
      {chapter.topics.length > 0 && <ChapterSearch topics={chapter.topics} compendiumUrl={compendiumUrl} />}
      {chapter.topics.length === 0 ? (
        <div className="wip-page">
          <h2>Work in progress</h2>
          <p>Delkapitlene og videoene til dette kapitlet er ikke klare ennå. Kom tilbake senere!</p>
        </div>
      ) : (
        <div className="grid">
          {chapter.topics.map((t, i) => {
            const n = t.videos.length
            const { num, text } = splitTitle(t.title)
            const hasPods = (t.podcasts?.length ?? 0) > 0
            const main = (
              <>
                <span className="num sm">{num}</span>
                <div className="body">
                  <h2>{text}</h2>
                  {t.description && <p>{t.description}</p>}
                  <small>
                    <span>{n} {n === 1 ? 'video' : 'videoer'}</span>
                    {n === 0 && <span className="badge">Work in progress</span>}
                  </small>
                </div>
                <span className="chev" aria-hidden>›</span>
              </>
            )
            const style = { '--i': Math.min(i, 10) } as CSSProperties
            const cls = `card${n === 0 ? ' wip' : ''}`
            // Kort med podkast: knappene ligger under beskrivelsen og kan ikke ligge inni selve lenken.
            return hasPods ? (
              <div key={t.id} className={`${cls} split`} style={style}>
                <a className="card-main" href={`#/${t.id}/feed`}>{main}</a>
                <div className="card-pods"><PodButtons topic={t} /></div>
              </div>
            ) : (
              <a key={t.id} className={cls} style={style} href={`#/${t.id}/feed`}>{main}</a>
            )
          })}
        </div>
      )}
      {chapter.topics.length > 0 && <ChapterRating chapterKey={chapter.key} />}
    </div>
  )
}
