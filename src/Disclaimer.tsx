interface Props {
  compact?: boolean
  /** Forsiden: lenke til emnesiden med undervisningsmateriell. */
  courseUrl?: string
  /** Inne i et tema: lenke til kompendiet for kapitlet temaet hører til. */
  compendiumUrl?: string
  /** «Kapittel 6» */
  chapterLabel?: string
}

const link = (href: string, text: string) => (
  <a href={href} target="_blank" rel="noreferrer">{text}</a>
)

export default function Disclaimer({ compact = false, courseUrl, compendiumUrl, chapterLabel }: Props) {
  if (compact) {
    return (
      <p className="notice compact">
        AI-generert, ta med en klype salt. Kilde:{' '}
        {compendiumUrl
          ? link(compendiumUrl, `kompendiet${chapterLabel ? ` (${chapterLabel.toLowerCase()})` : ''}`)
          : 'kompendiet'}
        .
      </p>
    )
  }
  return (
    <aside className="notice">
      <strong>Merk:</strong> Alle videoer og podkaster her er AI-generert og bygger på kompendiet i IN1020.
      Ta dem med en liten klype salt, og sjekk alltid mot kompendiet.
      {courseUrl && <> Kompendiet og alt annet undervisningsmateriell finner du på {link(courseUrl, 'emnesiden til IN1020')}.</>}
    </aside>
  )
}
