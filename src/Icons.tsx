const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const

export const ThumbUp = ({ filled }: { filled?: boolean }) => (
  <svg {...base} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
    <path d="M7 10v11H3V10h4Zm0 0 4-7c1.7 0 2.8 1.3 2.5 3L13 10h6.2a2 2 0 0 1 2 2.4l-1.4 7a2 2 0 0 1-2 1.6H7" />
  </svg>
)

export const ThumbDown = ({ filled }: { filled?: boolean }) => (
  <svg {...base} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
    <path d="M17 14V3h4v11h-4Zm0 0-4 7c-1.7 0-2.8-1.3-2.5-3L11 14H4.8a2 2 0 0 1-2-2.4l1.4-7A2 2 0 0 1 6.2 3H17" />
  </svg>
)

export const PlayIcon = () => (
  <svg {...base} width={26} height={26}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>
)

export const PauseIcon = () => (
  <svg {...base} width={26} height={26}><rect x="6" y="5" width="4.5" height="14" rx="1.2" /><rect x="13.5" y="5" width="4.5" height="14" rx="1.2" /></svg>
)

export const CloseIcon = () => (
  <svg {...base} width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
)

const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

/** Fullskjerm: fire hjørner. */
export const FullscreenIcon = () => (
  <svg {...base} {...line}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
)

/** Høyttaler med strek over (lyden er av). */
export const MutedIcon = () => (
  <svg {...base} width={20} height={20} {...line}><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4ZM16 9.5l5 5M21 9.5l-5 5" /></svg>
)

/** Hopp 10 sekunder tilbake / fram. */
// Sirkelpil (310 grader, åpen oppe) med fylt pilspiss og «10» i midten.
// Tilbake: pila peker mot venstre (mot klokka). Fram: speilvendt.
const skipText = {
  x: 12, y: 16.2, textAnchor: 'middle', fontSize: 8.6, fontWeight: 800, fill: 'currentColor', stroke: 'none',
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
} as const

export const Back10 = () => (
  <svg {...base} {...line} strokeWidth={2.1}>
    <path d="M12 5.2a8 8 0 1 0 6.1 2.8" />
    <path d="M13.2 1.6 7.4 5.2l5.8 3.6Z" fill="currentColor" stroke="none" />
    <text {...skipText}>10</text>
  </svg>
)
export const Fwd10 = () => (
  <svg {...base} {...line} strokeWidth={2.1}>
    <path d="M12 5.2a8 8 0 1 1-6.1 2.8" />
    <path d="M10.8 1.6 16.6 5.2l-5.8 3.6Z" fill="currentColor" stroke="none" />
    <text {...skipText}>10</text>
  </svg>
)

export const ChevronUp = () => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
    <path d="m6 15 6-6 6 6" />
  </svg>
)

export const ChevronDown = () => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Eye = () => (
  <svg {...base} width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
