import { ShuffleIcon } from './Icons'

/** Knapp som åpner en blanding av videoer du ikke har sett. Står ved siden av kalkulatoren. */
export default function ShuffleButton({ className = '' }: { className?: string }) {
  return (
    <a
      className={`theme-toggle shuffle-toggle ${className}`.trim()} href="#/shuffle"
      aria-label="Bland videoer du ikke har sett" title="Bland videoer"
    >
      <ShuffleIcon />
    </a>
  )
}
