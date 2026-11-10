export interface Exam {
  /** Lokal tid, f.eks. 2026-12-16T15:00 */
  date: string
  label?: string
  /** Side med tid og sted. */
  url?: string
}

const DAY = 24 * 60 * 60 * 1000

/** Hele kalenderdøgn fra i dag til eksamensdagen (0 = i dag). */
export function daysUntil(exam: Date, now = new Date()): number {
  const a = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const b = new Date(exam.getFullYear(), exam.getMonth(), exam.getDate()).getTime()
  return Math.round((b - a) / DAY)
}

export default function ExamCountdown({ exam }: { exam: Exam }) {
  const when = new Date(exam.date)
  if (Number.isNaN(when.getTime())) return null
  const days = daysUntil(when)
  if (days < 0) return null // eksamen er over

  const date = when.toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })
  const time = when.toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' }).replace('.', ':')

  return (
    <section className="exam" aria-label="Nedtelling til eksamen">
      <div className="exam-num" aria-hidden>{days === 0 ? 'I dag' : days}</div>
      <div className="exam-text">
        <strong>
          {days === 0 ? 'Eksamen er i dag' : days === 1 ? 'dag til eksamen' : 'dager til eksamen'}
        </strong>
        <small>
          {date} kl. {time}
          {exam.url && <> · <a href={exam.url} target="_blank" rel="noreferrer">Tid og sted</a></>}
        </small>
      </div>
    </section>
  )
}
