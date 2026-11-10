# IN1020 Hurtigpensum

Pensum i korte klipp. En enkel nettside der du sveiper gjennom ca. ett minutt lange videoer per tema, hører på podkaster og tester deg selv med quiz.

**Merk:** videoene og podkastene er AI-generert og refererer til kompendiet i IN1020. Ta dem med en klype salt og sjekk alltid mot kompendiet.

## Kjøre lokalt

```bash
npm install
npm run dev
```

Siden åpnes på http://localhost:5173. Serveren lytter også på nettverket, så du kan åpne den på telefonen via PC-ens IP.

## Legge til innhold

Hvert tema er en mappe i `public/content/<tema-id>/` med en `tema.json`, videoer (`video1.mp4`, ...) og eventuelt en podkast.

1. Lag mappen og legg inn filene.
2. Lag `tema.json` (se `public/content/k6-4-inverter/tema.json` som mal).
3. Legg tema-id-en inn i `public/content/index.json`.

Prompter til å lage videoer i Gemini/NotebookLM ligger i `prompts/`.

## Teknologi

Vite, React og TypeScript. Ingen backend. Fremdrift og quiz-resultater lagres i nettleseren (`localStorage`).
