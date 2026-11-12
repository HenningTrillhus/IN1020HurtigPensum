import { useEffect, useMemo, useRef, useState, type TouchEvent } from 'react'
import type { Topic } from './types'
import { buildChapters, chapterInfo, type EmptyChapter } from './chapters'
import { Loader, LoadError } from './Loader'
import Overview from './pages/Overview'
import ChapterPage from './pages/ChapterPage'
import Feed from './pages/Feed'
import Terms from './pages/Terms'
import PodButtons from './PodButtons'
import type { Exam } from './ExamCountdown'
import { MiniPlayer, PlayerProvider } from './player'
import Wip from './pages/Wip'

const base = import.meta.env.BASE_URL + 'content/'
const SITE = 'IN1020 Hurtigpensum'

interface Index {
  topics: string[]
  emptyChapters?: EmptyChapter[]
  /** Emnesiden med undervisningsmateriell (vises på forsiden). */
  courseUrl?: string
  /** Kompendium (PDF) per kapittelnummer. */
  compendia?: Record<string, string>
  /** Eksamensdato (vises som nedtelling øverst på forsiden). */
  exam?: Exam
}

async function getJson<T>(url: string): Promise<T> {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`${url}: ${r.status}`)
  return r.json()
}

// Spilleren ligger utenfor sidene, så podkasten fortsetter å spille når du bytter side.
export default function App() {
  return (
    <PlayerProvider>
      <AppInner />
      <MiniPlayer />
    </PlayerProvider>
  )
}

