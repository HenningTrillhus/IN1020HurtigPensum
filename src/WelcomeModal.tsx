import { useEffect, useState, useSyncExternalStore } from 'react'
import { getConsent, subscribeConsent } from './consent'
import { CloseIcon, ShareIcon } from './Icons'

const KEY = 'welcome-seen'

const seenBefore = () => {
  try { return localStorage.getItem(KEY) === '1' } catch { return false }
}

/**
 * Liten melding øverst første gang du åpner siden: hvem som har laget den, og en oppfordring til å dele lenken videre.
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
    <div className="welcome" role="dialog" aria-label="Velkommen">
      <p className="welcome-text">
        <strong>Laget av IN1020-studenter.</strong> Mer pensum legges inn, ferdig i god tid før eksamen. Del lenken videre!
      </p>
      <div className="welcome-actions">
        <button className="welcome-share" onClick={share}><ShareIcon /> Del lenken</button>
        <button className="welcome-x" onClick={close} aria-label="Lukk"><CloseIcon /></button>
      </div>
      {note && <p className="welcome-note" role="status">{note}</p>}
    </div>
  )
}
