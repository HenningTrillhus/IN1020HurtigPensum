import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, DEVICE_RE, noStore, rejectWrite } from './_lib.js'

type Vote = 'up' | 'down' | null
const isVote = (v: unknown): v is Vote => v === null || v === 'up' || v === 'down'
const field = (v: 'up' | 'down') => (v === 'up' ? 'likes' : 'dislikes')
const ONE_YEAR = 60 * 60 * 24 * 365

// POST /api/vote  { id, vote, device }
// Serveren husker selv hva hver enhet har stemt (`dv:<video>:<enhet>`) og regner ut endringen.
// Klienten kan derfor ikke trekke fra eller legge til flere stemmer enn én per enhet og video.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (await rejectWrite(req, res)) return
  const r = redis!

  const { id, vote, device } = req.body
  if (typeof id !== 'string' || !ID_RE.test(id) || typeof device !== 'string' || !DEVICE_RE.test(device) || !isVote(vote)) {
    return res.status(400).json({ error: 'body' })
  }

  const key = `dv:${id}:${device}`
  const stored = await r.get<string | null>(key)
  const prev: Vote = stored === 'up' || stored === 'down' ? stored : null

  if (vote !== prev) {
    if (prev) {
      const k = `${field(prev)}:${id}`
      if ((await r.decr(k)) < 0) await r.set(k, 0)
    }
    if (vote) {
      await r.incr(`${field(vote)}:${id}`)
      await r.set(key, vote, { ex: ONE_YEAR })
    } else {
      await r.del(key)
    }
  }

  const [likes, dislikes] = await Promise.all([r.get<number>(`likes:${id}`), r.get<number>(`dislikes:${id}`)])
  res.status(200).json({ likes: Number(likes ?? 0), dislikes: Number(dislikes ?? 0), vote })
}
