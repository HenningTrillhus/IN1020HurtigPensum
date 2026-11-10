import { useEffect, useRef, useState } from 'react'
import type { Topic } from '../types'
import { getSeen, markSeen } from '../storage'
import { isSoundOn, enableSound, subscribeSound } from '../sound'
import { fetchStats, getVote, hasViewed, sendVote, sendView, videoId, type Stat, type Vote } from '../stats'
import { Eye, ThumbDown, ThumbUp } from '../Icons'

interface P { topic: Topic; base: string; onChange: () => void }

interface SlideProps {
  topic: Topic
  base: string
  i: number
  stat?: Stat
  onSeen: () => void
  onStat: (id: string, patch: (s: Stat) => Stat) => void
}

const fmt = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace('.0', '')}k` : String(n))

function Slide({ topic, base, i, stat, onSeen, onStat }: SlideProps) {
  const v = topic.videos[i]
  const id = videoId(topic.id, i)
  const ref = useRef<HTMLElement>(null)
  const vid = useRef<HTMLVideoElement>(null)
  const [missing, setMissing] = useState(false)
  const [seen, setSeen] = useState(getSeen(topic.id).includes(i))
  const [muted, setMuted] = useState(!isSoundOn())
  const [vote, setVote] = useState<Vote>(getVote(id))
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => subscribeSound(() => setMuted(false)), [])

  // Skjul overlegget i fullskjerm. Standard fullskjerm viser bare selve videoen,
  // men dette dekker også nettlesere som tar hele kortet (og iOS sin egen spiller).
  useEffect(() => {
    const video = vid.current
    const check = () => {
      const el = document.fullscreenElement
      setFullscreen(!!el && (el === video || !!ref.current?.contains(el)))
    }
    const begin = () => setFullscreen(true)
    const end = () => setFullscreen(false)
    document.addEventListener('fullscreenchange', check)
    video?.addEventListener('webkitbeginfullscreen', begin)
    video?.addEventListener('webkitendfullscreen', end)
    return () => {
      document.removeEventListener('fullscreenchange', check)
      video?.removeEventListener('webkitbeginfullscreen', begin)
      video?.removeEventListener('webkitendfullscreen', end)
    }
  }, [missing])

  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => {
      const video = vid.current
      if (e.isIntersecting) {
        video?.play().catch(() => {})
        if (!missing) {
          markSeen(topic.id, i); setSeen(true); onSeen()
          if (!hasViewed(id)) {
            sendView(id)
            onStat(id, s => ({ ...s, views: s.views + 1 }))
          }
        }
      } else video?.pause()
    }, { threshold: 0.7 })
    io.observe(el)
    return () => io.disconnect()
  }, [missing])

  const cast = (target: 'up' | 'down') => {
    const next: Vote = vote === target ? null : target
    setVote(next)
    sendVote(id, next, vote)
    onStat(id, s => {
      const out = { ...s }
      if (vote === 'up') out.likes = Math.max(0, out.likes - 1)
      if (vote === 'down') out.dislikes = Math.max(0, out.dislikes - 1)
      if (next === 'up') out.likes += 1
      if (next === 'down') out.dislikes += 1
      return out
    })
  }

  return (
    <section className="slide" ref={ref}>
      {missing ? (
        <div className="placeholder"><p>Video mangler</p><small>{v.file}</small></div>
      ) : (
        <video ref={vid} src={base + v.file} loop playsInline muted={muted} controls preload="metadata" onError={() => setMissing(true)} />
      )}
      {!missing && muted && !fullscreen && (
        <button className="sound" onClick={() => { enableSound(); vid.current?.play().catch(() => {}) }}>
          🔇 Trykk for lyd
        </button>
      )}
      {!missing && !fullscreen && (
        <div className="actions">
          <button className={`vote${vote === 'up' ? ' on' : ''}`} onClick={() => cast('up')} aria-pressed={vote === 'up'} aria-label="Tommel opp">
            <ThumbUp filled={vote === 'up'} />
          </button>
          <span className="count">{stat ? fmt(stat.likes) : ''}</span>
          <button className={`vote${vote === 'down' ? ' on down' : ''}`} onClick={() => cast('down')} aria-pressed={vote === 'down'} aria-label="Tommel ned">
            <ThumbDown filled={vote === 'down'} />
          </button>
          <span className="count">{stat ? fmt(stat.dislikes) : ''}</span>
        </div>
      )}
      {!missing && !fullscreen && stat && (
        <div className="views" title="Antall visninger">
          <Eye /> {fmt(stat.views)}
        </div>
      )}
      {!fullscreen && (
        <div className="caption">
          <h3>{v.title} {seen && '✓'}</h3>
          {v.summary && <p>{v.summary}</p>}
          <small>{i + 1} / {topic.videos.length}</small>
        </div>
      )}
    </section>
  )
}

export default function Feed({ topic, base, onChange }: P) {
  const [stats, setStats] = useState<Record<string, Stat>>({})

  useEffect(() => {
    let alive = true
    const ids = topic.videos.map((_, i) => videoId(topic.id, i))
    fetchStats(ids).then(s => { if (alive && s) setStats(s) })
    return () => { alive = false }
  }, [topic.id])

  const onStat = (id: string, patch: (s: Stat) => Stat) =>
    setStats(prev => ({ ...prev, [id]: patch(prev[id] ?? { likes: 0, dislikes: 0, views: 0 }) }))

  return (
    <div className="feed">
      {topic.videos.map((_, i) => (
        <Slide key={i} topic={topic} base={base} i={i} stat={stats[videoId(topic.id, i)]} onSeen={onChange} onStat={onStat} />
      ))}
    </div>
  )
}
