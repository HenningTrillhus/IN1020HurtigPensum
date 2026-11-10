import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, DEVICE_RE, noStore, rejectWrite } from './_lib.js'

const THIRTY_DAYS = 60 * 60 * 24 * 30

// POST /api/view  { id, device }
// Teller bare første visning per enhet og video (SET NX), så gjentatte kall teller ikke.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (await rejectWrite(req, res)) return
  const r = redis!

  const { id, device } = req.body
  if (typeof id !== 'string' || !ID_RE.test(id) || typeof device !== 'string' || !DEVICE_RE.test(device)) {
    return res.status(400).json({ error: 'body' })
  }

  const first = await r.set(`dv-view:${id}:${device}`, 1, { nx: true, ex: THIRTY_DAYS })
  if (first) await r.incr(`views:${id}`)
  const views = Number((await r.get<number>(`views:${id}`)) ?? 0)
  res.status(200).json({ views, counted: !!first })
}
