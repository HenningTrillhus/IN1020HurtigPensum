import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, CHAPTER_RE, COUNTER_CAP, IP_READ_LIMIT, overIpLimit } from './_lib.js'

// GET /api/ratings?ids=5,6  ->  { "5": { avg, count }, ... }
// Svaret caches av Vercels CDN i 20 sekunder, som tallene for stemmer og visninger.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' })
  if (!redis) { res.setHeader('Cache-Control', 'no-store'); return res.status(503).json({ error: 'database not configured' }) }

  const ids = String(req.query.ids ?? '').split(',').filter(id => CHAPTER_RE.test(id)).slice(0, 30)
  if (!ids.length) return res.status(400).json({ error: 'ids' })

  if (await overIpLimit(req, 'read', IP_READ_LIMIT, 60)) {
    res.setHeader('Cache-Control', 'no-store')
    return res.status(429).json({ error: 'rate limit' })
  }

  const [sums, counts] = await Promise.all(
    ['rsum', 'rcnt'].map(k => redis!.mget<(number | null)[]>(...ids.map(id => `${k}:${id}`))),
  )
  const out: Record<string, { avg: number; count: number }> = {}
  ids.forEach((id, i) => {
    const count = Number(counts[i] ?? 0), sum = Number(sums[i] ?? 0)
    out[id] = { avg: count > 0 ? Math.round((sum / count) * 100) / 100 : 0, count: Math.min(count, COUNTER_CAP) }
  })
  res.setHeader('Cache-Control', 'public, s-maxage=20, stale-while-revalidate=40')
  res.status(200).json(out)
}
