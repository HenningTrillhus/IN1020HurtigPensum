import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, COUNTER_CAP, IP_READ_LIMIT, overIpLimit } from './_lib.js'

// GET /api/stats?ids=tema:0,tema:1  ->  { "tema:0": { likes, dislikes, views }, ... }
// Svaret caches av Vercels CDN i 20 sekunder, så mange besøkende treffer ikke databasen hver gang.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' })
  if (!redis) { res.setHeader('Cache-Control', 'no-store'); return res.status(503).json({ error: 'database not configured' }) }

  const raw = String(req.query.ids ?? '')
  const ids = raw.split(',').filter(id => ID_RE.test(id)).slice(0, 30)
  if (!ids.length) return res.status(400).json({ error: 'ids' })

  if (await overIpLimit(req, 'read', IP_READ_LIMIT, 60)) {
    res.setHeader('Cache-Control', 'no-store')
    return res.status(429).json({ error: 'rate limit' })
  }

  const [likes, dislikes, views] = await Promise.all(
    ['likes', 'dislikes', 'views'].map(k => redis!.mget<(number | null)[]>(...ids.map(id => `${k}:${id}`))),
  )
  const out: Record<string, { likes: number; dislikes: number; views: number }> = {}
  ids.forEach((id, i) => {
    const cap = (n: number | null) => Math.min(Number(n ?? 0), COUNTER_CAP)
    out[id] = { likes: cap(likes[i]), dislikes: cap(dislikes[i]), views: cap(views[i]) }
  })
  res.setHeader('Cache-Control', 'public, s-maxage=20, stale-while-revalidate=40')
  res.status(200).json(out)
}
