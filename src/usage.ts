import { hasConsent } from './consent'

// Måler hvor lenge siden har vært åpen og synlig, og sender det jevnlig (bare med samtykke). Ingenting sendes uten godkjenning.
// Tiden regnes bare mens fanen er synlig. Maks 5 sekunder per tikk, så en maskin som sover ikke teller som tid.
const TICK_MS = 5000
const FLUSH_MS = 120_000
const MIN_SEND = 5

let acc = 0
let last = Date.now()
let sentSession = false
let started = false

function deviceId(): string | null {
  try {
    const v = localStorage.getItem('device')
    return v && /^[a-f0-9]{32}$/.test(v) ? v : null
  } catch { return null }
}

function tick() {
  const now = Date.now()
  const dt = Math.min(now - last, TICK_MS + 1000)
  last = now
  if (document.visibilityState === 'visible' && hasConsent()) acc += dt / 1000
}

function flush() {
  tick()
  const seconds = Math.min(300, Math.floor(acc))
  if (seconds < MIN_SEND || !hasConsent()) return
  // Enhets-ID-en lages første gang noe sendes. Er den ikke laget ennå, lager vi den her.
  let device = deviceId()
  if (!device) {
    try {
      const bytes = crypto.getRandomValues(new Uint8Array(16))
      device = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('')
      localStorage.setItem('device', device)
    } catch { return }
  }
  acc -= seconds
  const session = !sentSession
  sentSession = true
  fetch('/api/time', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, keepalive: true,
    body: JSON.stringify({ device, seconds, session }),
  }).catch(() => { /* ignore */ })
}

export function startUsage() {
  if (started || typeof window === 'undefined') return
  started = true
  window.setInterval(tick, TICK_MS)
  window.setInterval(flush, FLUSH_MS)
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); else last = Date.now() })
  window.addEventListener('pagehide', flush)
}
