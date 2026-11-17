# IN1020 Hurtigpensum

**Pensum i korte klipp.** En studentlaget nettside for IN1020 ved UiO. Sveip deg gjennom ca. ett minutt lange videoer per delkapittel, hør på podkaster, og slå opp fagbegreper. Bygget som en TikTok-/Reels-aktig feed, fordi det er lettere å åpne en video enn en PDF.

**Live:** https://www.in1020-hurtig-pensum.no (også https://in1020-hurtig-pensum.vercel.app)

> **Merk:** Videoene og podkastene er AI-generert (NotebookLM og Gemini) og bygger på kompendiet i IN1020. Ta dem med en klype salt, og sjekk alltid mot kompendiet.

---

## Hva du kan gjøre

- **Sveipe gjennom videoer.** Én video om gangen, med snapping. Du kan sveipe både opp og ned, og sveipe forbi den siste for å komme tilbake til kapitlet. Piltaster fungerer på PC.
- **Autoswipe.** Knappen «Auto» går av seg selv til neste video når den du ser er ferdig. Den er alltid av når du går inn i en feed, og står bare på mens du blir i den.
- **Rene kontroller.** Teksten og knappene tones bort når videoen spiller, så du ser hele bildet. Et trykk på skjermen henter dem tilbake, mens et sveip ikke gjør det. Pause-knappen ligger midt på videoen, med spol 10 sekunder tilbake og fram på hver side, og spolelinjen nederst.
- **Hastighet.** 0,75×, 1×, 1,25× og 1,5× for både video og podkast. Valget huskes.
- **Podkaster.** En fast spiller nederst som fortsetter når du bytter side, husker hvor du var, og har hopp på 10 sekunder og styring fra låseskjermen. Videoene pauses og dempes mens en podkast spiller. Hvert kapittel har egne podkastikoner i kapittelets farger.
- **Bland.** Tilfeldige videoer på tvers av alle kapitler, bare de du ikke har sett. Har du sett alle, blir det et tilfeldig utvalg av alle videoene. Under shuffle er det en knapp som tar deg til delkapittelet videoen hører til.
- **Delkapitler med flere videoer.** En liten velger lar deg hoppe mellom delene, og baren øverst kan dras for å velge video.
- **Fagbegreper.** Egen fane per delkapittel, og et søk øverst i hvert kapittel som viser hvilke delkapitler som tar opp et begrep. Søket på forsiden finner også videoer (titler og sammendrag), i en egen seksjon under fagbegrepene.
- **Kapittelsider** med banner, ikon per delkapittel og en startknapp som hopper rett til neste video du ikke har sett.
- **Fremdrift.** Hvilke videoer du har sett, total fremdrift på forsiden og fremdrift per kapittel.
- **Kapittelmerker.** Hvert kapittel har et merke som er låst til du har sett alle videoene, og åpent etterpå, med gratulasjon og konfetti og en knapp for å dele det. Ferdige kapitler får merket i stedet for ikonet på forsiden, og et trofé for hele pensum ligger i fremdriftsarket. Med `?debug=1` i adressen vises testknapper som gjør et delkapittel ferdig eller nullstiller det.
- **Installerbar.** Siden har manifest og ikoner, så den kan legges på hjemskjermen.
- **Tommel opp og ned**, visningstall, rating av kapitler og «meld feil» på videoene, med vern mot spam.
- **Velkomstboks** første gang du åpner siden, som oppfordrer til å dele lenken videre.
- **Nedtelling til eksamen**, mørkt og lyst tema (mørkt som standard), og layout som er laget for telefon først. Sidene glir inn med View Transitions der nettleseren støtter det.
- **Skjult statistikkside** (`#/admin/<nøkkel>`) med visninger, likes, feilmeldinger og hvor mye lagring Vercel-prosjektet bruker.

## Teknologi

| Del | Valg |
|---|---|
| Frontend | Vite, React 19, TypeScript (strict) |
| Ruting | Hash-ruting (`#/`, `#/kap/<n>`, `#/<tema>/<feed\|begreper>`), ingen ruter å konfigurere |
| Innhold | Statiske filer i `public/content/`, ingen database for selve pensumet |
| Tall (likes, visninger) | Vercel Functions i `api/` og Upstash Redis |
| Hosting | Vercel |

Tema, hastighet, autoswipe, sette videoer og avspillingsposisjon lagres lokalt i nettleseren. Det er ingen innlogging.

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
  video1.jpg       stillbilde til hver video (første bilde med innhold)
  icon.png         delkapittelikon (256 x 256, rund)
  podkast-dame-mann.m4a  eventuelle podkaster
```

1. Lag mappen og legg inn filene.
2. Lag `tema.json` (bruk `public/content/k6-4-inverter/tema.json` som mal). Kapittelet leses fra feltet `chapter`, f.eks. `"Kapittel 6 – Transistor, strøm og spenning"`.
3. Legg tema-id-en inn i `public/content/index.json`. Der ligger også lenker til kompendiene og eksamensdatoen.

Delkapitler uten videoer vises som «Work in progress» til de er fylt inn.

Podkastikoner ligger i `public/podcast-icons/` og velges med feltet `icon` (filnavn uten `.png`). Kapittelbannere og kapittelikoner ligger i `public/chapter-banners/` og `public/chapter-icons/` og settes opp i `src/chapters.ts`.

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

Prosjektet er koblet til Vercel. Bruk deploy-skriptet fra mappen, som også sletter gamle deployments så lagringen (10 GB på gratisplanen) ikke fylles opp:

```powershell
./scripts/deploy.ps1
```

Skriptet kjører `npx vercel --prod --yes` og deretter `scripts/cleanup-deploys.ps1`. Byggesteget oppdaterer `public/storage.json`, som admin-siden viser.

## Struktur

```
api/                Vercel Functions: stats, vote, view, rating, report, admin
prompts/            Prompter til videoene (Gemini/NotebookLM)
public/content/     Alt innholdet: temaer, videoer, podkaster
public/podcast-icons/     Podkastikoner per kapittel
public/chapter-banners/   Bannere og startbannere per kapittel
public/chapter-icons/     Kapittelikoner
scripts/            Deploy, opprydding og lagringsmåling
src/pages/          Forside, kapittel, feed og fagbegreper
src/                Spiller, tema, hastighet, søk og felles komponenter
vercel.json         Cache-regler for filene
```

## Lenker

Kildekoden ligger på GitHub: https://github.com/HenningTrillhus/IN1020HurtigPensum
