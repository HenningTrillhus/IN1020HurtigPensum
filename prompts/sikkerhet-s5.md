# Gemini / NotebookLM-prompter for S5 «Trygg infrastruktur og sikre datasystemer» (Sikkerhet)

Kilde: lysarkene fra forelesningen «Trygg infrastruktur og sikre datasystemer» (18.09). Tre videoer: nettverkssikkerhet, systemsikkerhet og digitale verdikjeder. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet.
Utelatt: quiz-oppgavene, lenker og oppgavetekstene. Kryptering (TLS, IPSec, WPA) er forklart nærmere i kryptografidelen, her nevnes den bare som tiltak.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Nettverkssikkerhet (S5.1)
2. Systemsikkerhet (S5.2)
3. Digitale verdikjeder (S5.3)

Felles regler i alle tre: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Nettverkssikkerhet

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Kommunikasjonssikkerhet», «Hvordan beskytte informasjon under overføring?» og «Hvordan beskytte et datanett?». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S5.1 Nettverkssikkerhet». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Trusler mot trådløse nett: hvem som helst kan lytte til radiosignalene, signalforstyrrelser kan gjøre nettet utilgjengelig, falske aksesspunkter lokker enheter til å koble til fordi de velger sterkeste signal, og åpne aksesspunkter kan være kompromitterte. I kablede nett krever avlytting fysisk tilgang, men er fullt mulig, en ødelagt kabel gir utilgjengelighet, og rutere, svitsjer og andre enheter på samme nett kan være kompromitterte. Informasjon under overføring beskyttes med TLS for ende-til-ende, IPSec på IP-pakker, VPN som kobler to subnett sammen, og WPA mellom deg og aksesspunktet.
2. Et datanett beskyttes med perimetersikkerhet. En brannmur er et sjekkpunkt som slipper inn eller avviser trafikk basert på forhåndsdefinerte regelsett, og fungerer som tilgangskontroll for nettverket, som program eller maskinvare. Inntrengningsdeteksjon, IDS, overvåker trafikken og oppdager mistenkelig trafikk, innbrudd, virus og tjenestenektangrep.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to nett side om side: et trådløst med en lytter og et falskt aksesspunkt, og et kablet med en avlytter ved en kabel. Vis så en mur merket «brannmur» foran et nett og et øye merket «IDS» ved siden av.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan noen lytte til nettverket ditt?»
2. Poeng 1 (truslene, 8–34 s, ca. 55 ord): trådløst: alle kan lytte, forstyrre, lokke med falske aksesspunkt. Kablet: avlytting krever fysisk tilgang, men går, og kabler og endepunkter kan angripes. Kryptering med TLS, IPSec, VPN og WPA beskytter.
3. Poeng 2 (perimeteren, 34–58 s, ca. 40 ord): en brannmur slipper inn eller avviser trafikk etter regler, og fungerer som tilgangskontroll. IDS overvåker og oppdager mistenkelig trafikk, virus og tjenestenektangrep.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: nettverk trues av avlytting og forstyrrelse, og beskyttes med kryptering, brannmur og overvåking.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn operativsystemer, buffer, skytjenester eller leverandører.
```

---

## Video 2: Systemsikkerhet

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Systemsikkerhet», «Sikkerhet i operativsystemet», «Copy Fail», «Kan minnet i en datamaskin hackes?» og «OpenSSL sårbarheter». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S5.2 Systemsikkerhet». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Den tradisjonelle modellen stoler på endesystemene og anser nettverket som upålitelig, men både operativsystem, drivere, nettverksprotokoller og applikasjoner er sårbare for programvareangrep. OS-et styrer brukernes tilgang etter prinsippet om minste privilegium, og kjernen styrer alt og kjører i supervisor mode med tilgang til alt, så en sårbarhet i kjernen eller driverne er kritisk. Derfor må programvaren være trygg og oppdatert. Copy Fail er en feil i Linux-kjernen: et Python-skript på 732 byte kan gi root-tilgang på praktisk talt alle Linux-distribusjoner siden 2017.
2. Minnet kan også angripes: en buffer er en sammenhengende seksjon av minnet avsatt til data. Med sårbare programmer kan man skrive uhemmet til minnet: plassere egen kode der det ligger kjørbar kode, og endre en funksjons returadresse så den peker til den egne koden. OpenSSL, et C-bibliotek som implementerer TLS og brukes i millioner av applikasjoner, hadde sårbarheten Heartbleed. Åpen kildekode og utbredelse gjør ikke noe automatisk trygt.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et lagdelt bilde: applikasjoner, nettverksprotokoller, drivere og OS med kjernen nederst, alle merket «sårbar». Vis så en minnekolonne med en buffer som flyter over og overskriver returadressen, så den peker til egen kode.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor er en feil i operativsystemet så farlig?»
2. Poeng 1 (kjernen, 8–34 s, ca. 55 ord): OS og drivere er også programmer med sårbarheter, og kjernen har tilgang til alt. Minste privilegium og oppdateringer er nødvendig. Copy Fail: 732 byte gir root på Linux siden 2017.
3. Poeng 2 (minnet, 34–58 s, ca. 40 ord): en buffer som flyter over kan overskrive returadressen så den peker til angriperens kode. OpenSSL, brukt overalt, hadde Heartbleed.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: en feil i kjernen eller i minnet kan gi en angriper full kontroll over maskinen.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn brannmur, kryptering, skytjenester eller leverandører.
```

