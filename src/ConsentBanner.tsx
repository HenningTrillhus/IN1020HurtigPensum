import { useEffect, useState, useSyncExternalStore } from 'react'
import { getConsent, setConsent, subscribeConsent } from './consent'

/** Vises første gang du åpner siden, og igjen hvis du velger å endre valget. */
export default function ConsentBanner() {
  const choice = useSyncExternalStore(subscribeConsent, getConsent)
  const [leaving, setLeaving] = useState(false)
  const [more, setMore] = useState(false)
  useEffect(() => { if (choice === null) { setLeaving(false); setMore(false) } }, [choice])
  if (choice !== null && !leaving) return null

  // Banneret tones ut før valget lagres og det fjernes.
  const pick = (v: 'yes' | 'no') => {
    setLeaving(true)
    window.setTimeout(() => { setConsent(v); setLeaving(false) }, 220)
  }

  return (
    <div className={`consent${leaving ? ' leaving' : ''}`} role="dialog" aria-label="Lagring i nettleseren" aria-live="polite">
      <p className="consent-title">Lagring i nettleseren</p>
      <p className="consent-text">
        Siden bruker ingen annonser og ingen sporing. Den lagrer litt i nettleseren din for å huske hva du har sett og valgene dine.
        Godtar du, sender den også en tilfeldig enhets-ID til serveren, så samme enhet ikke teller flere ganger når likes, visninger og vurderinger summeres.
      </p>
      {more && (
        <p className="consent-text consent-more">
          Det som alltid lagres lokalt: hvilke videoer du har sett, hvor du slapp, hastighet og lyd. Med samtykke sendes: enhets-ID,
          video-ID og valget ditt (like, feilmelding eller stjerner). Det kan ikke knyttes til deg som person. Du kan endre valget nederst på forsiden.
        </p>
      )}
      <div className="consent-actions">
        <button className="consent-btn primary" onClick={() => pick('yes')}>Godta</button>
        <button className="consent-btn" onClick={() => pick('no')}>Bare nødvendige</button>
        <button className="consent-more-btn" onClick={() => setMore(m => !m)} aria-expanded={more}>{more ? 'Skjul' : 'Mer info'}</button>
      </div>
    </div>
  )
}
