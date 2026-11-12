import { useRef, type CSSProperties } from 'react'
import type { Chapter } from '../chapters'
import PodButtons from '../PodButtons'
import { ThemeToggle } from '../theme'
import ChapterSearch from '../ChapterSearch'
import { CalcButton } from '../Calculator'
import Disclaimer from '../Disclaimer'
import BugButton from '../BugButton'
import { ChapterRating } from '../Rating'
import { swipeHandlers, type SwipeStart } from '../swipe'
import { seenIn } from '../storage'
import { CheckIcon } from '../Icons'

// «6.2 Bryteren …» -> { num: '6.2', text: 'Bryteren …' }
function splitTitle(title: string) {
  const m = /^(\d+(?:\.\d+)*)\s+(.*)$/.exec(title)
  return m ? { num: m[1], text: m[2] } : { num: '•', text: title }
}

// Ett kapittel: alle delkapitlene.
export default function ChapterPage({ chapter, compendiumUrl }: { chapter: Chapter; compendiumUrl?: string }) {
  const swipe = useRef<SwipeStart | null>(null)
  const termCount = chapter.topics.reduce((n, t) => n + (t.terms?.length ?? 0), 0)
  const termsHref = `#/kap/${chapter.key}/begreper`
  return (
    // Dra fingeren mot venstre for å gå til alle fagbegrepene i kapitlet, og mot høyre for å gå tilbake til forsiden.
    <div className="shell" data-ch={chapter.color} {...swipeHandlers(swipe, termCount > 0 ? () => { location.hash = termsHref } : undefined, () => { location.hash = '#/' })}>
      <nav className="tabs">
        <a href="#/">← Alle kapitler</a>
        <BugButton className="push" />
        <CalcButton />
        <ThemeToggle />
      </nav>
      <div className="chapter-head">
        {chapter.icon && <img className="ch-icon lg" src={chapter.icon} alt="" width={72} height={72} draggable={false} />}
        <div>
          <span className="chapter-label">{chapter.label}</span>
          <h1 className="chapter-title">{chapter.title || chapter.label}</h1>
        </div>
      </div>
      <Disclaimer compact compendiumUrl={compendiumUrl} chapterLabel={chapter.label} />
      {termCount > 0 && (
        <a className="terms-link" href={termsHref}>
          <span>Fagbegreper</span>
          <small>Alle {termCount} begrepene i kapitlet, A til Å</small>
          <span aria-hidden>›</span>
        </a>
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
            const seen = seenIn(t.id, n)
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
                    {seen > 0 && (
                      <span className={`seen-tag${seen === n ? ' all' : ''}`}>
                        · {seen === n ? <><CheckIcon /> Alle sett</> : `${seen} av ${n} sett`}
                      </span>
                    )}
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
      {chapter.topics.length > 0 && <ChapterRating chapterKey={chapter.key} topics={chapter.topics} />}
    </div>
  )
}
