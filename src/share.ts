export const SITE_URL = 'https://www.in1020-hurtig-pensum.no/'
/** Lenke som åpner et bestemt kapittel, så den du deler med kan prøve det selv. */
export const chapterLink = (key: string) => `${SITE_URL}#/kap/${key}`

export type ShareResult = 'shared' | 'copied' | 'failed' | 'cancelled'

/**
 * Deler en prestasjon. Prøver først å dele selve merket som bilde sammen med teksten (mobil),
 * så bare teksten med lenke, og til slutt kopierer den teksten til utklippstavlen (PC).
 */
export async function shareAward(text: string, badgeUrl?: string, link: string = SITE_URL): Promise<ShareResult> {
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean }
  if (typeof nav.share === 'function') {
    try {
      if (badgeUrl && typeof nav.canShare === 'function') {
        try {
          const blob = await (await fetch(badgeUrl)).blob()
          const file = new File([blob], 'merke.png', { type: 'image/png' })
          if (nav.canShare({ files: [file] })) {
            await nav.share({ files: [file], text: `${text} ${link}` })
            return 'shared'
          }
        } catch (e) {
          if ((e as Error).name === 'AbortError') return 'cancelled'
        }
      }
      await nav.share({ title: 'IN1020 Hurtigpensum', text, url: link })
      return 'shared'
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'cancelled'
    }
  }
  const full = `${text} ${link}`
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

/** «Jeg har nettopp klart Kapittel 8 om Moderne maskiner på IN1020 Hurtigpensum. Nå er det din tur!» */
export const chapterShareText = (label: string, title?: string) =>
  `Jeg har nettopp klart ${title ? `${label} om ${title}` : label} på IN1020 Hurtigpensum. Nå er det din tur!`
export const totalShareText = () => 'Jeg har nettopp sett alle videoene på IN1020 Hurtigpensum. Nå er det din tur!'
export const progressShareText = (seen: number, total: number, pct: number) =>
  `Jeg ligger på ${pct} % på IN1020 Hurtigpensum (${seen} av ${total} videoer sett). Hvor langt har du kommet?`
