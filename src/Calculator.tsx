import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { CalcIcon, CloseIcon } from './Icons'

// ---------- Hjelpere ----------

const group = (s: string, n = 4) => s.replace(new RegExp(`\\B(?=(.{${n}})+$)`, 'g'), ' ')

const BASES = [
  { base: 10, label: 'Desimal', re: /^\d+$/, prefix: '' },
  { base: 2, label: 'Binær', re: /^[01]+$/, prefix: '0b' },
  { base: 16, label: 'Heksadesimal', re: /^[0-9a-f]+$/, prefix: '0x' },
  { base: 8, label: 'Oktal', re: /^[0-7]+$/, prefix: '0o' },
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

  return (
    <div className="calc-pane">
      <p className="calc-hint">Skriv i et av feltene, så fylles de andre ut. Bare positive heltall.</p>
      {BASES.map(b => (
        <label key={b.base} className="calc-field">
          <span>{b.label}</span>
          <input
            className={`calc-input mono${bad && src === b.base ? ' bad' : ''}`}
            value={show(b.base)} inputMode={b.base === 10 ? 'numeric' : 'text'}
            onChange={e => { setSrc(b.base); setText(e.target.value) }}
            autoCapitalize="off" autoCorrect="off" spellCheck={false}
            aria-label={b.label}
          />
        </label>
      ))}
      {bad && <p className="calc-err">Ugyldig tall i {BASES.find(b => b.base === src)!.label.toLowerCase()}.</p>}
      {typeof value === 'bigint' && (
        <p className="calc-note">
          {value.toString(2).length} bit trengs. Det er 2<sup>{value.toString(2).length}</sup> = {(1n << BigInt(value.toString(2).length)).toString()} mulige mønstre.
        </p>
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
          <small>Bitmønster ({width} bit)</small>
          <div className="mono big">{group(bin(pattern, width))}</div>
        </div>
        <dl className="calc-list">
          <div><dt>Uten fortegn</dt><dd>{unsigned.toString()}</dd></div>
          <div><dt>Med fortegn (toerkomplement)</dt><dd>{signed.toString()}</dd></div>
          <div><dt>Heksadesimalt</dt><dd className="mono">{pattern.toString(16).toUpperCase().padStart(width / 4, '0')}</dd></div>
        </dl>
        {v < 0n && inS && (
          <ol className="calc-steps">
            <li>{(-v).toString()} er <span className="mono">{group(bin(-v, width))}</span></li>
            <li>Snu alle bit: <span className="mono">{group(bin(~(-v) & (full - 1n), width))}</span></li>
            <li>Legg til 1: <span className="mono">{group(bin(pattern, width))}</span></li>
          </ol>
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
      <label className="calc-field">
        <span>Tall</span>
        <input
          className={`calc-input mono${clean && !ok ? ' bad' : ''}`} value={text} inputMode="numeric"
          onChange={e => setText(e.target.value)} aria-label="Tall" spellCheck={false}
        />
      </label>
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

function Bits() {
  const [a, setA] = useState('12')
  const [b, setB] = useState('10')
  const [width, setWidth] = useState(8)
  const A = parseAny(a), B = parseAny(b)
  const n = BigInt(width)
  const mask = (1n << n) - 1n

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
      <p className="calc-hint">To tall bit for bit. Desimalt, eller med prefiks 0b (binært) og 0x (heksadesimalt).</p>
      <div className="calc-two">
        <label className="calc-field">
          <span>A</span>
          <input className={`calc-input mono${bad(A) ? ' bad' : ''}`} value={a} onChange={e => setA(e.target.value)} spellCheck={false} aria-label="A" />
        </label>
        <label className="calc-field">
          <span>B</span>
          <input className={`calc-input mono${bad(B) ? ' bad' : ''}`} value={b} onChange={e => setB(e.target.value)} spellCheck={false} aria-label="B" />
        </label>
      </div>
      <div className="calc-seg" role="group" aria-label="Antall bit">
        {[4, 8, 16].map(w => (
          <button key={w} className={w === width ? 'on' : ''} onClick={() => setWidth(w)}>{w} bit</button>
        ))}
      </div>
      {(bad(A) || bad(B)) && <p className="calc-err">Kunne ikke lese tallet.</p>}
      {rows && (
        <table className="calc-table">
          <tbody>
            {rows.map(([label, v]) => (
              <tr key={label}>
                <th>{label}</th>
                <td className="mono">{group(bin(v, width))}</td>
                <td className="num">{v.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

// ---------- Sannhetstabell ----------

type Node = (env: Record<string, boolean>) => boolean

/** Små rekursive-nedstigning-parser for boolske uttrykk. Kaster Error ved feil. */
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
  if (vars.size > 4) throw new Error('Maks 4 variabler (A til D, eller andre bokstaver).')
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

  let rows: { inputs: boolean[]; out: boolean }[] = []
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
      <p className="calc-hint">
        Skriv et uttrykk. AND: <b>·</b> <b>*</b> <b>&amp;</b> eller bokstavene inntil hverandre. OR: <b>+</b> eller <b>|</b>.
        XOR: <b>^</b>. IKKE: <b>!</b> foran, eller <b>'</b> bak. Bruk parenteser ved behov.
      </p>
      <label className="calc-field">
        <span>F =</span>
        <input
          className={`calc-input mono${res.err ? ' bad' : ''}`} value={text} onChange={e => setText(e.target.value)}
          autoCapitalize="off" autoCorrect="off" spellCheck={false} aria-label="Uttrykk"
        />
      </label>
      <div className="calc-chips">
        {["A·B", "A+B", "A^B", "!(A·B)", "A'·B'", "A·B + A'·C"].map(x => (
          <button key={x} onClick={() => setText(x)}>{x}</button>
        ))}
      </div>
      {res.err && <p className="calc-err">{res.err}</p>}
      {rows.length > 0 && (
        <>
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
          {gate && <p className="calc-note">Mønsteret {pattern.split('').join(', ')} er <b>{gate}</b>.</p>}
          {always && <p className="calc-note">Utgangen er {always}, uansett inngang.</p>}
        </>
      )}
    </div>
  )
}

// ---------- Selve kalkulatoren ----------

const TABS = [
  { id: 'konv', label: 'Konverter', C: Convert },
  { id: 'bit', label: 'Bitbredde', C: Width },
  { id: 'op', label: 'Bitoperasjoner', C: Bits },
  { id: 'tab', label: 'Sannhetstabell', C: Table },
] as const

function CalcDialog({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('konv')
  const Active = TABS.find(t => t.id === tab)!.C

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  return (
    <div className="calc-backdrop" onClick={onClose}>
      <div className="calc" role="dialog" aria-modal="true" aria-label="Kalkulator" onClick={e => e.stopPropagation()}>
        <div className="calc-head">
          <strong>Kalkulator</strong>
          <button className="calc-close" onClick={onClose} aria-label="Lukk"><CloseIcon /></button>
        </div>
        <div className="calc-tabs" role="tablist">
          {TABS.map(t => (
            <button key={t.id} role="tab" aria-selected={t.id === tab} className={t.id === tab ? 'on' : ''} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <Active />
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
      {open && <CalcDialog onClose={() => setOpen(false)} />}
    </>
  )
}
