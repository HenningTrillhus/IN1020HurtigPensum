import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { Topic } from '../types'
import { isSoundOn, enableSound, subscribeSound } from '../sound'
import { CAP, fetchStats, getVote, hasViewed, queueVote, resumeVote, sendView, videoId, type Stat, type Vote } from '../stats'
import { ChevronDown, ChevronUp, Eye, ThumbDown, ThumbUp } from '../Icons'

interface P {
  /** Alle temaene i kapitlet, i rekkefølge. Feeden sveiper gjennom alle videoene deres. */
  topics: Topic[]
  /** Rotmappen for innhold, f.eks. /content/ */
  root: string
  /** Temaet feeden skal starte på. */
  startId: string
  chapter: string
  /** Meldes når en video fra et nytt tema kommer i bildet. */
  onActive: (topicId: string) => void
}

interface SlideProps {
  topic: Topic
  root: string
  i: number
  pos: number
  total: number
  stat?: Stat
  onStat: (id: string, patch: (s: Stat) => Stat) => void
  onActive: (topicId: string) => void
}

const fmt = (n: number) => (n >= CAP ? `${CAP}+` : String(n))

function Slide({ topic, root, i, pos, total, stat, onStat, onActive }: SlideProps) {
  const v = topic.videos[i]
  const id = videoId(topic.id, i)
  const ref = useRef<HTMLElement>(null)
  const vid = useRef<HTMLVideoElement>(null)
  const [missing, setMissing] = useState(false)
  const [muted, setMuted] = useState(!isSoundOn())
  const [vote, setVote] = useState<Vote>(getVote(id))
  const [fullscreen, setFullscreen] = useState(false)
  // Observer-callbacken lages bare én gang, så den leser siste tall via ref.
  const statRef = useRef(stat)
  statRef.current = stat

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
        onActive(topic.id)
        if (!missing && !hasViewed(id)) {
          // Står telleren på taket, sendes ingenting til serveren.
          const full = (statRef.current?.views ?? 0) >= CAP
          sendView(id, !full)
          if (!full) onStat(id, s => ({ ...s, views: Math.min(s.views + 1, CAP) }))
        }
      } else video?.pause()
    }, { threshold: 0.7 })
    io.observe(el)
    return () => io.disconnect()
  }, [missing])

  // Samme regel som på serveren: en teller på taket er frosset og endres ikke.
  const open = (v: Vote) => {
    const s = statRef.current
    return v === 'up' ? (s?.likes ?? 0) < CAP : v === 'down' ? (s?.dislikes ?? 0) < CAP : false
  }
  const canSend = (prev: Vote, next: Vote) => open(prev) || open(next)

  // Hvis et tidligere valg aldri ble sendt (side lukket, nettfeil), planlegges det på nytt.
  useEffect(() => { resumeVote(id, canSend) }, [])

  const cast = (target: 'up' | 'down') => {
    // Trykk på tommelen som allerede er valgt gjør ingenting. Du kan bare bytte til den andre.
    if (vote === target) return
    const next: Vote = target
    setVote(next)
    const canDec = open(vote)
    const canInc = open(next)
    // Skjermen oppdateres med en gang, men serveren får bare det endelige valget etter ca. 30 sekunder i ro,
    // og bare hvis det er annerledes enn det den allerede vet.
    queueVote(id, next, canSend)
    onStat(id, s => {
      const out = { ...s }
      if (canDec && vote === 'up') out.likes = Math.max(0, out.likes - 1)
      if (canDec && vote === 'down') out.dislikes = Math.max(0, out.dislikes - 1)
      if (canInc && next === 'up') out.likes = Math.min(out.likes + 1, CAP)
      if (canInc && next === 'down') out.dislikes = Math.min(out.dislikes + 1, CAP)
      return out
    })
  }

  return (
    <section className="slide" ref={ref} data-topic={topic.id} data-index={i}>
      {missing ? (
        <div className="placeholder"><p>Video mangler</p><small>{v.file}</small></div>
      ) : (
        <video ref={vid} src={`${root}${topic.id}/${v.file}`} loop playsInline muted={muted} controls preload="metadata" onError={() => setMissing(true)} />
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
          <h3>{v.title}</h3>
          {v.summary && <p>{v.summary}</p>}
          <small>{pos + 1} / {total}</small>
        </div>
      )}
    </section>
  )
}

