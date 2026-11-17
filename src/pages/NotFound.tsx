// Vises når adressen ikke peker på noe: et kapittel eller delkapittel som ikke finnes, eller en gammel lenke.
export default function NotFound() {
  return (
    <div className="shell">
      <nav className="tabs">
        <a href="#/">← Alle kapitler</a>
      </nav>
      <div className="wip-page nf-page">
        <p className="nf-code" aria-hidden>404</p>
        <h2>Her var det tomt</h2>
        <p>Siden du lette etter finnes ikke, eller lenken er gammel. Delkapitlene kan ha skiftet navn underveis.</p>
        <div className="nf-actions">
          <a className="wip-back" href="#/">Til forsiden</a>
          <a className="nf-alt" href="#/shuffle">Bland videoer</a>
        </div>
      </div>
    </div>
  )
}
