import { useEffect, useState } from 'react'
import type { Topic } from './types'
import Overview from './pages/Overview'
import Feed from './pages/Feed'
import Podcast from './pages/Podcast'
import Quiz from './pages/Quiz'
import Disclaimer from './Disclaimer'

const base = import.meta.env.BASE_URL + 'content/'

export default function App() {
  const [topics, setTopics] = useState<Topic[] | null>(null)
  const [hash, setHash] = useState(location.hash)
  const [, bump] = useState(0)

  useEffect(() => {
    const on = () => setHash(location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  useEffect(() => {
    fetch(base + 'index.json').then(r => r.json()).then(async (idx: { topics: string[] }) => {
      const all = await Promise.all(idx.topics.map(id => fetch(`${base}${id}/tema.json`).then(r => r.json())))
      setTopics(all)
    })
  }, [])

  if (!topics) return <p className="loading">Laster…</p>
  const [, id, view] = hash.replace('#', '').split('/')
  const topic = topics.find(t => t.id === id)

  if (!topic) return <Overview topics={topics} />
  const common = { topic, base: `${base}${topic.id}/`, onChange: () => bump(n => n + 1) }
  const chapterName = (t: Topic) => t.chapter ?? 'Temaer'
  const chapter = chapterName(topic)
  const chapterTopics = topics.filter(t => chapterName(t) === chapter)

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
        <a href="#/">← Temaer</a>
        <a className={!view || view === 'feed' ? 'on' : ''} href={`#/${topic.id}/feed`}>Videoer</a>
        <a className={view === 'podcast' ? 'on' : ''} href={`#/${topic.id}/podcast`}>Podkast</a>
        <a className={view === 'quiz' ? 'on' : ''} href={`#/${topic.id}/quiz`}>Quiz</a>
      </nav>
      <Disclaimer compact />
      {view === 'podcast' ? <Podcast {...common} /> : view === 'quiz' ? <Quiz {...common} /> : (
        <Feed key={chapter} topics={chapterTopics} root={base} startId={topic.id} chapter={chapter} onActive={onActive} />
      )}
    </div>
  )
}
