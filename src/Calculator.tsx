import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { CalcIcon, CloseIcon } from './Icons'

// ---------- Små byggeklosser ----------

/** Lite spørsmålstegn som viser og skjuler en forklaring. */
function Q({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button type="button" className={`calc-q${open ? ' on' : ''}`} onClick={onToggle} aria-expanded={open} aria-label="Forklaring" title="Forklaring">
      ?
    </button>
  )
}

/** Overskrift med spørsmålstegn og skjult forklaring. */
function Head({ label, help }: { label: ReactNode; help?: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="calc-headrow">
      <div className="calc-lab"><span>{label}</span>{help && <Q open={open} onToggle={() => setOpen(o => !o)} />}</div>
      {open && help && <div className="calc-help">{help}</div>}
    </div>
  )
}

/** Felt med navn, spørsmålstegn og forklaring. */
function Field({ label, help, children }: { label: ReactNode; help?: ReactNode; children: ReactNode }) {
  return (
    <div className="calc-field">
      <Head label={label} help={help} />
      {children}
    </div>
  )
}

const group = (s: string, n = 4) => s.replace(new RegExp(`\\B(?=(.{${n}})+$)`, 'g'), ' ')

const BASES = [
  { base: 10, label: 'Desimal', re: /^\d+$/, prefix: '', help: 'Plassverdiene er 1, 10, 100, 1000 … Hver plass teller ti ganger så mye som den til høyre. 253 = 2·100 + 5·10 + 3·1.' },
  { base: 2, label: 'Binær', re: /^[01]+$/, prefix: '0b', help: 'Plassverdiene er 1, 2, 4, 8, 16 … Hver plass teller dobbelt så mye som den til høyre. 1011 = 8 + 0 + 2 + 1 = 11.' },
  { base: 16, label: 'Heksadesimal', re: /^[0-9a-f]+$/, prefix: '0x', help: 'Seksten symboler: 0–9 og A–F (A = 10, F = 15). Ett heksadesimalt siffer er nøyaktig fire bit, så FF = 1111 1111 = 255.' },
  { base: 8, label: 'Oktal', re: /^[0-7]+$/, prefix: '0o', help: 'Åtte siffer, 0–7. Ett oktalt siffer er nøyaktig tre bit, så 377 = 011 111 111 = 255.' },
] as const

/** Leser et positivt heltall i en gitt base. null = tomt, 'feil' = ugyldig. */
function parseBase(text: string, base: number): bigint | null | 'feil' {
  let t = text.replace(/[\s_]/g, '').toLowerCase()
  const b = BASES.find(x => x.base === base)!
  if (b.prefix && t.startsWith(b.prefix)) t = t.slice(2)
  if (!t) return null
  if (t.length > 64 || !b.re.test(t)) return 'feil'
  return BigInt(b.prefix + t)
}

/** Desimalt, eller med prefiks 0b / 0x / 0o. */
function parseAny(text: string): bigint | null | 'feil' {
  const t = text.replace(/[\s_]/g, '').toLowerCase()
  if (!t) return null
  if (t.startsWith('0b')) return parseBase(t, 2)
  if (t.startsWith('0x')) return parseBase(t, 16)
  if (t.startsWith('0o')) return parseBase(t, 8)
  return parseBase(t, 10)
}

const bin = (v: bigint, width: number) => v.toString(2).padStart(width, '0')

// ---------- Konverter ----------

