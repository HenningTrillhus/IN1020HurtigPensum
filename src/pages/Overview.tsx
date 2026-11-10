import { useEffect } from 'react'
import type { Topic } from '../types'
import { getQuizBest } from '../storage'
import Disclaimer from '../Disclaimer'

export default function Overview({ topics }: { topics: Topic[] }) {
  const groups: { name: string; items: Topic[] }[] = []
  for (const t of topics) {
    const name = t.chapter ?? 'Temaer'
    let g = groups.find(x => x.name === name)
    if (!g) { g = { name, items: [] }; groups.push(g) }
    g.items.push(t)
  }
  // Kom du hit fra slutten av en kapittelfeed, scroller vi til det kapitlet.
  useEffect(() => {
    let chapter: string | null = null
    try { chapter = sessionStorage.getItem('scrollChapter'); sessionStorage.removeItem('scrollChapter') } catch { /* ignore */ }
    if (!chapter) return
    for (const el of document.querySelectorAll<HTMLElement>('[data-chapter]')) {
      if (el.dataset.chapter === chapter) el.scrollIntoView()
    }
  }, [])

  return (
    <div className="shell">
      <h1>IN1020 Hurtigpensum</h1>
      <p className="sub">Pensum i korte klipp. Velg et tema.</p>
      <Disclaimer />
      {groups.map(g => (
        <section key={g.name} data-chapter={g.name}>
          <h3 className="chapter">{g.name}</h3>
          <div className="grid">
            {g.items.map(t => {
              const n = t.videos.length
              const best = getQuizBest(t.id)
              return (
                <a key={t.id} className={`card${n === 0 ? ' wip' : ''}`} href={`#/${t.id}/feed`}>
                  <h2>{t.title}</h2>
                  {t.description && <p>{t.description}</p>}
                  <small>
                    {n} {n === 1 ? 'video' : 'videoer'}
                    {best >= 0 ? ` · quiz best: ${best}` : ''}
                    {n === 0 && <span className="badge">🚧 Work in progress</span>}
                  </small>
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
