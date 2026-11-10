import { useEffect, useRef, useState } from 'react'
import type { Topic } from '../types'
import { getSeen, markSeen } from '../storage'
import { isSoundOn, enableSound, subscribeSound } from '../sound'

interface P { topic: Topic; base: string; onChange: () => void }

function Slide({ topic, base, i, onSeen }: { topic: Topic; base: string; i: number; onSeen: () => void }) {
  const v = topic.videos[i]
  const ref = useRef<HTMLElement>(null)
  const vid = useRef<HTMLVideoElement>(null)
  const [missing, setMissing] = useState(false)
  const [seen, setSeen] = useState(getSeen(topic.id).includes(i))
  const [muted, setMuted] = useState(!isSoundOn())

  useEffect(() => subscribeSound(() => setMuted(false)), [])

  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => {
      const video = vid.current
      if (e.isIntersecting) {
        video?.play().catch(() => {})
        if (!missing) {
          markSeen(topic.id, i); setSeen(true); onSeen()
        }
      } else video?.pause()
    }, { threshold: 0.7 })
    io.observe(el)
    return () => io.disconnect()
  }, [missing])

  return (
    <section className="slide" ref={ref}>
      {missing ? (
        <div className="placeholder"><p>Video mangler</p><small>{v.file}</small></div>
      ) : (
        <video ref={vid} src={base + v.file} loop playsInline muted={muted} controls preload="metadata" onError={() => setMissing(true)} />
      )}
      {!missing && muted && (
        <button className="sound" onClick={() => { enableSound(); vid.current?.play().catch(() => {}) }}>
          🔇 Trykk for lyd
        </button>
      )}
      <div className="caption">
        <h3>{v.title} {seen && '✓'}</h3>
        {v.summary && <p>{v.summary}</p>}
        <small>{i + 1} / {topic.videos.length}</small>
      </div>
    </section>
  )
}

export default function Feed({ topic, base, onChange }: P) {
  return (
    <div className="feed">
      {topic.videos.map((_, i) => <Slide key={i} topic={topic} base={base} i={i} onSeen={onChange} />)}
    </div>
  )
}
