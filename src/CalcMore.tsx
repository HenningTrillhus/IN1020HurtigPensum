import { useMemo, useState } from 'react'
import { Copy, Field, Head, Stat, duration, fmt, num } from './calcparts'

/** Store tall som 8,39 · 10¹⁷ med hevet skrift. */
const sci = (x: number) => {
  if (x < 1e15) return fmt(x)
  const [m, e] = x.toExponential(2).split('e+')
  return <>{m.replace('.', ',')} · 10<sup>{e}</sup></>
}

const bad = (s: string, v: number | null) => (s.trim() && Number.isNaN(v) ? ' bad' : '')

// ---------- Nettverk ----------

/** Leser «a.b.c.d» og gir et 32-bits tall, eller null. */
function parseIp(s: string): number | null {
  const m = s.trim().match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
  if (!m) return null
  const p = m.slice(1).map(Number)
  if (p.some(x => x > 255)) return null
  return ((p[0] << 24) | (p[1] << 16) | (p[2] << 8) | p[3]) >>> 0
}
const ipStr = (n: number) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.')
const ipBin = (n: number) => n.toString(2).padStart(32, '0').replace(/(.{8})(?=.)/g, '$1.')
const maskOf = (p: number) => (p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0)

function ipKind(n: number): string {
  const a = n >>> 24, b = (n >>> 16) & 255
  if (a === 10) return 'privat (10.0.0.0/8)'
  if (a === 172 && b >= 16 && b <= 31) return 'privat (172.16.0.0/12)'
  if (a === 192 && b === 168) return 'privat (192.168.0.0/16)'
  if (a === 127) return 'loopback (denne maskinen)'
  if (a === 169 && b === 254) return 'lokal lenke (ingen DHCP-tjener svarte)'
  if (a >= 224 && a <= 239) return 'multicast'
  return 'offentlig'
}

const SIZE_UNITS = [['byte', 1], ['kB', 1e3], ['MB', 1e6], ['GB', 1e9], ['TB', 1e12]] as const
const RATE_UNITS = [['kbit/s', 1e3], ['Mbit/s', 1e6], ['Gbit/s', 1e9]] as const

