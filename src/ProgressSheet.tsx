import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { bannerOf, seenCount, videoCount, type Chapter } from './chapters'
import { CloseIcon, LockIcon } from './Icons'
import { shareAward, totalShareText } from './share'
import { allDone, badgeOf, isDone, TOTAL_BADGE, totalBadge } from './badges'

/** Liten side med fremdriften i hvert kapittel: prosent og antall videoer du har sett. Samme vindu som kalkulatoren. */
export default function ProgressSheet({ chapters, onClose }: { chapters: Chapter[]; onClose: () => void }) {
  const [closing, setClosing] = useState(false)
  const [shareNote, setShareNote] = useState('')
  const [settled, setSettled] = useState(false) // åpne-animasjonen er ferdig, så fingeren kan styre posisjonen
  const timer = useRef<number | undefined>(undefined)
  const gone = useRef(false)
  const backdropRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const close = () => {
    if (gone.current) return
    gone.current = true
    setClosing(true)
    timer.current = window.setTimeout(onClose, 260)
  }

  // Dra siden nedover for å lukke den. Den følger fingeren, og glir videre ned når du slipper (eller spretter tilbake).
  useEffect(() => {
    if (!settled) return
    const el = sheetRef.current!, bd = backdropRef.current!, body = bodyRef.current!
    const DIM = 0.67
    let y0 = 0, x0 = 0, t0 = 0, dy = 0, decided = false, drag = false
    const setPull = (y: number) => {
      el.style.transform = `translateY(${y}px)`
      bd.style.backgroundColor = `rgba(0,0,0,${DIM * (1 - Math.min(1, y / Math.max(1, el.offsetHeight)))})`
    }
    const start = (e: TouchEvent) => {
      if (gone.current || e.touches.length !== 1) return
      y0 = e.touches[0].clientY; x0 = e.touches[0].clientX; t0 = Date.now(); dy = 0; decided = false; drag = false
      el.style.transition = 'none'; bd.style.transition = 'none'
    }
    const move = (e: TouchEvent) => {
      if (gone.current || e.touches.length !== 1) return
      const ddy = e.touches[0].clientY - y0, ddx = e.touches[0].clientX - x0
      if (!decided) {
        if (Math.abs(ddy) < 6 && Math.abs(ddx) < 6) return
        decided = true
        // Inne i lista dras siden bare ned når lista allerede står øverst. Ellers er det vanlig scrolling.
        drag = ddy > 0 && Math.abs(ddy) > Math.abs(ddx) && (!body.contains(e.target as Node) || body.scrollTop <= 0)
      }
      if (!drag) return
      e.preventDefault()
      dy = Math.max(0, ddy)
      setPull(dy)
    }
    const end = () => {
      if (!drag) return
      drag = false
      const fast = dy / Math.max(1, Date.now() - t0) > 0.6
      if (dy > 110 || (fast && dy > 40)) {
        gone.current = true
        el.style.transition = 'transform .32s cubic-bezier(.4, 0, 1, 1)'
        bd.style.transition = 'background-color .32s ease'
        el.style.transform = `translateY(${window.innerHeight}px)`
        bd.style.backgroundColor = 'rgba(0,0,0,0)'
        timer.current = window.setTimeout(onClose, 320)
      } else {
        el.style.transition = 'transform .35s cubic-bezier(.2, .85, .25, 1)'
        bd.style.transition = 'background-color .35s ease'
        el.style.transform = ''
        bd.style.backgroundColor = ''
      }
    }
    el.addEventListener('touchstart', start, { passive: true })
    el.addEventListener('touchmove', move, { passive: false })
    el.addEventListener('touchend', end)
    el.addEventListener('touchcancel', end)
    return () => {
      el.removeEventListener('touchstart', start)
      el.removeEventListener('touchmove', move)
      el.removeEventListener('touchend', end)
      el.removeEventListener('touchcancel', end)
    }
  }, [settled, onClose])
  // Sikkerhetsnett hvis nettleseren aldri sender «animasjon ferdig» (for eksempel ved redusert bevegelse).
  useEffect(() => { const t = window.setTimeout(() => setSettled(true), 700); return () => window.clearTimeout(t) }, [])
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
  // Aldri 100 % før alt er sett, selv om avrundingen skulle gi det.
  const pct = (s: number, v: number) => (v ? (s >= v ? 100 : Math.min(99, Math.round((s / v) * 100))) : 0)

  return createPortal(
    <div ref={backdropRef} className={`calc-backdrop${closing ? ' closing' : ''}${settled ? ' settled' : ''}`} onClick={close}>
      <div
        ref={sheetRef} className="calc prog-sheet" role="dialog" aria-modal="true" aria-label="Fremdrift per kapittel" onClick={e => e.stopPropagation()}
        onAnimationEnd={e => { if (e.target === e.currentTarget && e.animationName === 'calcUp') setSettled(true) }}
      >
        <div className="sheet-grab" aria-hidden />
        <div className="calc-head">
          <strong>Fremdrift</strong>
          <button className="calc-close" onClick={close} aria-label="Lukk"><CloseIcon /></button>
        </div>
        <div ref={bodyRef} className="calc-body">
          <div className="prog-total">
            <strong>{pct(totalS, totalV)} %</strong>
            <span>{totalS} av {totalV} videoer sett</span>
          </div>
          {TOTAL_BADGE && totalV > 0 && (
            <div className={`total-badge${allDone(chapters) ? ' done' : ''}`}>
              <span className="tb-art">
                <img src={totalBadge(allDone(chapters))} alt={allDone(chapters) ? 'Merket for hele pensum, opplåst' : 'Merket for hele pensum, låst'} width={104} height={104} draggable={false} />
                {!allDone(chapters) && <span className="tb-lock" aria-hidden><LockIcon /></span>}
              </span>
              <div>
                <strong>Hele pensum</strong>
                <span>{allDone(chapters) ? 'Du har sett alle videoene i alle kapitlene.' : `Se alle videoene i alle kapitlene for å låse opp. ${totalV - totalS} igjen.`}</span>
                {allDone(chapters) && (
                  <button type="button" className="cb-share" onClick={async () => { const r = await shareAward(totalShareText(), totalBadge(true)); setShareNote(r === 'copied' ? 'Kopiert! Lim det inn i en melding.' : r === 'failed' ? 'Kunne ikke dele her.' : '') }}>Del merket</button>
                )}
                {shareNote && <em className="share-note" role="status">{shareNote}</em>}
              </div>
            </div>
          )}
          <ul className="prog-list">
            {rows.map(({ c, v, s }) => (
              <li key={c.key}>
                <a className={`prog-row${bannerOf(c) ? ' has-banner' : ''}`} href={`#/kap/${c.key}`} data-ch={c.color} style={{ '--banner': bannerOf(c) ? `url(${bannerOf(c)})` : undefined } as CSSProperties}>
                  {c.icon ? <img className={`prog-ic${isDone(c) && badgeOf(c, true) ? ' badge' : ''}`} src={(isDone(c) && badgeOf(c, true)) || c.icon} alt="" width={32} height={32} draggable={false} /> : <span className="prog-ic" />}
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
