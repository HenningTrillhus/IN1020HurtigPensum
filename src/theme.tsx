import { useSyncExternalStore } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export type Theme = 'dark' | 'light'
const KEY = 'theme'
const listeners = new Set<() => void>()

// Mørkt er standard. Valget huskes i nettleseren. Selve temaet settes tidlig av et lite skript i index.html,
// så siden ikke blinker i feil farge før React er klar.
export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function apply(t: Theme) {
  const root = document.documentElement
  root.dataset.theme = t
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t === 'light' ? '#ffffff' : '#000000')
  document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', t)
}

export function setTheme(t: Theme) {
  try { localStorage.setItem(KEY, t) } catch { /* ignore */ }
  apply(t)
  listeners.forEach(l => l())
}

const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn) } }

export function useTheme(): [Theme, () => void] {
  const theme = useSyncExternalStore(subscribe, getTheme)
  return [theme, () => setTheme(theme === 'dark' ? 'light' : 'dark')]
}

/** Knapp som bytter mellom mørkt og lyst tema. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, toggle] = useTheme()
  const toLight = theme === 'dark'
  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      onClick={toggle}
      aria-label={toLight ? 'Bytt til lyst tema' : 'Bytt til mørkt tema'}
      title={toLight ? 'Lyst tema' : 'Mørkt tema'}
    >
      {toLight ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
