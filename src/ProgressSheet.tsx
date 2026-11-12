import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { seenCount, videoCount, type Chapter } from './chapters'
import { CloseIcon } from './Icons'

/** Liten side med fremdriften i hvert kapittel: prosent og antall videoer du har sett. Samme vindu som kalkulatoren. */
export default function ProgressSheet({ chapters, onClose }: { chapters: Chapter[]; onClose: () => void }) {
  const [closing, setClosing] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const close = () => {
    if (closing) return
    setClosing(true)
    timer.current = window.setTimeout(onClose, 260)
  }
  const closeRef = useRef(close)
  closeRef.current = close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeRef.current() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; window.clearTimeout(timer.current) }
  }, [])

  const rows = chapters.map(c => ({ c, v: videoCount(c), s: seenCount(c) }))
  const totalV = rows.reduce((n, r) => n + r.v, 0)
  const totalS = rows.reduce((n, r) => n + r.s, 0)
  const pct = (s: number, v: number) => (v ? Math.round((s / v) * 100) : 0)

  return createPortal(
    <div className={`calc-backdrop${closing ? ' closing' : ''}`} onClick={close}>
      <div className="calc prog-sheet" role="dialog" aria-modal="true" aria-label="Fremdrift per kapittel" onClick={e => e.stopPropagation()}>
        <div className="calc-head">
          <strong>Fremdrift</strong>
          <button className="calc-close" onClick={close} aria-label="Lukk"><CloseIcon /></button>
        </div>
        <div className="calc-body">
          <div className="prog-total">
            <strong>{pct(totalS, totalV)} %</strong>
            <span>{totalS} av {totalV} videoer sett</span>
          </div>
          <ul className="prog-list">
            {rows.map(({ c, v, s }) => (
              <li key={c.key}>
                <a className="prog-row" href={`#/kap/${c.key}`} data-ch={c.color}>
                  {c.icon ? <img className="prog-ic" src={c.icon} alt="" width={32} height={32} draggable={false} /> : <span className="prog-ic" />}
                  <span className="prog-main">
                    <span className="prog-top">
                      <span className="prog-name">{c.title || c.label}</span>
                      <strong>{v ? `${pct(s, v)} %` : '–'}</strong>
                    </span>
                    <span className="completion"><i style={{ width: `${pct(s, v)}%` }} /></span>
                    <small>{v ? `${s} av ${v} ${v === 1 ? 'video' : 'videoer'} sett` : 'Ingen videoer ennå'}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  )
}
