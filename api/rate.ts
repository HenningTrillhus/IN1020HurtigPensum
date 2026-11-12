import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, CHAPTER_RE, DEVICE_RE, COUNTER_CAP, noStore, rejectBasic, rejectLimits } from './_lib.js'

const ONE_YEAR = 60 * 60 * 24 * 365

// POST /api/rate  { id, rating, device }   id = kapittelnøkkel, rating = 0 (fjern) eller 1 til 5
// Serveren husker selv hva hver enhet har gitt (`rt:<kapittel>:<enhet>`) og regner ut endringen i sum og antall,
// så gjentatte kall med samme verdi ikke gjør noe, og en enhet teller bare én gang.
// Står antallet på taket (999), tas det ikke imot nye vurderinger fra nye enheter. De som alt har vurdert, kan fortsatt endre.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (rejectBasic(req, res)) return
  const r = redis!

  const { id, rating, device } = req.body
  if (
    typeof id !== 'string' || !CHAPTER_RE.test(id) || typeof device !== 'string' || !DEVICE_RE.test(device) ||
    !Number.isInteger(rating) || rating < 0 || rating > 5
  ) {
    return res.status(400).json({ error: 'body' })
  }

  const key = `rt:${id}:${device}`
  const [sumRaw, countRaw, stored] = await Promise.all([r.get<number>(`rsum:${id}`), r.get<number>(`rcnt:${id}`), r.get<number>(key)])
  let sum = Number(sumRaw ?? 0), count = Number(countRaw ?? 0)
  const prev = Number(stored ?? 0) || 0
  const reply = () => ({ avg: count > 0 ? sum / count : 0, count: Math.min(count, COUNTER_CAP) })

  if (rating === prev) return res.status(200).json(reply())
  if (prev === 0 && count >= COUNTER_CAP) return res.status(200).json(reply())

  if (await rejectLimits(req, res)) return

  const dSum = rating - prev
  const dCount = (rating > 0 ? 1 : 0) - (prev > 0 ? 1 : 0)
  if (dSum) sum = await r.incrby(`rsum:${id}`, dSum)
  if (dCount) count = await r.incrby(`rcnt:${id}`, dCount)

  if (rating > 0) await r.set(key, rating, { ex: ONE_YEAR })
  else await r.del(key)

  res.status(200).json(reply())
}
