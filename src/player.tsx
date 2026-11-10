import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import type { Podcast, Topic } from './types'
import { setPodcastPlaying } from './sound'
import { Back10, CloseIcon, Fwd10, PauseIcon, PlayIcon } from './Icons'
import { SpeedButton, getSpeed, useSpeed } from './speed'

const base = import.meta.env.BASE_URL

/** Det spilleren trenger å vite om en episode. */
export interface Track {
  /** Unik nøkkel: <tema>/<fil> */
  key: string
  src: string
  title: string
  /** Temaet episoden hører til. */
  subtitle: string
  iconSrc: string
  duration?: number
}

export const trackFor = (topic: Topic, p: Podcast): Track => ({
  key: `${topic.id}/${p.file}`,
  src: `${base}content/${topic.id}/${p.file}`,
  title: p.title,
  subtitle: topic.title,
  iconSrc: `${base}podcast-icons/${p.icon}.png`,
  duration: p.duration,
})

export const fmtTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

interface PlayerApi {
  track: Track | null
  playing: boolean
  time: number
  duration: number
  /** Start episoden, eller pause/fortsett hvis det er den som spiller nå. */
  toggle: (t: Track) => void
  seek: (t: number) => void
  /** Pause uten å lukke spilleren. */
  pause: () => void
  /** Hopp relativt, f.eks. skip(-10) eller skip(10). */
  skip: (delta: number) => void
  close: () => void
}

const Ctx = createContext<PlayerApi | null>(null)
export const usePlayer = () => {
  const c = useContext(Ctx)
  if (!c) throw new Error('usePlayer må brukes inni PlayerProvider')
  return c
}

// Husker hvor du var i hver episode.
const posKey = (k: string) => `podpos:${k}`
const readPos = (k: string) => { try { return Number(localStorage.getItem(posKey(k))) || 0 } catch { return 0 } }
const writePos = (k: string, v: number | null) => {
  try { v === null ? localStorage.removeItem(posKey(k)) : localStorage.setItem(posKey(k), String(Math.floor(v))) } catch { /* ignore */ }
}

