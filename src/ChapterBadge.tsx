import type { Chapter } from './chapters'
import { seenCount, videoCount } from './chapters'
import { badgeOf, isDone } from './badges'
import { useState } from 'react'
import { CheckIcon } from './Icons'
import { chapterShareText, shareAward } from './share'

/** Kapittelmerket nederst på kapittelsiden: låst til alle videoene er sett, så åpent. Viser også hvor mye som er gjort. */
export default function ChapterBadge({ chapter }: { chapter: Chapter }) {
  const [note, setNote] = useState('')
  const total = videoCount(chapter)
  const seen = seenCount(chapter)
  const done = isDone(chapter)
  const src = badgeOf(chapter, done)
  if (!total || !src) return null
  const pct = Math.round((seen / total) * 100)
  return (
    <section className={`chapter-badge${done ? ' done' : ''}`} data-ch={chapter.color} aria-label="Kapittelmerke">
      <img src={src} alt={done ? `Merket for ${chapter.label}, opplåst` : `Merket for ${chapter.label}, låst`} width={112} height={112} draggable={false} />
      <div className="cb-body">
        <span className="cb-label">Kapittelmerke</span>
        <strong className="cb-pct">{pct} % gjennomført</strong>
        <span className="completion" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><i style={{ width: `${pct}%` }} /></span>
        <small>
          {done
            ? <><CheckIcon /> Du har sett alle videoene i kapitlet</>
            : `${seen} av ${total} ${total === 1 ? 'video' : 'videoer'} sett. Se alle for å låse opp merket.`}
        </small>
        {done && (
          <button type="button" className="cb-share" onClick={async () => {
            const name = chapter.title ? `${chapter.label}: ${chapter.title}` : chapter.label
            const r = await shareAward(chapterShareText(name), src)
            setNote(r === 'copied' ? 'Kopiert! Lim det inn i en melding.' : r === 'failed' ? 'Kunne ikke dele her.' : '')
          }}>Del merket</button>
        )}
        {note && <small role="status">{note}</small>}
      </div>
    </section>
  )
}
