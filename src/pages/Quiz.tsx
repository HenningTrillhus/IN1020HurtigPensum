import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { Topic } from '../types'
import { setQuizBest } from '../storage'

export default function Quiz({ topic, onChange }: { topic: Topic; base: string; onChange: () => void }) {
  const qs = topic.quiz ?? []
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  if (!qs.length) return (<div className="pad wip-page"><h2>Quiz kommer snart</h2><p>Det er ingen quiz for dette temaet ennå.</p></div>)

  if (i >= qs.length) {
    const ratio = score / qs.length
    return (
      <div className="pad result">
        <div className="big" aria-hidden>{score}/{qs.length}</div>
        <h2>{score} av {qs.length} riktige</h2>
        <p className="sub">{ratio >= 0.8 ? 'Sterkt! Dette sitter.' : ratio >= 0.5 ? 'Bra jobba. Se videoene en gang til for resten.' : 'Se videoene en gang til og prøv igjen.'}</p>
        <button className="next" onClick={() => { setI(0); setScore(0); setPicked(null) }}>Prøv igjen</button>
      </div>
    )
  }

  const q = qs[i]
  const pick = (n: number) => { if (picked === null) { setPicked(n); if (n === q.answer) setScore(s => s + 1) } }
  const next = () => {
    if (i + 1 >= qs.length) { setQuizBest(topic.id, score); onChange() }
    setI(i + 1); setPicked(null)
  }
  const pct = ((i + (picked !== null ? 1 : 0)) / qs.length) * 100

  return (
    <div className="pad" key={i}>
      <div className="qbar"><div style={{ width: `${pct}%` }} /></div>
      <small>Spørsmål {i + 1} av {qs.length}</small>
      <h2>{q.q}</h2>
      {q.options.map((o, n) => (
        <button
          key={n}
          style={{ '--i': n } as CSSProperties}
          className={`opt ${picked !== null ? (n === q.answer ? 'right' : n === picked ? 'wrong' : '') : ''}`}
          onClick={() => pick(n)}
        >
          {o}
        </button>
      ))}
      {picked !== null && <button className="next" onClick={next}>{i + 1 >= qs.length ? 'Se resultat' : 'Neste'}</button>}
    </div>
  )
}
