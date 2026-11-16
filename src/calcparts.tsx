import { useRef, useState, type ReactNode } from 'react'

/** Lite spørsmålstegn som viser og skjuler en forklaring. */
export function Q({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button type="button" className={`calc-q${open ? ' on' : ''}`} onClick={onToggle} aria-expanded={open} aria-label="Forklaring" title="Forklaring">
      ?
    </button>
  )
}

/** Overskrift med spørsmålstegn og skjult forklaring. */
export function Head({ label, help }: { label: ReactNode; help?: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="calc-headrow">
      <div className="calc-lab"><span>{label}</span>{help && <Q open={open} onToggle={() => setOpen(o => !o)} />}</div>
      {open && help && <div className="calc-help">{help}</div>}
    </div>
  )
}

/** Felt med navn, spørsmålstegn og forklaring. */
export function Field({ label, help, children }: { label: ReactNode; help?: ReactNode; children: ReactNode }) {
  return (
    <div className="calc-field">
      <Head label={label} help={help} />
      {children}
    </div>
  )
}

/** Positivt tall med norsk komma. null = tomt, NaN = ugyldig. */
export const num = (s: string) => {
  const t = s.trim().replace(/\s/g, '').replace(',', '.')
  if (!t) return null
  const x = Number(t)
  return Number.isFinite(x) && x > 0 ? x : NaN
}

/** Pent tall med norsk komma og rimelig antall siffer. */
export const fmt = (x: number) => {
  if (!Number.isFinite(x)) return ''
  if (x === 0) return '0'
  const a = Math.abs(x)
  if (a >= 1e12 || a < 1e-4) return x.toExponential(3).replace('.', ',')
  const s = String(Number(x.toPrecision(6)))
  const [i, f] = s.split('.')
  return i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (f ? ',' + f : '')
}

/** Kopierer tekst til utklippstavlen, og viser «Kopiert» en kort stund. */
export function Copy({ text, label = 'Kopier' }: { text: string; label?: string }) {
  const [done, setDone] = useState(false)
  const t = useRef<number | undefined>(undefined)
  const go = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      try { document.execCommand('copy') } catch { /* ingen tilgang */ }
      el.remove()
    }
    setDone(true)
    window.clearTimeout(t.current)
    t.current = window.setTimeout(() => setDone(false), 1400)
  }
  return (
    <button type="button" className={`calc-copy${done ? ' done' : ''}`} onClick={go} aria-label={`${label}: ${text}`}>
      {done ? 'Kopiert ✓' : label}
    </button>
  )
}

/** Stort resultat med tittel, og en kopier-knapp. */
export function Stat({ label, value, sub, copy }: { label: string; value: ReactNode; sub?: ReactNode; copy?: string }) {
  return (
    <div className="calc-stat">
      <span className="calc-stat-l">{label}</span>
      <b className="calc-stat-v mono">{value}</b>
      {sub && <span className="calc-stat-s">{sub}</span>}
      {copy && <Copy text={copy} />}
    </div>
  )
}

/** Tid i sekunder, skrevet slik et menneske leser det. */
export function duration(s: number): string {
  if (!Number.isFinite(s)) return 'uendelig lenge'
  if (s < 1e-6) return `${fmt(s * 1e9)} ns`
  if (s < 1e-3) return `${fmt(s * 1e6)} µs`
  if (s < 1) return `${fmt(s * 1e3)} ms`
  if (s < 60) return `${fmt(s)} sekunder`
  if (s < 3600) return `${fmt(s / 60)} minutter`
  if (s < 86400) return `${fmt(s / 3600)} timer`
  if (s < 86400 * 365) return `${fmt(s / 86400)} dager`
  const y = s / (86400 * 365)
  if (y < 1e6) return `${fmt(y)} år`
  if (y < 1e9) return `${fmt(y / 1e6)} millioner år`
  if (y < 1e12) return `${fmt(y / 1e9)} milliarder år`
  return `${fmt(y / 1e9)} milliarder år`
}
