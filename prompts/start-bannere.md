# Bannerprompter til «Kom i gang»-knappen (alle kapitler)

Knappen øverst i hvert kapittel er en bred, lav stripe i kapittelets farge, med en avspillingsknapp og hvit tekst til venstre («Kom i gang» og tittelen på første video). Banneret ligger bak, som mønster i knappen.

Knappen er ca. 8:1 (omtrent 500 x 64 px), men bildegeneratorer klarer sjelden så smalt. Lag bildet i **4:1** (for eksempel 2400 x 600), med alt som skal synes i en smal stripe midt i bildet. Jeg beskjærer det til 8:1 og legger det bak knappen.

Det skal være tydeligere og lysere enn de vanlige kapittelbannerne, siden knappen er en fylt flate og ikke en mørk bakgrunn, men fortsatt rolig nok til at hvit tekst leses uten problem.

Legg ved kapittelbanneret (`public/chapter-banners/ch2.webp` osv.) som stilreferanse hver gang.

---

## Hovedprompt (lim inn først, hver gang)

```
Lag et rent mønsterbilde som skal brukes som bakgrunn bak noe annet. Det skal være i samme visuelle stil, med samme motivfamilie som det vedlagte kapittelbanneret, men i en lysere, mer fargerik utgave.

DETTE ER IKKE EN KNAPP OG IKKE ET UI-DESIGN. Tegn ingen knapp, ingen sirkel, ingen ramme, ingen avrundede hjørner, ingen skjerm og ingen mockup. Bildet er bare et flatt mønster som fyller hele flaten helt ut til alle fire kanter.

FORMAT
- 4:1, 2400 x 600 piksler.
- Alt viktig ligger i en vannrett stripe midt i bildet, i de midterste 50 prosentene av høyden. Over og under er det bare rolig bakgrunnsfarge, siden bildet beskjæres til en smal stripe.
- Den venstre tredjedelen er rolig og nesten tom, bare bakgrunnsfarge og noen svake linjer, uten noen former eller sirkler. Mønsteret ligger i høyre halvdel og blir gradvis svakere mot venstre.

STIL
- Flat vektorstil, tynne jevne linjer, ingen gradienter, ingen skygger, ingen glans, ingen 3D, ingen fotorealisme.
- Bakgrunnen er en jevn, middels mørk, dempet farge (se kapittelfargen under), ikke svart. Linjene og symbolene er en lysere variant av samme farge, og noen få små prikker eller detaljer i nesten hvitt. Kontrasten er middels: tydelig synlig, men aldri så sterk at tekst oppå blir vanskelig å lese.
- Bare konturer og tynne linjer, litt prikker i knutepunkter. Ingen utfylte flater.
- ABSOLUTT INGEN TEKST, heller ikke plassholdertekst som «button», «study app» eller liknende: ingen ord, ingen bokstaver, ingen tall, ingen sifre (heller ikke 0 og 1), ingen etiketter, ingen logoer, ingen vannmerke, ingen kodelinjer. Der noe ellers ville vært skrift, tegn en tynn vannrett strek. Ingen mennesker, ingen ansikter, ingen emojis.

UTTRYKK
Innbydende, rolig og litt lysere enn kapittelbanneret. Skal få knappen til å se ut som starten på noe.

MOTIV OG FARGE
```

---

## Kapittel 2: Digital representasjon

```
Fargefamilie: blå. Bakgrunn omtrent RGB 52, 76, 130, linjer omtrent RGB 130, 162, 225, små detaljer nesten hvite.
Motiv: bit og representasjon. Rader av små tomme firkanter, noen med en enkel prikk eller strek inni (bit), en tynn sinuskurve som går over i en trappekurve (sampling), et lite pikselrutenett der noen ruter er lysere, og noen få tynne kretslinjer.
```

## Kapittel 3: Instruksjoner

```
Fargefamilie: kobber/oransje. Bakgrunn omtrent RGB 112, 64, 34, linjer omtrent RGB 226, 150, 98, små detaljer nesten hvite.
Motiv: instruksjoner og flyt. En rad av små, like firkanter som postkasser, tynne piler som hopper mellom dem, et lite flytskjema med en rombe og en løkkepil, og noen stiplede korte linjer.
```

