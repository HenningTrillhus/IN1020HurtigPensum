import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from 'react'
import type { Topic } from '../types'
import { isSoundOn, enableSound, subscribeSound, isPodcastPlaying, subscribePodcast } from '../sound'
import { CAP, fetchStats, getReport, getVote, hasViewed, queueReport, queueVote, resumeReport, resumeVote, sendView, videoId, type Stat, type Vote } from '../stats'
import { ChevronDown, ChevronUp, CloseIcon, Eye, FlagIcon, FullscreenIcon, ListIcon, MutedIcon, PauseIcon, PlayIcon, ThumbDown, ThumbUp } from '../Icons'
import { usePlayer } from '../player'
import { SpeedButton, useSpeed } from '../speed'
import { ChapterRating } from '../Rating'

interface P {
  /** Alle temaene i kapitlet, i rekkefølge. Feeden sveiper gjennom alle videoene deres. */
  topics: Topic[]
  /** Rotmappen for innhold, f.eks. /content/ */
  root: string
  /** Temaet feeden skal starte på. */
  startId: string
  /** Identifiserer kapitlet (brukes til å hente tall på nytt når kapitlet byttes). */
  chapter: string
  /** Hvor sveip forbi siste video skal gå, f.eks. #/kap/6 (kapittelets forside). */
  exitHash: string
  /** Meldes når en video fra et nytt tema kommer i bildet. */
  onActive: (topicId: string) => void
}

interface SlideProps {
  topic: Topic
  root: string
  i: number
  pos: number
  /** Hvor mye av videoen som skal forhåndslastes: bare den aktive og den neste. */
  mode: 'active' | 'next' | 'far'
  stat?: Stat
  onStat: (id: string, patch: (s: Stat) => Stat) => void
  /** Meldes når denne videoen kommer i bildet (tema og plass i kapitlet). */
  onActive: (topicId: string, pos: number) => void
  /** Meldes når videoen starter eller stopper, så feeden vet når tekst og knapper kan tones ned. */
  onPlayState: (pos: number, playing: boolean) => void
  /** Meldes når videoen er ferdig, så feeden kan gå videre til neste. */
  onEnded: (pos: number) => void
}

const fmt = (n: number) => (n >= CAP ? `${CAP}+` : String(n))

