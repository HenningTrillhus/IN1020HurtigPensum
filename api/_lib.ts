import { Redis } from '@upstash/redis'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// Marketplace-integrasjonen gir KV_REST_API_*, Upstash direkte gir UPSTASH_REDIS_REST_*
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN

export const redis = url && token ? new Redis({ url, token }) : null

// Videoid: <tema-id>:<indeks>, f.eks. k6-4-inverter:0
export const ID_RE = /^[a-z0-9-]{1,60}:\d{1,3}$/
// Anonym enhets-id (tilfeldig, lagres i nettleseren): 32 hex-tegn
export const DEVICE_RE = /^[a-f0-9]{32}$/

// Hver teller (visninger, likes, tommel ned) stopper her. Når en teller er full skrives det ingenting mer til den,
// og verdien vises som «999+». Må være lik CAP i src/stats.ts.
export const COUNTER_CAP = 999

// ---- Grenser. Kan justeres uten kodeendring via miljøvariabler i Vercel. ----
const num = (v: string | undefined, d: number) => (v && Number.isFinite(Number(v)) ? Number(v) : d)
// Per IP: maks så mange skrivinger (stemmer + visninger) per vindu.
export const IP_WRITE_LIMIT = num(process.env.IP_WRITE_LIMIT, 40)
export const IP_WRITE_WINDOW_SEC = num(process.env.IP_WRITE_WINDOW_SEC, 600)
// Totalt for hele siden per døgn. Gir et fast tak på hva en angriper kan koste deg.
export const DAILY_WRITE_CAP = num(process.env.DAILY_WRITE_CAP, 5000)
// Per IP: maks så mange lesninger av tallene per minutt (treffer bare når CDN-cachen ikke svarer).
export const IP_READ_LIMIT = num(process.env.IP_READ_LIMIT, 120)

export function clientIp(req: VercelRequest): string {
  const fwd = req.headers['x-forwarded-for']
  const first = Array.isArray(fwd) ? fwd[0] : fwd
  return (first ?? '').split(',')[0].trim() || 'unknown'
}

// Avviser kall som ikke kommer fra siden vår (blokkerer andre nettsteder og enkle skript).
// Det stopper ikke en målrettet angriper, derfor kommer rate limit og døgntak i tillegg.
export function sameOrigin(req: VercelRequest): boolean {
  const o = req.headers.origin ?? req.headers.referer
  if (!o) return false
  try {
    return new URL(o).host === req.headers.host
  } catch {
    return false
  }
}

// Fast vindu per IP. INCR og EXPIRE NX sendes samlet, så nøkkelen aldri blir stående uten utløp.
export async function overIpLimit(req: VercelRequest, action: string, limit: number, windowSec: number) {
  if (!redis) return false
  const key = `rl:${action}:${clientIp(req)}`
  const [n] = (await redis.pipeline().incr(key).expire(key, windowSec, 'NX').exec()) as [number, unknown]
  return n > limit
}

// Totalt tak per døgn for alle skrivinger på siden.
export async function overDailyCap() {
  if (!redis) return false
  const key = `cap:${new Date().toISOString().slice(0, 10)}`
  const [n] = (await redis.pipeline().incr(key).expire(key, 172800, 'NX').exec()) as [number, unknown]
  return n > DAILY_WRITE_CAP
}

// Del 1 av porten for endepunkter som skriver: ingen databasekall her. Returnerer true hvis svar er sendt.
export function rejectBasic(req: VercelRequest, res: VercelResponse): boolean {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method' }); return true }
  if (!redis) { res.status(503).json({ error: 'database not configured' }); return true }
  if (!sameOrigin(req)) { res.status(403).json({ error: 'origin' }); return true }
  if (typeof req.body !== 'object' || req.body === null) { res.status(400).json({ error: 'body' }); return true }
  return false
}

// Del 2: rate limit per IP og døgntak. Telles som skrivinger, så kall dem først når vi vet at vi skal skrive.
export async function rejectLimits(req: VercelRequest, res: VercelResponse): Promise<boolean> {
  if (await overIpLimit(req, 'write', IP_WRITE_LIMIT, IP_WRITE_WINDOW_SEC)) {
    res.status(429).json({ error: 'rate limit' }); return true
  }
  if (await overDailyCap()) { res.status(429).json({ error: 'daily cap' }); return true }
  return false
}

export function noStore(res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
}
