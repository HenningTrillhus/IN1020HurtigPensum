# NotebookLM-prompt for den lange podkasten: hele kapittel 7

Kilde: `kap07.pdf` fra mappen «Pensum Kompendier». Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 7 som kilde.

Lengde: ca. 25 minutter (ca. 3600 ord). Vil du ha den kortere, bytt «25 minutter» med «15 minutter» (ca. 2200 ord) og kutt delene som er merket «kan kuttes».

Podkasten hører til «7 Hele kapitlet i én video», øverst i kapittel 7. Bruk et ikon med mann og dame som ikke allerede er brukt på en av podkastene i kapittel 7.

```
Lag en lang podkast på norsk bokmål, ca. 25 minutter (ca. 3600 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 7 («Minnehierarki og pipeline») som kilde, og dekk hele kapittelet. Bruk bare tall og eksempler som står der. Ikke finn på detaljer. Ikke gå inn på forgreningsprediksjon, superskalar, utføring ute av rekkefølge eller flere kjerner: det kommer senere. Ikke forklar hvorfor klokka stoppet, transistorer eller porter.

HOVEDLINJE (fortell det som én sammenhengende historie rundt den ene ideen bak kapittelet: begge halvdelene nekter å vente. Ikke som en liste)
1. Åpning: to løkker gjør like mye arbeid og legger sammen de samme tallene, men den ene tar 13 millisekunder og den andre 441, over tretti ganger tregere. Den ene går fra nabo til nabo gjennom minnet, den andre hopper 32 000 byte hver gang. Rekkefølgen avgjør. Hvorfor, det er hele kapittelet.
2. Hvorfor et hierarki: prosessoren venter. Fra L1 til harddisk er det 4 sykluser mot 24 millioner. Avstand koster tid: lange ledninger og store dekodere gjør stort minne tregt. Raskt, stort og billig: velg to, SRAM mot DRAM. Løsningen er flere lag, som pulten, hylla og biblioteket, en minnepyramide. Og bommene dominerer: effektiv aksesstid er 10,9 ns ved 90 prosent treff og 1,99 ns ved 99 prosent.
3. Lokalitet: hvorfor hierarkiet virker. Tidslokalitet: brukte du noe nylig, bruker du det snart igjen. Stedslokalitet: brukte du noe, bruker du naboen. Radvis mot kolonnevis gir samme arbeid og over tretti ganger forskjellig fart, og det er svaret på åpningen.
4. Cachen: prosessoren ber om fire byte og får en cachelinje på 64 byte, derfor lønner naboskap seg. Treff og bom, og at en bom utløser henting. Flere nivåer, L1, L2 og L3, og L1 er delt i to. Skriving: gjennomskriving er enkelt og tregt, tilbakeskriving er raskt men kopiene kan bli uenige. Når flere kjerner har hver sin kopi, er det cache-koherens. Og cachen er usynlig for programmet.
5. Pipelinen: tre som tar oppvasken, 90 minutter blir 32. De fire trinnene hent, tyd, utfør og skriv tilbake, IF, DE, EX og WB. Regnestykket: tre pluss antall instruksjoner, og gevinsten nærmer seg fire. Latens endres ikke, gjennomstrømningen er der gevinsten ligger.
6. Når pipelinen stopper: avhengighet er en egenskap ved programmet, hasard en følge av maskinvaren. Datahasard: en ADD venter på en LDA, bobler, og tre instruksjoner bruker ti sykluser. Kontrollhasard: et hopp som tas kaster to instruksjoner og tømmer pipelinen. Strukturhasard: to trinn vil ha samme minne. Kan kuttes: detaljene om hvordan maskinen kan vente på minnet eller på seg selv.
7. Avslutt med den ene ideen to ganger: cachen venter ikke på RAM, den har en kopi nær. Pipelinen venter ikke på instruksjonen foran, den setter i gang med den neste. Begge virker fordi programmer har et mønster, og begge svikter når mønsteret brytes: en bom og en tømt pipeline. Ingen av dem er synlige for programmet, bare farten endres.

STIL
- Mange bilder og metaforer (pulten, hylla og biblioteket, tre som tar oppvasken, en bokhylle). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: begge nekter å vente, og begge feiler når mønsteret brytes.
```

---

## Etter generering

Legg podkasten i `Kap07/Podkast/` som `Kapittel7.m4a` og gi meg beskjed. Jeg legger den inn i «7 Hele kapitlet i én video» med et ikon med mann og dame som ikke er brukt i kapitlet fra før.
