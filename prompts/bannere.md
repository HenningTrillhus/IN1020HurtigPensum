# Bannerprompter for alle kapitler

Banneret ligger bak kapittelkortet på forsiden (og kanskje i toppen av kapittelsiden), under ikon og tekst. Det blir dempet i appen, så det må tåle å bli svært svakt og fortsatt se pent ut.
Kapittel 5 er allerede laget (kretskort med porter), og er stilreferansen for oppsettet.

Hvert kapittel har sin egen farge (samme som kapittelikonet) og sitt eget motiv, hentet fra innholdet. Legg ved kapittelikonet som referanse for farge og linjestil når du genererer: `public/chapter-icons/<ikon>.png`.

Kapitler: Datasikkerhet, Nettverk, 2 Digital representasjon, 3 Instruksjoner, 4 Arkitektur og ALU, 5 (ferdig), 6 Transistor, strøm og spenning, 7 Minnehierarki og pipeline, 8 Moderne maskiner.

---

## Hovedprompt (lim inn først, hver gang)

```
Lag et bredt, abstrakt bakgrunnsbilde til et kapittelbanner i en studieapp, i samme visuelle stil som det vedlagte kapittelikonet.

FORMAT
- Bredt bilde, 4:1 (for eksempel 2400 x 600 piksler). Kantene skal kunne beskjæres vilkårlig uten at noe viktig forsvinner.

STIL
- Flat vektorstil, tynne jevne linjer, ingen gradienter, ingen skygger, ingen glans, ingen 3D, ingen fotorealisme.
- Én enkelt fargefamilie (angitt under) i tre toner: en mørk, dyp bakgrunnsfarge, en litt lysere linjefarge og en svak lys krem som aksent. Alt har LAVT kontrast mot bakgrunnen, så det fungerer som en subtil tekstur, ikke et motiv som tar oppmerksomheten. Ingen knall-farger, ingen andre fargefamilier.
- Bakgrunnen er en rolig, mørk, dempet farge (se under), ikke svart.
- Uten fyllte flater: bare konturer og tynne linjer, litt prikker i knutepunkter eller som detaljer.
- Komposisjon: midten og venstre tredjedel er rolige og lite detaljerte (der ikon og tekst skal ligge). Mønsteret blir tettere og tydeligere mot høyre side.
- Ingen tekst, ingen tall, ingen bokstaver, ingen mennesker, ingen emojis (unntatt der motivet under uttrykkelig ber om symboler).

UTRYKK
Rolig, ryddig og lowkey. Skal passe bak hvit tekst uten å forstyrre. Hvert banner skal se tydelig annerledes ut enn de andre, både i farge og i motiv.

FARGE OG MOTIV
```

---

## Datasikkerhet

```
Fargefamilie: dempet rød/rosa-rød (linjer omtrent RGB 198, 84, 83 mot en mørk, dyp vinrød bakgrunn omtrent RGB 56, 22, 24).
Motiv: sikkerhet og kryptering. Tynne konturer av hengelåser og nøkler i ulike størrelser, skjold med en liten avkrysning, og lange rader av tilfeldige binære tegn tegnet som små streker og prikker (ikke lesbare sifre). Et fingeravtrykk-mønster av konsentriske kurver kan gå ut mot høyre kant. Mer tett mot høyre side.
```

## Nettverk

```
Fargefamilie: dempet rosa/lyserosa (linjer omtrent RGB 226, 156, 190 mot en mørk, dyp plommefarge bakgrunn omtrent RGB 50, 28, 42).
Motiv: nettverk. En stjerne- og mesh-topologi av prikker (noder) forbundet med tynne rette og svakt buede linjer, noen små pakkesymboler (firkanter) på linjene, og noen konsentriske buer som antyder trådløst signal. Mer tett mot høyre side, spredt og luftig mot venstre.
```

## 2 Digital representasjon

```
Fargefamilie: dempet blå (linjer omtrent RGB 91, 123, 192 mot en mørk marineblå bakgrunn omtrent RGB 22, 30, 56).
Motiv: tall, biter og signaler. Rader av små tomme firkanter som representerer biter (noen med en strek inni som «1», andre tomme som «0»), en sinusbølge som blir til en trappetrinnskurve (analog til digital), og et lite rutenett av piksler. Ingen lesbare tall. Mer tett mot høyre side.
```

## 3 Instruksjoner

```
Fargefamilie: dempet oransje/terrakotta (linjer omtrent RGB 217, 138, 85 mot en mørk, dyp brun bakgrunn omtrent RGB 52, 32, 22).
Motiv: instruksjoner og programmer. Rader av små rektangler som ser ut som et minne med postkasser/adresseceller (tomme bokser på rad og rekke), tynne piler som viser at en teller hopper fra en celle til neste, og en liten løkke-pil. Ingen lesbar tekst. Mer tett mot høyre side.
```

## 4 Arkitektur og ALU

```
Fargefamilie: dempet blågrønn/petrol (linjer omtrent RGB 74, 138, 136 mot en mørk, dyp petrolfarge bakgrunn omtrent RGB 18, 42, 44).
Motiv: prosessorens indre. Et blokkdiagram med rektangler for registre, en trapesformet ALU (en V-formet boks som tar to innganger og gir én utgang), og brede busser som tynne parallelle linjer med små piler mellom boksene. Mer tett og detaljert mot høyre side.
```

## 6 Transistor, strøm og spenning

```
Fargefamilie: dempet gul/gylden (linjer omtrent RGB 209, 168, 67 mot en mørk, varm oliven/brun bakgrunn omtrent RGB 46, 38, 16).
Motiv: elektronikk og transistorer. Tynne symboler for en transistor, motstand, batteri og en bryter, en bølgende klokkepuls (firkantbølge) og en liten sinuskurve, forbundet med strømledninger med 90-graders knekk. Skal ikke ligne kretskortet i kapittel 5, så bruk færre ledninger og flere separate symboler med mer luft. Mer tett mot høyre side.
```

## 7 Minnehierarki og pipeline

```
Fargefamilie: dempet grønn (linjer omtrent RGB 111, 159, 114 mot en mørk, dyp skogsgrønn bakgrunn omtrent RGB 20, 36, 26).
Motiv: minne og pipeline. En trappepyramide av lag i konturer (smal øverst, bred nederst), og lange horisontale samlebånd av like firkantede trinn der små firkanter flyter gjennom på rad og overlapper. Gjerne noen små klokkesymboler. Mer tett mot høyre side.
```

## 8 Moderne maskiner

```
Fargefamilie: dempet turkis/cyan (linjer omtrent RGB 91, 169, 180 mot en mørk, dyp blågrønn bakgrunn omtrent RGB 16, 38, 44).
Motiv: moderne maskiner. Et rutenett av mange like små kjerner (firkanter i rader, som en flerkjerne- eller GPU-brikke), en liten sky i omriss og noen tynne linjer som forbinder dem til en mobil og en bærbar tegnet som enkle konturer. Mer tett mot høyre side, mer rolig mot venstre.
```

---

## Etter generering

Send bildene til meg (gjerne i en mappe), så komprimerer jeg dem og legger dem bak hvert kapittelkort med samme nivå som kapittel 5. Tonen justeres per bilde slik at tekst og ikon alltid er tydelige.
