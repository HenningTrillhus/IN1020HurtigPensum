import { useSyncExternalStore } from 'react'

/** Avspillingshastigheter. Valget gjelder alle videoer og podkaster, og huskes i nettleseren. */
export const SPEEDS = [0.75, 1, 1.25, 1.5] as const
const KEY = 'speed'
const listeners = new Set<() => void>()

let speed: number = 1
try {
  const s = Number(localStorage.getItem(KEY))
  if ((SPEEDS as readonly number[]).includes(s)) speed = s
} catch { /* ignore */ }

export const getSpeed = () => speed
export function nextSpeed() {
  speed = SPEEDS[(SPEEDS.indexOf(speed as typeof SPEEDS[number]) + 1) % SPEEDS.length]
  try { localStorage.setItem(KEY, String(speed)) } catch { /* ignore */ }
  listeners.forEach(l => l())
}
export const subscribeSpeed = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn) } }
export const useSpeed = () => useSyncExternalStore(subscribeSpeed, getSpeed)

export const speedLabel = (s: number) => `${String(s).replace('.', ',')}×`

/** Knapp som bytter mellom hastighetene. */
export function SpeedButton({ className = '' }: { className?: string }) {
  const s = useSpeed()
  return (
    <button
      className={`speed-btn ${className}`.trim()} onClick={nextSpeed}
      aria-label={`Hastighet ${speedLabel(s)}. Trykk for å bytte`} title="Hastighet"
    >
      {speedLabel(s)}
    </button>
  )
}
