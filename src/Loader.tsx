// Samme markup og CSS som lasteskjermen i index.html, så overgangen blir sømløs.
export function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader-spinner" />
      <p className="loader-text">Laster</p>
    </div>
  )
}

export function LoadError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="loader error" role="alert">
      <p className="loader-text">Fikk ikke tak i innholdet. Sjekk nettforbindelsen din.</p>
      <button onClick={onRetry}>Prøv igjen</button>
    </div>
  )
}
