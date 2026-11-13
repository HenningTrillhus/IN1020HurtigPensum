// Samtykke til lagring som ikke er strengt nødvendig. Valget huskes i nettleseren, og kan endres når som helst.
// Uten samtykke sendes ingenting til serveren som kan knyttes til en enhet (anonym enhets-ID for likes, visninger,
// feilmeldinger og vurderinger). Resten av siden (hva du har sett, hastighet, lyd) lagres bare lokalt og fungerer som før.
const KEY = 'consent'
export type Consent = 'yes' | 'no' | null

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'yes' || v === 'no' ? v : null
  } catch { return null }
}
export const hasConsent = () => getConsent() === 'yes'

const listeners = new Set<() => void>()
export function setConsent(v: Consent) {
  try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY) } catch { /* ignore */ }
  listeners.forEach(l => l())
}
export const subscribeConsent = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn) } }
