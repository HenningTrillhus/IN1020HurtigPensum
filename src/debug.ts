// Testverktøy. Av for alle andre: slås på ved å åpne siden med ?debug=1 (og av igjen med ?debug=0).
const KEY = 'debug'
try {
  const p = new URLSearchParams(location.search).get('debug')
  if (p === '1') localStorage.setItem(KEY, '1')
  else if (p === '0') localStorage.removeItem(KEY)
} catch { /* ignore */ }

export const isDebug = (): boolean => {
  try { return localStorage.getItem(KEY) === '1' } catch { return false }
}