/** Én lydspiller for hele siden. Ligger utenfor sidene, så lyden fortsetter når du bytter side. */
export function PlayerProvider({ children }: { children: ReactNode }) {
  const audio = useRef<HTMLAudioElement>(null)
  const pendingSeek = useRef(0)
  const lastSave = useRef(0)
  const trackRef = useRef<Track | null>(null)
  const [track, setTrack] = useState<Track | null>(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  trackRef.current = track

  const toggle = useCallback((t: Track) => {
    const a = audio.current
    if (!a) return
    if (trackRef.current?.key === t.key) {
      if (a.paused) void a.play().catch(() => {})
      else a.pause()
      return
    }
    // Ny episode: husk plassen i den forrige, og start denne der du slapp.
    const old = trackRef.current
    if (old && a.currentTime > 0) writePos(old.key, a.currentTime)
    const saved = readPos(t.key)
    pendingSeek.current = saved
    a.src = t.src
    setTrack(t)
    setTime(saved)
    setDuration(t.duration ?? 0)
    void a.play().catch(() => {}) // må kalles direkte fra trykket for at mobil skal tillate det
  }, [])

  const seek = useCallback((v: number) => {
    const a = audio.current
    if (!a) return
    a.currentTime = v
    setTime(v)
  }, [])

  const pause = useCallback(() => { audio.current?.pause() }, [])

  const skip = useCallback((delta: number) => {
    const a = audio.current
    if (!a) return
    const end = Number.isFinite(a.duration) ? a.duration : Infinity
    const t = Math.min(Math.max(0, a.currentTime + delta), end)
    a.currentTime = t
    setTime(t)
  }, [])

  const close = useCallback(() => {
    const a = audio.current
    const t = trackRef.current
    if (a) {
      if (t && a.currentTime > 0) writePos(t.key, a.currentTime)
      a.pause()
      a.removeAttribute('src')
      a.load()
    }
    setTrack(null)
    setPlaying(false)
    setTime(0)
    setPodcastPlaying(false)
  }, [])

  // Hastigheten gjelder alle episoder. Den nullstilles når en ny lydfil lastes, så den settes på nytt da.
  const rate = useSpeed()
  useEffect(() => {
    const a = audio.current
    if (!a) return
    a.defaultPlaybackRate = rate
    a.playbackRate = rate
  }, [rate, track])

  // Gi sidene plass til spilleren nederst.
  useEffect(() => {
    document.documentElement.classList.toggle('has-player', !!track)
  }, [track])

  // Styring fra låseskjerm / mediataster.
  useEffect(() => {
    if (!('mediaSession' in navigator)) return
    const ms = navigator.mediaSession
    if (!track) { ms.metadata = null; return }
    ms.metadata = new MediaMetadata({
      title: track.title,
      artist: 'IN1020 Hurtigpensum',
      album: track.subtitle,
      artwork: [{ src: track.iconSrc, sizes: '256x256', type: 'image/png' }],
    })
    const a = audio.current
    ms.setActionHandler('play', () => { void a?.play() })
    ms.setActionHandler('pause', () => a?.pause())
    ms.setActionHandler('seekbackward', () => { if (a) a.currentTime = Math.max(0, a.currentTime - 10) })
    ms.setActionHandler('seekforward', () => { if (a) a.currentTime = Math.min(a.duration || Infinity, a.currentTime + 10) })
    ms.setActionHandler('seekto', d => { if (a && d.seekTime != null) a.currentTime = d.seekTime })
  }, [track])

  const api = useMemo<PlayerApi>(
    () => ({ track, playing, time, duration, toggle, seek, pause, skip, close }),
    [track, playing, time, duration, toggle, seek, pause, skip, close],
  )

  return (
    <Ctx.Provider value={api}>
      {children}
      <audio
        ref={audio}
        preload="none"
        onPlay={() => { setPlaying(true); setPodcastPlaying(true) }}
        onPause={() => {
          setPlaying(false); setPodcastPlaying(false)
          const a = audio.current, t = trackRef.current
          if (a && t && a.currentTime > 0 && !a.ended) writePos(t.key, a.currentTime)
        }}
        onEnded={() => { const t = trackRef.current; if (t) writePos(t.key, null) }}
        onLoadedMetadata={() => {
          const a = audio.current!
          a.playbackRate = getSpeed()
          setDuration(a.duration)
          const s = pendingSeek.current
          pendingSeek.current = 0
          // Fortsett der du slapp, men ikke helt i starten eller helt på slutten.
          if (s > 3 && s < a.duration - 5) a.currentTime = s
        }}
        onDurationChange={() => { const a = audio.current!; if (Number.isFinite(a.duration)) setDuration(a.duration) }}
        onTimeUpdate={() => {
          const a = audio.current!
          setTime(a.currentTime)
          const t = trackRef.current
          if (t && Date.now() - lastSave.current > 4000) { lastSave.current = Date.now(); writePos(t.key, a.currentTime) }
        }}
      />
    </Ctx.Provider>
  )
}

/** Fast spiller nederst på skjermen mens en episode er åpen. */
export function MiniPlayer() {
  const { track, playing, time, duration, toggle, seek, skip, close } = usePlayer()
  if (!track) return null
  const pct = duration > 0 ? Math.min(100, (time / duration) * 100) : 0
  return (
    <div className="mini" role="region" aria-label="Podkastspiller">
      <button className="mini-close" onClick={close} aria-label="Lukk spilleren"><CloseIcon /></button>
      <div className="mini-row">
        <img className="mini-icon" src={track.iconSrc} alt="" />
        <div className="mini-text">
          <strong>{track.title}</strong>
          <small>{track.subtitle}</small>
        </div>
        <div className="mini-ctrls">
          <button className="mini-btn" onClick={() => skip(-10)} aria-label="Hopp 10 sekunder tilbake"><Back10 /></button>
          <button className="mini-btn play" onClick={() => toggle(track)} aria-label={playing ? 'Pause' : 'Spill av'}>
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button className="mini-btn" onClick={() => skip(10)} aria-label="Hopp 10 sekunder fram"><Fwd10 /></button>
        </div>
      </div>
      <div className="mini-seek">
        <span>{fmtTime(time)}</span>
        <input
          type="range" min={0} max={duration || 0} step={0.1} value={Math.min(time, duration || 0)}
          style={{ '--p': `${pct}%` } as CSSProperties}
          onChange={e => seek(Number(e.target.value))}
          aria-label="Spol i podkasten"
          aria-valuetext={`${fmtTime(time)} av ${fmtTime(duration)}`}
        />
        <span>{fmtTime(duration)}</span>
        <SpeedButton className="mini-speed" />
      </div>
    </div>
  )
}