// Siste «video» i feeden. Sveiper du ned hit, går du tilbake til forsiden.
function EndSlide({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current!
    let timer: number | undefined
    const io = new IntersectionObserver(([e]) => {
      window.clearTimeout(timer)
      if (e.isIntersecting) timer = window.setTimeout(onDone, 400)
    }, { threshold: 0.7 })
    io.observe(el)
    return () => { io.disconnect(); window.clearTimeout(timer) }
  }, [])
  return (
    <section className="slide end" ref={ref}>
      <p className="end-title">Ferdig med kapitlet 🎉</p>
      <small>Tar deg tilbake til forsiden …</small>
      <button onClick={onDone}>Tilbake til forsiden</button>
    </section>
  )
}

export default function Feed({ topics, root, startId, chapter, onActive }: P) {
  const [stats, setStats] = useState<Record<string, Stat>>({})
  const feedRef = useRef<HTMLDivElement>(null)
  const ready = useRef(false)
  const activeRef = useRef(onActive)
  activeRef.current = onActive

  const slides = topics.flatMap(t => t.videos.map((_, i) => ({ topic: t, i })))

  // Meld bare fra om aktivt tema etter at vi har scrollet til startvideoen.
  const report = useCallback((id: string) => { if (ready.current) activeRef.current(id) }, [])

  useLayoutEffect(() => {
    const feed = feedRef.current!
    const target = feed.querySelector<HTMLElement>(`[data-topic="${startId}"]`)
    if (target) feed.scrollTop = target.offsetTop
    const t = window.setTimeout(() => { ready.current = true }, 400)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    let alive = true
    const ids = slides.map(s => videoId(s.topic.id, s.i))
    // API-et tar maks 30 id-er per kall.
    for (let k = 0; k < ids.length; k += 30) {
      fetchStats(ids.slice(k, k + 30)).then(s => { if (alive && s) setStats(prev => ({ ...prev, ...s })) })
    }
    return () => { alive = false }
  }, [chapter])

  const onStat = (id: string, patch: (s: Stat) => Stat) =>
    setStats(prev => ({ ...prev, [id]: patch(prev[id] ?? { likes: 0, dislikes: 0, views: 0 }) }))

  const done = () => {
    try { sessionStorage.setItem('scrollChapter', chapter) } catch { /* ignore */ }
    location.hash = '#/'
  }

  // Pil opp/ned (vises på PC) og piltaster: flytt én video om gangen.
  const step = useCallback((dir: 1 | -1) => {
    const feed = feedRef.current
    if (feed) feed.scrollBy({ top: dir * feed.clientHeight, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      const t = e.target as HTMLElement | null
      // La videospilleren og skjemafelt beholde piltastene sine (spoling, volum).
      if (t && (t.tagName === 'VIDEO' || t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return
      e.preventDefault()
      step(e.key === 'ArrowDown' ? 1 : -1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  return (
    <div className="feed-wrap">
      <div className="feed" ref={feedRef}>
        {slides.map((s, pos) => (
          <Slide
            key={`${s.topic.id}:${s.i}`}
            topic={s.topic} root={root} i={s.i} pos={pos} total={slides.length}
            stat={stats[videoId(s.topic.id, s.i)]} onStat={onStat} onActive={report}
          />
        ))}
        <EndSlide onDone={done} />
      </div>
      <div className="nav" aria-label="Bla mellom videoer">
        <button onClick={() => step(-1)} aria-label="Forrige video"><ChevronUp /></button>
        <button onClick={() => step(1)} aria-label="Neste video"><ChevronDown /></button>
      </div>
    </div>
  )
}