function Slide({ topic, root, i, pos, mode, stat, onStat, onActive, onPlayState, onEnded }: SlideProps) {
  const v = topic.videos[i]
  // Aktiv video laster fritt, neste henter bare første bilde (så neste sveip starter med en gang),
  // og resten laster ingenting før de kommer nær. En video som først er lastet, beholder det den har.
  const [warm, setWarm] = useState(false)
  useEffect(() => { if (mode !== 'far') setWarm(true) }, [mode])
  const preload = mode === 'active' ? 'auto' : mode === 'next' || warm ? 'metadata' : 'none'
  const id = videoId(topic.id, i)
  const ref = useRef<HTMLElement>(null)
  const vid = useRef<HTMLVideoElement>(null)
  const [missing, setMissing] = useState(false)
  const [muted, setMuted] = useState(!isSoundOn())
  const [vote, setVote] = useState<Vote>(getVote(id))
  const [fullscreen, setFullscreen] = useState(false)
  const [ready, setReady] = useState(false) // første bilde er lastet
  const [buffering, setBuffering] = useState(false)
  const [active, setActive] = useState(false)
  const [popped, setPopped] = useState<'up' | 'down' | 'flag' | null>(null)
  const [reported, setReported] = useState(getReport(id))
  const [note, setNote] = useState<{ text: string; n: number } | null>(null)
  // Observer-callbacken lages bare én gang, så den leser siste tall via ref.
  const statRef = useRef(stat)
  statRef.current = stat

  useEffect(() => subscribeSound(() => setMuted(false)), [])

  // Valgt hastighet gjelder alle videoer.
  const rate = useSpeed()
  useEffect(() => { if (vid.current) vid.current.playbackRate = rate }, [rate])

  // Mens en podkast spiller: pause og demp videoen. Den starter ikke av seg selv igjen når podkasten stopper.
  const player = usePlayer()
  const [podOn, setPodOn] = useState(isPodcastPlaying())
  useEffect(() => subscribePodcast(() => {
    const on = isPodcastPlaying()
    setPodOn(on)
    if (on) vid.current?.pause()
  }), [])

  // Videoen kan allerede være lastet (cache) før vi rakk å lytte.
  useEffect(() => { if ((vid.current?.readyState ?? 0) >= 2) setReady(true) }, [])

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
        setActive(true)
        if (!isPodcastPlaying()) video?.play().catch(() => {})
        onActive(topic.id, pos)
        if (!missing && !hasViewed(id)) {
          // Står telleren på taket, sendes ingenting til serveren.
          const full = (statRef.current?.views ?? 0) >= CAP
          sendView(id, !full)
          if (!full) onStat(id, s => ({ ...s, views: Math.min(s.views + 1, CAP) }))
        }
      } else {
        setActive(false)
        video?.pause()
      }
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
  useEffect(() => { resumeVote(id, canSend); resumeReport(id) }, [])

  // Meld feil i videoen: slås av og på som en tommel, og sendes først etter en stund i ro (ingen spam).
  const toggleReport = () => {
    const next = !reported
    setReported(next)
    queueReport(id, next)
    // Tallet oppdateres med en gang. Står det på taket, er det frosset (som på serveren).
    if ((statRef.current?.reports ?? 0) < CAP) {
      onStat(id, s => ({ ...s, reports: Math.min(Math.max(0, (s.reports ?? 0) + (next ? 1 : -1)), CAP) }))
    }
    setPopped('flag')
    window.setTimeout(() => setPopped(null), 500)
    setNote(n => ({ text: next ? 'Takk! Feilen er registrert' : 'Meldingen er fjernet', n: (n?.n ?? 0) + 1 }))
  }
  // Den lille teksten ved knappen forsvinner av seg selv.
  useEffect(() => {
    if (!note) return
    const t = window.setTimeout(() => setNote(null), 1900)
    return () => window.clearTimeout(t)
  }, [note])

  const cast = (target: 'up' | 'down') => {
    // Trykk på tommelen som allerede er valgt gjør ingenting. Du kan bare bytte til den andre.
    if (vote === target) return
    const next: Vote = target
    setVote(next)
    setPopped(target)
    window.setTimeout(() => setPopped(null), 500)
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

  // Egen pause/spill-knapp midt på videoen. Den tones bort sammen med teksten, men et trykk på stedet der den
  // ligger (selv når den er usynlig) pauser med en gang. Trykk andre steder viser bare knappen igjen.
  const togglePlay = () => {
    const video = vid.current
    if (!video) return
    if (video.paused) video.play().catch(() => {})
    else video.pause()
  }
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState({ t: 0, d: 0 })
  const [scrub, setScrub] = useState<number | null>(null)

  // Egen fullskjerm-knapp: stor og lett å treffe, i stedet for den lille i videospilleren.
  const goFullscreen = () => {
    const v = vid.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null
    if (!v) return
    if (v.requestFullscreen) void v.requestFullscreen().catch(() => {})
    else v.webkitEnterFullscreen?.() // iPhone
  }

  const cls = ['slide', !missing && !ready && 'loading', ready && 'ready', active && 'active'].filter(Boolean).join(' ')

  return (
    <section className={cls} ref={ref} data-topic={topic.id} data-index={i}>
      {missing ? (
        <div className="placeholder"><p>Video mangler</p><small>{v.file}</small></div>
      ) : (
        <video
          ref={vid}
          // #t=0.1 gjør at første bilde vises som forhåndsvisning før du trykker play.
          src={`${root}${topic.id}/${v.file}#t=0.1`}
          playsInline muted={muted || podOn} controls={fullscreen} controlsList="nofullscreen" preload={preload}
          onTimeUpdate={e => { if (scrub === null) setTime({ t: e.currentTarget.currentTime, d: e.currentTarget.duration || 0 }) }}
          onLoadedMetadata={e => { e.currentTarget.playbackRate = rate; setTime({ t: e.currentTarget.currentTime, d: e.currentTarget.duration || 0 }) }}
          // Trykker du play på videoen mens en podkast spiller, tar videoen over: podkasten pauses og videoen får lyd.
          // (Videoene starter aldri av seg selv mens en podkast spiller, så dette er alltid et bevisst trykk.)
          onPlay={() => {
            setPlaying(true)
            onPlayState(pos, true)
            if (isPodcastPlaying()) { enableSound(); player.pause() }
          }}
          onPause={() => { setPlaying(false); onPlayState(pos, false) }}
          onEnded={() => onEnded(pos)}
          onLoadedData={() => setReady(true)}
          onWaiting={() => setBuffering(true)}
          onPlaying={() => setBuffering(false)}
          onCanPlay={() => setBuffering(false)}
          onError={() => setMissing(true)}
        />
      )}
      {!missing && (!ready || buffering) && <div className="spin" aria-hidden />}
      {!missing && !fullscreen && (
        <button className="pause-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Spill av'}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      )}
      {!missing && !fullscreen && (
        <input
          className="seek" type="range" min={0} max={time.d || 1} step={0.1}
          value={scrub ?? time.t} aria-label="Spol i videoen"
          style={{ ['--p' as string]: `${((scrub ?? time.t) / (time.d || 1)) * 100}%` }}
          onChange={e => setScrub(+e.target.value)}
          onPointerUp={() => { if (scrub !== null && vid.current) vid.current.currentTime = scrub; setScrub(null) }}
          onKeyUp={() => { if (scrub !== null && vid.current) vid.current.currentTime = scrub; setScrub(null) }}
        />
      )}
      {!missing && !fullscreen && (
        <div className="top-actions">
          {muted && !podOn && (
            // Trykket på lydknappen skal ikke regnes som berøring av skjermen, så resten av teksten ikke dukker opp.
            <button
              className="sound"
              onPointerDown={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()}
              onClick={() => { enableSound(); vid.current?.play().catch(() => {}) }}
              aria-label="Slå på lyden" title="Slå på lyden"
            >
              <MutedIcon />
            </button>
          )}
          <SpeedButton />

          <button className="fs-btn" onClick={goFullscreen} aria-label="Fullskjerm" title="Fullskjerm">
            <FullscreenIcon />
          </button>
        </div>
      )}
      {!missing && !fullscreen && (
        <div className="actions">
          <button
            className={`vote${vote === 'up' ? ' on' : ''}${popped === 'up' ? ' pop' : ''}`}
            onClick={() => cast('up')} aria-pressed={vote === 'up'} aria-label="Tommel opp"
          >
            <ThumbUp filled={vote === 'up'} />
          </button>
          <span className="count" key={`l${stat?.likes}`}>{stat ? fmt(stat.likes) : ''}</span>
          <button
            className={`vote${vote === 'down' ? ' on down' : ''}${popped === 'down' ? ' pop' : ''}`}
            onClick={() => cast('down')} aria-pressed={vote === 'down'} aria-label="Tommel ned"
          >
            <ThumbDown filled={vote === 'down'} />
          </button>
          <span className="count" key={`d${stat?.dislikes}`}>{stat ? fmt(stat.dislikes) : ''}</span>
          <div className="report-wrap">
            <button
              className={`vote report${reported ? ' on' : ''}${popped === 'flag' ? ' pop' : ''}`}
              onClick={toggleReport} aria-pressed={reported} aria-label="Meld feil i videoen" title="Meld feil i videoen"
            >
              <FlagIcon filled={reported} />
            </button>
            {note && <span className="report-note" key={note.n} role="status">{note.text}</span>}
          </div>
          <span className="count" key={`r${stat?.reports}`} title="Antall som har meldt feil">{stat ? fmt(stat.reports ?? 0) : ''}</span>
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
        </div>
      )}
    </section>
  )
}

// Siste «video» i feeden. Sveiper du ned hit, går du tilbake til forsiden.
// Siste «video» i feeden. Når du sveiper ned hit, kommer vurderingen opp (samme som nederst i kapitlet, og den samme
// vurderingen: du kan ikke gi to, bare endre den). Du blir ikke sendt tilbake av deg selv, så du rekker å gi stjerner.
function EndSlide({ chapterKey, onDone, onVisible }: { chapterKey: string; onDone: () => void; onVisible: (v: boolean) => void }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => onVisible(e.isIntersecting), { threshold: 0.7 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section className="slide end" ref={ref}>
      <p className="end-title">Ferdig med kapitlet</p>
      <ChapterRating chapterKey={chapterKey} />
      <button onClick={onDone}>Tilbake til kapitlet</button>
    </section>
  )
}

export default function Feed({ topics, root, startId, chapter, exitHash, onActive }: P) {
  const slides = topics.flatMap(t => t.videos.map((_, i) => ({ topic: t, i })))
  const startIdx = Math.max(0, slides.findIndex(s => s.topic.id === startId))

  const [stats, setStats] = useState<Record<string, Stat>>({})
  const [current, setCurrent] = useState(startIdx)
  const [atEnd, setAtEnd] = useState(false)       // sluttsiden er i bildet
  const [picker, setPicker] = useState(false)     // valgarket for videoene i delkapittelet
  const [idle, setIdle] = useState(false)         // ingen har rørt noe på en stund
  const feedRef = useRef<HTMLDivElement>(null)
  const ready = useRef(false)
  const currentRef = useRef(startIdx)
  const idleTimer = useRef<number | undefined>(undefined)
  const activeRef = useRef(onActive)
  activeRef.current = onActive

  // Tekst og knapper over videoen tones ned etter noen sekunder uten berøring, så hele videoen blir synlig.
  // Alle berøringer, sveip og musebevegelser kaller poke() og henter dem tilbake.
  // Tekst og knapper tones ned etter 2 sekunder uten berøring, både mens videoen spiller og på pause.
  const IDLE_MS = 2000
  const poke = useCallback(() => {
    window.clearTimeout(idleTimer.current)
    setIdle(false)
    idleTimer.current = window.setTimeout(() => setIdle(true), IDLE_MS)
  }, [])
  useEffect(() => { poke(); return () => window.clearTimeout(idleTimer.current) }, [poke])

  // Meld bare fra om aktiv video etter at vi har scrollet til startvideoen.
  const report = useCallback((id: string, pos: number) => {
    if (!ready.current) return
    currentRef.current = pos
    setCurrent(pos)
    poke()
    activeRef.current(id)
  }, [poke])

  const onPlayState = useCallback((pos: number, _playing: boolean) => {
    if (pos !== currentRef.current) return
    // Teksten skal være synlig en liten stund etter at videoen starter eller stopper.
    poke()
  }, [poke])

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
    setStats(prev => ({ ...prev, [id]: patch(prev[id] ?? { likes: 0, dislikes: 0, views: 0, reports: 0 }) }))

  // Etter siste video: tilbake til forsiden av kapitlet.
  const done = () => { location.hash = exitHash }

  // Pil opp/ned (vises på PC) og piltaster: flytt én video om gangen.
  const step = useCallback((dir: 1 | -1) => {
    const feed = feedRef.current
    if (feed) feed.scrollBy({ top: dir * feed.clientHeight, behavior: 'smooth' })
  }, [])

  // Når en video er ferdig, går feeden videre til neste av seg selv. Lyd og stumming er felles for alle videoene
  // (sound.ts), så valget følger med. Etter den aller siste blir den stående.
  const slideCount = slides.length
  const onEnded = useCallback((pos: number) => {
    if (pos !== currentRef.current || pos >= slideCount - 1) return
    step(1)
  }, [step, slideCount])

  // Delkapitler med flere videoer (som 6.10): hvilken del du er på, og hopp til en annen uten å scrolle.
  const cur = slides[current]
  const siblings = cur ? slides.map((s, pos) => ({ ...s, pos })).filter(s => s.topic.id === cur.topic.id) : []
  const multi = siblings.length > 1
  // Skjul bare mens videoen faktisk spiller. Pauset video, åpent valgark og sluttsiden viser alltid alt.
  const uiHidden = idle && !picker && !atEnd

  // Trykk på et tomt sted mens teksten og knappene vises: tone dem bort med en gang. Trykk på tekst, en knapp eller
  // spolelinja gjør bare at de blir værende. Er alt skjult, henter et trykk det fram igjen.
  const lastTapHide = useRef(0)
  const onTap = (e: PointerEvent<HTMLDivElement>) => {
    const t = e.target as Element
    const interactive = !!t.closest('button, a, input, label, .caption, .count, .views, .part-chip, .report-note, .sheet')
    if (!uiHidden && !interactive && !picker && !atEnd) {
      window.clearTimeout(idleTimer.current)
      setIdle(true)
      lastTapHide.current = Date.now()
      return
    }
    poke()
  }
  // Musen rører seg ofte rett etter et klikk. Da skal ikke teksten dukke opp igjen med en gang.
  const onMove = () => { if (Date.now() - lastTapHide.current > 800) poke() }

  // Hopper rett til videoen uten å sveipe forbi de mellom. Ellers ville de telt som sett.
  // For at det ikke skal føles brått, toner feeden kort ned, hopper, og kommer mykt inn igjen.
  const jump = (target: { topic: Topic; i: number; pos: number }) => {
    setPicker(false)
    const feed = feedRef.current
    const sel = `[data-topic="${target.topic.id}"][data-index="${target.i}"]`
    if (!feed || !feed.querySelector(sel)) return
    feed.classList.add('jump-out')
    window.setTimeout(() => {
      const el = feed.querySelector<HTMLElement>(sel)
      if (el) feed.scrollTo({ top: el.offsetTop, behavior: 'instant' })
      currentRef.current = target.pos
      setCurrent(target.pos)
      poke()
      requestAnimationFrame(() => feed.classList.remove('jump-out'))
    }, 170)
  }

  // Esc lukker valgarket.
  useEffect(() => {
    if (!picker) return
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setPicker(false) }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [picker])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (picker) return // la valgarket styre piltastene selv
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
  }, [step, picker])

  return (
    <div
      className={`feed-wrap${uiHidden ? ' ui-hidden' : ''}`}
      onPointerDown={onTap} onPointerMove={onMove} onWheel={poke} onKeyDown={poke}
    >
      <div className="segs" aria-hidden>
        {slides.map((_, k) => <i key={k} className={`seg${k < current ? ' done' : k === current ? ' cur' : ''}`} />)}
      </div>
      <div className="feed" ref={feedRef} onScroll={poke}>
        {slides.map((s, pos) => (
          <Slide
            key={`${s.topic.id}:${s.i}`}
            topic={s.topic} root={root} i={s.i} pos={pos}
            mode={pos === current ? 'active' : pos === current + 1 ? 'next' : 'far'}
            stat={stats[videoId(s.topic.id, s.i)]} onStat={onStat} onActive={report} onPlayState={onPlayState} onEnded={onEnded}
          />
        ))}
        <EndSlide chapterKey={chapter} onDone={done} onVisible={setAtEnd} />
      </div>

      {multi && !atEnd && (
        <button
          className="part-chip"
          onClick={() => setPicker(true)}
          aria-haspopup="dialog"
          aria-label={`Video ${cur.i + 1} av ${siblings.length} i dette delkapittelet. Velg video`}
        >
          <ListIcon />
          <span>{cur.i + 1}/{siblings.length}</span>
        </button>
      )}

      {picker && multi && (
        <>
          <div className="sheet-backdrop" onClick={() => setPicker(false)} />
          <div className="sheet" role="dialog" aria-modal="true" aria-label="Velg video">
            <div className="sheet-head">
              <div>
                <strong>{cur.topic.title}</strong>
                <small>{siblings.length} videoer i dette delkapittelet</small>
              </div>
              <button className="sheet-close" onClick={() => setPicker(false)} aria-label="Lukk"><CloseIcon /></button>
            </div>
            <ul className="sheet-list">
              {siblings.map(s => (
                <li key={s.pos}>
                  <button
                    className={`sheet-row${s.pos === current ? ' sel' : ''}`}
                    onClick={() => jump(s)}
                    aria-current={s.pos === current ? 'true' : undefined}
                    autoFocus={s.pos === current}
                  >
                    <span className="num sm">{s.i + 1}</span>
                    <span className="sheet-text">
                      <span className="sheet-title">{s.topic.videos[s.i].title}</span>
                      {s.pos === current && <span className="sheet-now">Spiller nå</span>}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className="nav" aria-label="Bla mellom videoer">
        <button onClick={() => step(-1)} aria-label="Forrige video"><ChevronUp /></button>
        <button onClick={() => step(1)} aria-label="Neste video"><ChevronDown /></button>
      </div>
    </div>
  )
}
