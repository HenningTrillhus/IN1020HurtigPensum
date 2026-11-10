import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, ID_RE, DEVICE_RE, COUNTER_CAP, noStore, rejectBasic, rejectLimits } from './_lib.js'

const THIRTY_DAYS = 60 * 60 * 24 * 30

// POST /api/view  { id, device }
// Teller bare første visning per enhet og video (SET NX). Står telleren på taket (999),
// skrives det ingenting: ingen rate-limit-teller, ingen enhetsnøkkel, ingen økning.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (rejectBasic(req, res)) return
  const r = redis!

  const { id, device } = req.body
  if (typeof id !== 'string' || !ID_RE.test(id) || typeof device !== 'string' || !DEVICE_RE.test(device)) {
    return res.status(400).json({ error: 'body' })
  }

  const current = Number((await r.get<number>(`views:${id}`)) ?? 0)
  if (current >= COUNTER_CAP) return res.status(200).json({ views: COUNTER_CAP, counted: false, full: true })

  if (await rejectLimits(req, res)) return

  const first = await r.set(`dv-view:${id}:${device}`, 1, { nx: true, ex: THIRTY_DAYS })
  if (!first) return res.status(200).json({ views: current, counted: false })

  const views = Math.min(await r.incr(`views:${id}`), COUNTER_CAP)
  res.status(200).json({ views, counted: true })
}
