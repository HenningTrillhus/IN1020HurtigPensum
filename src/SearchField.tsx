import { useRef, type ReactNode } from 'react'
import { CloseIcon } from './Icons'

interface Props {
  value: string
  onChange: (v: string) => void
  placeholder: string
  label: string
  /** Ekstra klasse på yttersiden, f.eks. for avstand. */
  className?: string
  autoFocus?: boolean
  /** Kalles når x-en (eller Escape) trykkes, f.eks. for å lukke hele søkefeltet. */
  onClose?: () => void
  /** Ikon som står til venstre inne i feltet. */
  icon?: ReactNode
  onFocus?: () => void
  onBlur?: () => void
  /** x-en tømmer bare teksten og lar deg skrive videre, i stedet for å lukke søket. */
  keepFocus?: boolean
}

/** Søkefelt med en x til høyre som tømmer søket med en gang (og lukker tastaturet), så du fort kommer tilbake. */
export default function SearchField({ value, onChange, placeholder, label, className = '', autoFocus, onClose, icon, onFocus, onBlur, keepFocus }: Props) {
  const ref = useRef<HTMLInputElement>(null)
  const clear = () => {
    onChange('')
    if (keepFocus) { ref.current?.focus(); return }
    ref.current?.blur(); onClose?.()
  }
  return (
    <div className={`search-field${icon ? ' with-icon' : ''} ${className}`.trim()}>
      {icon && <span className="search-ic" aria-hidden>{icon}</span>}
      <input
        ref={ref} autoFocus={autoFocus} className="terms-search" type="search" value={value} placeholder={placeholder} aria-label={label}
        onChange={e => onChange(e.target.value)} onKeyDown={e => { if (e.key === 'Escape') clear() }}
        onFocus={onFocus} onBlur={onBlur}
        autoCapitalize="off" autoCorrect="off" spellCheck={false}
      />
      {(value || onClose) && (
        <button type="button" className="search-clear" onClick={clear} onPointerDown={keepFocus ? e => e.preventDefault() : undefined} aria-label={keepFocus ? 'Tøm teksten' : 'Tøm søket og gå tilbake'} title="Tøm teksten">
          <CloseIcon />
        </button>
      )}
    </div>
  )
}
