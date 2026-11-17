const URL_ = 'https://www.in1020-hurtig-pensum.no/'

export type ShareResult = 'shared' | 'copied' | 'failed' | 'cancelled'

/**
 * Deler en prestasjon. Prøver først å dele selve merket som bilde sammen med teksten (mobil),
 * så bare teksten med lenke, og til slutt kopierer den teksten til utklippstavlen (PC).
 */
export async function shareAward(text: string, badgeUrl?: string): Promise<ShareResult> {
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean }
  if (typeof nav.share === 'function') {
    try {
      if (badgeUrl && typeof nav.canShare === 'function') {
        try {
          const blob = await (await fetch(badgeUrl)).blob()
          const file = new File([blob], 'merke.png', { type: 'image/png' })
          if (nav.canShare({ files: [file] })) {
            await nav.share({ files: [file], text: `${text} ${URL_}` })
            return 'shared'
          }
        } catch (e) {
          if ((e as Error).name === 'AbortError') return 'cancelled'
        }
      }
      await nav.share({ title: 'IN1020 Hurtigpensum', text, url: URL_ })
      return 'shared'
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'cancelled'
    }
  }
  const full = `${text} ${URL_}`
  try {
    await navigator.clipboard.writeText(full)
    return 'copied'
  } catch { /* prøver den gamle metoden under */ }
  try {
    const ta = document.createElement('textarea')
    ta.value = full
    ta.setAttribute('readonly', '')
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok ? 'copied' : 'failed'
  } catch {
    return 'failed'
  }
}

export const chapterShareText = (name: string) => `Jeg har gjennomført ${name} på IN1020 Hurtigpensum. Prøv selv, det er pensum i korte klipp!`
export const totalShareText = () => 'Jeg har sett alle videoene på IN1020 Hurtigpensum! Pensum i korte klipp, prøv selv.'
