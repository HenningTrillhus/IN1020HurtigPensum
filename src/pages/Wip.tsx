import type { Topic } from '../types'

// Vises for temaer som ikke har noen videoer ennå.
export default function Wip({ topic, backHref, backLabel }: { topic: Topic; backHref: string; backLabel: string }) {
  return (
    <div className="shell">
      <nav className="tabs">
        <a href={backHref}>← {backLabel}</a>
      </nav>
      <div className="wip-page">
        <h2>Work in progress</h2>
        <p className="wip-topic">{topic.title}</p>
        <p>Videoene til dette temaet er ikke klare ennå. Kom tilbake senere!</p>
        <a className="wip-back" href={backHref}>Tilbake til {backLabel.toLowerCase()}</a>
      </div>
    </div>
  )
}
