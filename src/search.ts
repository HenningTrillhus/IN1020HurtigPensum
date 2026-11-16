// Små bokstaver uten tegn som skiller æ/ø/å fra a/o, så «jord» finner «Jord» og «strom» finner «strøm».
export const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ø/g, 'o').replace(/æ/g, 'ae')

/** Søkeordene i et søk: små bokstaver, delt på mellomrom. Alle ordene må finnes for at noe skal være et treff. */
export const words = (q: string) => norm(q.trim()).split(/\s+/).filter(Boolean)

/** Hvor godt et begrep passer: eksakt navn først, så navn som begynner med søket, så ord som begynner med det, så resten. -1 = ikke et treff. */
export function score(term: string, def: string, ws: string[]): number {
  const t = norm(term), d = norm(def), n = ws.join(' ')
  const all = (s: string) => ws.every(w => s.includes(w))
  if (!all(t + ' ' + d)) return -1
  // Forkortelser som «LDA (load)»: sammenlign også med det som står før parentesen.
  const head = t.replace(/\s*\(.*$/, '')
  if (t === n || head === n) return 100
  if (t.startsWith(n)) return 80
  if (t.split(/[^a-z0-9]+/).some(x => x.startsWith(n))) return 60
  if (t.includes(n)) return 45
  if (all(t)) return 30
  return 10
}

/** Deler teksten i biter og markerer de som matcher et søkeord, uten å bry seg om æ/ø/å og store/små bokstaver. */
export function segments(text: string, ws: string[]): { t: string; hit: boolean }[] {
  if (!ws.length) return [{ t: text, hit: false }]
  let flat = ''
  const map: number[] = []
  for (let i = 0; i < text.length; i++) {
    const c = norm(text[i])
    for (let k = 0; k < c.length; k++) map.push(i)
    flat += c
  }
  const on = new Array<boolean>(text.length).fill(false)
  for (const w of ws) {
    for (let at = flat.indexOf(w); at !== -1; at = flat.indexOf(w, at + 1)) {
      for (let k = at; k < at + w.length; k++) on[map[k]] = true
    }
  }
  const out: { t: string; hit: boolean }[] = []
  for (let i = 0; i < text.length; i++) {
    const last = out[out.length - 1]
    if (last && last.hit === on[i]) last.t += text[i]
    else out.push({ t: text[i], hit: on[i] })
  }
  return out
}