## Kapittel 4: Arkitektur og ALU

```
Fargefamilie: petrol/blågrønn. Bakgrunn omtrent RGB 28, 84, 90, linjer omtrent RGB 100, 178, 176, små detaljer nesten hvite.
Motiv: prosessorens indre. Tomme konturer av blokker og registre som rektangler, en ALU som en V-formet trapes, brede busser som parallelle bånd med små piler, og noen små firkantede flagg-bokser. Strengt rettvinklet, uten kurver.
```

## Kapittel 5: Porter og logiske funksjoner

```
Fargefamilie: lilla. Bakgrunn omtrent RGB 92, 62, 104, linjer omtrent RGB 186, 148, 198, små detaljer nesten hvite.
Motiv: kretskort med logiske porter. Tynne kretslinjer med 90-graders knekk og små prikker i knutepunktene, og noen få porter tegnet som tomme konturer: AND, OR, NOT, XOR og en NAND med en liten sirkel.
```

## Kapittel 6: Transistor, strøm og spenning

```
Fargefamilie: gul/gylden. Bakgrunn omtrent RGB 110, 86, 30, linjer omtrent RGB 224, 186, 92, små detaljer nesten hvite.
Motiv: elektronikk. Tynne konturer av en transistor, en motstand, et batteri, en bryter, en firkantbølge (klokkepuls) og en sinuskurve, forbundet med noen få strømledninger med 90-graders knekk. Symbolene med god luft mellom.
```

## Kapittel 7: Minnehierarki og pipeline

```
Fargefamilie: grønn. Bakgrunn omtrent RGB 44, 88, 58, linjer omtrent RGB 128, 182, 132, små detaljer nesten hvite.
Motiv: minne og pipeline. En liten trappepyramide av lag i konturer (smal øverst, bred nederst), et langt samlebånd av like firkantede trinn der små firkanter flyter gjennom på rad, og et par små klokkesymboler.
```

## Kapittel 8: Moderne maskiner

```
Fargefamilie: turkis. Bakgrunn omtrent RGB 36, 112, 124, linjer omtrent RGB 120, 196, 204, små detaljer nesten hvite.
Motiv: hele moderne maskinen. Små brikker i et rutenett (kjerner), et tynt hjerneomriss, en sky, en laptop og en telefon, en lang rad av små hurtigbuffer-celler og noen tannhjul, forbundet med tynne linjer med prikker.
```

## Nettverk

```
Fargefamilie: plomme/rosa. Bakgrunn omtrent RGB 108, 52, 84, linjer omtrent RGB 218, 150, 186, små detaljer nesten hvite.
Motiv: et nettverk. Noder forbundet med tynne linjer i et uregelmessig nett, små konvolutter (pakker) på noen av linjene, konsentriske bølgebuer (Wi-Fi) og noen ruterkonturer. Noen noder er lysere.
```

## Datasikkerhet

```
Fargefamilie: rød. Bakgrunn omtrent RGB 112, 34, 40, linjer omtrent RGB 222, 112, 108, små detaljer nesten hvite.
Motiv: sikkerhet. Tynne konturer av hengelåser, nøkler og skjold med hake, rader av små prikker og korte streker som antyder data (ingen sifre, ingen tall), og et fingeravtrykk av konsentriske linjer i høyre del. Kretslinjer forbinder dem.
```

---

## Etter generering

Legg bildene i `KapBanners/StartBanner/` som `Start2.jpeg`, `Start3.jpeg` … `Start8.jpeg`, `StartNettverk.jpeg` og `StartSikkerhet.jpeg`, og gi meg beskjed. Jeg beskjærer dem til en smal stripe, komprimerer dem og legger dem bak knappen med en myk mørkning til venstre så teksten alltid er lett å lese. Kapitler som ikke har fått et bilde ennå, beholder den vanlige fargeknappen.
