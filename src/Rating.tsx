import { useEffect, useState } from 'react'
import type { Topic } from './types'
import { CheckIcon, Eye, StarIcon, ThumbDown, ThumbUp } from './Icons'
import { seenIn } from './storage'
import { CAP, fetchRatings, fetchStats, videoId, getRating, getSentRating, queueRating, resumeRating, type Rating } from './stats'

const fmtAvg = (n: number) => n.toFixed(1).replace('.', ',')
// Antallet stopper på samme tak som likes og vises som «999+».
const fmtCount = (n: number) => (n >= CAP ? `${CAP}+` : String(n))

/** Liten stjerne med snitt og antall, brukes på forsiden ved siden av antall videoer og podkaster. */
export function RatingLine({ r }: { r?: Rating }) {
  if (!r || r.count === 0) return null
  return (
    <span className="rating-line" title={`${fmtAvg(r.avg)} av 5 fra ${r.count} ${r.count === 1 ? 'vurdering' : 'vurderinger'}`}>
      <StarIcon filled /> {fmtAvg(r.avg)} ({fmtCount(r.count)})
    </span>
  )
}

const nf = (n: number) => n.toLocaleString('nb-NO')

/** Summen av visninger, likes og tommel ned for alle videoene i kapitlet. Vises bare sammen med vurderingen. */
function Totals({ topics }: { topics: Topic[] }) {
  const [t, setT] = useState<{ views: number; likes: number; dislikes: number } | null>(null)
  const ids = topics.flatMap(tp => tp.videos.map((_, i) => videoId(tp.id, i)))
  const key = ids.join(',')

  useEffect(() => {
    if (!ids.length) return
    let alive = true
    ;(async () => {
      const sum = { views: 0, likes: 0, dislikes: 0 }
      // API-et tar maks 30 videoer per kall.
      for (let k = 0; k < ids.length; k += 30) {
        const r = await fetchStats(ids.slice(k, k + 30))
        if (!r) return
        for (const st of Object.values(r)) { sum.views += st.views; sum.likes += st.likes; sum.dislikes += st.dislikes }
      }
      if (alive) setT(sum)
    })()
    return () => { alive = false }
  }, [key])

  if (!t) return null
  return (
    <div className="rating-totals" aria-label="Totalt for videoene i kapitlet">
      <small>Totalt for videoene i kapitlet</small>
      <div>
        <span title="Visninger"><Eye /> {nf(t.views)}</span>
        <span title="Tommel opp"><ThumbUp /> {nf(t.likes)}</span>
        <span title="Tommel ned"><ThumbDown /> {nf(t.dislikes)}</span>
      </div>
    </div>
  )
}

/** Nederst i et kapittel: gi 1 til 5 stjerner. Trykk på samme stjerne igjen for å fjerne vurderingen. */
export function ChapterRating({ chapterKey, topics }: { chapterKey: string; topics: Topic[] }) {
  const [own, setOwn] = useState(getRating(chapterKey))
  const [data, setData] = useState<Rating | null>(null)
  // Hva serveren visste om oss da tallene ble hentet. Brukes til å regne ut snittet med vår egen vurdering med en gang.
  const [sentAtFetch, setSentAtFetch] = useState(getSentRating(chapterKey))
  const [note, setNote] = useState<{ text: string; n: number } | null>(null)

  useEffect(() => {
    resumeRating(chapterKey)
    let alive = true
    const sent = getSentRating(chapterKey)
    fetchRatings([chapterKey], true).then(r => {
      if (alive && r?.[chapterKey]) { setData(r[chapterKey]); setSentAtFetch(sent) }
    })
    return () => { alive = false }
  }, [chapterKey])

  useEffect(() => {
    if (!note) return
    const t = window.setTimeout(() => setNote(null), 2200)
    return () => window.clearTimeout(t)
  }, [note])

  const give = (n: number) => {
    const next = n === own ? 0 : n
    setOwn(next)
    queueRating(chapterKey, next)
    setNote(m => ({ text: next ? 'Takk for vurderingen!' : 'Vurderingen er fjernet', n: (m?.n ?? 0) + 1 }))
  }

  const base = data ?? { avg: 0, count: 0 }
  const sum = base.avg * base.count + own - sentAtFetch
  const count = Math.max(0, base.count + (own > 0 ? 1 : 0) - (sentAtFetch > 0 ? 1 : 0))
  const avg = count > 0 ? sum / count : 0

  // Hvor mange av videoene i kapitlet du har sett. Lagres bare i nettleseren din.
  const totalVideos = topics.reduce((n, t) => n + t.videos.length, 0)
  const seenVideos = topics.reduce((n, t) => n + seenIn(t.id, t.videos.length), 0)
  const pct = totalVideos > 0 ? Math.round((seenVideos / totalVideos) * 100) : 0

  return (
    <section className="rating" aria-label="Vurder kapitlet">
      <h2>Hva synes du om kapitlet?</h2>
      <div className="stars" role="group" aria-label="Gi 1 til 5 stjerner">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n} className={n <= own ? 'on' : ''} onClick={() => give(n)}
            aria-label={`${n} ${n === 1 ? 'stjerne' : 'stjerner'}`} aria-pressed={n === own} title={`${n} av 5`}
          >
            <StarIcon filled={n <= own} />
          </button>
        ))}
      </div>
      <p className="rating-sum" aria-live="polite">
        {note ? note.text : count > 0 ? `Snitt ${fmtAvg(avg)} av 5 · ${fmtCount(count)} ${count === 1 ? 'vurdering' : 'vurderinger'}` : 'Bli den første til å vurdere'}
      </p>
      {totalVideos > 0 && (
        <div className={`rating-seen${seenVideos === totalVideos ? ' all' : ''}`}>
          <p>
            <CheckIcon /> Du har sett {seenVideos} av {totalVideos} {totalVideos === 1 ? 'video' : 'videoer'} i kapitlet
            <b>{pct} %</b>
          </p>
          <div
            className="completion" role="progressbar" aria-label="Sette videoer i kapitlet"
            aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}
          >
            <i style={{ width: `${pct}%` }} />
          </div>
        </div>
      )}
      <Totals topics={topics} />
    </section>
  )
}
