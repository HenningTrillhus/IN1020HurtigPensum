# Gemini / NotebookLM-prompter for S6 «Å skape trygge digitale tjenester» (Sikkerhet)

Kilde: lysarkene fra forelesningen «Å skape trygge digitale tjenester krever innsats» (23.09). Tre videoer: lovkrav og innebygd personvern, trusselmodellering og risikoanalyse med administrative tiltak, og angrepet mot Lørenskog kommune. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet.
Utelatt: OWASP Top 10 (en lang liste), NSMs trusselbilde, rammeverk og sårbarhetsdatabaser, lenker, eksamensoppgaven og emneoversikten.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Lovkrav og innebygd personvern (S6.1)
2. Trusselmodellering, risiko og administrative tiltak (S6.2)
3. Angrepet mot Lørenskog (S6.3)

Felles regler i alle tre: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Lovkrav og innebygd personvern

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Lovpålagte rammer og krav» med GDPR artikkel 25 og 32 og lovene for annen informasjon. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S6.1 Lovkrav og innebygd personvern». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Innebygd personvern, GDPR artikkel 25: systemene vi bruker må oppfylle personvernprinsippene, og personvern må tas hensyn til i alle utviklingsfaser. Det minst personverninngripende alternativet skal være standarden: minst mulig personopplysninger, minst mulig omfang av behandlingen, kortest mulig lagringstid, og bare tilgjengelig for berettigede personer.
2. Sikkerhet ved behandlingen, artikkel 32: informasjonssikkerhet gjennom hele behandlingsperioden, med egnede tekniske og organisatoriske tiltak, blant annet pseudonymisering og kryptering, evne til å sikre konfidensialitet, integritet, tilgjengelighet og robusthet, evne til å gjenopprette tilgangen etter en hendelse, og regelmessig testing av tiltakene. For annen informasjon finnes foreløpig få generelle krav, men lover som sikkerhetsloven og digitalsikkerhetsloven for bestemte sektorer.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en tidslinje med syv faser: opplæring, krav, design, koding, test, produksjonssetting og forvaltning, med personvern som en tråd gjennom alle. Vis så fire små krav fra artikkel 32 som avkrysningspunkter: kryptering, KIT-målene, gjenoppretting og testing.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva sier loven om sikkerhet for personopplysninger?»
2. Poeng 1 (innebygd personvern, 8–34 s, ca. 55 ord): artikkel 25: personvern i alle faser, og det minst inngripende er standard: minst data, minst omfang, kortest lagring, bare for berettigede.
3. Poeng 2 (sikkerhet ved behandlingen, 34–58 s, ca. 40 ord): artikkel 32: egnede tiltak som kryptering, vedvarende konfidensialitet, integritet, tilgjengelighet og robusthet, gjenoppretting etter hendelser og regelmessig testing.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: loven krever personvern bygd inn fra starten og sikkerhet gjennom hele behandlingen.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn risikoanalyse, trusselmodellering, administrative tiltak eller Lørenskog.
```

---

## Video 2: Trusselmodellering, risiko og administrative tiltak

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Behov for systematisk styring», «Å identifisere trusler og risiko», «Trusselmodellering», «Risikoidentifisering», «Risikoanalyse», «Risikovurdering og risikohåndtering» og «Administrative sikkerhetstiltak». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S6.2 Trusselmodellering, risiko og administrative tiltak». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Sikkerhetsstyring er systematiske aktiviteter for å oppnå og opprettholde et sikkerhetsnivå i samsvar med de målene og kravene en organisasjon har satt, og informasjonssikkerhet må være en del av virksomhetsstyringen. Trusselmodellering er å identifisere og beskrive angrepsscenarier: med fokus på trusselaktøren og dens mål, på sårbarheter ved å plukke systemet fra hverandre, eller på verdier. En risiko er en kombinasjon av trussel, sårbarhet og hendelse som kan skade verdier.
2. Risikoanalyse vurderer sannsynlighet og konsekvens: skal innsatsen legges på en usannsynlig hendelse med store tap eller på sannsynlige hendelser med lavere kostnad? Eiere, brukere, eksperter og ledelse må samarbeide, og eierne spesifiserer sikkerhetsmålene, KIT pluss P. Administrative tiltak er internkontroll, styringssystem, policyer og standarder, prosedyrer, bevissthetstrening, sikkerhetsøvelser og rutiner for hendelseshåndtering.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en matrise med sannsynlighet på den ene aksen og konsekvens på den andre, med to hendelser plassert, én i hjørnet «usannsynlig, stort tap» og én «sannsynlig, lite tap». Vis så en liste med seks administrative tiltak som avkrysninger.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan bestemmer du hva som er verdt å beskytte først?»
2. Poeng 1 (trusler og risiko, 8–34 s, ca. 55 ord): trusselmodellering beskriver angrepsscenarier, med fokus på aktør, sårbarheter eller verdier. En risiko er trussel, sårbarhet og hendelse som kan skade verdier. Vurder sannsynlighet og konsekvens.
3. Poeng 2 (administrative tiltak, 34–58 s, ca. 40 ord): sikkerhet må inn i virksomhetsstyringen. Internkontroll, styringssystem, policyer, prosedyrer, bevissthetstrening, sikkerhetsøvelser og rutiner for hendelser.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: sikkerhet styres systematisk ved å vurdere risiko og innføre administrative tiltak.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn GDPR, Lørenskog eller bestemte angrep.
```

---

## Video 3: Angrepet mot Lørenskog

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene om Lørenskog kommune: angrepsvektoren, eskaleringen, når angrepet ble oppdaget og konsekvensene. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S6.3 Angrepet mot Lørenskog». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. 7. april søkte en ansatt på nettet, fant en side som så legitim ut og lastet ned en zip-fil: SEO-forgiftning. Dobbeltklikk på en .js-fil i den startet et PowerShell-skript som etablerte en command-and-control-tjener. Maskinen var en laptop med VPN til kommunens nett, så angriperen kom seg inn på LAN-et.
2. Angriperen utnyttet en sårbarhet, ESC1, ba om et sertifikat for admin og fikk samme rettigheter, og spredte skadevare til domenekontrollerne. 1,8 TB data ble hentet ut, og 8. mai startet krypteringen. 9. mai ble angrepet oppdaget da ingen kom inn, og kommunen stengte alt. Direkte kostnad: 25 millioner kroner.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en tidslinje fra 7. april til 9. mai: søk og nedlasting, skript og C2, VPN inn, sertifikat for admin, SCCM og domenekontroller, uttrekk av 1,8 TB, kryptering, oppdaget. Vis så kostnaden 25 millioner kroner i en rød boks.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kom hackerne inn i en hel kommune?»
2. Poeng 1 (veien inn, 8–34 s, ca. 55 ord): et nettsøk førte til en forgiftet side og en zip-fil. Skriptet etablerte en C2-tjener, og VPN ga tilgang til LAN-et.
3. Poeng 2 (eskalering og konsekvens, 34–58 s, ca. 40 ord): angriperen fikk et admin-sertifikat, spredte seg til domenekontrollerne og hentet ut 1,8 TB. Krypteringen 8. mai ble oppdaget 9. mai. 25 millioner kroner i direkte kostnad.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: ett klikk på en forgiftet nedlasting ble et angrep som kostet 25 millioner kroner.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn GDPR, risikoanalyse eller administrative tiltak.
```

---

## Etter generering

Legg videoene i `KapSikkerhet/S6/` som `S6.1.mp4` til `S6.3.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel S6, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
