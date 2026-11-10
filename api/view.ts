import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, noStore, rateLimited } from './_lib.js'

// POST /api/view  { id }  -> teller én visning. Klienten sender kun første visning per enhet.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })
  if (!redis) return res.status(503).json({ error: 'database not configured' })

  const id = typeof req.body?.id === 'string' ? req.body.id : ''
  if (!ID_RE.test(id)) return res.status(400).json({ error: 'id' })
  if (await rateLimited(req, 'view', 60, 60)) return res.status(429).json({ error: 'rate limit' })

  const views = await redis.incr(`views:${id}`)
  res.status(200).json({ views })
}
