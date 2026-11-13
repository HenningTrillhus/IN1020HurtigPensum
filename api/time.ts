import type { VercelRequest, VercelResponse } from '@vercel/node'
import { redis, DEVICE_RE, noStore, rejectBasic, overIpLimit } from './_lib.js'

const NINETY_DAYS = 60 * 60 * 24 * 90

// POST /api/time  { device, seconds, session? }
// Legger til hvor lenge en enhet har hatt siden åpen og synlig. Sendes bare av besøkende som har godtatt lagring.
// Hvert kall kan maks legge til 5 minutter, og hver IP kan maks sende 30 kall per ti minutter (eget tak, så det
// ikke spiser av dagstaket for stemmer). Total tid og antall besøk samles, og tid per enhet i 90 dager.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  noStore(res)
  if (rejectBasic(req, res)) return
  const r = redis!

  const { device, seconds, session } = req.body
  if (typeof device !== 'string' || !DEVICE_RE.test(device) || !Number.isInteger(seconds) || seconds < 1 || seconds > 300) {
    return res.status(400).json({ error: 'body' })
  }
  if (await overIpLimit(req, 'time', 30, 600)) return res.status(429).json({ error: 'rate limit' })

  const p = r.pipeline()
  p.incrby('tsum', seconds)
  p.incrby(`tdev:${device}`, seconds)
  p.expire(`tdev:${device}`, NINETY_DAYS, 'NX')
  p.set('tstart', new Date().toISOString(), { nx: true })
  if (session === true) p.incr('tses')
  await p.exec()
  res.status(200).json({ ok: true })
}
