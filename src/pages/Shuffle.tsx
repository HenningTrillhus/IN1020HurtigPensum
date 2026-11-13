import { useMemo, useRef, useState } from 'react'
import type { Topic } from '../types'
import Feed from './Feed'
import { isSeen } from '../storage'
import { swipeHandlers, type SwipeStart } from '../swipe'

/** Så mange videoer får du i én blanding. Er de brukt opp, kan du blande på nytt. */
const BATCH = 40

/** Tilfeldig utvalg av videoer du ikke har sett, på tvers av alle kapitler. */
function pickUnseen(topics: Topic[]) {
  const pool = topics
    .filter(t => !t.noShuffle)
    .flatMap(t => t.videos.map((_, i) => ({ topic: t, i })))
    .filter(s => !isSeen(s.topic.id, s.i))
  for (let k = pool.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1))
    ;[pool[k], pool[j]] = [pool[j], pool[k]]
  }
  return pool.slice(0, BATCH)
}

/** Bland: en endeløs-følelse av korte videoer i tilfeldig rekkefølge, men bare de du ikke har sett. */
export default function Shuffle({ topics, root }: { topics: Topic[]; root: string }) {
  const [round, setRound] = useState(0)
  const swipe = useRef<SwipeStart | null>(null)
  const slides = useMemo(() => pickUnseen(topics), [topics, round])
  const back = () => { location.hash = '#/' }

  return (
    <div className="shell topic" {...swipeHandlers(swipe, undefined, back)}>
      <nav className="tabs">
        <a href="#/">← Alle kapitler</a>
        <a className="on" href="#/shuffle">Bland</a>
      </nav>
      {slides.length === 0 ? (
        <div className="wip-page">
          <h2>Du har sett alt</h2>
          <p>Det er ingen usette videoer igjen å blande. Kom tilbake når det er lagt til flere.</p>
        </div>
      ) : (
        <Feed
          key={round}
          topics={[]}
          root={root}
          startId={slides[0].topic.id}
          startI={slides[0].i}
          chapter="shuffle"
          exitHash="#/"
          onActive={() => {}}
          shuffle={{ slides, onAgain: () => setRound(r => r + 1) }}
        />
      )}
    </div>
  )
}
