import { useState } from 'react'
import type { Topic } from '../types'
import { setQuizBest } from '../storage'

export default function Quiz({ topic, onChange }: { topic: Topic; base: string; onChange: () => void }) {
  const qs = topic.quiz ?? []
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  if (!qs.length) return <p className="pad">Ingen quiz for dette temaet.</p>
  if (i >= qs.length) {
    return (
      <div className="pad">
        <h2>Ferdig: {score} / {qs.length}</h2>
        <button onClick={() => { setI(0); setScore(0); setPicked(null) }}>Prøv igjen</button>
      </div>
    )
  }
  const q = qs[i]
  const pick = (n: number) => { if (picked === null) { setPicked(n); if (n === q.answer) setScore(s => s + 1) } }
  const next = () => {
    if (i + 1 >= qs.length) { setQuizBest(topic.id, score); onChange() }
    setI(i + 1); setPicked(null)
  }
  return (
    <div className="pad">
      <small>{i + 1} / {qs.length}</small>
      <h2>{q.q}</h2>
      {q.options.map((o, n) => (
        <button key={n} className={`opt ${picked !== null ? (n === q.answer ? 'right' : n === picked ? 'wrong' : '') : ''}`} onClick={() => pick(n)}>{o}</button>
      ))}
      {picked !== null && <button className="next" onClick={next}>Neste</button>}
    </div>
  )
}
