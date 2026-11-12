import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { podcastCount, seenCount, videoCount, type Chapter } from '../chapters'
import Disclaimer from '../Disclaimer'
import { CalcButton } from '../Calculator'
import BugButton from '../BugButton'
import { RatingLine } from '../Rating'
import { GlobalSearchBox, GlobalSearchResults } from '../GlobalSearch'
import { PlayIcon } from '../Icons'
import ProgressSheet from '../ProgressSheet'
import { getLast } from '../storage'
import { fetchRatings, type Rating } from '../stats'
import ExamCountdown, { type Exam } from '../ExamCountdown'

/** Teller opp fra 0 til verdien, så tallet «lever» når siden vises. */
function useCountUp(target: number, ms = 800) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(target); return }
    const t0 = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / ms)
      setV(Math.round(target * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, ms])
  return v
}

// Forsiden: bare kapitlene. Trykk på et kapittel for å se delkapitlene.
export default function Overview({ chapters, courseUrl, exam }: { chapters: Chapter[]; courseUrl?: string; exam?: Exam }) {
  // Snitt på vurderingene av hvert kapittel, vist ved siden av antall videoer og podkaster.
  const [ratings, setRatings] = useState<Record<string, Rating>>({})
  const [q, setQ] = useState('')
  const [progressOpen, setProgressOpen] = useState(false)
  // Siste video du så på, så du kan fortsette der du slapp.
  const last = useMemo(() => {
    const l = getLast()
    if (!l) return null
    for (const c of chapters) {
      const t = c.topics.find(x => x.id === l.topic)
      if (t && t.videos[l.i]) return { chapter: c, topic: t, i: l.i, video: t.videos[l.i] }
    }
    return null
  }, [chapters])
  const totalVideos = chapters.reduce((n, c) => n + videoCount(c), 0)
  const totalSeen = chapters.reduce((n, c) => n + seenCount(c), 0)
  const pct = totalVideos ? Math.round((totalSeen / totalVideos) * 100) : 0
  const shownPct = useCountUp(pct)
  useEffect(() => {
    let alive = true
    const ids = chapters.filter(c => c.topics.length > 0).map(c => c.key)
    if (ids.length) fetchRatings(ids).then(r => { if (alive && r) setRatings(r) })
    return () => { alive = false }
  }, [chapters])

  return (
    <div className="shell">
      {exam && <ExamCountdown exam={exam} />}
      {/* Verktøyrad under nedtellingen: feilmelding til venstre, kalkulator til høyre. Søkefeltet fyller resten av bredden. */}
      <div className="tool-row">
        <BugButton />
        <GlobalSearchBox q={q} setQ={setQ} />
        <CalcButton />
      </div>
      <header className="hero">
        <h1>IN1020 Hurtigpensum</h1>
        <p className="sub">Pensum i korte klipp. Velg et kapittel.</p>
      </header>
      <Disclaimer courseUrl={courseUrl} />
      <GlobalSearchResults chapters={chapters} q={q} courseUrl={courseUrl} />
      {/* Mens du søker, vises treffene i stedet for kapittellisten. */}
      {last && !q.trim() && (
        <a className="resume" href={`#/${last.topic.id}/feed/${last.i + 1}`} data-ch={last.chapter.color}>
          <span className="resume-ic" aria-hidden><PlayIcon /></span>
          <span className="resume-txt">
            <small>Fortsett der du slapp</small>
            <strong>{last.video.title}</strong>
            <em>{last.topic.title}</em>
          </span>
          <span className="chev" aria-hidden>›</span>
        </a>
      )}
      <div className="grid" hidden={!!q.trim()}>
        {chapters.map((c, i) => {
          const v = videoCount(c)
          const d = c.topics.length
          const p = podcastCount(c)
          const seen = seenCount(c)
          return (
            <a
              key={c.key}
              className={`card${v === 0 ? ' wip' : ''}`}
              style={{ '--i': Math.min(i, 10) } as CSSProperties}
              href={`#/kap/${c.key}`}
              data-ch={c.color}
            >
              <span className="ring-wrap">
                <svg className="ring" viewBox="0 0 64 64" aria-hidden>
                  <circle className="ring-track" cx="32" cy="32" r="29" pathLength={100} />
                  {seen > 0 && <circle className="ring-fill" cx="32" cy="32" r="29" pathLength={100} strokeDasharray={`${Math.min(100, (seen / v) * 100)} 100`} />}
                </svg>
                {c.icon
                  ? <img className="ch-icon" src={c.icon} alt="" width={44} height={44} draggable={false} />
                  : <span className="num">{c.n ?? '•'}</span>}
              </span>
              <div className="body">
                <h2>{c.title || c.label}</h2>
                <small>
                  <span>{c.title ? `${c.label} · ` : ''}{d} {d === 1 ? 'delkapittel' : 'delkapitler'}</span>
                  <span>· {v} {v === 1 ? 'video' : 'videoer'}</span>
                  <span>· {p} {p === 1 ? 'podkast' : 'podkaster'}</span>
                  {seen > 0 && <span className="seen-tag">· {seen} av {v} sett</span>}
                  <RatingLine r={ratings[c.key]} />
                  {v === 0 && <span className="badge">Work in progress</span>}
                </small>
              </div>
              <span className="chev" aria-hidden>›</span>
            </a>
          )
        })}
      </div>
      {!q.trim() && totalVideos > 0 && (
        <button type="button" className="total-progress" onClick={() => setProgressOpen(true)} aria-haspopup="dialog" aria-label="Se fremdrift per kapittel">
          <span className="tp-head"><span>Total fremdrift</span><strong>{shownPct} %</strong></span>
          <span className="completion" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><i style={{ width: `${pct}%` }} /></span>
          <small><span>Du har sett {totalSeen} av {totalVideos} videoer</span><span className="tp-more">Per kapittel ›</span></small>
        </button>
      )}
      {progressOpen && <ProgressSheet chapters={chapters} onClose={() => setProgressOpen(false)} />}
    </div>
  )
}
