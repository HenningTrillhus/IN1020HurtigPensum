import type { MutableRefObject, TouchEvent } from 'react'

export interface SwipeStart {
  x: number; y: number; t: number
  /** Avgjort når fingeren har flyttet seg litt: sidelengs, eller noe annet (rulling). */
  dir: 'h' | 'v' | null
}

const MIN_DX = 70      // hvor langt fingeren må dras for at det teller som sveip
const MAX_MS = 900     // og hvor raskt
const SKIP = 'input[type="range"], .tabs, .sheet, .sheet-backdrop, .calc, .calc-backdrop'

const clear = (el: HTMLElement) => { el.style.transform = ''; el.style.opacity = ''; el.style.transition = '' }

/**
 * Sveip sidelengs på mobil. Gir berøringsfunksjoner til å sette på et element.
 * onLeft = fingeren dras mot venstre, onRight = fingeren dras mot høyre. Mangler en av dem, skjer ingenting den veien.
 *
 * Siden følger fingeren mens du drar, glir ut når sveipet går gjennom, og den nye siden glir inn fra motsatt side.
 * Rulling opp og ned, korte og trege dra, flere fingre og dra på spolelinja, fanene, valgark og kalkulatoren regnes ikke.
 */
export function swipeHandlers(ref: MutableRefObject<SwipeStart | null>, onLeft?: () => void, onRight?: () => void) {
  const allowed = (dx: number) => (dx < 0 ? !!onLeft : !!onRight)

  return {
    onTouchStart: (e: TouchEvent) => {
      const t = e.touches[0]
      const skip = (e.target as Element).closest(SKIP)
      ref.current = e.touches.length === 1 && !skip ? { x: t.clientX, y: t.clientY, t: Date.now(), dir: null } : null
    },

    // Siden følger fingeren når du drar sidelengs, med litt motstand. Vanlig rulling rører vi ikke.
    onTouchMove: (e: TouchEvent) => {
      const s = ref.current
      if (!s) return
      const t = e.touches[0]
      const dx = t.clientX - s.x, dy = t.clientY - s.y
      if (s.dir === null && (Math.abs(dx) > 12 || Math.abs(dy) > 12)) s.dir = Math.abs(dx) > Math.abs(dy) * 1.5 ? 'h' : 'v'
      if (s.dir !== 'h' || !allowed(dx)) return
      const el = e.currentTarget as HTMLElement
      el.style.transition = 'none'
      el.style.transform = `translateX(${dx * 0.55}px)`
      el.style.opacity = String(Math.max(0.35, 1 - Math.abs(dx) / 520))
    },

    onTouchCancel: (e: TouchEvent) => {
      ref.current = null
      clear(e.currentTarget as HTMLElement)
    },

    onTouchEnd: (e: TouchEvent) => {
      const s = ref.current
      ref.current = null
      const el = e.currentTarget as HTMLElement
      if (!s) return
      const t = e.changedTouches[0]
      const dx = t.clientX - s.x, dy = t.clientY - s.y
      const done = Math.abs(dx) >= MIN_DX && Math.abs(dx) >= Math.abs(dy) * 1.8 && Date.now() - s.t <= MAX_MS && allowed(dx)

      if (!done) {
        // Ikke langt nok: siden glir tilbake til der den var.
        if (el.style.transform) {
          el.style.transition = 'transform .2s ease-out, opacity .2s ease-out'
          el.style.transform = 'translateX(0)'
          el.style.opacity = '1'
          window.setTimeout(() => clear(el), 220)
        }
        return
      }

      // Siden glir ut i sveiperetningen, så navigerer vi, og den nye siden glir inn fra motsatt side.
      const left = dx < 0
      el.style.transition = 'transform .16s ease-in, opacity .16s ease-in'
      el.style.transform = `translateX(${left ? -28 : 28}%)`
      el.style.opacity = '0'
      window.setTimeout(() => {
        const root = document.documentElement
        const cls = left ? 'swipe-in-from-right' : 'swipe-in-from-left'
        // Innkjøringen starter først når den nye siden er tegnet, så vi ikke ser den gamle glide inn igjen.
        const start = () => window.setTimeout(() => {
          root.classList.add(cls)
          clear(el)
          window.setTimeout(() => root.classList.remove(cls), 380)
        }, 20)
        window.addEventListener('hashchange', start, { once: true })
        ;(left ? onLeft : onRight)?.()
        // Skjedde det ingen sidebytte, rydder vi uansett opp.
        window.setTimeout(() => { window.removeEventListener('hashchange', start); clear(el) }, 400)
      }, 150)
    },
  }
}
