export const KOMPENDIUM_URL = 'https://www.uio.no/studier/emner/matnat/ifi/IN1020/h26/undervisningsmateriell/kap06.pdf'

export default function Disclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="notice compact">
        AI-generert, ta med en klype salt. Kilde: <a href={KOMPENDIUM_URL} target="_blank" rel="noreferrer">kompendiet</a>.
      </p>
    )
  }
  return (
    <aside className="notice">
      <strong>Merk:</strong> Alle videoer og podkaster her er AI-generert og refererer til{' '}
      <a href={KOMPENDIUM_URL} target="_blank" rel="noreferrer">kompendiet (kapittel 6)</a>.
      Ta dem med en liten klype salt, og sjekk alltid mot kompendiet.
    </aside>
  )
}
