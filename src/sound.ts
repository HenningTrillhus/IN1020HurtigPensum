// Mobilnettlesere blokkerer autoplay med lyd. Vi starter dempet,
// og når brukeren har trykket «lyd på» én gang gjelder det alle videoer.
let on = false
const listeners = new Set<() => void>()
export const isSoundOn = () => on
export function enableSound() { on = true; listeners.forEach(l => l()) }
export function subscribeSound(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn) } }

// Mens en podkast spiller, pauses og dempes videoene så lydene ikke kolliderer.
let podcast = false
const podListeners = new Set<() => void>()
export const isPodcastPlaying = () => podcast
export function setPodcastPlaying(v: boolean) {
  if (podcast === v) return
  podcast = v
  podListeners.forEach(l => l())
}
export function subscribePodcast(fn: () => void) { podListeners.add(fn); return () => { podListeners.delete(fn) } }
