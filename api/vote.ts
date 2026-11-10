import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, noStore, rateLimited } from './_lib.js'

type Vote = 'up' | 'down' | null
const isVote = (v: unknown): v is Vote => v === null || v === 'up' || v === 'down'
const field = (v: 'up' | 'down') => (v === 'up' ? 'likes' : 'dislikes')

// POST /api/vote  { id, vote, prev }
// Flytter enhetens stemme fra `prev` til `vote` (hver kan være 'up', 'down' eller null).
// Hvem som har stemt vet vi ikke (ingen innlogging); klienten husker det per enhet.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' })
  if (!redis) return res.status(503).json({ error: 'database not configured' })

  const { id, vote, prev } = req.body ?? {}
  if (typeof id !== 'string' || !ID_RE.test(id) || !isVote(vote) || !isVote(prev)) {
    return res.status(400).json({ error: 'body' })
  }
  if (await rateLimited(req, 'vote', 30, 60)) return res.status(429).json({ error: 'rate limit' })

  if (vote !== prev) {
    if (prev) {
      const key = `${field(prev)}:${id}`
      if ((await redis.decr(key)) < 0) await redis.set(key, 0)
    }
    if (vote) await redis.incr(`${field(vote)}:${id}`)
  }

  const [likes, dislikes] = await Promise.all([
    redis.get<number>(`likes:${id}`),
    redis.get<number>(`dislikes:${id}`),
  ])
  res.status(200).json({ likes: Number(likes ?? 0), dislikes: Number(dislikes ?? 0) })
}
