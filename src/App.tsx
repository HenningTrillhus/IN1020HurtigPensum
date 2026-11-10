import { useEffect, useMemo, useState } from 'react'
import type { Topic } from './types'
import { buildChapters, chapterInfo, type EmptyChapter } from './chapters'
import { Loader, LoadError } from './Loader'
import Overview from './pages/Overview'
import ChapterPage from './pages/ChapterPage'
import Feed from './pages/Feed'
import Podcast from './pages/Podcast'
import Quiz from './pages/Quiz'
import Wip from './pages/Wip'
import Disclaimer from './Disclaimer'

const base = import.meta.env.BASE_URL + 'content/'
const SITE = 'IN1020 Hurtigpensum'

interface Index {
  topics: string[]
  emptyChapters?: EmptyChapter[]
  /** Emnesiden med undervisningsmateriell (vises på forsiden). */
  courseUrl?: string
  /** Kompendium (PDF) per kapittelnummer. */
  compendia?: Record<string, string>
}

async function getJson<T>(url: string): Promise<T> {
  const r = await fetch(url)
  if (!r.ok) throw new Error(`${url}: ${r.status}`)
  return r.json()
}

export default function App() {
  const [topics, setTopics] = useState<Topic[] | null>(null)
  const [empty, setEmpty] = useState<EmptyChapter[]>([])
  const [courseUrl, setCourseUrl] = useState<string | undefined>()
  const [compendia, setCompendia] = useState<Record<string, string>>({})
  const [hash, setHash] = useState(location.hash)
  const [error, setError] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [, bump] = useState(0)

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

  // Adresser: #/ (forsiden), #/kap/<n> (ett kapittel), #/<tema>/<feed|podcast|quiz> (ett tema)
  const [, a, b] = hash.replace('#', '').split('/')
  if (a === 'kap') {
    const chapter = chapters.find(c => c.key === b)
    return chapter
      ? <ChapterPage chapter={chapter} compendiumUrl={compendia[chapter.key]} />
      : <Overview chapters={chapters} courseUrl={courseUrl} />
  }

  const topic = topics.find(t => t.id === a)
  if (!topic) return <Overview chapters={chapters} courseUrl={courseUrl} />

  const info = chapterInfo(topic)
  const chapterHref = `#/kap/${info.key}`
  // Temaer uten videoer er ikke klare ennå.
  if (topic.videos.length === 0) return <Wip topic={topic} backHref={chapterHref} backLabel={info.label} />

  const view = b
  const common = { topic, base: `${base}${topic.id}/`, onChange: () => bump(n => n + 1) }
  // Feeden sveiper bare gjennom temaer i samme kapittel som har videoer.
  const chapterTopics = topics.filter(t => chapterInfo(t).key === info.key && t.videos.length > 0)

  // Når en video fra et annet tema kommer i bildet, oppdaterer vi adressen (uten ny sidelasting)
  // slik at fanene og «tilbake til videoer» følger med.
  const onActive = (activeId: string) => {
    if (location.hash.split('/')[1] === activeId) return
    history.replaceState(null, '', `#/${activeId}/feed`)
    setHash(location.hash)
  }
  return (
    <div className="shell topic">
      <nav className="tabs">
        <a href={chapterHref}>← {info.label}</a>
        <a className={!view || view === 'feed' ? 'on' : ''} href={`#/${topic.id}/feed`}>Videoer</a>
        <a className={view === 'podcast' ? 'on' : ''} href={`#/${topic.id}/podcast`}>Podkast</a>
        <a className={view === 'quiz' ? 'on' : ''} href={`#/${topic.id}/quiz`}>Quiz</a>
      </nav>
      <Disclaimer compact compendiumUrl={compendia[info.key]} chapterLabel={info.label} />
      {view === 'podcast' ? <Podcast {...common} /> : view === 'quiz' ? <Quiz {...common} /> : (
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
