# Gemini / NotebookLM-prompter for S3 «Hvordan hackes vi?» (Sikkerhet)

Kilde: lysarkene fra forelesningen «Hvordan hackes vi? (og hvordan unngå å bli rammet)» (26.08). Fem videoer: hva angriperne vil ha og hvordan, sårbarhet og angrepsvektor, typer skadevare, SQL-injeksjon og XSS, og tiltak og det svakeste leddet. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet.
Utelatt: oversiktsbildet over trusselaktører (det er et bilde uten tekst i lysarkene), lenkesamlingen, quiz-oppgaven og eksemplene fra svensk valg og tegneserien.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Hva angriperne vil ha (S3.1)
2. Sårbarhet og angrepsvektor (S3.2)
3. Typer skadevare (S3.3)
4. SQL-injeksjon og XSS (S3.4)
5. Tiltak og det svakeste leddet (S3.5)

Felles regler i alle fem: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Hva angriperne vil ha

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Hackere er (stort sett) ute etter». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S3.1 Hva angriperne vil ha». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Hackere er stort sett ute etter tre ting: tilgang til informasjon, å endre eller forfalske informasjon, eller å gjøre informasjon utilgjengelig. Det er de tre sikkerhetsmålene snudd opp ned: konfidensialitet, integritet og tilgjengelighet.
2. Hvordan de gjør det, er også tre ting: ID-tyveri, å utnytte sårbarheter i programvare, systemer og infrastruktur, eller å få noen til å gi deg det du vil ha.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis tre dører merket «se», «endre» og «stenge ute», med K, I og T i små bokser ved siden av. Vis så tre veier inn: en stjålet nøkkel (ID-tyveri), en sprekk i en vegg (sårbarhet) og en person som åpner døra (lure noen).
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er egentlig en hacker ute etter?»
2. Poeng 1 (tre mål, 8–34 s, ca. 55 ord): tilgang til informasjon, endre eller forfalske den, eller gjøre den utilgjengelig. Det er konfidensialitet, integritet og tilgjengelighet som brytes.
3. Poeng 2 (tre metoder, 34–58 s, ca. 40 ord): ID-tyveri, utnytte sårbarheter i programvare, systemer og infrastruktur, eller få noen til å gi deg det du vil ha.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: angriperne vil se, endre eller stenge ute, og de gjør det med tyveri, sårbarheter eller å lure folk.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn skadevare, SQL, XSS eller tiltak.
```

---

## Video 2: Sårbarhet og angrepsvektor

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Definisjoner» med sårbarhet, nulldags-sårbarhet, sårbarhetsflate, skadevare og angrepsvektor. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S3.2 Sårbarhet og angrepsvektor». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En sårbarhet er en feil, mangel eller svakhet i et IT-system som gjør at det kan utnyttes. En nulldags-sårbarhet er en sårbarhet noen har kunnskap om, før produsenten, leverandøren eller brukerne kjenner til den. Sårbarhetsflaten er summen av de potensielle sårbarhetene i et system som kan nås og utnyttes av en angriper.
2. Skadevare er en samlebetegnelse på programvare som har som mål å gjøre skade. En angrepsvektor er metoden en angriper bruker for å utføre et angrep på en datamaskin, et nettverk eller et datasystem. Sårbarheten er svakheten, og angrepsvektoren er veien inn.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et hus med flere sprekker, der summen av sprekker du kan nå utenfra er markert som «sårbarhetsflate», og én sprekk som bare angriperen kjenner, merket «nulldags». Vis så en pil gjennom en sprekk merket «angrepsvektor».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er forskjellen på en sårbarhet og en angrepsvektor?»
2. Poeng 1 (sårbarhet, 8–34 s, ca. 55 ord): en sårbarhet er en feil eller svakhet som kan utnyttes. Nulldags betyr at noen kjenner den før leverandøren. Sårbarhetsflaten er summen av alle som kan nås.
3. Poeng 2 (angrepsvektor, 34–58 s, ca. 40 ord): en angrepsvektor er metoden en angriper bruker for å angripe. Skadevare er programvare laget for å gjøre skade. Sårbarheten er svakheten, vektoren er veien inn.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: sårbarheten er svakheten, og angrepsvektoren er veien en angriper bruker for å komme inn.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn bestemte typer skadevare, SQL, XSS eller sikkerhetstiltak.
```

---