function Convert() {
  const [src, setSrc] = useState<number>(10)
  const [text, setText] = useState('')
  const value = parseBase(text, src)
  const bad = value === 'feil'

  const show = (base: number) => {
    if (base === src) return text
    if (value === null || bad) return ''
    return base === 2 ? group(value.toString(2)) : base === 16 ? value.toString(16).toUpperCase() : value.toString(base)
  }
  const bits = typeof value === 'bigint' ? value.toString(2).length : 0

  return (
    <div className="calc-pane">
      <p className="calc-hint">Skriv i et av feltene, så fylles de andre ut. Bare positive heltall.</p>
      {BASES.map(b => (
        <Field key={b.base} label={b.label} help={b.help}>
          <input
            className={`calc-input mono${bad && src === b.base ? ' bad' : ''}`}
            value={show(b.base)} inputMode={b.base === 10 ? 'numeric' : 'text'}
            onChange={e => { setSrc(b.base); setText(e.target.value) }}
            autoCapitalize="off" autoCorrect="off" spellCheck={false} aria-label={b.label}
          />
        </Field>
      ))}
      {bad && <p className="calc-err">Ugyldig tall i {BASES.find(b => b.base === src)!.label.toLowerCase()}.</p>}
      {bits > 0 && (
        <div className="calc-sum">
          <Head
            label={<>Trenger {bits} bit</>}
            help={<>n bit gir 2<sup>n</sup> ulike mønstre, fordi hver bit har to valg og valgene er uavhengige. Med {bits} bit er det 2<sup>{bits}</sup> = {(1n << BigInt(bits)).toString()} mønstre. Tallet trenger akkurat så mange bit at det får plass.</>}
          />
        </div>
      )}
    </div>
  )
}

// ---------- Bitbredde og toerkomplement ----------

const WIDTHS = [4, 8, 16, 32]

function Width() {
  const [text, setText] = useState('-5')
  const [width, setWidth] = useState(8)
  const clean = text.trim()
  const ok = /^-?\d+$/.test(clean) && clean.length < 20
  const v = ok ? BigInt(clean) : null
  const n = BigInt(width)
  const full = 1n << n
  const half = 1n << (n - 1n)

  let out: ReactNode = null
  if (v !== null) {
    const pattern = v & (full - 1n)
    const unsigned = pattern
    const signed = pattern >= half ? pattern - full : pattern
    const inU = v >= 0n && v < full
    const inS = v >= -half && v < half
    out = (
      <>
        <div className="calc-result">
          <Head
            label={<>Bitmønster ({width} bit)</>}
            help="Slik ligger tallet lagret. Positive tall skrives som vanlig binærtall. Negative skrives som toerkomplement: ta tallet uten minus, snu alle bit og legg til 1."
          />
          <div className="mono big">{group(bin(pattern, width))}</div>
        </div>
        <div className="calc-list">
          <div className="row">
            <Head label="Uten fortegn" help="Alle bit teller som vanlige plassverdier. Med n bit går området fra 0 til 2ⁿ − 1." />
            <b>{unsigned.toString()}</b>
          </div>
          <div className="row">
            <Head label="Med fortegn" help="Toerkomplement: den fremste biten teller som −2ⁿ⁻¹ i stedet for +2ⁿ⁻¹. Området går fra −2ⁿ⁻¹ til 2ⁿ⁻¹ − 1, så det er ett negativt tall mer enn positive." />
            <b>{signed.toString()}</b>
          </div>
          <div className="row">
            <Head label="Heksadesimalt" help="Hvert fjerde bit blir ett heksadesimalt siffer (0–9, A–F)." />
            <b className="mono">{pattern.toString(16).toUpperCase().padStart(width / 4, '0')}</b>
          </div>
        </div>
        {v < 0n && inS && (
          <div className="calc-result">
            <Head
              label="Slik regnet jeg"
              help="Å gjøre et tall negativt i toerkomplement: skriv tallet uten minus, snu hver bit (0 til 1 og 1 til 0), og legg til 1. Det samme gjør du for å gå tilbake."
            />
            <ol className="calc-steps">
              <li>{(-v).toString()} er <span className="mono">{group(bin(-v, width))}</span></li>
              <li>Snu alle bit: <span className="mono">{group(bin(~(-v) & (full - 1n), width))}</span></li>
              <li>Legg til 1: <span className="mono">{group(bin(pattern, width))}</span></li>
            </ol>
          </div>
        )}
        {!inU && !inS ? (
          <p className="calc-err">
            Overflyt. {v.toString()} er utenfor området for {width} bit, og ender som {signed.toString()} med fortegn
            ({unsigned.toString()} uten).
          </p>
        ) : (
          <p className="calc-note">
            Med {width} bit: uten fortegn 0 til {(full - 1n).toString()}, med fortegn {(-half).toString()} til {(half - 1n).toString()}.
            {inS && !inU && ' Tallet passer bare med fortegn.'}
            {inU && !inS && ' Tallet passer bare uten fortegn.'}
          </p>
        )}
      </>
    )
  }

  return (
    <div className="calc-pane">
      <p className="calc-hint">Skriv et heltall (også negativt) og velg hvor mange bit det skal ligge i.</p>
      <Field label="Tall" help="Et helt tall i vanlig desimal. Skriv minus foran for negative tall.">
        <input
          className={`calc-input mono${clean && !ok ? ' bad' : ''}`} value={text} inputMode="text"
          onChange={e => setText(e.target.value)} aria-label="Tall" spellCheck={false}
        />
      </Field>
      <div className="calc-seg" role="group" aria-label="Antall bit">
        {WIDTHS.map(w => (
          <button key={w} className={w === width ? 'on' : ''} onClick={() => setWidth(w)}>{w} bit</button>
        ))}
      </div>
      {clean && !ok && <p className="calc-err">Skriv et helt tall, f.eks. -5 eller 200.</p>}
      {out}
    </div>
  )
}

