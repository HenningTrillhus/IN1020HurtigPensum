import { useEffect, useState, useSyncExternalStore } from 'react'
import { getConsent, subscribeConsent } from './consent'
import { CloseIcon, ShareIcon } from './Icons'

const KEY = 'welcome-seen'

const seenBefore = () => {
  try { return localStorage.getItem(KEY) === '1' } catch { return false }
}

/**
 * Liten velkomstmelding første gang du åpner siden: hvem som har laget den, og en oppfordring til å dele lenken videre.
 * Vises etter at du har tatt stilling til lagring (så to meldinger ikke ligger oppå hverandre), og ikke på statistikksiden.
 */
export default function WelcomeModal() {
  const consent = useSyncExternalStore(subscribeConsent, getConsent)
  const [closed, setClosed] = useState(seenBefore)
  const [note, setNote] = useState('')
  const hide = location.hash.startsWith('#/admin') || location.hostname.endsWith('.vercel.app')

  const close = () => {
    try { localStorage.setItem(KEY, '1') } catch { /* ignore */ }
    setClosed(true)
  }

  useEffect(() => {
    if (closed || consent === null || hide) return
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [closed, consent, hide])

  if (closed || consent === null || hide) return null

  const share = async () => {
    const url = `${location.origin}${location.pathname}`
    const data = { title: 'IN1020 Hurtigpensum', text: 'Pensum i korte klipp til IN1020. Gratis og laget av studenter.', url }
    try {
      if (navigator.share) { await navigator.share(data); return }
    } catch (e) {
      if ((e as Error).name === 'AbortError') return
    }
    try { await navigator.clipboard.writeText(url); setNote('Lenken er kopiert. Send den videre!') } catch { setNote(url) }
  }

  return (
    <div className="welcome-back" onClick={close}>
      <div className="welcome" role="dialog" aria-modal="true" aria-label="Velkommen" onClick={e => e.stopPropagation()}>
        <button className="welcome-x" onClick={close} aria-label="Lukk"><CloseIcon /></button>
        <h2>Hei, og velkommen!</h2>
        <p>
          Dette er en liten nettside laget av noen studenter som tar IN1020 akkurat nå. Vi har laget den for å gjøre pensum litt
          lettere å ta inn, spesielt nå i eksamensperioden.
        </p>
        <p>
          Hjelper den deg? Del lenken med medstudenter som kan trenge den. Jo flere som får den, jo mer nytte gjør den.
        </p>
        <div className="welcome-actions">
          <button className="consent-btn primary welcome-share" onClick={share}><ShareIcon /> Del lenken</button>
          <button className="consent-btn" onClick={close}>Start å lære</button>
        </div>
        {note && <p className="welcome-note" role="status">{note}</p>}
      </div>
    </div>
  )
}
