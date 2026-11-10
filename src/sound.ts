// Mobilnettlesere blokkerer autoplay med lyd. Vi starter dempet,
// og når brukeren har trykket «lyd på» én gang gjelder det alle videoer.
let on = false
const listeners = new Set<() => void>()
export const isSoundOn = () => on
export function enableSound() { on = true; listeners.forEach(l => l()) }
export function subscribeSound(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn) } }
