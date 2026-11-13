import { timingSafeEqual } from 'node:crypto'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, overIpLimit, noStore } from './_lib.js'

const THIRTY_DAYS = 60 * 60 * 24 * 30
// Så mange nøkler henter vi utløpstid for (til «aktive siste døgn/uke»). Over dette hoppes tidsoppdelingen over for å spare kall.
const TTL_LIMIT = 30000

function keyOk(given: string, secret: string): boolean {
  const a = Buffer.from(given)
  const b = Buffer.from(secret)
  return a.length === b.length && timingSafeEqual(a, b)
}

async function scanKeys(pattern: string): Promise<string[]> {
  const out: string[] = []
  let cursor: string | number = 0
  do {
    const [next, keys] = (await redis!.scan(cursor, { match: pattern, count: 1000 })) as [string | number, string[]]
    out.push(...keys)
    cursor = next
  } while (String(cursor) !== '0' && out.length < 200000)
  return out
}

// GET /api/admin  (header: x-admin-key)
// Samlet statistikk som ikke ligger åpent: hvor mange ulike enheter som har vært inne, og hvor mange som har sett hver video.
// Enheter telles bare for besøkende som har godtatt lagring, siden enhets-ID-en ellers aldri sendes.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  const secret = process.env.ADMIN_KEY
  if (!secret || secret.length < 16) return res.status(503).json({ error: 'not configured' })
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' })
  if (!redis) return res.status(503).json({ error: 'database not configured' })

  // Maks 20 forsøk per IP på ti minutter, så nøkkelen ikke kan gjettes.
  if (await overIpLimit(req, 'admin', 20, 600)) return res.status(429).json({ error: 'rate limit' })

  const given = String(req.headers['x-admin-key'] ?? '')
  if (!given || !keyOk(given, secret)) return res.status(401).json({ error: 'no access' })

  const [viewKeys, voteKeys, reportKeys, rateKeys] = await Promise.all([
    scanKeys('dv-view:*'), scanKeys('dv:*'), scanKeys('dr:*'), scanKeys('rt:*'),
  ])

  const dev = (k: string) => k.slice(k.lastIndexOf(':') + 1)
  const vid = (k: string) => k.slice(k.indexOf(':') + 1, k.lastIndexOf(':'))
  const distinct = (keys: string[]) => new Set(keys.map(dev)).size

  // Unike enheter per video.
  const perVideoSets = new Map<string, Set<string>>()
  for (const k of viewKeys) {
    const id = vid(k)
    if (!perVideoSets.has(id)) perVideoSets.set(id, new Set())
    perVideoSets.get(id)!.add(dev(k))
  }
  const perVideo: Record<string, number> = {}
  perVideoSets.forEach((s, id) => { perVideo[id] = s.size })

  // Når var enheten sist aktiv? Nøkkelen lever i 30 dager fra første visning, så gjenstående tid forteller alderen.
  const now = Date.now()
  let last24h = 0, last7d = 0, last30d = 0
  let timeSplit = true
  if (viewKeys.length > TTL_LIMIT) {
    timeSplit = false
  } else {
    const newest = new Map<string, number>() // enhet -> største gjenstående tid (nyeste visning)
    for (let k = 0; k < viewKeys.length; k += 500) {
      const chunk = viewKeys.slice(k, k + 500)
      const p = redis.pipeline()
      chunk.forEach(key => p.ttl(key))
      const ttls = (await p.exec()) as number[]
      chunk.forEach((key, i) => {
        const t = Number(ttls[i])
        if (!(t > 0)) return
        const d = dev(key)
        if (t > (newest.get(d) ?? 0)) newest.set(d, t)
      })
    }
    newest.forEach(t => {
      const ageSec = THIRTY_DAYS - t
      if (ageSec <= 86400) last24h++
      if (ageSec <= 7 * 86400) last7d++
      last30d++
    })
  }

  res.status(200).json({
    generatedAt: new Date(now).toISOString(),
    devices: { total: distinct(viewKeys), last24h, last7d, last30d, timeSplit },
    voters: distinct(voteKeys),
    reporters: distinct(reportKeys),
    raters: distinct(rateKeys),
    viewKeys: viewKeys.length,
    counts: { views: viewKeys.length, votes: voteKeys.length, reports: reportKeys.length, ratings: rateKeys.length },
    perVideo,
  })
}
