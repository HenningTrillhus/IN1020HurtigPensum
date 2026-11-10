// Samme markup og CSS som lasteskjermen i index.html, så overgangen blir sømløs.
export function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader-logo"><span className="loader-ring" /><img src="/favicon-192.png" alt="" /></div>
      <p className="loader-text">Laster pensum<span className="dots"><i>.</i><i>.</i><i>.</i></span></p>
      <div className="loader-bar"><span /></div>
    </div>
  )
}

export function LoadError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="loader error" role="alert">
      <p style={{ fontSize: 40, margin: 0 }}>📡</p>
      <p className="loader-text">Fikk ikke tak i innholdet. Sjekk nettforbindelsen din.</p>
      <button onClick={onRetry}>Prøv igjen</button>
    </div>
  )
}
