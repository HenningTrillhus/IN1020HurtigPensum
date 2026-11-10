import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, DEVICE_RE, COUNTER_CAP, noStore, rejectBasic, rejectLimits } from './_lib.js'

type Vote = 'up' | 'down' | null
type Field = 'likes' | 'dislikes'
const isVote = (v: unknown): v is Vote => v === null || v === 'up' || v === 'down'
const field = (v: 'up' | 'down'): Field => (v === 'up' ? 'likes' : 'dislikes')
const ONE_YEAR = 60 * 60 * 24 * 365

// POST /api/vote  { id, vote, device }
// Serveren husker selv hva hver enhet har stemt (`dv:<video>:<enhet>`) og regner ut endringen.
// Hver teller (likes, tommel ned) er frosset når den står på taket (999): en frossen teller
// verken økes eller reduseres, og hvis ingenting skal endres skrives det ingenting.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (rejectBasic(req, res)) return
  const r = redis!

  const { id, vote, device } = req.body
  if (typeof id !== 'string' || !ID_RE.test(id) || typeof device !== 'string' || !DEVICE_RE.test(device) || !isVote(vote)) {
    return res.status(400).json({ error: 'body' })
  }

  const key = `dv:${id}:${device}`
  const [likesRaw, dislikesRaw, stored] = await Promise.all([
    r.get<number>(`likes:${id}`),
    r.get<number>(`dislikes:${id}`),
    r.get<string | null>(key),
  ])
  const count: Record<Field, number> = { likes: Number(likesRaw ?? 0), dislikes: Number(dislikesRaw ?? 0) }
  const prev: Vote = stored === 'up' || stored === 'down' ? stored : null
  const reply = () => ({
    likes: Math.min(count.likes, COUNTER_CAP),
    dislikes: Math.min(count.dislikes, COUNTER_CAP),
    vote,
  })

  const canDec = !!prev && count[field(prev)] < COUNTER_CAP
  const canInc = !!vote && count[field(vote)] < COUNTER_CAP
  // Ingen endring, eller begge tellerne som berøres er frosset: svar uten å skrive noe.
  if (vote === prev || (!canDec && !canInc)) return res.status(200).json(reply())

  if (await rejectLimits(req, res)) return

  if (canDec && prev) {
    const k = `${field(prev)}:${id}`
    const n = await r.decr(k)
    if (n < 0) { await r.set(k, 0); count[field(prev)] = 0 } else count[field(prev)] = n
  }
  if (canInc && vote) count[field(vote)] = await r.incr(`${field(vote)}:${id}`)

  if (vote) await r.set(key, vote, { ex: ONE_YEAR })
  else await r.del(key)

  res.status(200).json(reply())
}