---

## Video 3: Digitale verdikjeder

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Digitale verdikjeder» med eksemplene om Ruter og Crowdstrike, modellene for tjenesteleveranse og spørsmålet om tjenesteutsetting. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S5.3 Digitale verdikjeder». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Digitale tjenester, funksjoner eller varer fra eksterne leverandører tas i bruk i stedet for å gjøre jobben selv, og det gir en digital verdikjede. Det kan være programvare og programvarebiblioteker, slik at du slipper å finne opp hjulet på nytt, eller tjenesteutsetting av IT-tjenester som lagring og beregning. Men du blir avhengig av andre: Ruter fant at kinesiske elbusser i Oslo kan tas kontroll over og stoppes av produsenten via fjerntilgang til oppdatering, diagnostikk og batteristyring. Crowdstrike i juli 2024 viser hva en feil hos en leverandør kan gjøre.
2. Tjenester leveres som tradisjonell IT-drift, infrastruktur som tjeneste IaaS, plattform som tjeneste PaaS eller programvare som tjeneste SaaS, og jo høyere opp, jo mer av leveransen er leverandørens, men du har fortsatt kontrollansvar. Fordelene med utsetting er lavere driftskostnader og betaling for faktisk bruk, og sannsynligvis god informasjonssikring. Men vet du hvor skyen befinner seg? Virksomheten er juridisk ansvarlig for personopplysninger og må inngå en databehandleravtale, artikkel 28 i GDPR.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en kjede av ledd: egen virksomhet, programvareleverandør og skytjeneste, der ett ledd lyser rødt. Vis så fire stabler for tradisjonell drift, IaaS, PaaS og SaaS, med kundens og leverandørens deler i ulike farger.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva skjer når noen andre eier en del av systemet ditt?»
2. Poeng 1 (verdikjeden, 8–34 s, ca. 55 ord): vi bruker programvare og tjenester fra andre for å spare arbeid, men blir avhengige. Ruters elbusser kan stoppes av produsenten, og Crowdstrike i 2024 viste en feil hos en leverandør kan stoppe mange.
3. Poeng 2 (ansvaret, 34–58 s, ca. 40 ord): IaaS, PaaS og SaaS flytter mer og mer til leverandøren, men du beholder kontrollansvar. Utsetting er billigere, men personopplysninger krever en databehandleravtale, og virksomheten er fortsatt juridisk ansvarlig.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: å bruke leverandører sparer arbeid, men gir avhengighet og beholdt ansvar.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn nettverkstrusler, brannmur, operativsystemer eller buffer.
```

---

## Etter generering

Legg videoene i `KapSikkerhet/S5/` som `S5.1.mp4` til `S5.3.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel S5, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