function AppInner() {
  const [topics, setTopics] = useState<Topic[] | null>(null)
  const [empty, setEmpty] = useState<EmptyChapter[]>([])
  const [courseUrl, setCourseUrl] = useState<string | undefined>()
  const [compendia, setCompendia] = useState<Record<string, string>>({})
  const [exam, setExam] = useState<Exam | undefined>()
  const [hash, setHash] = useState(location.hash)
  const [error, setError] = useState(false)
  const [attempt, setAttempt] = useState(0)
  // Start på et sveip, for å bytte mellom videoer og fagbegreper på mobil.
  const swipe = useRef<{ x: number; y: number; t: number } | null>(null)

  // Lasteanimasjonen vises minst en kort stund første gang i en økt, så den ikke bare blinker forbi.
  const [minDone, setMinDone] = useState(() => {
    try { return sessionStorage.getItem('loaded') === '1' } catch { return false }
  })
  useEffect(() => {
    if (minDone) return
    const t = window.setTimeout(() => {
      setMinDone(true)
      try { sessionStorage.setItem('loaded', '1') } catch { /* ignore */ }
    }, 1100)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const on = () => setHash(location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  useEffect(() => {
    let alive = true
    getJson<Index>(base + 'index.json')
      .then(async idx => {
        const all = await Promise.all(idx.topics.map(id => getJson<Topic>(`${base}${id}/tema.json`)))
        if (!alive) return
        setEmpty(idx.emptyChapters ?? [])
        setCourseUrl(idx.courseUrl)
        setCompendia(idx.compendia ?? {})
        setExam(idx.exam)
        setTopics(all)
      })
      .catch(() => { if (alive) setError(true) })
    return () => { alive = false }
  }, [attempt])

  const chapters = useMemo(() => (topics ? buildChapters(topics, empty) : []), [topics, empty])

  // Sidetittel per side, og start øverst ved sidebytte.
  useEffect(() => {
    if (!topics) return
    const [, a, b] = hash.replace('#', '').split('/')
    let title = SITE
    if (a === 'kap') {
      const c = chapters.find(x => x.key === b)
      if (c) title = `${c.label}${c.title ? ` – ${c.title}` : ''} · ${SITE}`
    } else {
      const t = topics.find(x => x.id === a)
      if (t) title = `${t.title} · ${SITE}`
    }
    document.title = title
    window.scrollTo(0, 0)
  }, [hash, topics, chapters])

  if (error) return <LoadError onRetry={() => { setError(false); setAttempt(n => n + 1) }} />
  if (!topics || !minDone) return <Loader />

  // Adresser: #/ (forsiden), #/kap/<n> (ett kapittel), #/<tema>/<feed|begreper> (ett tema)
  const [, a, b] = hash.replace('#', '').split('/')
  if (a === 'kap') {
    const chapter = chapters.find(c => c.key === b)
    return chapter
      ? <ChapterPage chapter={chapter} compendiumUrl={compendia[chapter.key]} />
      : <Overview chapters={chapters} courseUrl={courseUrl} exam={exam} />
  }

  const topic = topics.find(t => t.id === a)
  if (!topic) return <Overview chapters={chapters} courseUrl={courseUrl} exam={exam} />

  const info = chapterInfo(topic)
  const chapterHref = `#/kap/${info.key}`
  // Temaer uten videoer er ikke klare ennå.
  if (topic.videos.length === 0) return <Wip topic={topic} backHref={chapterHref} backLabel={info.label} />

  const view = b
  // Feeden sveiper bare gjennom temaer i samme kapittel som har videoer.
  const chapterTopics = topics.filter(t => chapterInfo(t).key === info.key && t.videos.length > 0)

  // Når en video fra et annet tema kommer i bildet, oppdaterer vi adressen (uten ny sidelasting)
  // slik at fanene og «tilbake til videoer» følger med.
  const onActive = (activeId: string) => {
    if (location.hash.split('/')[1] === activeId) return
    history.replaceState(null, '', `#/${activeId}/feed`)
    setHash(location.hash)
  }
  // Sveip på mobil, bare inne i et tema (ikke på forsiden eller kapittelsiden). Dra fingeren mot venstre for å gå videre
  // til fagbegrepene. Dra mot høyre for å gå tilbake: fra fagbegrepene til videoene, og fra videoene ut til kapittelet.
  const hasTerms = !!topic.terms?.length
  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0]
    // Spolelinja, fanene, valgarket og kalkulatoren bruker sidelengs dra selv, og flere fingre er zoom.
    const skip = (e.target as Element).closest('input[type="range"], .tabs, .sheet, .sheet-backdrop, .calc, .calc-backdrop')
    swipe.current = e.touches.length === 1 && !skip ? { x: t.clientX, y: t.clientY, t: Date.now() } : null
  }
  const onTouchEnd = (e: TouchEvent) => {
    const s = swipe.current
    swipe.current = null
    if (!s) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x, dy = t.clientY - s.y
    // Tydelig sidelengs og raskt, så vanlig rulling opp og ned ikke regnes som sveip.
    if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.8 || Date.now() - s.t > 900) return
    if (dx < 0 && view !== 'begreper' && hasTerms) location.hash = `#/${topic.id}/begreper`
    else if (dx > 0) location.hash = view === 'begreper' ? `#/${topic.id}/feed` : chapterHref
  }

  return (
    <div className="shell topic" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <nav className="tabs">
        <a href={chapterHref}>← {info.label}</a>
        <a className={!view || view === 'feed' ? 'on' : ''} href={`#/${topic.id}/feed`}>Videoer</a>
        {topic.terms?.length ? (
          <a className={view === 'begreper' ? 'on' : ''} href={`#/${topic.id}/begreper`}>Fagbegreper</a>
        ) : null}
      </nav>
      {topic.podcasts?.length ? (
        <div className="pod-bar">
          <span className="pod-label">Podkast</span>
          <PodButtons topic={topic} compact />
        </div>
      ) : null}
      {view === 'begreper' ? <Terms topic={topic} /> : (
        <Feed
          key={info.key}
          topics={chapterTopics}
          root={base}
          startId={topic.id}
          chapter={info.key}
          exitHash={chapterHref}
          onActive={onActive}
        />
      )}
    </div>
  )
}
