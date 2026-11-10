import type { Topic } from '../types'
import { getSeen, getQuizBest } from '../storage'
import Disclaimer from '../Disclaimer'

export default function Overview({ topics }: { topics: Topic[] }) {
  const groups: { name: string; items: Topic[] }[] = []
  for (const t of topics) {
    const name = t.chapter ?? 'Temaer'
    let g = groups.find(x => x.name === name)
    if (!g) { g = { name, items: [] }; groups.push(g) }
    g.items.push(t)
  }
  return (
    <div className="shell">
      <h1>IN1020 Hurtigpensum</h1>
      <p className="sub">Pensum i korte klipp. Velg et tema.</p>
      <Disclaimer />
      {groups.map(g => (
        <section key={g.name}>
          <h3 className="chapter">{g.name}</h3>
          <div className="grid">
            {g.items.map(t => {
              const seen = getSeen(t.id).length
              const pct = t.videos.length ? Math.round((seen / t.videos.length) * 100) : 0
              const best = getQuizBest(t.id)
              return (
                <a key={t.id} className="card" href={`#/${t.id}/feed`}>
                  <h2>{t.title}</h2>
                  <p>{t.description}</p>
                  <div className="bar"><div style={{ width: `${pct}%` }} /></div>
                  <small>{seen}/{t.videos.length} videoer sett{best >= 0 ? ` · quiz best: ${best}` : ''}</small>
                </a>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
