// Måler størrelsen på alt i public/ og skriver public/storage.json (vises på admin-siden).
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, extname } from 'node:path'

const cats = { video: ['.mp4', '.webm', '.mov'], audio: ['.m4a', '.mp3', '.wav'], image: ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.ico'] }
const out = { video: 0, audio: 0, image: 0, other: 0, files: 0 }
const walk = dir => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) { walk(p); continue }
    if (e.name === 'storage.json') continue
    const ext = extname(e.name).toLowerCase()
    const k = Object.keys(cats).find(c => cats[c].includes(ext)) ?? 'other'
    out[k] += statSync(p).size; out.files++
  }
}
walk('public')
out.total = out.video + out.audio + out.image + out.other
writeFileSync('public/storage.json', JSON.stringify(out))
console.log('storage.json', (out.total / 1e9).toFixed(2), 'GB')
