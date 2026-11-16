import { segments } from './search'

/** Teksten med søkeordene markert. */
export default function Mark({ text, ws }: { text: string; ws: string[] }) {
  return <>{segments(text, ws).map((s, i) => (s.hit ? <mark key={i}>{s.t}</mark> : s.t))}</>
}
