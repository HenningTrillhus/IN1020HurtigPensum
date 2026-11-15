# Gemini / NotebookLM-prompter for N2 «Lagdeling og protokoller» (Nettverk)

Kilde: lysarkene fra forelesningen «Lagdeling i Internettarkitekturen» (02.09). Tre videoer: protokoller og lag, TCP/IP-modellen og hva hvert lag gjør. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet. Obliginformasjonen, repetisjonen av komponenter og topologier og ekstramaterialet er utelatt. Adresser, porter og subnett hører til en annen del av nettverksstoffet og skal ikke forklares her.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Protokoller og lag (N2.1)
2. TCP/IP-modellen (N2.2)
3. Hva hvert lag gjør (N2.3)

Felles regler i alle tre: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Protokoller og lag

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Protokoller og lagdeling», inkludert «Hva definerer en protokoll?» og fordeler og ulemper ved lagdeling. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N2.1 Protokoller og lag». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En protokoll definerer strukturen på beskjeder sendt over et nettverk, og den må ta seg av mange kompleksiteter: hvordan maskinvaren skal oppføre seg, hvordan beskjeden finner fram, om det er garantier for levering, og hvordan kø og tap håndteres. Den definerer formatet på beskjeden og headeren, rekkefølgen på beskjedene, utvekslingen mellom systemene og hva som skal skje ved mottak eller sending.
2. Siden dette er veldig komplisert, forenkler vi med lagdeling: standardiserte abstraksjonsnivåer, lag eller moduler. Fordelene er klare koblinger og ansvarsfordeling, at lagene kan utvikles uavhengig og at de kan byttes ut. Ulempene er at det ikke passer for alle oppgaver, og at like problemer kan bli løst flere ganger.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en beskjed med en konvolutt (header) og en liste over det en protokoll avgjør: format, rekkefølge, utveksling, hva som skjer ved mottak. Vis så en stabel av lag med to piler: grønne fordeler til høyre og røde ulemper til venstre.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor deler vi nettverkskommunikasjon i lag?»
2. Poeng 1 (protokoll, 8–34 s, ca. 55 ord): en protokoll definerer formatet på beskjed og header, rekkefølgen, utvekslingen og hva som skjer ved mottak og sending. Den må håndtere maskinvare, levering, garantier og tap.
3. Poeng 2 (lagdeling, 34–58 s, ca. 40 ord): standardiserte lag forenkler det kompliserte. Fordeler: klare koblinger, ansvarsfordeling, uavhengig utvikling og utbytting. Ulemper: passer ikke alt, og samme problem løses flere ganger.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: en protokoll er reglene for beskjedene, og lagdeling gjør det komplekse håndterbart.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn OSI, TCP/IP, bestemte lag eller dataenheter.
```

---

## Video 2: TCP/IP-modellen

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene om OSI-modellen, TCP/IP-modellen, dataenhetene og «Datastrøm mellom to systemer» (med og uten direkte tilkobling). Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N2.2 TCP/IP-modellen». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. OSI-modellen har syv lag, men Internett bruker TCP/IP-modellen med fem: applikasjon, transport, nettverk, link og fysisk. Presentasjon, sesjon og applikasjon er slått sammen til ett applikasjonslag, og noen slår også link og fysisk sammen. Dataenhetene har ulike navn: segments på transportlaget, packets på nettverkslaget, frames på linklaget og bits på det fysiske laget.
2. Forespørselen går nedover lagene hos avsenderen og oppover hos mottakeren. Uten direkte tilkobling går pakken opp til nettverkslaget i hver ruter, som tar seg av rutingen, mens transport og applikasjon kommuniserer ende-til-ende. Modellen kalles timeglass-modellen, fordi IP er den smale midten.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to stabler med fem lag, avsender til venstre og mottaker til høyre, og en bølge av pil ned og opp. Vis en ruter i midten som bare har tre lag, og navnene segments, packets, frames og bits ved siden av de riktige lagene.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvor mange lag har Internett?»
2. Poeng 1 (fem lag, 8–34 s, ca. 55 ord): TCP/IP har fem lag: applikasjon, transport, nettverk, link og fysisk. Dataenhetene heter segments, packets, frames og bits. Fra OSI er tre øverste lag slått sammen.
3. Poeng 2 (veien, 34–58 s, ca. 40 ord): ned hos avsender, opp hos mottaker. Rutere behandler bare opp til nettverkslaget, mens transport og applikasjon går ende-til-ende. Timeglass-modellen.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: Internett har fem lag, og hver beskjed går ned hos avsenderen og opp hos mottakeren.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar hva hvert lag gjør i detalj, og ikke nevn TCP, UDP eller adresser.
```

---

## Video 3: Hva hvert lag gjør

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Lagene i TCP/IP-modellen» med eksempel på hva som skjer når vi åpner en nettside, men uten å forklare adresser, porter og subnett i detalj. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N2.3 Hva hvert lag gjør». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Applikasjonslaget har tjenester for applikasjoner, som nettleseren, e-post og filoverføring. Transportlaget kobler systemene sammen ende-til-ende: TCP setter opp en forbindelse, garanterer at pakkene kommer i riktig rekkefølge og sender på nytt hvis kvitteringen ikke kommer, mens UDP er tilkoblingsløs, uten garantier, og brukes til strømming av video og lyd. QUIC er en enklere transportprotokoll for HTTP, bygd på UDP og med kryptering.
2. Nettverkslaget sender data ende-til-ende og bestemmer ruten, og IP er den mest brukte protokollen. Linklaget gir pålitelig overføring mellom to noder, for eksempel Ethernet og WiFi, og pakkene heter frames. Det fysiske laget sender bit ut på mediet, kablet eller trådløst, og sørger for at et 1-bit blir mottatt som 1.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis fem lag oppover i en stabel med ett ord ved hvert: nettleser, TCP eller UDP, IP, Ethernet eller WiFi, kabel eller radio. Marker TCP med «garanti» og UDP med «best effort, strømming».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva gjør hvert lag når du åpner en nettside?»
2. Poeng 1 (øvre lag, 8–34 s, ca. 55 ord): applikasjon er tjenestene, som nettleser og e-post. Transport kobler ende-til-ende: TCP garanterer rekkefølge og sender på nytt, UDP har ingen garantier og brukes til strømming. QUIC bygger på UDP.
3. Poeng 2 (nedre lag, 34–58 s, ca. 40 ord): nettverk (IP) ruter pakkene. Link (Ethernet, WiFi) overfører pålitelig mellom to noder. Fysisk sender bit på kabel eller radio.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: hvert lag har én jobb, og sammen får de en nettside fra A til B.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar flytkontroll og metningskontroll, og ikke forklar IP-adresser, MAC-adresser, porter eller subnett.
```

---

## Etter generering

Legg videoene i `KapNettverk/N2/` som `N2.1.mp4` til `N2.3.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel N2, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
