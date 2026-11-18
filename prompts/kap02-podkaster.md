# NotebookLM-prompter til korte podkaster: ett delkapittel av gangen (kapittel 2)

Kilde: `kap02.pdf` fra mappen «Pensum Kompendier». Lim hele prompten for ett delkapittel inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 2 som kilde. Lag én podkast per delkapittel.

Lengde: 4 til 10 minutter per podkast. NotebookLM styrer lengden løst, så ordtallet i hver prompt er et ønske, ikke en garanti. Kommer en podkast ut for lang, bytt tallet med et lavere. Hver podkast står på egne ben.

**Tittel og plassering.** NotebookLM gir hver podkast en egen tittel som ikke sier hvilket delkapittel den hører til. Det spiller ingen rolle: jeg setter tittelen til delkapitlets navn når jeg legger den inn (for eksempel «2.7 Negative tall»). Det som betyr noe, er at **filnavnet sier hvilket delkapittel den er**, så gi hver fil navnet i tabellen under (`2.1.m4a`, `2.2.m4a` og så videre) før du legger den i mappen.

Hele-kapitlet-podkasten for kapittel 2 finnes fra før, så den lages ikke på nytt.

| # | Delkapittel | Lengde | Gi filen navnet |
|---|---|---|---|
| 2.1 | 2.1 Introduksjon | ca. 4 min (ca. 600 ord) | `2.1.m4a` |
| 2.2 | 2.2 Bit, byggesteinen | ca. 5 min (ca. 700 ord) | `2.2.m4a` |
| 2.3 | 2.3 Posisjonssystemer | ca. 6 min (ca. 850 ord) | `2.3.m4a` |
| 2.4 | 2.4 Konvertering mellom baser | ca. 8 min (ca. 1150 ord) | `2.4.m4a` |
| 2.5 | 2.5 Heksadesimal og oktal | ca. 7 min (ca. 1000 ord) | `2.5.m4a` |
| 2.6 | 2.6 Byte, verdiområde og designvalg | ca. 7 min (ca. 1000 ord) | `2.6.m4a` |
| 2.7 | 2.7 Negative tall | ca. 9 min (ca. 1300 ord) | `2.7.m4a` |
| 2.8 | 2.8 Overflyt | ca. 7 min (ca. 1000 ord) | `2.8.m4a` |
| 2.9 | 2.9 Tekst og tegn | ca. 10 min (ca. 1450 ord) | `2.9.m4a` |
| 2.10 | 2.10 Flyttall og presisjon | ca. 10 min (ca. 1450 ord) | `2.10.m4a` |
| 2.11 | 2.11 Bilde | ca. 8 min (ca. 1150 ord) | `2.11.m4a` |
| 2.12 | 2.12 Lyd | ca. 7 min (ca. 1000 ord) | `2.12.m4a` |
| 2.13 | 2.13 Oppsummering | ca. 6 min (ca. 850 ord) | `2.13.m4a` |

Legg filene i `Kap02/Podkast/`.

---

## 1. 2.1 Introduksjon (ca. 4 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 4 minutter (ca. 600 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til åpningen av kapitlet, før seksjon 2.2, og læringsmålene i 2.1. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar bit, tallsystemer, tekst, flyttall, bilde eller lyd i detalj: bare nevn at kapitlet tar dem.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: datamaskinen din kan én ting, å skille mellom to tilstander. Likevel ringer du bestemoren din med den, hører på musikk og ser bilder av fjell du aldri har vært på.
2. Alt dette, farger, lyd, tekst og tall, er gjort om til et spørsmål som bare har to svar, og maskinen stiller det milliarder av ganger i sekundet. Kapitlet handler om hvordan.
3. Den ene ideen: et bitmønster betyr ingenting i seg selv. Det er tolkningen, avtalen om hva mønsteret skal bety, som gir det mening. Og hver avtale har en grense: når du treffer den, får du helt konkrete feil i helt virkelige systemer. Første halvdel av kapitlet handler om meningen, andre halvdel om grensene.
4. Hva du kan etterpå, i store trekk: forklare hvorfor samme bitmønster kan bety ulike ting, konvertere mellom tallsystemer, regne med negative tall og forutsi overflyt, forstå tekst, flyttall, bilde og lyd.
5. Avslutt rolig: bitene sier ikke hva de betyr, det gjør avtalen, og avtalen har en grense.

