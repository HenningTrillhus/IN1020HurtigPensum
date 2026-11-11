import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, DEVICE_RE, COUNTER_CAP, noStore, rejectBasic, rejectLimits } from './_lib.js'

const ONE_YEAR = 60 * 60 * 24 * 365

// POST /api/report  { id, report, device }
// «Meld feil i videoen». Hver enhet kan ha én melding per video som kan slås av og på igjen.
// Serveren husker selv hva enheten har meldt (`dr:<video>:<enhet>`) og regner ut endringen,
// så gjentatte kall med samme verdi ikke gjør noe. Tallene er ikke offentlige: de ligger i `reports:<video>`,
// og sorteringslisten `reports:all` (score = antall meldinger) gir deg en rask oversikt i Upstash.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (rejectBasic(req, res)) return
  const r = redis!

  const { id, report, device } = req.body
  if (typeof id !== 'string' || !ID_RE.test(id) || typeof device !== 'string' || !DEVICE_RE.test(device) || typeof report !== 'boolean') {
    return res.status(400).json({ error: 'body' })
  }

  const key = `dr:${id}:${device}`
  const [countRaw, stored] = await Promise.all([r.get<number>(`reports:${id}`), r.get<string | null>(key)])
  const count = Number(countRaw ?? 0)
  const prev = stored === '1'

  // Ingen endring, eller telleren står på taket (frosset): svar uten å skrive noe.
  if (report === prev || count >= COUNTER_CAP) return res.status(200).json({ report })

  if (await rejectLimits(req, res)) return

  let n: number
  if (report) {
    n = await r.incr(`reports:${id}`)
  } else {
    n = await r.decr(`reports:${id}`)
    if (n < 0) { await r.set(`reports:${id}`, 0); n = 0 }
  }

  if (report) await r.set(key, '1', { ex: ONE_YEAR })
  else await r.del(key)

  if (n > 0) await r.zadd('reports:all', { score: n, member: id })
  else await r.zrem('reports:all', id)

  res.status(200).json({ report })
}
