import { useEffect, useMemo, useRef, useState } from 'react'
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
import ChapterTerms from './pages/ChapterTerms'
import Shuffle from './pages/Shuffle'
import ConsentBanner from './ConsentBanner'
import MovedNotice from './MovedNotice'
import Admin from './pages/Admin'
import { swipeHandlers, type SwipeStart } from './swipe'

const base = import.meta.env.BASE_URL + 'content/'
const SITE = 'IN1020 Hurtigpensum'

/** Forsiden (0), et kapittel (1), og alt dypere som videoer og fagbegreper (2). Brukes til å huske hvor du var i lista. */
const pageOf = (hash: string): { key: string | null; depth: number } => {
  const [, a, b, c] = hash.replace('#', '').split('/')
  if (!a) return { key: 'home', depth: 0 }
  if (a === 'kap' && b && !c) return { key: `kap/${b}`, depth: 1 }
  return { key: null, depth: 2 }
}

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
      <ConsentBanner />
      <MovedNotice />
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
  const swipe = useRef<SwipeStart | null>(null)

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

  // Hvor langt ned du hadde scrollet på forsiden og i kapitlene, så du havner samme sted når du går tilbake.
  const scrollMem = useRef<Record<string, number>>({})
  const lastHash = useRef(location.hash)
  const lastDepth = useRef(pageOf(location.hash).depth)
  useEffect(() => {
    const on = () => {
      const old = pageOf(lastHash.current)
      if (old.key) scrollMem.current[old.key] = window.scrollY
      lastHash.current = location.hash
      setHash(location.hash)
    }
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
    const [, a, b, sub] = hash.replace('#', '').split('/')
    let title = SITE
    if (a === 'admin') {
      title = 'Statistikk'
    } else if (a === 'shuffle') {
      title = `Bland videoer · ${SITE}`
    } else if (a === 'kap') {
      const c = chapters.find(x => x.key === b)
      if (c) title = `${sub === 'begreper' ? 'Fagbegreper i ' : ''}${c.label}${c.title ? ` – ${c.title}` : ''} · ${SITE}`
    } else {
      const t = topics.find(x => x.id === a)
      if (t) title = `${t.title} · ${SITE}`
    }
    document.title = title
    // Går du ut av en video eller et kapittel, kommer du tilbake dit du var. Ellers starter siden øverst.
    const here = pageOf(hash)
    const back = here.depth < lastDepth.current
    lastDepth.current = here.depth
    lastHash.current = location.hash
    const y = back && here.key ? scrollMem.current[here.key] : undefined
    window.scrollTo(0, y ?? 0)
  }, [hash, topics, chapters])

  if (error) return <LoadError onRetry={() => { setError(false); setAttempt(n => n + 1) }} />
  if (!topics || !minDone) return <Loader />

  // Adresser: #/ (forsiden), #/kap/<n> (ett kapittel), #/kap/<n>/begreper (alle fagbegreper i kapitlet), #/<tema>/<feed|begreper> (ett tema)
  const [, a, b, c] = hash.replace('#', '').split('/')
  if (a === 'kap') {
    const chapter = chapters.find(ch => ch.key === b)
    if (chapter && c === 'begreper') return <ChapterTerms chapter={chapter} />
    return chapter
      ? <ChapterPage chapter={chapter} compendiumUrl={compendia[chapter.key]} />
      : <Overview chapters={chapters} courseUrl={courseUrl} exam={exam} />
  }

  // Skjult statistikkside. Finnes bare som lenke (#/admin/<nøkkel>), og nøkkelen sjekkes på serveren.
  if (a === 'admin') return <Admin topics={topics} secret={b ?? ''} />
  if (a === 'shuffle') return <Shuffle topics={topics} root={base} />

  const topic = topics.find(t => t.id === a)
  if (!topic) return <Overview chapters={chapters} courseUrl={courseUrl} exam={exam} />

  const info = chapterInfo(topic)
  const chapterHref = `#/kap/${info.key}`
  // Temaer uten videoer er ikke klare ennå.
  if (topic.videos.length === 0) return <Wip topic={topic} backHref={chapterHref} backLabel={info.label} />

  const view = b
  // #/<tema>/feed/<n>: start på video n (fra 1) i temaet. Brukes av «Fortsett» og delte lenker.
  const startI = view === 'feed' && /^\d{1,3}$/.test(c ?? '') ? Math.min(topic.videos.length, Math.max(1, +c)) - 1 : 0
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
  const swipeProps = swipeHandlers(
    swipe,
    view !== 'begreper' && hasTerms ? () => { location.hash = `#/${topic.id}/begreper` } : undefined,
    () => { location.hash = view === 'begreper' ? `#/${topic.id}/feed` : chapterHref },
  )

  return (
    <div className="shell topic" {...swipeProps}>
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
          startI={startI}
          chapter={info.key}
          exitHash={chapterHref}
          onActive={onActive}
        />
      )}
    </div>
  )
}
