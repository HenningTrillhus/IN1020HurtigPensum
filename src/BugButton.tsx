import type { MouseEvent } from 'react'
import { BugIcon } from './Icons'

const TO = 'henninlt@uio.no'

/** Lager en ferdig utfylt e-post. Adressen til siden og enheten tas med, så feilen er lett å finne igjen. */
function bugMailto(): string {
  const body = [
    'Hva skjedde? (Beskriv feilen, og hva du forventet.)',
    '',
    '',
    '',
    '---',
    `Side: ${location.href}`,
    `Enhet: ${navigator.userAgent}`,
  ].join('\n')
  return `mailto:${TO}?subject=${encodeURIComponent('Feil på IN1020 Hurtigpensum')}&body=${encodeURIComponent(body)}`
}

/** Knapp som åpner e-postprogrammet med en feilmelding til utvikleren. Ingenting sendes av siden selv. */
export default function BugButton({ className = '' }: { className?: string }) {
  // Adressen settes når du trykker, slik at den alltid peker på siden du står på nå.
  const refresh = (e: MouseEvent<HTMLAnchorElement>) => { e.currentTarget.href = bugMailto() }
  return (
    <a
      className={`theme-toggle bug-toggle ${className}`.trim()} href={bugMailto()} onClick={refresh}
      aria-label="Meld en feil på e-post" title="Meld en feil"
    >
      <BugIcon />
    </a>
  )
}
