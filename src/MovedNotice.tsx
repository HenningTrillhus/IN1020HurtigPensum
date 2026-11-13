import { useState } from 'react'

const NEW_HOST = 'www.in1020-hurtig-pensum.no'
const KEY = 'moved-closed'

const closedBefore = () => {
  try { return sessionStorage.getItem(KEY) === '1' } catch { return false }
}

/**
 * Liten melding til de som åpner siden på en gammel vercel.app-adresse: siden har fått eget domene.
 * Lenken tar med siden du står på (for eksempel en delt video), så du havner samme sted.
 * Vises ikke på det nye domenet, ikke lokalt og ikke på den skjulte statistikksiden.
 */
export default function MovedNotice() {
  const [closed, setClosed] = useState(closedBefore)
  if (closed || !location.hostname.endsWith('.vercel.app') || location.hash.startsWith('#/admin')) return null

  const close = () => {
    try { sessionStorage.setItem(KEY, '1') } catch { /* ignore */ }
    setClosed(true)
  }

  return (
    <div className="moved" role="dialog" aria-label="Siden har ny adresse">
      <p className="moved-title">Siden har fått ny adresse</p>
      <p className="moved-text">Fra nå av finner du den på <strong>{NEW_HOST}</strong>. Denne adressen virker en stund til, men bruk gjerne den nye.</p>
      <div className="moved-actions">
        <a className="consent-btn primary" href={`https://${NEW_HOST}/${location.hash}`}>Gå til ny adresse</a>
        <button className="consent-btn" onClick={close}>Lukk</button>
      </div>
    </div>
  )
}