export function Network() {
  const [addr, setAddr] = useState('192.168.1.130/24')
  const [need, setNeed] = useState('50')
  const [size, setSize] = useState('700')
  const [sizeU, setSizeU] = useState('MB')
  const [rate, setRate] = useState('100')
  const [rateU, setRateU] = useState('Mbit/s')
  const [rtt, setRtt] = useState('20')

  const sub = useMemo(() => {
    const m = addr.trim().match(/^([\d.]+)\s*\/\s*(\d{1,2})$/)
    if (!m) return null
    const ip = parseIp(m[1]), p = Number(m[2])
    if (ip === null || p > 32) return null
    const mask = maskOf(p)
    const net = (ip & mask) >>> 0
    const bc = (net | (~mask >>> 0)) >>> 0
    const total = 2 ** (32 - p)
    const hosts = p >= 31 ? total : total - 2
    return { ip, p, mask, net, bc, total, hosts, first: p >= 31 ? net : net + 1, last: p >= 31 ? bc : bc - 1 }
  }, [addr])

  const n = num(need)
  const prefix = typeof n === 'number' && !isNaN(n) ? 32 - Math.max(1, Math.ceil(Math.log2(n + 2))) : null

  const sz = num(size), rt = num(rate), lat = rtt.trim() ? num(rtt) : 0
  const ok = typeof sz === 'number' && typeof rt === 'number' && !isNaN(sz) && !isNaN(rt) && !(typeof lat === 'number' && isNaN(lat))
  const bits = ok ? sz * SIZE_UNITS.find(u => u[0] === sizeU)![1] * 8 : 0
  const perSec = ok ? rt * RATE_UNITS.find(u => u[0] === rateU)![1] : 1
  const tx = bits / perSec
  const total = tx + ((lat as number) || 0) / 1000

  return (
    <div className="calc-pane">
      <Head
        label="IP-adresse og subnett"
        help={<>Skriv adressen med lengden på nettverksdelen, for eksempel 192.168.1.130/24. Tallet etter skråstreken (CIDR) er hvor mange av de 32 bitene som er nettverksdelen, og resten er vertsdelen. Nettverksadressen har bare nuller i vertsdelen, kringkastingsadressen bare enere, og begge kan ikke brukes av en maskin. Derfor er antall verter 2<sup>32−n</sup> − 2.</>}
      />
      <input
        className={`calc-input mono${addr.trim() && !sub ? ' bad' : ''}`} value={addr} inputMode="decimal" onChange={e => setAddr(e.target.value)}
        aria-label="IP-adresse med prefikslengde" autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder="192.168.1.130/24"
      />
      {addr.trim() && !sub && <p className="calc-err">Skriv adressen som a.b.c.d/n, med n mellom 0 og 32.</p>}
      {sub && (
        <div className="calc-grid">
          <Stat label="Nettverksadresse" value={ipStr(sub.net)} copy={ipStr(sub.net)} />
          <Stat label="Nettverksmaske" value={ipStr(sub.mask)} sub={`/${sub.p}`} copy={ipStr(sub.mask)} />
          <Stat label="Kringkasting" value={ipStr(sub.bc)} copy={ipStr(sub.bc)} />
          <Stat label="Antall verter" value={fmt(sub.hosts)} sub={`${fmt(sub.total)} adresser totalt`} />
          <Stat label="Første vert" value={ipStr(sub.first)} copy={ipStr(sub.first)} />
          <Stat label="Siste vert" value={ipStr(sub.last)} copy={ipStr(sub.last)} />
          <div className="calc-bits wide" aria-label="Adressen i bit">
            <span className="calc-stat-l">Adressen i bit: nettverksdelen er farget</span>
            <code className="mono">
              {ipBin(sub.ip).split('').map((c, i) => {
                // Punktene teller ikke som bit. Finn hvilken bitposisjon tegnet står på.
                const pos = ipBin(sub.ip).slice(0, i).replace(/\./g, '').length
                return c === '.' ? <i key={i}>.</i> : <span key={i} className={pos < sub.p ? 'net' : ''}>{c}</span>
              })}
            </code>
          </div>
          <p className="calc-note wide">Adressen er {ipKind(sub.ip)}.</p>
        </div>
      )}

      <div className="calc-block">
        <Head
          label="Hvor stort subnett trenger du?"
          help={<>Du trenger plass til n maskiner, pluss nettverksadressen og kringkastingsadressen. Finn den minste toerpotensen som er minst n + 2, og la resten av de 32 bitene være nettverksdel. Eksempel: 50 maskiner trenger 52 adresser, altså 64 = 2<sup>6</sup>, så vertsdelen er 6 bit og prefikset blir /26.</>}
        />
        <Field label="Antall maskiner">
          <input className={`calc-input mono${bad(need, n)}`} value={need} inputMode="numeric" onChange={e => setNeed(e.target.value)} aria-label="Antall maskiner" />
        </Field>
        {prefix !== null && prefix >= 0 && (
          <p className="calc-note">
            Bruk <b>/{prefix}</b> (maske <b>{ipStr(maskOf(prefix))}</b>). Det gir plass til <b>{fmt(2 ** (32 - prefix) - 2)}</b> verter.
          </p>
        )}
      </div>

      <div className="calc-block">
        <Head
          label="Hvor lang tid tar en overføring?"
          help={<>Tiden er antall bit delt på båndbredden. Filstørrelsen er i byte (1 MB = 10<sup>6</sup> byte i dette faget), og én byte er 8 bit, mens båndbredde regnes i bit per sekund. Derfor er 100 Mbit/s bare 12,5 MB/s. Forsinkelsen (RTT) er ventetiden før dataene begynner å komme, og betyr mest for små filer.</>}
        />
        <div className="calc-pair">
          <input className={`calc-input mono${bad(size, sz)}`} value={size} inputMode="decimal" onChange={e => setSize(e.target.value)} aria-label="Filstørrelse" />
          <select className="calc-input" value={sizeU} onChange={e => setSizeU(e.target.value)} aria-label="Enhet for størrelse">
            {SIZE_UNITS.map(u => <option key={u[0]}>{u[0]}</option>)}
          </select>
        </div>
        <div className="calc-pair">
          <input className={`calc-input mono${bad(rate, rt)}`} value={rate} inputMode="decimal" onChange={e => setRate(e.target.value)} aria-label="Båndbredde" />
          <select className="calc-input" value={rateU} onChange={e => setRateU(e.target.value)} aria-label="Enhet for båndbredde">
            {RATE_UNITS.map(u => <option key={u[0]}>{u[0]}</option>)}
          </select>
        </div>
        <Field label="Forsinkelse (RTT, ms)">
          <input className={`calc-input mono${bad(rtt, lat)}`} value={rtt} inputMode="decimal" onChange={e => setRtt(e.target.value)} aria-label="Forsinkelse i millisekunder" />
        </Field>
        {ok && (
          <div className="calc-grid">
            <Stat label="Tid" value={duration(total)} sub={`${duration(tx)} overføring`} />
            <Stat label="Fart" value={`${fmt(perSec / 8e6)} MB/s`} sub={`${fmt(perSec / 1e6)} Mbit/s`} />
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- Ytelse og minne ----------

export function Perf() {
  const [hit, setHit] = useState('90')
  const [tHit, setTHit] = useState('1')
  const [tMiss, setTMiss] = useState('100')
  const [ni, setNi] = useState('4')
  const [stages, setStages] = useState('4')
  const [par, setPar] = useState('90')
  const [cores, setCores] = useState('8')
  const [abits, setAbits] = useState('32')

  const h = num(hit), th = num(tHit), tm = num(tMiss)
  const amatOk = [h, th, tm].every(x => typeof x === 'number' && !isNaN(x)) && (h as number) <= 100
  const amat = amatOk ? ((h as number) / 100) * (th as number) + (1 - (h as number) / 100) * (tm as number) : 0

  const n = num(ni), k = num(stages)
  const pipeOk = [n, k].every(x => typeof x === 'number' && !isNaN(x) && Number.isInteger(x))
  const withPipe = pipeOk ? (k as number) + (n as number) - 1 : 0
  const without = pipeOk ? (k as number) * (n as number) : 0

  const p = num(par), c = num(cores)
  const amOk = [p, c].every(x => typeof x === 'number' && !isNaN(x)) && (p as number) <= 100
  const pf = amOk ? (p as number) / 100 : 0
  const speed = amOk ? 1 / (1 - pf + pf / (c as number)) : 0
  const ceiling = amOk && pf < 1 ? 1 / (1 - pf) : Infinity

  const ab = num(abits)
  const abOk = typeof ab === 'number' && !isNaN(ab) && Number.isInteger(ab) && ab <= 64
  const bytes = abOk ? 2 ** (ab as number) : 0
  const pow2 = (x: number) => {
    const units: [string, number][] = [['EiB', 2 ** 60], ['PiB', 2 ** 50], ['TiB', 2 ** 40], ['GiB', 2 ** 30], ['MiB', 2 ** 20], ['KiB', 2 ** 10]]
    for (const [u, v] of units) if (x >= v) return `${fmt(x / v)} ${u}`
    return `${fmt(x)} byte`
  }

  return (
    <div className="calc-pane">
      <Head
        label="Effektiv aksesstid (cache)"
        help={<>Gjennomsnittlig ventetid er treffraten ganger tiden ved treff, pluss bomraten ganger tiden ved bom. Eksempel fra boka: 90 % treff, 1 ns ved treff og 100 ns ved bom gir 0,9 · 1 + 0,1 · 100 = 10,9 ns. Med 99 % treff blir det bare 1,99 ns. Små endringer i treffraten betyr mye, fordi bommene dominerer.</>}
      />
      <div className="calc-two">
        <Field label="Treffrate (%)"><input className={`calc-input mono${bad(hit, h)}`} value={hit} inputMode="decimal" onChange={e => setHit(e.target.value)} aria-label="Treffrate i prosent" /></Field>
        <Field label="Tid ved treff (ns)"><input className={`calc-input mono${bad(tHit, th)}`} value={tHit} inputMode="decimal" onChange={e => setTHit(e.target.value)} aria-label="Tid ved treff" /></Field>
        <Field label="Tid ved bom (ns)"><input className={`calc-input mono${bad(tMiss, tm)}`} value={tMiss} inputMode="decimal" onChange={e => setTMiss(e.target.value)} aria-label="Tid ved bom" /></Field>
      </div>
      {amatOk && <div className="calc-grid"><Stat label="Effektiv aksesstid" value={`${fmt(amat)} ns`} sub={`${fmt(amat / (th as number))} ganger tiden ved treff`} copy={fmt(amat)} /></div>}

      <div className="calc-block">
        <Head
          label="Pipeline: tid og gevinst"
          help={<>Med k trinn tar den første instruksjonen k sykluser, og hver av de neste kommer én syklus senere. n instruksjoner tar derfor k + n − 1 sykluser mot k · n uten pipeline. Gevinsten nærmer seg k når n vokser. Eksempel: fire trinn og fire instruksjoner tar 7 sykluser mot 16.</>}
        />
        <div className="calc-two">
          <Field label="Instruksjoner"><input className={`calc-input mono${bad(ni, n)}`} value={ni} inputMode="numeric" onChange={e => setNi(e.target.value)} aria-label="Antall instruksjoner" /></Field>
          <Field label="Pipelinetrinn"><input className={`calc-input mono${bad(stages, k)}`} value={stages} inputMode="numeric" onChange={e => setStages(e.target.value)} aria-label="Antall trinn" /></Field>
        </div>
        {pipeOk && (
          <div className="calc-grid">
            <Stat label="Med pipeline" value={`${fmt(withPipe)} sykluser`} />
            <Stat label="Uten pipeline" value={`${fmt(without)} sykluser`} />
            <Stat label="Gevinst" value={`${fmt(without / withPipe)} ×`} sub={`går mot ${fmt(k as number)} ×`} />
          </div>
        )}
      </div>

      <div className="calc-block">
        <Head
          label="Amdahls lov (flere kjerner)"
          help={<>Den delen som ikke kan deles, setter taket. Med andel p som kan deles og N kjerner er farten 1 / ((1 − p) + p / N). Eksempel: 90 % delbart og 8 kjerner gir 4,7 ganger. Taket er 1 / (1 − p), altså 10 ganger, uansett hvor mange kjerner du har.</>}
        />
        <div className="calc-two">
          <Field label="Delbar andel (%)"><input className={`calc-input mono${bad(par, p)}`} value={par} inputMode="decimal" onChange={e => setPar(e.target.value)} aria-label="Andel som kan deles i prosent" /></Field>
          <Field label="Kjerner"><input className={`calc-input mono${bad(cores, c)}`} value={cores} inputMode="numeric" onChange={e => setCores(e.target.value)} aria-label="Antall kjerner" /></Field>
        </div>
        {amOk && (
          <div className="calc-grid">
            <Stat label="Hastighetsøkning" value={`${fmt(speed)} ×`} copy={fmt(speed)} />
            <Stat label="Taket" value={Number.isFinite(ceiling) ? `${fmt(ceiling)} ×` : 'ingen'} sub="med uendelig mange kjerner" />
          </div>
        )}
      </div>

      <div className="calc-block">
        <Head
          label="Adresserom"
          help={<>n adressebit gir 2<sup>n</sup> adresser, og hver adresse peker på én byte. 32 bit gir 4 294 967 296 byte, altså 4 GiB, og det er grunnen til at 32-bits maskiner stoppet på fire gigabyte. 64 bit gir 16 EiB.</>}
        />
        <Field label="Adressebit">
          <input className={`calc-input mono${bad(abits, ab)}`} value={abits} inputMode="numeric" onChange={e => setAbits(e.target.value)} aria-label="Antall adressebit" />
        </Field>
        {abOk && <div className="calc-grid"><Stat label="Adresserbart minne" value={pow2(bytes)} sub={`${BigInt(2) ** BigInt(ab as number)} byte`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} copy={String(BigInt(2) ** BigInt(ab as number))} /></div>}
      </div>
    </div>
  )
}

// ---------- Sikkerhet ----------

const SETS = [
  { id: 'lo', label: 'a–z', n: 26 },
  { id: 'up', label: 'A–Z', n: 26 },
  { id: 'di', label: '0–9', n: 10 },
  { id: 'sy', label: 'tegn (!?#…)', n: 33 },
] as const

const SPEEDS = [
  ['Nettside (1 000 / s)', 1e3],
  ['Stjålet database, vanlig hasj (10 milliarder / s)', 1e10],
  ['Mange GPU-er (1 billion / s)', 1e12],
] as const

export function Security() {
  const [len, setLen] = useState('10')
  const [on, setOn] = useState<Record<string, boolean>>({ lo: true, up: true, di: true, sy: false })
  const [speed, setSpeed] = useState(1)

  const L = num(len)
  const alphabet = SETS.filter(s => on[s.id]).reduce((a, s) => a + s.n, 0)
  const ok = typeof L === 'number' && !isNaN(L) && Number.isInteger(L) && L <= 200 && alphabet > 0
  const bits = ok ? (L as number) * Math.log2(alphabet) : 0
  const combos = ok ? alphabet ** (L as number) : 0
  const rate = SPEEDS[speed][1]
  // Du finner passordet etter i snitt halvparten av forsøkene.
  const secs = ok ? combos / 2 / rate : 0
  const level = bits < 40 ? 'svakt' : bits < 60 ? 'middels' : bits < 80 ? 'sterkt' : 'veldig sterkt'

  return (
    <div className="calc-pane">
      <Head
        label="Hvor lang tid tar det å gjette et passord?"
        help={<>Et passord av L tegn fra et alfabet med N symboler har N<sup>L</sup> mulige kombinasjoner, altså L · log<sub>2</sub>(N) bit. Hvert ekstra tegn gjør det N ganger dyrere å gjette, mens hver ekstra bit dobler arbeidet. Brute force prøver alt, og finner i gjennomsnitt passordet etter halvparten av forsøkene. Dette gjelder tilfeldige passord. Ord og vanlige mønstre knekkes mye raskere med ordbokangrep.</>}
      />
      <Field label="Lengde (tegn)">
        <input className={`calc-input mono${bad(len, L)}`} value={len} inputMode="numeric" onChange={e => setLen(e.target.value)} aria-label="Passordlengde" />
      </Field>
      <div className="calc-seg" role="group" aria-label="Hvilke tegn brukes">
        {SETS.map(s => (
          <button key={s.id} type="button" className={on[s.id] ? 'on' : ''} aria-pressed={on[s.id]} onClick={() => setOn(o => ({ ...o, [s.id]: !o[s.id] }))}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="calc-seg" role="group" aria-label="Hvor raskt angriperen prøver">
        {SPEEDS.map((s, i) => (
          <button key={s[0]} type="button" className={speed === i ? 'on' : ''} aria-pressed={speed === i} onClick={() => setSpeed(i)}>{s[0]}</button>
        ))}
      </div>
      {ok ? (
        <div className="calc-grid">
          <Stat label="Tid i snitt" value={duration(secs)} />
          <Stat label="Styrke" value={`${fmt(bits)} bit`} sub={level} />
          <Stat label="Kombinasjoner" value={sci(combos)} sub={`${alphabet} symboler, ${L} tegn`} />
        </div>
      ) : (
        <p className="calc-err">{alphabet === 0 ? 'Velg minst én tegngruppe.' : 'Skriv en lengde mellom 1 og 200.'}</p>
      )}
      <p className="calc-note">Lengde slår kompleksitet: fire ord etter hverandre (rundt 50 bit) er sterkere og lettere å huske enn åtte tilfeldige tegn.</p>
      <Copy text={ok ? `${fmt(bits)} bit, ${duration(secs)} i snitt` : ''} label="Kopier resultatet" />
    </div>
  )
}
