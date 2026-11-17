import type { Topic } from './types'
import { markSeen } from './storage'
import { removeAwarded } from './badges'

/** Små testknapper øverst i et delkapittel: gjør alle videoene ferdige, eller nullstill dem. Vises bare med ?debug=1. */
export default function DebugBar({ topic, chapterKey }: { topic: Topic; chapterKey: string }) {
  const done = () => { topic.videos.forEach((_, i) => markSeen(topic.id, i)) }
  const reset = () => {
    try { localStorage.removeItem(`seen:${topic.id}`) } catch { /* ignore */ }
    removeAwarded(chapterKey)
    removeAwarded('total')
    window.dispatchEvent(new Event('seen-changed'))
  }
  return (
    <div className="debug-bar" role="group" aria-label="Testverktøy">
      <span>Test</span>
      <button type="button" onClick={done}>Gjør ferdig</button>
      <button type="button" onClick={reset}>Nullstill</button>
    </div>
  )
}
