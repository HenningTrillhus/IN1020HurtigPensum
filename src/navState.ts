import { useState } from 'react'

// Hukommelse for å komme tilbake dit du var, bare så lenge siden er åpen (nullstilles ved reload).

const queries = new Map<string, string>()
let origin: string | null = null

/** Er adressen en side for ett delkapittel (videoer eller fagbegreper)? */
export const isTopicHash = (hash: string) => {
  const a = hash.replace('#', '').split('/')[1]
  return !!a && a !== 'kap' && a !== 'shuffle' && a !== 'admin'
}

/** Siden du kom fra da du gikk inn på et delkapittel (forsiden med søk, et kapittel, fagbegreper …). */
export const getOrigin = () => origin
export const setOrigin = (hash: string | null) => { origin = hash }
export const clearQueries = () => queries.clear()

/** Søketekst som overlever at du går inn på en video og tilbake. */
export function useStoredQuery(key: string): [string, (v: string) => void] {
  const [q, setQ] = useState(() => queries.get(key) ?? '')
  const set = (v: string) => { queries.set(key, v); setQ(v) }
  return [q, set]
}
