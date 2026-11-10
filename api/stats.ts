import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, noStore } from './_lib.js'

// GET /api/stats?ids=tema:0,tema:1  ->  { "tema:0": { likes, dislikes, views }, ... }
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (req.method !== 'GET') return res.status(405).json({ error: 'method' })
  if (!redis) return res.status(503).json({ error: 'database not configured' })

  const raw = String(req.query.ids ?? '')
  const ids = raw.split(',').filter(id => ID_RE.test(id)).slice(0, 50)
  if (!ids.length) return res.status(400).json({ error: 'ids' })

  const [likes, dislikes, views] = await Promise.all(
    ['likes', 'dislikes', 'views'].map(k => redis!.mget<(number | null)[]>(...ids.map(id => `${k}:${id}`))),
  )
  const out: Record<string, { likes: number; dislikes: number; views: number }> = {}
  ids.forEach((id, i) => {
    out[id] = { likes: Number(likes[i] ?? 0), dislikes: Number(dislikes[i] ?? 0), views: Number(views[i] ?? 0) }
  })
  res.status(200).json(out)
}
