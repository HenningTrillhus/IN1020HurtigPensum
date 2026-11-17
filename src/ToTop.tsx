import { useEffect, useState } from 'react'

/** Rund «til toppen»-knapp nederst til høyre. Vises først når du har scrollet et stykke ned. */
export default function ToTop({ after = 500 }: { after?: number }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > after)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [after])
  if (!show) return null
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  return (
    <button
      type="button" className="to-top" aria-label="Til toppen" title="Til toppen"
      onClick={() => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    </button>
  )
}
