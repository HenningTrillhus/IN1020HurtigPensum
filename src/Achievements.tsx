import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import type { Chapter } from './chapters'
import { addAwarded, badgeOf, getAwarded, isDone } from './badges'

const COLORS = ['#ffd24a', '#ff6b6b', '#5ac8fa', '#7ee081', '#c58bff', '#ff9f43', '#ffffff']

// Små biter som faller ned. Plassering, størrelse og fart er tilfeldig, men valgt én gang per visning.
function Confetti() {
  const bits = useMemo(() => Array.from({ length: 56 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.9,
    dur: 2.2 + Math.random() * 1.8,
    size: 6 + Math.random() * 7,
    rot: Math.round(Math.random() * 360),
    drift: Math.round(Math.random() * 120 - 60),
    color: COLORS[i % COLORS.length],
    round: i % 3 === 0,
  })), [])
  return (
    <div className="confetti" aria-hidden>
      {bits.map((b, i) => (
        <i
          key={i}
          style={{
            left: `${b.left}%`, width: b.size, height: b.round ? b.size : b.size * 1.6, background: b.color, borderRadius: b.round ? '50%' : 2,
            animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s`, '--rot': `${b.rot}deg`, '--drift': `${b.drift}px`,
          } as CSSProperties}
        />
      ))}
    </div>
  )
}

/**
 * Følger med på hvilke kapitler som blir ferdige. Det første sjekken ser, regnes som allerede gjort (stille):
 * bare kapitler du fullfører mens du bruker siden gir gratulasjon, og bare én gang per kapittel.
 */
export default function Achievements({ chapters }: { chapters: Chapter[] }) {
  const [queue, setQueue] = useState<Chapter[]>([])
  const ready = useRef(false)

  useEffect(() => {
    if (!chapters.length) return
    const check = () => {
      const had = new Set(getAwarded())
      const fresh = chapters.filter(c => badgeOf(c, true) && isDone(c) && !had.has(c.key))
      if (!ready.current) {
        // Første gang: de som allerede er ferdige skal ikke gi en haug med pop-ups.
        fresh.forEach(c => addAwarded(c.key))
        ready.current = true
        return
      }
      if (!fresh.length) return
      fresh.forEach(c => addAwarded(c.key))
      setQueue(q => [...q, ...fresh.filter(c => !q.some(x => x.key === c.key))])
    }
    check()
    window.addEventListener('seen-changed', check)
    return () => window.removeEventListener('seen-changed', check)
  }, [chapters])

  const c = queue[0]
  useEffect(() => {
    if (!c) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setQueue(q => q.slice(1)) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [c])
  if (!c) return null

  const close = () => setQueue(q => q.slice(1))
  const name = c.title ? `${c.label}: ${c.title}` : c.label
  const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function'
  const share = async () => {
    try { await navigator.share({ title: 'IN1020 Hurtigpensum', text: `Jeg har gjennomført ${name} på IN1020 Hurtigpensum!`, url: 'https://www.in1020-hurtig-pensum.no/' }) } catch { /* avbrutt */ }
  }

  return createPortal(
    <div className="award-backdrop" onClick={close}>
      <Confetti />
      <div className="award" role="dialog" aria-modal="true" aria-labelledby="award-title" data-ch={c.color} onClick={e => e.stopPropagation()}>
        <img className="award-badge" src={badgeOf(c, true)} alt="" width={180} height={180} draggable={false} />
        <h2 id="award-title">Gratulerer!</h2>
        <p>Du har gjennomført <strong>{name}</strong>. Merket er ditt.</p>
        <div className="award-actions">
          {canShare && <button type="button" className="award-share" onClick={share}>Del</button>}
          <button type="button" className="award-ok" onClick={close} autoFocus>Fortsett</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
