import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Topic } from '../types'
import { chapterInfo } from '../chapters'

interface AdminData {
  generatedAt: string
  devices: { total: number; last24h: number; last7d: number; last30d: number; timeSplit: boolean }
  voters: number
  reporters: number
  raters: number
  viewKeys: number
  counts: { views: number; votes: number; reports: number; ratings: number }
  perVideo: Record<string, number>
}
interface Stat { likes: number; dislikes: number; views: number; reports: number }
interface Rating { avg: number; count: number }

const nf = (n: number) => n.toLocaleString('nb-NO')
const avgf = (n: number) => n.toFixed(1).replace('.', ',')

// Henter åpne tall (maks 30 id-er per kall) rått, uten at egne usendte valg regnes med.
async function getStats(ids: string[]): Promise<Record<string, Stat>> {
  const out: Record<string, Stat> = {}
  for (let k = 0; k < ids.length; k += 30) {
    const r = await fetch(`/api/stats?ids=${encodeURIComponent(ids.slice(k, k + 30).join(','))}`)
    if (r.ok) Object.assign(out, await r.json())
  }
  return out
}

/** Skjult statistikkside: åpnes bare med lenken #/admin/<nøkkel>. Nøkkelen sjekkes på serveren. */
export default function Admin({ topics, secret }: { topics: Topic[]; secret: string }) {
  const [admin, setAdmin] = useState<AdminData | null>(null)
  const [stats, setStats] = useState<Record<string, Stat>>({})
  const [ratings, setRatings] = useState<Record<string, Rating>>({})
  const [state, setState] = useState<'loading' | 'ok' | 'denied' | 'error'>('loading')

  const videos = useMemo(() => topics.flatMap(t => t.videos.map((v, i) => ({
    id: `${t.id}:${i}`, chapter: chapterInfo(t), topic: t.title, title: v.title,
  }))), [topics])
  const chapterKeys = useMemo(() => [...new Set(videos.map(v => v.chapter.key))], [videos])

  const load = useCallback(async () => {
    setState('loading')
    try {
      const r = await fetch('/api/admin', { headers: { 'x-admin-key': secret }, cache: 'no-store' })
      if (r.status === 401 || r.status === 429 || r.status === 503) { setState('denied'); return }
      if (!r.ok) { setState('error'); return }
      setAdmin(await r.json())
      const [s, rr] = await Promise.all([
        getStats(videos.map(v => v.id)),
        fetch(`/api/ratings?ids=${encodeURIComponent(chapterKeys.join(','))}`).then(x => (x.ok ? x.json() : {})),
      ])
      setStats(s); setRatings(rr)
      setState('ok')
    } catch { setState('error') }
  }, [secret, videos, chapterKeys])

  useEffect(() => {
    // Siden skal ikke indekseres og skal ikke kunne bli funnet.
    const m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex, nofollow'
    document.head.appendChild(m)
    load()
    return () => { m.remove() }
  }, [load])

  const rows = videos.map(v => {
    const s = stats[v.id] ?? { likes: 0, dislikes: 0, views: 0, reports: 0 }
    return { ...v, ...s, viewers: admin?.perVideo[v.id] ?? 0 }
  })
  const sum = (f: (r: typeof rows[number]) => number) => rows.reduce((n, r) => n + f(r), 0)

  const perChapter = chapterKeys.map(key => {
    const rs = rows.filter(r => r.chapter.key === key)
    const info = rs[0].chapter
    return {
      key, label: info.label, title: info.title, videos: rs.length,
      views: rs.reduce((n, r) => n + r.views, 0), likes: rs.reduce((n, r) => n + r.likes, 0),
      dislikes: rs.reduce((n, r) => n + r.dislikes, 0), reports: rs.reduce((n, r) => n + r.reports, 0),
      rating: ratings[key],
    }
  })
  const top = [...rows].sort((a, b) => b.views - a.views).slice(0, 15)
  const problems = [...rows].filter(r => r.dislikes > 0 || r.reports > 0).sort((a, b) => (b.reports * 3 + b.dislikes) - (a.reports * 3 + a.dislikes)).slice(0, 10)

  // Grovt anslag på forbruk siste 30 dager. Tallene er kommandoer per handling, talt fra API-koden:
  // visning ≈ 7, stemme ≈ 9, feilmelding ≈ 9, vurdering ≈ 10. Lesing av tall (ca. 30 kommandoer og 8 kall per besøk)
  // kan ikke måles, så den er en gjetning ut fra antall enheter og tre besøk hver.
  const usage = admin ? (() => {
    const c = admin.counts
    const visits = admin.devices.total * 3
    const rows = [
      { label: 'Visninger', n: c.views, per: 7, calls: c.views },
      { label: 'Stemmer', n: c.votes, per: 9, calls: c.votes },
      { label: 'Feilmeldinger', n: c.reports, per: 9, calls: c.reports },
      { label: 'Stjernevurderinger', n: c.ratings, per: 10, calls: c.ratings },
      { label: 'Lesing av tall (gjetning)', n: visits, per: 30, calls: visits * 8 },
    ].map(r => ({ ...r, cmds: r.n * r.per }))
    const cmds = rows.reduce((n, r) => n + r.cmds, 0)
    const calls = rows.reduce((n, r) => n + r.calls, 0)
    return { rows, cmds, calls }
  })() : null

  if (state === 'denied') {
    return <div className="shell"><div className="wip-page"><h2>Ingen tilgang</h2><p>Lenken mangler riktig nøkkel.</p></div></div>
  }

  return (
    <div className="shell adm">
      <h1 className="chapter-title">Statistikk</h1>
      <p className="sub">
        {state === 'loading' ? 'Henter tall …' : state === 'error' ? 'Kunne ikke hente tallene.' : `Oppdatert ${new Date(admin!.generatedAt).toLocaleString('nb-NO')}`}
        {' '}<button className="adm-refresh" onClick={load}>Oppdater</button>
      </p>

      {admin && (
        <>
          <div className="adm-cards">
            <div><small>Unike enheter</small><strong>{nf(admin.devices.total)}</strong><em>siste 30 dager</em></div>
            <div><small>Aktive siste døgn</small><strong>{admin.devices.timeSplit ? nf(admin.devices.last24h) : '–'}</strong><em>enheter</em></div>
            <div><small>Aktive siste uke</small><strong>{admin.devices.timeSplit ? nf(admin.devices.last7d) : '–'}</strong><em>enheter</em></div>
            <div><small>Visninger</small><strong>{nf(sum(r => r.views))}</strong><em>unike per enhet og video</em></div>
            <div><small>Tommel opp</small><strong>{nf(sum(r => r.likes))}</strong><em>{nf(admin.voters)} enheter har stemt</em></div>
            <div><small>Tommel ned</small><strong>{nf(sum(r => r.dislikes))}</strong></div>
            <div><small>Feilmeldinger</small><strong>{nf(sum(r => r.reports))}</strong><em>{nf(admin.reporters)} enheter</em></div>
            <div><small>Stjernevurderinger</small><strong>{nf(Object.values(ratings).reduce((n, r) => n + r.count, 0))}</strong><em>{nf(admin.raters)} enheter</em></div>
          </div>
          <p className="adm-note">
            Enheter telles bare for de som har godtatt lagring, siden enhets-ID-en ellers aldri sendes. Hver teller stopper på 999 per video, så
            summene kan være lavere enn virkeligheten for de mest sette videoene. Én person med to nettlesere teller som to enheter.
          </p>

          {usage && (
            <>
              <h2 className="adm-h">Forbruk, grovt anslag (30 dager)</h2>
              <div className="adm-cards">
                <div><small>Redis-kommandoer</small><strong>ca. {nf(Math.round(usage.cmds / 100) * 100)}</strong><em>{(usage.cmds / 5000).toFixed(usage.cmds < 5000 ? 1 : 0).replace('.', ',')} % av gratis 500 000</em></div>
                <div><small>Funksjonskall</small><strong>ca. {nf(Math.round(usage.calls / 100) * 100)}</strong><em>{(usage.calls / 10000).toFixed(1).replace('.', ',')} % av gratis 1 million</em></div>
              </div>
              <div className="adm-scroll"><table className="adm-table">
                <thead><tr><th>Handling</th><th>Antall</th><th>Kmd. hver</th><th>Kommandoer</th></tr></thead>
                <tbody>{usage.rows.map(r => (
                  <tr key={r.label}><td>{r.label}</td><td>{nf(r.n)}</td><td>{r.per}</td><td>{nf(r.cmds)}</td></tr>
                ))}</tbody>
              </table></div>
              <p className="adm-note">
                Anslaget regner bare med besøkende som har godtatt lagring (de andre er usynlige her, men bruker litt lesing). Stemmer, feilmeldinger og
                stjerner er alle som er lagret siden start. Grensene er omtrent: Upstash gratis 500 000 kommandoer i måneden, og Vercel Hobby 1 million funksjonskall.
                Over grensen koster Upstash ca. 0,2 USD per 100 000 kommandoer. Denne siden bruker selv noen hundre kommandoer hver gang den åpnes. Sjekk
                de nøyaktige tallene i dashbordene til Upstash og Vercel.
              </p>
            </>
          )}

          <h2 className="adm-h">Per kapittel</h2>
          <div className="adm-scroll"><table className="adm-table">
            <thead><tr><th>Kapittel</th><th>Videoer</th><th>Visninger</th><th>Opp</th><th>Ned</th><th>Feil</th><th>Stjerner</th></tr></thead>
            <tbody>{perChapter.map(c => (
              <tr key={c.key}>
                <td>{c.label}{c.title ? ` · ${c.title}` : ''}</td><td>{c.videos}</td><td>{nf(c.views)}</td><td>{nf(c.likes)}</td><td>{nf(c.dislikes)}</td><td>{nf(c.reports)}</td>
                <td>{c.rating && c.rating.count > 0 ? `${avgf(c.rating.avg)} (${c.rating.count})` : '–'}</td>
              </tr>
            ))}</tbody>
          </table></div>

          <h2 className="adm-h">Mest sette videoer</h2>
          <div className="adm-scroll"><table className="adm-table">
            <thead><tr><th>Video</th><th>Visninger</th><th>Enheter</th><th>Opp</th><th>Ned</th></tr></thead>
            <tbody>{top.map(r => (
              <tr key={r.id}><td>{r.title}</td><td>{nf(r.views)}</td><td>{nf(r.viewers)}</td><td>{nf(r.likes)}</td><td>{nf(r.dislikes)}</td></tr>
            ))}</tbody>
          </table></div>

          {problems.length > 0 && (
            <>
              <h2 className="adm-h">Flest feilmeldinger og tommel ned</h2>
              <div className="adm-scroll"><table className="adm-table">
                <thead><tr><th>Video</th><th>Feil</th><th>Ned</th><th>Opp</th></tr></thead>
                <tbody>{problems.map(r => (
                  <tr key={r.id}><td>{r.title}</td><td>{nf(r.reports)}</td><td>{nf(r.dislikes)}</td><td>{nf(r.likes)}</td></tr>
                ))}</tbody>
              </table></div>
            </>
          )}

          <details className="adm-all">
            <summary>Alle videoer ({rows.length})</summary>
            <div className="adm-scroll"><table className="adm-table">
              <thead><tr><th>Video</th><th>Visninger</th><th>Enheter</th><th>Opp</th><th>Ned</th><th>Feil</th></tr></thead>
              <tbody>{rows.map(r => (
                <tr key={r.id}><td>{r.title}</td><td>{nf(r.views)}</td><td>{nf(r.viewers)}</td><td>{nf(r.likes)}</td><td>{nf(r.dislikes)}</td><td>{nf(r.reports)}</td></tr>
              ))}</tbody>
            </table></div>
          </details>
        </>
      )}
    </div>
  )
}
