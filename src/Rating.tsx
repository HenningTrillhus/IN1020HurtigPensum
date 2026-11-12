import { useEffect, useState } from 'react'
import { StarIcon } from './Icons'
import { CAP, fetchRatings, getRating, getSentRating, queueRating, resumeRating, type Rating } from './stats'

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

/** Nederst i et kapittel: gi 1 til 5 stjerner. Trykk på samme stjerne igjen for å fjerne vurderingen. */
export function ChapterRating({ chapterKey }: { chapterKey: string }) {
  const [own, setOwn] = useState(getRating(chapterKey))
  const [data, setData] = useState<Rating | null>(null)
  // Hva serveren visste om oss da tallene ble hentet. Brukes til å regne ut snittet med vår egen vurdering med en gang.
  const [sentAtFetch, setSentAtFetch] = useState(getSentRating(chapterKey))
  const [note, setNote] = useState<{ text: string; n: number } | null>(null)

  useEffect(() => {
    resumeRating(chapterKey)
    let alive = true
    const sent = getSentRating(chapterKey)
    fetchRatings([chapterKey]).then(r => {
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
    </section>
  )
}
