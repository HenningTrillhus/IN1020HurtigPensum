import type { MutableRefObject, TouchEvent } from 'react'

export interface SwipeStart { x: number; y: number; t: number }

/**
 * Sveip sidelengs på mobil. Gir berøringsfunksjoner til å sette på et element.
 * onLeft = fingeren dras mot venstre, onRight = fingeren dras mot høyre.
 * Rulling opp og ned, korte og trege dra, flere fingre og dra på spolelinja, fanene, valgark og kalkulatoren regnes ikke.
 */
export function swipeHandlers(ref: MutableRefObject<SwipeStart | null>, onLeft?: () => void, onRight?: () => void) {
  return {
    onTouchStart: (e: TouchEvent) => {
      const t = e.touches[0]
      const skip = (e.target as Element).closest('input[type="range"], .tabs, .sheet, .sheet-backdrop, .calc, .calc-backdrop')
      ref.current = e.touches.length === 1 && !skip ? { x: t.clientX, y: t.clientY, t: Date.now() } : null
    },
    onTouchEnd: (e: TouchEvent) => {
      const s = ref.current
      ref.current = null
      if (!s) return
      const t = e.changedTouches[0]
      const dx = t.clientX - s.x, dy = t.clientY - s.y
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.8 || Date.now() - s.t > 900) return
      if (dx < 0) onLeft?.()
      else onRight?.()
    },
  }
}
