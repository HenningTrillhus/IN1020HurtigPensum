import { useRef, useState } from 'react'
import type { Topic } from '../types'
import { getPos, setPos } from '../storage'

export default function Podcast({ topic, base }: { topic: Topic; base: string; onChange: () => void }) {
  const p = topic.podcast
  const audio = useRef<HTMLAudioElement>(null)
  const [rate, setRate] = useState(1)
  const [missing, setMissing] = useState(false)
  if (!p) return <p className="pad">Ingen podkast for dette temaet.</p>
  const key = `${topic.id}:podcast`
  return (
    <div className="pad">
      <h2>{p.title}</h2>
      {missing ? <p>Lydfil mangler: {p.file}</p> : (
        <audio
          ref={audio} src={base + p.file} controls preload="metadata"
          onLoadedMetadata={() => { if (audio.current) audio.current.currentTime = getPos(key) }}
          onTimeUpdate={() => audio.current && setPos(key, audio.current.currentTime)}
          onError={() => setMissing(true)}
        />
      )}
      <div className="rates">
        {[0.75, 1, 1.25, 1.5, 2].map(r => (
          <button key={r} className={r === rate ? 'on' : ''}
            onClick={() => { setRate(r); if (audio.current) audio.current.playbackRate = r }}>{r}×</button>
        ))}
      </div>
    </div>
  )
}
