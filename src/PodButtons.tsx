import type { CSSProperties } from 'react'
import type { Topic } from './types'
import { fmtTime, trackFor, usePlayer } from './player'
import { PauseIcon, PlayIcon } from './Icons'

/** Rad med podkastikoner for et tema. Trykk for å starte, trykk igjen for å pause. */
export default function PodButtons({ topic, compact = false }: { topic: Topic; compact?: boolean }) {
  const player = usePlayer()
  const list = topic.podcasts ?? []
  if (list.length === 0) return null

  return (
    <div className={`pod-row${compact ? ' compact' : ''}`} role="group" aria-label="Podkaster">
      {list.map(p => {
        const track = trackFor(topic, p)
        const current = player.track?.key === track.key
        const playing = current && player.playing
        const pct = current && player.duration > 0 ? (player.time / player.duration) * 100 : 0
        return (
          <button
            key={p.file}
            className={`pod${current ? ' current' : ''}${playing ? ' playing' : ''}`}
            // Knappene kan ligge inni et kort med lenke; ikke la trykket åpne kortet.
            onClick={e => { e.preventDefault(); e.stopPropagation(); player.toggle(track) }}
            aria-label={`${playing ? 'Pause' : 'Spill av'} podkast: ${p.title}`}
            aria-pressed={playing}
            title={p.title}
          >
            <span className="pod-ring" style={{ '--pp': `${pct}%` } as CSSProperties}>
              <span className="pod-img">
                <img src={track.iconSrc} alt="" draggable={false} />
                <span className="pod-ov">{playing ? <PauseIcon /> : <PlayIcon />}</span>
              </span>
            </span>
            {p.duration != null && <span className="pod-dur">{fmtTime(p.duration)}</span>}
          </button>
        )
      })}
    </div>
  )
}