// ---------- Bitoperasjoner ----------

const OP_HELP: Record<string, string> = {
  A: 'Første tallet, avkortet til valgt antall bit.',
  B: 'Andre tallet, avkortet til valgt antall bit.',
  'A AND B': 'Bit for bit: 1 bare der begge er 1. Brukes til å plukke ut bestemte bit (en maske).',
  'A OR B': 'Bit for bit: 1 der minst én er 1. Brukes til å slå på bestemte bit.',
  'A XOR B': 'Bit for bit: 1 der de er forskjellige. Brukes til å snu bestemte bit, og er kjernen i addisjon.',
  'A NAND B': 'AND med snudd utgang: det motsatte av AND, bit for bit.',
  'A NOR B': 'OR med snudd utgang: det motsatte av OR, bit for bit.',
  'A XNOR B': 'XOR med snudd utgang: 1 der bitene er like.',
  'NOT A': 'Snur hver bit i A. Med fortegn blir dette −A − 1.',
  'A << 1': 'Skyver alle bit ett steg til venstre og fyller med 0. Det samme som å gange med 2, så lenge bitene ikke faller ut.',
  'A >> 1': 'Skyver alle bit ett steg til høyre. Det samme som å dele på 2 og kutte bort rest.',
}

function OpRow({ label, v, width }: { label: string; v: bigint; width: number }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <tr>
        <th><span className="calc-lab"><span>{label}</span><Q open={open} onToggle={() => setOpen(o => !o)} /></span></th>
        <td className="mono">{group(bin(v, width))}</td>
        <td className="num">{v.toString()}</td>
      </tr>
      {open && <tr className="help-row"><td colSpan={3}><div className="calc-help">{OP_HELP[label]}</div></td></tr>}
    </>
  )
}

