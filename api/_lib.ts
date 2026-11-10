import { Redis } from '@upstash/redis'
import type { VercelRequest, VercelResponse } from '@vercel/node'

// Marketplace-integrasjonen gir KV_REST_API_*, Upstash direkte gir UPSTASH_REDIS_REST_*
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN

export const redis = url && token ? new Redis({ url, token }) : null

// Videoid: <tema-id>:<indeks>, f.eks. k6-4-inverter:0
export const ID_RE = /^[a-z0-9-]{1,60}:\d{1,3}$/

export function clientIp(req: VercelRequest): string {
  const fwd = req.headers['x-forwarded-for']
  const first = Array.isArray(fwd) ? fwd[0] : fwd
  return (first ?? '').split(',')[0].trim() || 'unknown'
}

// Enkel rate limit per IP og handling: maks `limit` kall per `windowSec` sekunder.
export async function rateLimited(req: VercelRequest, action: string, limit: number, windowSec: number) {
  if (!redis) return false
  const key = `rl:${action}:${clientIp(req)}`
  const n = await redis.incr(key)
  if (n === 1) await redis.expire(key, windowSec)
  return n > limit
}

export function noStore(res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
}
