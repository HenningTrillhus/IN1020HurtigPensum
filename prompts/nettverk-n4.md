# Gemini / NotebookLM-prompter for N4 «Introduksjon til operativsystemer» (Nettverk)

Kilde: lysarkene «Operating Systems: A Brief Introduction». Tre videoer: hva et operativsystem er, hva det består av, og brukermodus mot kjernemodus med systemkall. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet. Lysarkene er på engelsk, men fortellingen skal være på norsk bokmål. Bruk norske ord, og sett det engelske fagordet i parentes første gang det brukes (for eksempel «kjerne (kernel)»).
Utelatt: historien (hullbånd), maskinvaredetaljer om hovedkort, OS-kategorier og slektstreet, eksemplet med to løkkerekkefølger, minnehierarkiet og virtuelt minne (dekkes andre steder), og referansene til IN2140 og IN3000.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Hva er et operativsystem (N4.1)
2. Hva et operativsystem består av (N4.2)
3. Brukermodus og kjernemodus (N4.3)

Felles regler i alle tre: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Hva er et operativsystem

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «What is an Operating System (OS)?», «Different Hardware» og «Many Concurrent Tasks». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N4.1 Hva er et operativsystem». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Et operativsystem er en samling programmer som fungerer som mellomledd mellom maskinvaren og brukerne. Det gir et høynivågrensesnitt til lavnivå ressurser som CPU, minne og I/O-enheter, og gjør bruken praktisk, effektiv og trygg. Det har to sider: en utvidet maskin (extended machine), som skjuler de rotete detaljene og gir en virtuell maskin som er enklere å bruke, og en ressursforvalter (resource manager), som gir hvert program tid og plass på ressursene.
2. Hvorfor trenger vi det? Maskinvaren er ulik: med et OS kjører de samme programmene på ulik maskinvare. Og mange oppgaver og brukere kjører samtidig, så vi trenger bedre utnyttelse, men også samtidig tilgang, beskyttelse og rettferdighet. Operativsystemer finnes overalt: i PC-er, telefoner, spillkonsoller, biler og klokker.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en stabel med brukere og programmer øverst, et OS i midten og maskinvare nederst, og to piler fra OS-et: «skjuler detaljer» opp og «fordeler ressurser» ned. Vis så to ulike maskiner som begge kjører samme programmer, og en liste over enheter med OS: PC, telefon, bil, klokke.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er egentlig et operativsystem?»
2. Poeng 1 (to sider, 8–34 s, ca. 55 ord): et operativsystem er mellomleddet mellom maskinvare og bruker. Det skjuler detaljene som en virtuell maskin (extended machine), og fordeler tid og plass som en ressursforvalter.
3. Poeng 2 (hvorfor, 34–58 s, ca. 40 ord): ulik maskinvare skal kjøre de samme programmene, og mange oppgaver og brukere kjører samtidig. Det krever samtidig tilgang, beskyttelse og rettferdighet. OS finnes overalt.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: et operativsystem skjuler maskinvaren og deler den rettferdig mellom alle som bruker den.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn komponenter, planlegger, kjerne, brukermodus eller systemkall.
```

---

## Video 2: Hva et operativsystem består av

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Primary Components in OSes», «Device Management», «Interfaces» og «CPU Scheduling» med mål og prioriteter. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N4.2 Hva et operativsystem består av». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Et OS har flere hovedkomponenter. Synlige for brukeren: brukergrensesnitt (shell), filhåndtering (file system) og enhetshåndtering (device management). Mer gjemt: prosesshåndtering (CPU-tid), minnehåndtering (plass til prosessene) og kommunikasjon mellom prosesser, også mellom maskiner. Enheter styres av enhetsdrivere (device drivers), og de utgjør en enorm del av koden: 50 til 95 prosent, og i Linux-kjernen rundt 60 prosent. Grensesnitt kan være grafisk (GUI), kommandolinje (shell) eller et API.
2. Når flere oppgaver vil bruke CPU-en samtidig, velger en planlegger (scheduler) hvem som får den, med en planleggingsalgoritme. Målene motsier hverandre: behandle like oppgaver likt, ingen skal vente for alltid, korte svartider, maksimal gjennomstrømning og utnyttelse, lite overhead og forutsigbarhet. Med prioriteter kjører den viktigste først, men lave prioriteter kan sulte (starvation).

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis seks ruter for komponentene (brukergrensesnitt, filer, enheter, prosess, minne, kommunikasjon) i et OS-lag, med en stor søyle for «drivere 50 til 95 prosent». Vis så en kø av oppgaver foran en CPU med en planlegger, og en lav-prioritets-oppgave som venter for alltid.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva består et operativsystem av, og hvem får bruke CPU-en?»
2. Poeng 1 (komponentene, 8–34 s, ca. 55 ord): brukergrensesnitt, filhåndtering, enhetshåndtering, prosess-, minne- og kommunikasjonshåndtering. Drivere er 50 til 95 prosent av koden. Grensesnittet kan være GUI, shell eller API.
3. Poeng 2 (planleggeren, 34–58 s, ca. 40 ord): en planlegger velger hvem som får CPU-en. Målene motsier hverandre: rettferdig, rask respons, høy utnyttelse. Prioriteter gir viktige oppgaver forrang, men kan gi sult.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: et OS består av seks komponenter, og planleggeren avgjør hvem som får CPU-en.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar virtuelt minne, brukermodus, kjernemodus eller systemkall.
```

---

## Video 3: Brukermodus og kjernemodus

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «User Level vs. Kernel Level (Protection)» og «Programming: System Calls». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N4.3 Brukermodus og kjernemodus». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Mange OS skiller mellom brukernivå og kjernenivå, av hensyn til sikkerhet og beskyttelse. Programmer og mange delsystemer kjører i brukermodus: beskyttet modus, uten direkte tilgang til maskinvare eller drivere, bare til tildelt minne og med et begrenset instruksjonssett. Selve OS-et kjører i kjernemodus (kernel mode), med tilgang til hele minnet, alle instruksjoner og mulighet til å omgå sikkerheten.
2. Grensesnittet mellom OS og brukerne er et sett systemkall (system calls). Et systemkall ligner et funksjonskall, men går inn i kjernen. Eksempel i C: count = read(fd, buffer, nbytes). Parametrene legges på stakken, bibliotekkoden kalles, systemkallets nummer legges i et register, og en TRAP går til kjernen, som finner riktig håndterer, utfører operasjonen og returnerer, og programmet fortsetter.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to lag: brukerrom øverst med programmer og kjernerom under, med en grense i midten merket «systemkall». Vis så et funksjonskall som read(fd, buffer, nbytes) som går ned gjennom trinnene parametere, bibliotek, nummer i register, TRAP, og kommer opp igjen.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor kan ikke programmet ditt snakke direkte med maskinvaren?»
2. Poeng 1 (to moduser, 8–34 s, ca. 55 ord): programmer kjører i brukermodus: beskyttet, bare eget minne, begrenset instruksjonssett. OS-et kjører i kjernemodus med full tilgang. Det gir sikkerhet.
3. Poeng 2 (systemkall, 34–58 s, ca. 40 ord): programmer ber kjernen om noe gjennom systemkall, som read(fd, buffer, nbytes). Parametere på stakken, nummer i register, TRAP til kjernen, utføres, tilbake til programmet.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: programmer bruker systemkall for å få kjernen til å gjøre det de selv ikke har lov til.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn komponenter, planlegging eller hva et operativsystem er.
```

---

## Etter generering

Legg videoene i `KapNettverk/N4/` som `N4.1.mp4` til `N4.3.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel N4, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