function Bits() {
  const [a, setA] = useState('12')
  const [b, setB] = useState('10')
  const [width, setWidth] = useState(8)
  const A = parseAny(a), B = parseAny(b)
  const mask = (1n << BigInt(width)) - 1n

  const rows = useMemo(() => {
    if (typeof A !== 'bigint' || typeof B !== 'bigint') return null
    const x = A & mask, y = B & mask
    return [
      ['A', x], ['B', y],
      ['A AND B', x & y], ['A OR B', x | y], ['A XOR B', x ^ y],
      ['A NAND B', ~(x & y) & mask], ['A NOR B', ~(x | y) & mask], ['A XNOR B', ~(x ^ y) & mask],
      ['NOT A', ~x & mask], ['A << 1', (x << 1n) & mask], ['A >> 1', x >> 1n],
    ] as [string, bigint][]
  }, [A, B, width])

  const bad = (v: ReturnType<typeof parseAny>) => v === 'feil'
  return (
    <div className="calc-pane">
      <p className="calc-hint">To tall, bit for bit. Desimalt, eller med prefiks 0b (binært) og 0x (heksadesimalt).</p>
      <div className="calc-two">
        <Field label="A" help="Et heltall. Skriv f.eks. 12, 0b1100 eller 0xC.">
          <input className={`calc-input mono${bad(A) ? ' bad' : ''}`} value={a} onChange={e => setA(e.target.value)} spellCheck={false} aria-label="A" />
        </Field>
        <Field label="B" help="Et heltall, skrevet på samme måte som A.">
          <input className={`calc-input mono${bad(B) ? ' bad' : ''}`} value={b} onChange={e => setB(e.target.value)} spellCheck={false} aria-label="B" />
        </Field>
      </div>
      <div className="calc-seg" role="group" aria-label="Antall bit">
        {[4, 8, 16].map(w => (
          <button key={w} className={w === width ? 'on' : ''} onClick={() => setWidth(w)}>{w} bit</button>
        ))}
      </div>
      {(bad(A) || bad(B)) && <p className="calc-err">Kunne ikke lese tallet.</p>}
      {rows && (
        <div className="calc-scroll">
          <table className="calc-table">
            <tbody>{rows.map(([label, v]) => <OpRow key={label} label={label} v={v} width={width} />)}</tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ---------- Sannhetstabell ----------

type Node = (env: Record<string, boolean>) => boolean

/** Liten parser for boolske uttrykk (rekursiv nedstigning). Kaster Error ved feil. */
function parseExpr(src: string): { fn: Node; vars: string[] } {
  const toks: string[] = []
  const vars = new Set<string>()
  for (const ch of src.replace(/\s+/g, '')) {
    if (/[a-zA-Z]/.test(ch)) { toks.push(ch.toUpperCase()); vars.add(ch.toUpperCase()) }
    else if ('01()+|*&·^⊕!~¬\''.includes(ch)) toks.push(ch)
    else throw new Error(`Tegnet «${ch}» kjenner jeg ikke igjen.`)
  }
  if (toks.length === 0) throw new Error('')
  let i = 0
  const peek = () => toks[i]
  const startsOperand = (t?: string) => !!t && (/^[A-Z01]$/.test(t) || '(!~¬'.includes(t))

  const parseOr = (): Node => {
    let l = parseXor()
    while (peek() === '+' || peek() === '|') { i++; const a = l, b = parseXor(); l = e => a(e) || b(e) }
    return l
  }
  const parseXor = (): Node => {
    let l = parseAnd()
    while (peek() === '^' || peek() === '⊕') { i++; const a = l, b = parseAnd(); l = e => a(e) !== b(e) }
    return l
  }
  const parseAnd = (): Node => {
    let l = parseUnary()
    for (;;) {
      const t = peek()
      if (t === '*' || t === '&' || t === '·') i++
      else if (!startsOperand(t)) break
      const a = l, b = parseUnary()
      l = e => a(e) && b(e)
    }
    return l
  }
  const parseUnary = (): Node => {
    const t = peek()
    if (t === '!' || t === '~' || t === '¬') { i++; const a = parseUnary(); return e => !a(e) }
    let p = parsePrimary()
    while (peek() === '\'') { i++; const a = p; p = e => !a(e) }
    return p
  }
  const parsePrimary = (): Node => {
    const t = toks[i++]
    if (t === undefined) throw new Error('Uttrykket ser ikke ferdig ut.')
    if (t === '(') {
      const inner = parseOr()
      if (toks[i++] !== ')') throw new Error('Mangler en parentes.')
      return inner
    }
    if (t === '0') return () => false
    if (t === '1') return () => true
    if (/^[A-Z]$/.test(t)) return e => e[t]
    throw new Error(`Uventet «${t}».`)
  }

  const fn = parseOr()
  if (i < toks.length) throw new Error(toks[i] === ')' ? 'Én parentes for mye.' : `Uventet «${toks[i]}».`)
  if (vars.size > 4) throw new Error('Maks 4 variabler.')
  return { fn, vars: [...vars].sort() }
}

const GATES: Record<string, string> = {
  '0001': 'AND', '0111': 'OR', '0110': 'XOR', '1110': 'NAND', '1000': 'NOR', '1001': 'XNOR',
}

function Table() {
  const [text, setText] = useState("A'·B'")
  const res = useMemo(() => {
    try { return { ...parseExpr(text), err: '' } } catch (e) { return { fn: null, vars: [] as string[], err: (e as Error).message } }
  }, [text])

  const rows: { inputs: boolean[]; out: boolean }[] = []
  if (res.fn) {
    const k = res.vars.length
    for (let r = 0; r < 1 << k; r++) {
      const inputs = res.vars.map((_, j) => ((r >> (k - 1 - j)) & 1) === 1)
      const env: Record<string, boolean> = {}
      res.vars.forEach((v, j) => { env[v] = inputs[j] })
      rows.push({ inputs, out: res.fn(env) })
    }
  }
  const pattern = rows.map(r => (r.out ? '1' : '0')).join('')
  const gate = res.vars.length === 2 ? GATES[pattern] : undefined
  const always = rows.length > 0 && (/^1+$/.test(pattern) ? 'alltid 1' : /^0+$/.test(pattern) ? 'alltid 0' : '')

  return (
    <div className="calc-pane">
      <p className="calc-hint">Skriv et uttrykk med bokstavene som innganger, så lages tabellen.</p>
      <Field
        label="F ="
        help={<>
          AND: <b>·</b> <b>*</b> <b>&amp;</b>, eller bokstavene inntil hverandre (AB). OR: <b>+</b> eller <b>|</b>.
          XOR: <b>^</b>. IKKE: <b>!</b> foran, eller <b>'</b> bak. Bruk parenteser ved behov.
          Rekkefølgen er IKKE, så AND, så XOR, så OR. A + B·C betyr A + (B·C).
        </>}
      >
        <input
          className={`calc-input mono${res.err ? ' bad' : ''}`} value={text} onChange={e => setText(e.target.value)}
          autoCapitalize="off" autoCorrect="off" spellCheck={false} aria-label="Uttrykk"
        />
      </Field>
      <div className="calc-chips">
        {["A·B", "A+B", "A^B", "!(A·B)", "A'·B'", "A·B + A'·C"].map(x => (
          <button key={x} onClick={() => setText(x)}>{x}</button>
        ))}
      </div>
      {res.err && <p className="calc-err">{res.err}</p>}
      {rows.length > 0 && (
        <>
          <Head
            label={<>{rows.length} rader</>}
            help={<>Med n innganger blir det 2<sup>n</sup> rader, fordi hver inngang er 0 eller 1. Radene står som binære tall i tellerekkefølge, så ingen glemmes og ingen kommer to ganger.</>}
          />
          <div className="calc-scroll">
            <table className="calc-table tt">
              <thead>
                <tr>{res.vars.map(v => <th key={v}>{v}</th>)}<th className="out">F</th></tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={r.out ? 'one' : ''}>
                    {r.inputs.map((b, j) => <td key={j} className="mono">{b ? 1 : 0}</td>)}
                    <td className="mono out">{r.out ? 1 : 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {gate && <p className="calc-note">Mønsteret {pattern.split('').join(', ')} er <b>{gate}</b>.</p>}
          {always && <p className="calc-note">Utgangen er {always}, uansett inngang.</p>}
        </>
      )}
    </div>
  )
}

// ---------- Klokke, tid og effekt ----------

const num = (s: string) => {
  const t = s.trim().replace(',', '.')
  if (!t) return null
  const x = Number(t)
  return Number.isFinite(x) && x > 0 ? x : NaN
}
/** Pent tall med norsk komma og rimelig antall siffer. */
const fmt = (x: number) => {
  if (!Number.isFinite(x)) return ''
  if (x === 0) return '0'
  const a = Math.abs(x)
  if (a >= 1e9 || a < 1e-4) return x.toExponential(3).replace('.', ',')
  return String(Number(x.toPrecision(5))).replace('.', ',')
}

const T_UNITS = [['ps', 1e-12], ['ns', 1e-9], ['µs', 1e-6], ['ms', 1e-3], ['s', 1]] as const
const F_UNITS = [['Hz', 1], ['kHz', 1e3], ['MHz', 1e6], ['GHz', 1e9]] as const
const tFactor = (u: string) => T_UNITS.find(x => x[0] === u)![1]
const fFactor = (u: string) => F_UNITS.find(x => x[0] === u)![1]

/** Velger enheten som gir et tall mellom 1 og 1000, hvis mulig. */
function bestUnit(x: number, units: readonly (readonly [string, number])[]) {
  let best = units[0]
  for (const u of units) if (x / u[1] >= 1) best = u
  return best
}

function Clock() {
  // Periode og frekvens henger sammen: f = 1 / T. Det siste du skrev i styrer det andre feltet.
  const [src, setSrc] = useState<'T' | 'f'>('T')
  const [tText, setT] = useState('500')
  const [tUnit, setTUnit] = useState('ps')
  const [fText, setF] = useState('')
  const [fUnit, setFUnit] = useState('GHz')

  const tIn = num(tText), fIn = num(fText)
  let tShow = tText, fShow = fText
  if (src === 'T') {
    fShow = typeof tIn === 'number' && !isNaN(tIn) ? fmt(1 / (tIn * tFactor(tUnit)) / fFactor(fUnit)) : ''
  } else {
    tShow = typeof fIn === 'number' && !isNaN(fIn) ? fmt((1 / (fIn * fFactor(fUnit))) / tFactor(tUnit)) : ''
  }

  // Kritisk vei: antall porter etter hverandre ganger portforsinkelse.
  const [gates, setGates] = useState('64')
  const [tp, setTp] = useState('15')
  const g = num(gates), d = num(tp)
  const critOk = typeof g === 'number' && typeof d === 'number' && !isNaN(g) && !isNaN(d)
  const critS = critOk ? g * d * 1e-12 : 0
  const critU = critOk ? bestUnit(critS, T_UNITS) : T_UNITS[0]
  const critF = critOk ? 1 / critS : 0
  const critFU = critOk ? bestUnit(critF, F_UNITS) : F_UNITS[3]

  // Relativ effekt: P ~ C · V² · f.
  const [v1, setV1] = useState('1,0')
  const [v2, setV2] = useState('1,2')
  const [f1, setF1] = useState('2')
  const [f2, setF2] = useState('4')
  const [a1, a2, b1, b2] = [num(v1), num(v2), num(f1), num(f2)]
  const powOk = [a1, a2, b1, b2].every(x => typeof x === 'number' && !isNaN(x))
  const factor = powOk ? ((a2 as number) / (a1 as number)) ** 2 * ((b2 as number) / (b1 as number)) : 0

  const bad = (s: string, v: number | null) => (s.trim() && Number.isNaN(v) ? ' bad' : '')

  return (
    <div className="calc-pane">
      <Head
        label="Periode og frekvens"
        help={<>Frekvensen er én delt på klokkeperioden: f = 1 / T. En periode på 500 ps gir 1 / (500 · 10<sup>−12</sup>) = 2 · 10<sup>9</sup> Hz, altså 2 GHz. Jo kortere periode, jo høyere frekvens. 1 ns = 1000 ps.</>}
      />
      <div className="calc-pair">
        <input
          className={`calc-input mono${bad(tShow, tIn)}`} value={tShow} inputMode="decimal" aria-label="Klokkeperiode"
          onChange={e => { setSrc('T'); setT(e.target.value) }}
        />
        <select className="calc-input" value={tUnit} onChange={e => setTUnit(e.target.value)} aria-label="Enhet for periode">
          {T_UNITS.map(u => <option key={u[0]}>{u[0]}</option>)}
        </select>
      </div>
      <p className="calc-eq" aria-hidden>↕ f = 1 / T</p>
      <div className="calc-pair">
        <input
          className={`calc-input mono${bad(fShow, fIn)}`} value={fShow} inputMode="decimal" aria-label="Frekvens"
          onChange={e => { setSrc('f'); setF(e.target.value) }}
        />
        <select className="calc-input" value={fUnit} onChange={e => setFUnit(e.target.value)} aria-label="Enhet for frekvens">
          {F_UNITS.map(u => <option key={u[0]}>{u[0]}</option>)}
        </select>
      </div>

      <div className="calc-block">
        <Head
          label="Kritisk vei"
          help={<>Den kritiske veien er den lengste veien gjennom kretsen. Tiden er antall porter etter hverandre ganger portforsinkelsen. Klokkeperioden må være minst så lang, ellers rekker ikke svaret fram. Eksempel fra boka: 64 porter ganger 15 ps er 960 ps, omtrent 1 GHz. Tid for porter som går samtidig legges ikke sammen. Bare den lengste veien teller.</>}
        />
        <div className="calc-two">
          <Field label="Porter på rad">
            <input className={`calc-input mono${bad(gates, g)}`} value={gates} inputMode="decimal" onChange={e => setGates(e.target.value)} aria-label="Antall porter etter hverandre" />
          </Field>
          <Field label="Forsinkelse (ps)">
            <input className={`calc-input mono${bad(tp, d)}`} value={tp} inputMode="decimal" onChange={e => setTp(e.target.value)} aria-label="Portforsinkelse i pikosekunder" />
          </Field>
        </div>
        {critOk && (
          <p className="calc-note">
            Perioden må være minst <b>{fmt(critS / critU[1])} {critU[0]}</b>, altså høyst <b>{fmt(critF / critFU[1])} {critFU[0]}</b>.
          </p>
        )}
      </div>

      <div className="calc-block">
        <Head
          label="Effekt ved ny spenning og frekvens"
          help={<>Effekten følger kapasitans · spenning² · frekvens. Spenningen står i andre potens, så halverer du den, får du en firedel av effekten. Faktoren er (V₂ / V₁)² · (f₂ / f₁). Eksempel fra boka: 1,0 V og 2 GHz til 1,2 V og 4 GHz gir 1,44 · 2 ≈ 2,9. Dobbel fart, nesten tredobbel varme.</>}
        />
        <div className="calc-two">
          <Field label="Spenning nå (V)"><input className={`calc-input mono${bad(v1, a1)}`} value={v1} inputMode="decimal" onChange={e => setV1(e.target.value)} aria-label="Spenning nå" /></Field>
          <Field label="Spenning ny (V)"><input className={`calc-input mono${bad(v2, a2)}`} value={v2} inputMode="decimal" onChange={e => setV2(e.target.value)} aria-label="Ny spenning" /></Field>
          <Field label="Frekvens nå (GHz)"><input className={`calc-input mono${bad(f1, b1)}`} value={f1} inputMode="decimal" onChange={e => setF1(e.target.value)} aria-label="Frekvens nå" /></Field>
          <Field label="Frekvens ny (GHz)"><input className={`calc-input mono${bad(f2, b2)}`} value={f2} inputMode="decimal" onChange={e => setF2(e.target.value)} aria-label="Ny frekvens" /></Field>
        </div>
        {powOk && (
          <p className="calc-note">
            Effekten blir <b>{fmt(factor)} ganger</b> så stor
            {factor !== 1 && <> ({factor > 1 ? '+' : '−'}{fmt(Math.abs(factor - 1) * 100)} %)</>}.
          </p>
        )}
      </div>
    </div>
  )
}

// ---------- Selve kalkulatoren ----------

const TABS = [
  { id: 'konv', label: 'Konverter', C: Convert },
  { id: 'bit', label: 'Bitbredde', C: Width },
  { id: 'op', label: 'Bitoperasjoner', C: Bits },
  { id: 'tab', label: 'Sannhetstabell', C: Table },
  { id: 'klokke', label: 'Klokke og tid', C: Clock },
] as const

function CalcDialog({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('konv')
  const [closing, setClosing] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const Active = TABS.find(t => t.id === tab)!.C

  // Glir ned igjen før den fjernes.
  const close = () => {
    if (closing) return
    setClosing(true)
    timer.current = window.setTimeout(onClose, 260)
  }

  const closeRef = useRef(close)
  closeRef.current = close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeRef.current() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; window.clearTimeout(timer.current) }
  }, [])

  return (
    <div className={`calc-backdrop${closing ? ' closing' : ''}`} onClick={close}>
      <div className="calc" role="dialog" aria-modal="true" aria-label="Kalkulator" onClick={e => e.stopPropagation()}>
        <div className="calc-head">
          <strong>Kalkulator</strong>
          <button className="calc-close" onClick={close} aria-label="Lukk"><CloseIcon /></button>
        </div>
        <div className="calc-tabs" role="tablist">
          {TABS.map(t => (
            <button key={t.id} role="tab" aria-selected={t.id === tab} className={t.id === tab ? 'on' : ''} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="calc-body"><Active /></div>
      </div>
    </div>
  )
}

/** Knapp som åpner kalkulatoren. Står ved siden av temaknappen. */
export function CalcButton({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        className={`theme-toggle calc-toggle ${className}`.trim()} onClick={() => setOpen(true)}
        aria-label="Åpne kalkulator" title="Kalkulator"
      >
        <CalcIcon />
      </button>
      {/* Portal: ligger rett under <body>, så ingen forelder med animasjon eller transform kan flytte den. */}
      {open && createPortal(<CalcDialog onClose={() => setOpen(false)} />, document.body)}
    </>
  )
}