STIL
- Bruk bilder og metaforer (en bryter med to stillinger, en avtale om hva et signal betyr). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 2. 2.2 Bit, byggesteinen (ca. 5 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 5 minutter (ca. 700 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om bit: hva et bit er, hvorfor to tilstander og at bitmønsteret 01000001 kan bety flere ting. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar tallsystemer, tekst eller instruksjoner i detalj.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hva er egentlig et bit? Noe som kan være i én av to tilstander. Ordet kommer av engelsk binary digit.
2. Navnene på tilstandene er tilfeldige: 0 og 1, usant og sant, av og på, lavt og høyt, rødt lys og grønt lys. Inne i maskinen er et bit som regel en transistor som enten slipper strøm gjennom eller ikke, og en mobil har rundt hundre milliarder.
3. Hvorfor bare to? Fordi to tilstander er robust: å rope «ja» eller «nei» over en støyete bakgård kommer fram, mens et siffer fra 0 til 9 må høres nøyaktig. En krets som skal skille ti spenningsnivåer må måle presist, mens en som avgjør spenning eller ikke tåler støy, varme og aldring. Kvantedatamaskiner har kubiter, men nesten alle maskiner bruker bit.
4. Bitmønsteret 01000001 har ikke ett svar: som heltall er det 65, i ASCII er det bokstaven A, i et bilde kan det være en mørk rødtone, og hvis prosessoren henter instruksjoner derfra, er det starten på noe den prøver å utføre. Bitene sier ikke hvilken tolkning som gjelder: det står i datatypen, filformatet og protokollen.
5. Avslutt rolig: et bit er to tilstander, og meningen kommer fra avtalen.

STIL
- Bruk bilder og metaforer (en bryter, et ja eller nei over en bakgård). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 3. 2.3 Posisjonssystemer (ca. 6 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter (ca. 850 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om posisjonssystemer: vekter, base, telling i binær og notasjon. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar konvertering mellom baser i detalj: det kommer i en annen podkast.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: 527 betyr fem hundrer, to tiere og sju enere. Hvert siffer har en vekt som avhenger av hvor det står: basen opphøyd i posisjonen, telt fra høyre og fra null.
2. Det virker fordi vi teller: du bruker opp sifrene 0 til 9, nullstiller og øker naboen med én. Ti er valgt fordi vi har ti fingre, og prinsippet virker like godt med to, åtte eller seksten siffer.
3. Telling i binær: bare 0 og 1, så sifferforrådet er tomt etter ett steg: 0, 1, 10, 11, 100, 101, 110, 111, 1000. Tallene blir fort lange, og det er prisen for få siffer.
4. Vekter i binær: 1, 2, 4, 8, 16, 32, 64, 128, som en lommebok der du velger om hver seddel er med. 11001 er 16 + 8 + 1 = 25. Vekten til et siffer er alltid én større enn alt sifrene til høyre kan uttrykke til sammen.
5. Notasjon: 1001 kan være binært (9) eller desimalt (tusen og én). Vi skriver basen som et lite tall nede til høyre, og basen skrives alltid desimalt.
6. Avslutt rolig: et tall er sifre ganger vekter, og basen avgjør vektene.

STIL
- Bruk bilder og metaforer (en lommebok med sedler, en kilometerteller, å telle på fingrene). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 4. 2.4 Konvertering mellom baser (ca. 8 minutter)

```
Lag en podkast på norsk bokmål, ca. 8 minutter (ca. 1150 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om konvertering mellom baser: de fire metodene og hvorfor divisjonsmetoden virker. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke gå inn på heksadesimal og oktal i detalj: de har en egen podkast.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hvordan gjør du 25 om til 11001, og tilbake? Det finnes fire metoder, to hver vei.
2. Til desimal, vektmetoden: gang hvert siffer med vekten og legg sammen. 11001 er 16 + 8 + 1 = 25, og 624 i base 8 er 6·64 + 2·8 + 4 = 404. Ta et overslag først: øverste bit i 110010100 har vekt 256, neste 128, så svaret må være litt over 384.
3. Til desimal, gjentatt multiplikasjon: gang med basen og legg til neste siffer, fra venstre. 13754 i base 8: 1, så 11, så 95, så 765, så 6124. Hvert siffer får samme vekt som i vektmetoden, regnestykket er bare delt opp annerledes. Maskinen bruker denne når den gjør en tekststreng om til et tall.
4. Fra desimal, største vekt som får plass: som å veksle et beløp i sedler, de største først. 3193 til binær: 2048, 1024, 128, 16, 8, 1. Til heksadesimal: 256 får plass 12 ganger, så 16 sju ganger, og 9 blir igjen: C79.
5. Fra desimal, divisjonsmetoden: del på basen og skriv ned resten, til kvotienten er 0, og les restene nedenfra og opp. 25 gir 11001. Nedenfra og opp er den vanligste feilen: første resten er enerplassen og hører hjemme lengst til høyre.
6. Hvorfor virker det? Resten ligger alltid mellom 0 og basen minus 1, nøyaktig området ett siffer dekker. Første divisjon spør hvor mange grupper på basen som får plass, og resten er enerne som blir igjen. For hver divisjon blir gruppene basen ganger større, og det høyre sifferet ble funnet først.
7. Avslutt rolig: to metoder hver vei, og de virker i alle baser.

STIL
- Bruk bilder og metaforer (å veksle penger i sedler, å pakke egg i kartonger, en lommebok). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 5. 2.5 Heksadesimal og oktal (ca. 7 minutter)

```
Lag en podkast på norsk bokmål, ca. 7 minutter (ca. 1000 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om heksadesimal og oktal. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar konverteringsmetodene fra desimal i detalj.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: én million er 11110100001001000000 i binær, tjue siffer, og du kan ikke sjekke at det er riktig uten å telle. Vi grupperer mobilnummer og kontonummer, og vi kan gruppere bit.
2. Heksadesimal er base 16 med bokstavene A til F for 10 til 15. Poenget: 16 er 2 opphøyd i 4, så ett heksadesimalt siffer er nøyaktig fire bit. 0110 0110 1001 1111 er 6, 6, 9, F, altså 0x669F, uten regning gjennom desimal.
3. Hva om det ikke går opp i fire? Grupper fra høyre og fyll på nuller til venstre: 101 1010 blir 0101 1010, altså 5A. Nuller til venstre koster ingenting.
4. Prefikset 0x finnes av praktiske grunner fra tidlige editorer. Ikke gå veien om desimal: 0x6699FF er 0110 0110, 1001 1001, 1111 1111 hvis du slår opp hvert siffer.
5. I det fri: farger på nettsider, #6699FF er rød 102, grønn 153, blå 255. #FF0000 er full rød og #FFFFFF er hvit. Heksadesimal dukker også opp i minneadresser, MAC-adresser og IPv6-adresser.
6. Oktal er base 8, tre bit per siffer. Den overlever i filrettigheter: chmod 664 gir eieren og gruppen lese og skrive og andre bare lese, og chmod 755 gir eieren lese, skrive og utføre.
7. Avslutt rolig: heksadesimal er kortskrift for fire bit, oktal for tre.

STIL
- Bruk bilder og metaforer (å gruppere mobilnummer, en tabell med seksten mønstre). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 6. 2.6 Byte, verdiområde og designvalg (ca. 7 minutter)

```
Lag en podkast på norsk bokmål, ca. 7 minutter (ca. 1000 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om byte, verdiområde og designvalg: antall verdier, byte, prefikser og BCD. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar negative tall eller flyttall.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: ett bit rommer to verdier, to bit fire, tre bit åtte. Hvert nytt bit dobler, så n bit rommer 2 opphøyd i n verdier.
2. En byte er åtte bit, altså 256 verdier fra 0 til 255, og den minste enheten de fleste maskiner henter fra minnet. To byte gir 65 536, fire gir ca. 4,3 milliarder. Antall bit er et valg, og for få gir feil svar, for mange sløser plass.
3. Hvorfor heter det byte? Ingen full enighet: en munnfull av bit, eller «by eight». Åtte bit er en konvensjon: tidlige maskiner brukte byte på 6, 7 og 9 bit. Derfor finnes ordet oktett.
4. Tommelfingerregel: 2 opphøyd i 10 er 1024, omtrent tusen. Ti bit er omtrent tusen verdier, 20 bit en million og 30 bit en milliard. Et sekssifret tall trenger rundt 20 bit, siden et desimalsiffer trenger omtrent 3,3 bit.
5. MB mot MiB: M er en million i resten av verden, men har lenge vært 2 opphøyd i 20 i databransjen, og avviket er nesten fem prosent. Derfor har en «1 TB»-disk 931 GiB: samme tall i to enheter.
6. BCD koder hvert desimalsiffer i fire bit: 68 blir 0110 1000. Seks av seksten mønstre kastes, men tallene er eksakte, og en bank kan ikke leve med at 0,10 kroner blir 0,100000001. IBMs stormaskiner har fortsatt maskinvarestøtte for det.
7. Avslutt rolig: antall bit er et valg med en pris.

STIL
- Bruk bilder og metaforer (sedler og mynter, en munnfull, en kilometerteller). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 7. 2.7 Negative tall (ca. 9 minutter)

```
Lag en podkast på norsk bokmål, ca. 9 minutter (ca. 1300 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om negative tall: toerkomplement, å snu fortegnet, hvorfor addisjon virker, verdiområdet og hvorfor fortegn og magnitude og enerkomplement tapte. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar overflyt i detalj: det har en egen podkast.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: maskinen har ikke noe minustegn, bare bit. Hvordan lager du minus av nuller og enere?
2. Toerkomplement: alt er som før, bortsett fra at øverste bit har negativ vekt. I en byte er øverste vekt minus 128. 10000000 er minus 128, 11111111 er minus 1, 11111011 er minus 5, og 00000101 er 5.
3. Å snu fortegnet: inverter alle bitene og legg til 1. 5 er 00000101, inverter gir 11111010, legg til 1 gir 11111011, altså minus 5. Hvorfor? Å invertere en byte er å trekke fra 11111111, og med 1 til er det 256 minus tallet, nøyaktig der en byte renner rundt.
4. Hvorfor addisjon virker uendret: prosessoren legger sammen som vanlige positive tall og kaster menten som ikke får plass. 5 pluss minus 3 blir 2. Tenk på en klokke med 256 plasser. Derfor trengs ingen subtraksjonskrets.
5. Verdiområdet: minus 128 til 127 i åtte bit. Tallinja er egentlig en ring. Det finnes ingen minus null, men ett negativt tall mer enn positive, og å negere minus 128 gir minus 128 tilbake: Math.abs av Integer.MIN_VALUE i Java er negativ.
6. De som tapte: fortegn og magnitude har to nuller og tungvint addisjon. Enerkomplement inverterer uten å legge til 1, men har fortsatt to nuller og en mente som må legges til igjen. Toerkomplement er enerkomplement pluss én, og det ene pluss gir ett null.
7. Bitene sier ikke om et tall er negativt: 10000000 er minus 128 som signed char og 128 som unsigned char. Det ligger i typen. Bytter du signed mot unsigned i en lengdesjekk, kan et negativt tall bli en enorm positiv lengde: et sikkerhetshull.
8. Avslutt rolig: toerkomplement lar addisjonen virke for alle tall, og typen sier hva bitene betyr.

STIL
- Bruk bilder og metaforer (en klokke som går rundt, en kilometerteller som ruller bakover). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 8. 2.8 Overflyt (ca. 7 minutter)

```
Lag en podkast på norsk bokmål, ca. 7 minutter (ca. 1000 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om overflyt: kilometertelleren, overflyt i praksis, hva vi kan gjøre, Python og Ariane 5. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar toerkomplement i detalj.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: en kilometerteller med seks siffer viser opptil 999999. Kjører du én kilometer til, ruller alt rundt til 000000. Bilen har ikke glemt kilometerne, telleren har bare ikke plass. Det samme skjer i en datamaskin, og det heter overflyt.
2. Et uskyldig Java-program: 1000, 1000 ganger 1000 og 1 000 000 ganger 1 000 000. Den siste skriver ut minus 727 379 968. En int er 32 bit og rommer opp til 2 147 483 647. Svaret, 10 opphøyd i 12, trenger 40 bit, så de øverste åtte kastes uten at noen sier fra, og det øverste bitet som blir igjen har negativ vekt.
3. Det verste er at ingen sier fra: ingen feilmelding og ingen krasj, og feilen kan dukke opp mange steg senere. En større type, long, er en utsettelse, ikke en løsning. Tenk på verdiområdet før du velger datatype.
4. Python har heltall uten fast bredde, og det gir riktig svar, men koster fart: Python gjør et titalls maskininstruksjoner der C bruker én. Og NumPy er tilbake i C-verdenen med faste bitbredder og stille overflyt. Sjekk hvilken datatype du faktisk regner med, ikke hvilket språk du skriver i.
5. Ariane 5: 4. juni 1996, trettini sekunder etter oppskytingen var raketten og de fire satellittene borte, et tap på rundt 370 millioner dollar. Et 64-bits flyttall for hastighet ble konvertert til et 16-bits heltall og rant over. Koden var arvet fra Ariane 4, der den hadde virket feilfritt, men den nye raketten var kraftigere. Ingen hadde gjort en feil i koden, de hadde arvet en antakelse som ikke holdt lenger.
6. Avslutt rolig: overflyt er en grense som ikke sier fra.

STIL
- Bruk bilder og metaforer (en kilometerteller, en glass som flyter over). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 9. 2.9 Tekst og tegn (ca. 10 minutter)

```
Lag en podkast på norsk bokmål, ca. 10 minutter (ca. 1450 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om tekst og tegn: tabell og mojibake, ASCII, Latin-1, Unicode, UTF-8, og at tegn ikke er byte. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar flyttall, bilde eller lyd.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: for maskinen finnes det bare tall. Hvordan lagrer du bokstaven Ø? Du lager en tabell: 0 er A, 1 er B, og så videre til 27 er Ø. Problemet kommer når to maskiner har ulike tabeller: da blir teksten søppel, mojibake, japansk for «tegnforvandling».
2. ASCII fra 1963 brukte sju bit, 128 plasser. Sifrene ligger på 0x30 til 0x39, så de fire nederste bitene er sifferverdien. Store og små bokstaver ligger 32 fra hverandre, ett bit: A er 0x41 og a er 0x61. De 32 første plassene er kontrolltegn, som BEL, som fikk en bjelle til å ringe, og DEL, 0x7F, alle bit satt, for å slette på hullbånd.
3. ASCII hadde ingen æ, ø, å. Den første norske løsningen var å ofre noe annet: hakeparentes og backslash ble Æ, Ø og Å, og krøllparentesene og streken ble æ, ø og å. Latin-1 brukte åttende bit for 256 plasser, men det flyttet bare problemet: femten uforenlige ISO 8859-varianter, én region om gangen.
4. Unicode deler ett spørsmål i to: hvilket tall er tegnet (kodepunktet, ø er U+00F8, altså 248), og hvordan blir tallet til byte (kodingen). Plass til over en million kodepunkter.
5. UTF-8 bruker én til fire byte med prefiksbit: 0 gir én byte, 110 følger én til, 1110 to, 11110 tre. Ren ASCII er allerede gyldig UTF-8, derfor vant den, og rundt 99 prosent av nettsidene bruker den. Den er selvsynkroniserende: byte som begynner med 10 er midt i et tegn.
6. Å kode ø: 248 er 11111000, så vi trenger toformen 110xxxxx 10xxxxxx, og får 0xC3 0xB8. Et Latin-1-program leser det som to tegn, og der har du «Ã¸». En emoji, U+1F600, blir fire byte.
7. Tegn er ikke byte: «Gjøvik» har seks tegn og sju byte, «Åsgårdstrand» tolv tegn og fjorten byte. Setter du av 20 byte til et navn og kutter midt i et tegn, får du en ugyldig byte-sekvens. Lagre tekst som UTF-8 og si fra at det er UTF-8.
8. Avslutt rolig: tekst er tall med en avtale, og UTF-8 er avtalen som vant.

STIL
- Bruk bilder og metaforer (et togsett der hver vogn forteller hvor den hører til, en oppslagstabell, et hullbånd). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 10. 2.10 Flyttall og presisjon (ca. 10 minutter)

```
Lag en podkast på norsk bokmål, ca. 10 minutter (ca. 1450 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om flyttall og presisjon: ideen, IEEE 754, å kode og lese et flyttall, spesialverdier, hvorfor 0,1 ikke finnes, feil som hoper seg opp og avveiningen. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar tekst, bilde eller lyd.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: heltall holder ikke. Avstanden til Andromedagalaksen er ca. 2,4 ganger 10 opphøyd i 19 kilometer, et hydrogenatom en tidels nanometer. Vi trenger ikke alle sifrene, men størrelsesorden og noen få sifre.
2. Ideen: verdi er pluss eller minus mantisse ganger base opphøyd i eksponent. Mantissen bærer presisjonen, eksponenten størrelsesordenen. Kommaet flyter. Og flyttall er ikke gratis: 32 bit gir like mange mønstre som et heltall, de er bare fordelt annerledes, tett nær null og glisne langt unna.
3. IEEE 754 fra 1985: float har 1 fortegnsbit, 8 eksponentbit og 23 mantissebit, og double har 1, 11 og 52. Eksponenten lagres med en forskyvning på 127, og det ledende ettallet lagres ikke, så 23 bit gir 24 bits presisjon.
4. Å kode 5,75: binært 101,11, normalisert 1,0111 ganger 2 opphøyd i 2. Fortegn 0, eksponent 2 pluss 127 er 129 (10000001), mantisse 0111. Gruppert i firere blir det 0x40B80000. Og tilbake: les fortegn, trekk fra 127, sett ettallet foran, flytt binærpunktet.
5. Spesialverdier: null og uendelig, og NaN, som ikke er lik seg selv. 1 delt på 0 gir Infinity, ikke en feil.
6. Hvorfor 0,1 ikke finnes: gjentatt multiplikasjon med 2 gir 0,0001100110011… for evig. Maskinen lagrer nærmeste tall, og 0,1 pluss 0,2 blir 0,30000000000000004. Det er ikke en feil i Python, det er IEEE 754, i alle språk. Som at en tredjedel ikke kan skrives ferdig i desimal.
7. Feil som hoper seg opp: legger du til 0,1 ti ganger, får du 0,9999999999999999. Små tall forsvinner når de legges til store: en float kan ikke telle forbi 2 opphøyd i 24, 16 777 216. Sammenlign aldri med ==, bruk en toleranse. Og ikke bruk flyttall til penger: tell i øre.
8. Avveiningen: flytter du ett bit fra mantissen til eksponenten, dobler du rekkevidden og halverer presisjonen. KI-maskinvare gjør samme valg annerledes: bfloat16 har åtte eksponentbit og sju mantissebit.
9. Avslutt rolig: flyttall er presisjon byttet mot rekkevidde, og 0,1 finnes ikke.

STIL
- Bruk bilder og metaforer (en tredjedel i desimal, et komma som flyter, en vekt med to skalaer). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 11. 2.11 Bilde (ca. 8 minutter)

```
Lag en podkast på norsk bokmål, ca. 8 minutter (ca. 1150 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om bilde: piksler og farge, rutenettet, hva det koster, fargetabell, løpelengdekoding, JPEG og vektorgrafikk. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar lyd.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: en skjerm består av millioner av piksler, hver med en rød, en grønn og en blå lyskilde. Ved å variere styrken kan den vise nesten hvilken som helst farge: RGB. En skjerm legger til lys: den starter svart, og alle tre for fullt gir hvitt. Derfor er grunnfargene ikke de samme som i maling.
2. Bilder er ikke diskrete: mellom to farger finnes uendelig mange mellomtoner. Derfor legger vi et rutenett over og lagrer én farge per rute. I et grovt rutenett mister taket formen og døra blir nesten borte.
3. Hva det koster: antall piksler ganger byte per piksel. 1000 × 1000 piksler med 24 bits farge er 3 MB rått. Et mobilbilde på 12 millioner piksler er 36 MB, og hundre bilder 3,6 GB. Derfor komprimerer vi.
4. Fargetabell: et motiv med bare sju farger trenger ikke 24 bit per piksel, men 3 bit pluss en palett. 268 308 byte blir 33 539 byte pluss 21 til tabellen, sju åttedeler spart uten å miste en piksel. Tapsfri, men virker bare fordi motivet har få farger.
5. Løpelengdekoding: som en strikkeoppskrift som sier «6 rette» i stedet for «rett» seks ganger. All komprimering bygger på en antakelse om dataene, og den er ikke gratis: en komprimert fil må pakkes ut hver gang.
6. JPEG for fotografier: krev at bildet ser uendret ut, ikke at det er uendret. Den kaster det øyet er dårlig til å se, og det kommer aldri tilbake. Lagrer du på nytt, kastes mer: generasjonstap.
7. Vektorgrafikk lagrer oppskriften på å tegne bildet, ikke bildet: du kan zoome uten at det blir hakkete, men du kan ikke skrive en oppskrift på et fotografi.
8. Avslutt rolig: et bilde er et rutenett av tall, og hver komprimering er et valg om hva du kan miste.

STIL
- Bruk bilder og metaforer (et fargekart hos malingsforhandleren, en strikkeoppskrift, en mosaikk). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 12. 2.12 Lyd (ca. 7 minutter)

```
Lag en podkast på norsk bokmål, ca. 7 minutter (ca. 1000 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Hold deg bare til delen om lyd: sampling og kvantisering, Nyquist, CD-standarden og komprimering. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Ikke forklar bilde.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: lyd er trykkbølger i luft. En mikrofon gjør dem om til en varierende spenning, og den er kontinuerlig i både tid og styrke, så vi må gjøre begge deler diskrete.
2. Sampling deler opp tiden, kvantisering deler opp styrken. Samplingsfrekvens og bitdybde: der kurven treffer mellom to nivåer, går differansen tapt, og det som lå mellom målingene, finnes ikke lenger.
3. Hvor tett? Nyquist-kriteriet: du må sample med minst dobbelt så høy frekvens som den høyeste frekvensen i signalet. Sampler du for sakte, folder høye frekvenser seg ned og dukker opp som lave toner som aldri var der, som bilhjul som ser ut til å snurre baklengs på film.
4. CD-standarden: 44 100 sampler per sekund, 16 bit per sample og to kanaler. 44 100 × 16 × 2 er 1 411 200 bit i sekundet, og 74 minutter blir 783 MB. En data-CD rommer rundt 680 MB, fordi en lyd-CD har mindre feilkorreksjon.
5. Tapsfri komprimering, som FLAC: lagre den ene kanalen pluss differansen, et lite tall. Men differanser krever at du leser fra start, så du legger inn faste punkter å hoppe til.
6. MP3 og AAC utnytter hørselen: vi hører ikke under 20 Hz eller over 20 000 Hz, en kraftig lyd maskerer svakere lyder, og øret er mindre følsomt rett etter en kraftig lyd. MP3 gir akseptabel kvalitet på 128 til 192 kbit/s mot 1411 for en CD, og Opus gir CD-liknende kvalitet på rundt 96. Men MP3 er et dårlig arbeidsformat, siden hver ny koding kaster mer.
7. Avslutt rolig: lyd er målinger i tid og styrke, og komprimering kaster det øret ikke hører.

STIL
- Bruk bilder og metaforer (et filmkamera med 24 bilder i sekundet, en trapp i stedet for en rampe). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 13. 2.13 Oppsummering (ca. 6 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter (ca. 850 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 2 («Digital representasjon») som kilde. Oppsummer hele kapitlet: tabellen over representasjonene med pris og grense, og den bærende ideen. Bruk bare tall og eksempler som står i kapitlet. Ikke finn på detaljer. Dette er en oppsummering, ikke en ny gjennomgang: ikke regn eksempler fra bunnen av.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: vi har vært gjennom en lang rekke representasjoner. La oss stille samme spørsmål til alle: hva koster den, og hvor går grensen?
2. Heltall: n bit gir 2 opphøyd i n verdier, og over det ruller tallet rundt. Toerkomplement: halve området går til negative tall, og minus 128 kan ikke negeres. BCD: eksakt desimal, men seks av seksten mønstre kastes. Flyttall: ca. 7 signifikante siffer for float, 0,1 finnes ikke, og over 2 opphøyd i 24 kan den ikke telle.
3. Tekst: ASCII har sju bit og 128 tegn uten æ, ø, å, Latin-1 256 tegn og én region om gangen, UTF-8 alle kodepunkter, men tegn er ikke byte, og du kan kutte midt i et tegn.
4. Bilde og lyd: RGB er 24 bit per piksel og gir 16,7 millioner farger, men store filer. Fargetabell og løpelengde er tapsfrie, JPEG kaster det øyet ikke ser. Lyd: Nyquist setter nedre grense for samplingsfrekvensen, og MP3 og Opus er tilpasset øret, ikke signalet.
5. Ingen er feil: hver er et svar på hva som er viktigst akkurat her, presisjon eller plass, rekkevidde eller nøyaktighet. Og hver har en grense: Ariane 5 traff grensen til et 16-bits heltall, en bank som regner renter i float traff grensen til IEEE 754, og et skjema som kutter et navn etter 20 byte traff grensen til UTF-8. I alle tre tilfellene virket koden helt til den ikke gjorde det.
6. Den bærende ideen: du kan be lydspilleren spille av en bildefil, og den gjør det, som en fax-maskin i dårlig humør. Det eneste som skiller et bilde fra en sang er hva du har bestemt at bitene skal bety.
7. Avslutt rolig: et bitmønster betyr det vi har blitt enige om at det betyr, og hver avtale har en grense.

STIL
- Bruk bilder og metaforer (en tabell med pris og grense, en fax-maskin i dårlig humør). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## Etter generering

Gi hver fil navnet fra tabellen (`2.1.m4a` til `2.13.m4a`), legg dem i `Kap02/Podkast/` og gi meg beskjed. Jeg legger dem inn i riktig delkapittel, setter delkapitlets navn som tittel og velger et ikon med både mann og dame fra kapittel 2 sine podkastikoner. Jeg sjekker at lengden stemmer og at de starter raskt.
