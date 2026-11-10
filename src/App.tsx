import { useEffect, useMemo, useState } from 'react'
import type { Topic } from './types'
import { buildChapters, chapterInfo, type EmptyChapter } from './chapters'
import Overview from './pages/Overview'
import ChapterPage from './pages/ChapterPage'
import Feed from './pages/Feed'
import Podcast from './pages/Podcast'
import Quiz from './pages/Quiz'
import Wip from './pages/Wip'
import Disclaimer from './Disclaimer'

const base = import.meta.env.BASE_URL + 'content/'

interface Index { topics: string[]; emptyChapters?: EmptyChapter[] }

export default function App() {
  const [topics, setTopics] = useState<Topic[] | null>(null)
  const [empty, setEmpty] = useState<EmptyChapter[]>([])
  const [hash, setHash] = useState(location.hash)
  const [, bump] = useState(0)

  useEffect(() => {
    const on = () => setHash(location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  useEffect(() => {
    fetch(base + 'index.json').then(r => r.json()).then(async (idx: Index) => {
      const all = await Promise.all(idx.topics.map(id => fetch(`${base}${id}/tema.json`).then(r => r.json())))
      setEmpty(idx.emptyChapters ?? [])
      setTopics(all)
    })
  }, [])

  const chapters = useMemo(() => (topics ? buildChapters(topics, empty) : []), [topics, empty])

  if (!topics) return <p className="loading">Laster…</p>

  // Adresser: #/ (forsiden), #/kap/<n> (ett kapittel), #/<tema>/<feed|podcast|quiz> (ett tema)
  const [, a, b] = hash.replace('#', '').split('/')
  if (a === 'kap') {
    const chapter = chapters.find(c => c.key === b)
    return chapter ? <ChapterPage chapter={chapter} /> : <Overview chapters={chapters} />
  }

  const topic = topics.find(t => t.id === a)
  if (!topic) return <Overview chapters={chapters} />

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
      <Disclaimer compact />
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
