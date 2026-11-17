import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import type { Chapter } from './chapters'
import { chapterLink, chapterShareText, shareAward, SITE_URL, totalShareText } from './share'
import { feedState, VIDEO_LEFT } from './feedState'
import { addAwarded, allDone, badgeOf, getAwarded, isDone, TOTAL_BADGE, totalBadge } from './badges'

interface Award { key: string; name: string; label?: string; title?: string; badge: string; color?: string; total?: boolean }

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
  const [queue, setQueue] = useState<Award[]>([])
  const ready = useRef(false)
  // Kapitler som er blitt ferdige, men der du fortsatt ser den siste videoen. Gratulasjonen venter til du har gått videre.
  const pending = useRef<Award[]>([])
  const [note, setNote] = useState('')

  useEffect(() => {
    if (!chapters.length) return
    const check = () => {
      const had = new Set(getAwarded())
      const fresh: Award[] = chapters
        .filter(c => badgeOf(c, true) && isDone(c) && !had.has(c.key))
        .map(c => ({ key: c.key, name: c.title ? `${c.label}: ${c.title}` : c.label, label: c.label, title: c.title, badge: badgeOf(c, true)!, color: c.color }))
      if (TOTAL_BADGE && allDone(chapters) && !had.has('total')) {
        fresh.push({ key: 'total', name: 'hele pensum', badge: totalBadge(true), total: true })
      }
      if (!ready.current) {
        // Første gang: de som allerede er ferdige skal ikke gi en haug med pop-ups.
        fresh.forEach(c => addAwarded(c.key))
        ready.current = true
        return
      }
      if (!fresh.length) return
      fresh.forEach(c => addAwarded(c.key))
      pending.current = [...pending.current, ...fresh.filter(c => !pending.current.some(x => x.key === c.key))]
      // Ser du ikke på en video akkurat nå, kan den komme med en gang.
      if (feedState.open === 0) flush()
    }
    const flush = () => {
      const p = pending.current
      if (!p.length) return
      pending.current = []
      setQueue(q => [...q, ...p.filter(c => !q.some(x => x.key === c.key))])
    }
    check()
    window.addEventListener('seen-changed', check)
    // Videoen du så på er byttet ut (sveip videre), eller du har gått ut av videosiden.
    window.addEventListener(VIDEO_LEFT, flush)
    return () => { window.removeEventListener('seen-changed', check); window.removeEventListener(VIDEO_LEFT, flush) }
  }, [chapters])

  const c = queue[0]
  useEffect(() => {
    if (!c) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setQueue(q => q.slice(1)) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [c])
  if (!c) return null

  const close = () => { setNote(''); setQueue(q => q.slice(1)) }
  const name = c.name
  const text = c.total ? totalShareText() : chapterShareText(c.label ?? name, c.title)
  const link = c.total ? SITE_URL : chapterLink(c.key)
  const share = async () => {
    const r = await shareAward(text, c.badge, link)
    if (r === 'copied') setNote('Kopiert! Lim det inn i en melding.')
    else if (r === 'failed') setNote('Kunne ikke dele her.')
  }

  return createPortal(
    <div className="award-backdrop" onClick={close}>
      <Confetti />
      <div className="award" role="dialog" aria-modal="true" aria-labelledby="award-title" data-ch={c.color} onClick={e => e.stopPropagation()}>
        <img className="award-badge" src={c.badge} alt="" width={180} height={180} draggable={false} />
        <h2 id="award-title">{c.total ? 'Gratulerer, du er i mål!' : 'Gratulerer!'}</h2>
        <p>{c.total ? 'Du har sett alle videoene i alle kapitlene.' : <>Du har gjennomført <strong>{name}</strong>.</>} Merket er ditt.</p>
        <p className="award-nudge">Del det med en medstudent, så kan dere pugge sammen.</p>
        <div className="award-actions">
          <button type="button" className="award-share" onClick={share} autoFocus>Del med venner</button>
          <button type="button" className="award-ok" onClick={close}>Fortsett</button>
        </div>
        {note && <small className="award-note" role="status">{note}</small>}
      </div>
    </div>,
    document.body,
  )
}