## Video 3: Typer skadevare

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Et utvalg av typer skadevare». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S3.3 Typer skadevare». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Skadevare finnes i mange typer, og gruppene er til dels overlappende og ikke alltid presist definert. Løsepengevirus krypterer kritiske data på offerets IT-systemer, slik at data og applikasjoner ikke fungerer og blir utilgjengelige. Dataorm er skadevare som på egen hånd kan spre seg og finne nye ofre. Trojaner er skadevare som utgir seg for å være et nyttig program. Bakdør er en ubeskyttet og ukjent åpning inn i et datasystem, laget av en angriper.
2. Spionvare spionerer på en bruker for å få tak i informasjon, passord eller kontoinformasjon. Tastelogger, keylogger, lagrer eller videresender alle tastetrykk, enten som program eller som en enhet koblet til tastaturet, og er en variant av spionvare. Rootkit endrer eller erstatter funksjoner i operativsystemet eller applikasjoner for å ta kontroll over en maskin. Exploit er et program, en sekvens med data eller en oppskrift på hvordan en sårbarhet kan utnyttes.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis syv små kort i to rader, ett per type med et enkelt symbol: lås med kjetting (løsepengevirus), orm som sprer seg (dataorm), en gave med noe skadelig inni (trojaner), et øye (spionvare), et tastatur (tastelogger), en skjult dør (bakdør) og en nøkkel (exploit og rootkit).
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er forskjellen på en trojaner og en dataorm?»
2. Poeng 1 (de første, 8–34 s, ca. 55 ord): løsepengevirus krypterer data. Dataorm sprer seg selv. Trojaner utgir seg for å være et nyttig program. Bakdør er en åpning laget av en angriper.
3. Poeng 2 (resten, 34–58 s, ca. 40 ord): spionvare spionerer. Tastelogger lagrer tastetrykk. Rootkit endrer OS eller applikasjoner for å ta kontroll. Exploit er en oppskrift på å utnytte en sårbarhet. Gruppene overlapper.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: skadevare har mange typer, og de skiller seg på hva de gjør og hvordan de kommer inn.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn sårbarhetsbegreper som nulldags eller sårbarhetsflate, og ikke nevn SQL eller XSS.
```

---

## Video 4: SQL-injeksjon og XSS

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen om applikasjonssikkerhet: kjennetegn ved applikasjoner, SQL-injisering, Cross Site Scripting (XSS) og «Sikre applikasjoner». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S3.4 SQL-injeksjon og XSS». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Applikasjoner har dialog med brukeren, behandler brukerens input og bruker ofte en database. Det utnytter hackere. I SQL-injeksjon skriver du inn noe ekstra i passordfeltet, for eksempel «xyxyxy OR 1 er lik 1», og den resulterende SQL-setningen SELECT fra Bruker der Brukernavn er anneh og Passord er xyxyxy OR 1=1 blir alltid sann. Du kan også forsøke å slette data med DROP TABLE.
2. I Cross Site Scripting plasserer angriperen ondsinnet kode på en webside, kamuflert som innhold fra en bruker, og den lagres på webtjeneren. En intetanende bruker besøker siden, og koden sendes tilbake til brukeren sammen med innholdet. Angriperen tar så kontroll over brukerens maskin eller data via den injiserte koden. Sikre applikasjoner krever kartlegging av trusler i design, å unngå sårbarheter i programmeringen og oppdatert programvare i produksjon.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et innloggingsskjema der passordfeltet inneholder «xyxyxy OR 1=1» og en SQL-setning under som blir grønn «sann». Vis så tre steg for XSS: kode på en webside, bruker besøker den, angriper får kontroll.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan et passordfelt slippe en angriper inn?»
2. Poeng 1 (SQL-injeksjon, 8–34 s, ca. 55 ord): brukerinput havner i en SQL-setning. «OR 1=1» gjør vilkåret alltid sant. Angriperen kan også slette tabeller med DROP TABLE.
3. Poeng 2 (XSS, 34–58 s, ca. 40 ord): ondsinnet kode ligger på en webside som brukerinnhold, og sendes tilbake til intetanende brukere, som mister kontroll over maskin eller data. Forebygg i design, programmering og produksjon.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: SQL-injeksjon og XSS utnytter at applikasjoner stoler på brukerens input.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn skadevare, sosial manipulasjon eller kryptering.
```

---

## Video 5: Tiltak og det svakeste leddet

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Sikkerhetstiltak: Ivareta sikkerhetsmål», «Beskytte informasjon under lagring» og slutten om mennesker og «Sikkerhetskultur». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S3.5 Tiltak og det svakeste leddet». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Vi innfører sikkerhetstiltak for å ivareta sikkerhetsmålene, for alle datatilstander, lagring, overføring og bruk, og i ulike faser: forebyggende, detekterende og korrigerende. For lagret informasjon: riktig tilgangskontroll støtter konfidensialitet og integritet, kryptering gjør data uleselige for utenforstående, for eksempel hvis en laptop blir stjålet, og sikkerhetskopiering gir tilgjengelighet, for eksempel etter løsepengevirus. Gode rutiner for avhending hindrer lekkasje fra fysiske enheter.
2. Mennesker utnyttes også digitalt, med svindelangrep og utpressing, og deepfakes gjør det vanskeligere å ikke la seg lure. Du er også en viktig forsvarsmekanisme, og sikkerhetskultur er viktig. Sikkerhet i en applikasjon er ikke sikrere enn datamaskinen den kjører på, og som alltid er et datasystem aldri sikrere enn det svakeste leddet.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en tabell med tre kolonner for lagring, overføring og bruk, og tre rader for forebyggende, detekterende og korrigerende. Vis så en kjede der ett ledd er et menneske som er svakere enn de andre, og en tekst «aldri sikrere enn det svakeste ledd».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva beskytter egentlig dataene dine?»
2. Poeng 1 (tiltakene, 8–34 s, ca. 55 ord): tiltak for lagring, overføring og bruk, i faser: forebyggende, detekterende, korrigerende. Tilgangskontroll, kryptering og sikkerhetskopiering støtter hvert sitt mål.
3. Poeng 2 (mennesket, 34–58 s, ca. 40 ord): folk utnyttes også digitalt, og er samtidig en forsvarsmekanisme. Sikkerheten i en applikasjon er aldri sterkere enn maskinen den kjører på, og aldri sikrere enn det svakeste leddet.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: sikkerhetstiltak støtter hvert sitt mål, og det svakeste leddet bestemmer styrken.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar SQL-injeksjon, XSS, skadevare eller kryptografi i detalj.
```

---

## Etter generering

Legg videoene i `KapSikkerhet/S3/` som `S3.1.mp4` til `S3.5.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel S3, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
