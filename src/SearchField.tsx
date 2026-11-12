import { useRef } from 'react'
import { CloseIcon } from './Icons'

interface Props {
  value: string
  onChange: (v: string) => void
  placeholder: string
  label: string
  /** Ekstra klasse på yttersiden, f.eks. for avstand. */
  className?: string
}

/** Søkefelt med en x til høyre som tømmer søket med en gang (og lukker tastaturet), så du fort kommer tilbake. */
export default function SearchField({ value, onChange, placeholder, label, className = '' }: Props) {
  const ref = useRef<HTMLInputElement>(null)
  const clear = () => { onChange(''); ref.current?.blur() }
  return (
    <div className={`search-field ${className}`.trim()}>
      <input
        ref={ref} className="terms-search" type="search" value={value} placeholder={placeholder} aria-label={label}
        onChange={e => onChange(e.target.value)} onKeyDown={e => { if (e.key === 'Escape') clear() }}
        autoCapitalize="off" autoCorrect="off" spellCheck={false}
      />
      {value && (
        <button type="button" className="search-clear" onClick={clear} aria-label="Tøm søket og gå tilbake" title="Tøm søket">
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
