# NotebookLM-prompt for den lange podkasten: hele kapittel 2

Kilde: `kap02.pdf` fra mappen «Pensum Kompendier». Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 2 som kilde.

Lengde: ca. 30 minutter (ca. 4300 ord), siden kapittel 2 er det lengste kapittelet. Vil du ha den kortere, bytt «30 minutter» med «20 minutter» (ca. 2900 ord) og kutt delene som er merket «kan kuttes».

Podkasten hører til «2 Hele kapitlet i én video», øverst i kapittel 2. Bruk et ikon med mann og dame (dame-mann-3 til dame-mann-8 er ledige).

```
Lag en lang podkast på norsk bokmål, ca. 30 minutter (ca. 4300 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde, og dekk hele kapittelet. Bruk bare tall og eksempler som står der. Ikke finn på detaljer. Ikke forklar hvordan maskinen kjører instruksjoner eller hva som skjer inni prosessoren: det hører til senere kapitler.

HOVEDLINJE (fortell det som én sammenhengende historie rundt den bærende ideen: et bitmønster betyr det vi har blitt enige om at det betyr, og hver representasjon har en pris og en grense. Ikke som en liste)
1. Bit: et bit er noe som kan være i én av to tilstander, og navnene er tilfeldige. Hvorfor bare to? Fordi det er robust, som å rope «ja» eller «nei» over en støyete bakgård i stedet for et siffer fra 0 til 9. Og det samme åtte-bits mønsteret, 01000001, kan være tallet 65, bokstaven A, en mørk rødtone eller starten på en instruksjon. Bitene sier ikke hvilken tolkning som gjelder, det gjør avtalen.
2. Tall i ulike baser: et posisjonssystem gir hvert siffer en vekt etter hvor det står, 527 er fem hundrer, to tiere og sju enere. Ti er valgt fordi vi har ti fingre. I binær er vektene 1, 2, 4, 8, 16 og videre, som en lommebok med sedler der du velger om hver seddel er med. Konvertering: vektmetoden og gjentatt multiplikasjon til desimal, og største vekt som får plass og divisjonsmetoden fra desimal, der restene leses nedenfra og opp. Heksadesimal er kortskrift: seksten er to opphøyd i fire, så ett siffer er nøyaktig fire bit, og 0x669F er 0110 0110 1001 1111. Oktal er tre bit per siffer og overlever i filrettigheter (chmod 755). Kan kuttes: eksemplene med base 6 og base 5.
3. Byte og designvalg: n bit rommer 2 opphøyd i n verdier, en byte er åtte bit og 256 verdier. Tommelfingerregelen: ti bit er omtrent tusen. MB mot MiB, og derfor har en «1 TB»-disk 931 GiB. BCD koder hvert desimalsiffer i fire bit og kaster seks av seksten mønstre, men er eksakt for penger.
4. Negative tall: toerkomplement, der alt er som før bortsett fra at øverste bit har negativ vekt. Inverter og legg til 1 snur fortegnet. Og addisjon virker uendret: maskinen legger sammen og kaster menten, derfor trengs ingen subtraksjonskrets. Området er fra minus 128 til 127, og det finnes ett negativt tall mer enn positive. Fortegn og magnitude og enerkomplement tapte fordi de har to nuller. Og bitene sier ikke om et tall er negativt, det gjør typen.
5. Overflyt: kilometertelleren som ruller fra 999999 til 000000. 1 million ganger 1 million i en int blir minus 727 379 968, og ingen sier fra. Python har ubegrensede heltall, men det koster fart, og NumPy er tilbake til faste bitbredder. Ariane 5: et 64-bits tall konvertert til 16 bit, og koden var feilfri på Ariane 4, men antakelsen holdt ikke lenger.
6. Tekst: ASCII med sju bit, mønstrene i tabellen (sifrene på 0x30, store og små bokstaver skiller seg i ett bit). Latin-1 flyttet problemet. Unicode deler det i kodepunkt og koding. UTF-8 bruker én til fire byte med prefiksbit, er bakoverkompatibel med ASCII og lar deg finne tegngrensen hvor som helst. ø er 0xC3 0xB8. Tegn er ikke byte: «Gjøvik» er seks tegn og sju byte.
7. Flyttall: mantisse ganger base opphøyd i eksponent, komma som flyter. IEEE 754 har 1, 8 og 23 bit, eksponenten forskyves med 127, og det ledende ettallet lagres ikke. 5,75 blir 0x40B80000. 0,1 finnes ikke i binær, så 0,1 pluss 0,2 er 0,30000000000000004, og det er ikke en feil i språket. Sammenlign aldri med ==, og ikke bruk flyttall til penger.
8. Bilde og lyd: bilder er et rutenett av piksler, RGB med 24 bit gir 16 777 216 farger, og et bilde på 1000 × 1000 piksler er 3 MB rått. Fargetabell og løpelengdekoding er tapsfrie, og JPEG kaster det øyet ikke ser og kan aldri få det tilbake. Vektorgrafikk lagrer oppskriften. Lyd samples i tid og kvantiseres i styrke, Nyquist krever minst dobbelt så høy samplingsfrekvens, og en CD er 44 100 × 16 × 2 bit i sekundet, 783 MB på 74 minutter. MP3 fjerner det øret ikke hører.
9. Avslutt med å knytte det sammen: hver representasjon er et svar på hva som er viktigst akkurat her, presisjon eller plass, og hver har en grense. Ariane 5, banken med float og navnet kuttet etter 20 byte virket helt til de ikke gjorde det. Det eneste som skiller et bilde fra en sang er hva du har bestemt at bitene skal bety.

STIL
- Mange bilder og metaforer (en lommebok med sedler, en kilometerteller, en klokke, et fargekart, en strikkeoppskrift). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering av den bærende ideen.
```

---

## Etter generering

Legg podkasten i `Kap02/Podkast/` som `Kapittel2.m4a` og gi meg beskjed. Jeg legger den inn i «2 Hele kapitlet i én video» med et ikon med mann og dame som ikke er brukt i kapitlet fra før.
