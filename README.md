# IN1020 Hurtigpensum

**Pensum i korte klipp.** En studentlaget nettside for IN1020 ved UiO. Sveip deg gjennom ca. ett minutt lange videoer per delkapittel, hør på podkaster, og slå opp fagbegreper. Bygget som en TikTok-/Reels-aktig feed, fordi det er lettere å åpne en video enn en PDF.

**Live:** https://in1020-hurtig-pensum.vercel.app

> **Merk:** Videoene og podkastene er AI-generert (NotebookLM og Gemini) og bygger på kompendiet i IN1020. Ta dem med en klype salt, og sjekk alltid mot kompendiet.

---

## Hva du kan gjøre

- **Sveipe gjennom videoer.** Én video om gangen, med snapping. Sveip forbi den siste og du kommer tilbake til kapitlet. Piltaster fungerer på PC.
- **Rene kontroller.** Teksten og knappene tones bort når videoen spiller, så du ser hele bildet. Trykk på skjermen for å hente dem tilbake. Pause-knappen ligger midt på videoen, og spolelinjen nederst.
- **Hastighet.** 0,75×, 1×, 1,25× og 1,5× for både video og podkast. Valget huskes.
- **Podkaster.** En fast spiller nederst som fortsetter når du bytter side, husker hvor du var, og har hopp på 10 sekunder og styring fra låseskjermen. Videoene pauses og dempes mens en podkast spiller.
- **Delkapitler med flere videoer.** En liten velger lar deg hoppe mellom delene.
- **Fagbegreper.** Egen fane per delkapittel, og et søk øverst i hvert kapittel som viser hvilke delkapitler som tar opp et begrep.
- **Tommel opp og ned** og visningstall på videoene, med vern mot spam.
- **Nedtelling til eksamen** på forsiden, mørkt og lyst tema (mørkt som standard), og layout som er laget for telefon først.

## Teknologi

| Del | Valg |
|---|---|
| Frontend | Vite, React 19, TypeScript (strict) |
| Ruting | Hash-ruting (`#/`, `#/kap/<n>`, `#/<tema>/<feed\|begreper>`), ingen ruter å konfigurere |
| Innhold | Statiske filer i `public/content/`, ingen database for selve pensumet |
| Tall (likes, visninger) | Vercel Functions i `api/` og Upstash Redis |
| Hosting | Vercel |

Tema, hastighet og avspillingsposisjon lagres lokalt i nettleseren. Det er ingen innlogging.

## Kjøre lokalt

```bash
npm install
npm run dev
```

Siden åpnes på http://localhost:5173. Serveren lytter også på nettverket, så du kan åpne den på telefonen via PC-ens IP-adresse.

Andre kommandoer:

```bash
npm run build     # typesjekk og produksjonsbygg
npm run lint      # oxlint
npm run preview   # forhåndsvis produksjonsbygget
```

Tellerne for likes og visninger krever en Redis-database og virker bare på Vercel eller med miljøvariabler satt lokalt (se under). Uten dem fungerer resten av siden som normalt.

## Legge til innhold

Hvert delkapittel er en mappe i `public/content/<tema-id>/`:

```
public/content/k6-4-inverter/
  tema.json        beskrivelse, videoer, podkaster og fagbegreper
  video1.mp4       videoene, i rekkefølge
  podkast-dame.m4a eventuelle podkaster
```

1. Lag mappen og legg inn filene.
2. Lag `tema.json` (bruk `public/content/k6-4-inverter/tema.json` som mal). Kapittelet leses fra feltet `chapter`, f.eks. `"Kapittel 6 – Transistor, strøm og spenning"`.
3. Legg tema-id-en inn i `public/content/index.json`. Der ligger også lenker til kompendiene og eksamensdatoen.

Delkapitler uten videoer vises som «Work in progress» til de er fylt inn.

**Tips til videofilene:** Legg metadata først i filen (`faststart`), så starter de med en gang uten å laste alt. Vercel cacher medier i en dag og viser gammel versjon i bakgrunnen mens den henter ny.

Prompter til å lage videoene i Gemini/NotebookLM ligger i [`prompts/`](prompts/).

## Miljøvariabler

Settes i Vercel (Project → Settings → Environment Variables):

| Variabel | Bruk |
|---|---|
| `KV_REST_API_URL` | Adressen til Upstash Redis |
| `KV_REST_API_TOKEN` | Tilgangsnøkkel til Upstash Redis |

API-et har opprinnelseskontroll, grense per IP, et tak på skriving per døgn, og hver teller stopper på 999.

## Legge ut

Prosjektet er koblet til Vercel. Fra mappen:

```bash
npx vercel --prod --yes
```

## Struktur

```
api/                Vercel Functions: stats, vote, view
prompts/            Prompter til videoene (Gemini/NotebookLM)
public/content/     Alt innholdet: temaer, videoer, podkaster
public/podcast-icons/
src/pages/          Forside, kapittel, feed og fagbegreper
src/                Spiller, tema, hastighet, søk og felles komponenter
vercel.json         Cache-regler for filene
```
