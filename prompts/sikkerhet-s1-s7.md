# Gemini / NotebookLM-prompter for Sikkerhet: introduksjon (S1) og oppsummering (S7)

Kilde: `sikkerhet.pdf` (lysarkene). To videoer, én per delkapittel: «Datasikkerhet, er det så viktig?» og oppsummeringen. Hver video står på egne ben og er litt lengre enn de vanlige, siden de skal åpne og lukke hele sikkerhetsdelen.

1. Datasikkerhet, er det så viktig? (S1.1)
2. Oppsummering (S7.1)

NB: lysarkene fra de to første forelesningene finnes ikke i mappen. Derfor står sikkerhetsmålene (K, I, T og P) direkte i promptene, og S1.1 bygger på det lysarkene fra senere forelesninger sier om hva hackere er ute etter, og på eksempelet fra Lørenskog kommune.

Felles regler i begge: ingen henvisninger til forelesningsdatoer, kapitler eller andre videoer. Bruk bare begreper, tall og eksempler som står på lysarkene, med unntak av sikkerhetsmålene som er gitt direkte i prompten. Ikke si noe nummer i fortellingen.

---

## Video 1: Datasikkerhet, er det så viktig?

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene som kilde, og hold deg bare til spørsmålet «er datasikkerhet så viktig?»: hva hackere er ute etter, sikkerhetsmålene og eksempelet fra Lørenskog kommune. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S1.1 Datasikkerhet, er det så viktig?». Vis den som tittel i starten og bruk den som navn på videoen.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet: bare de som skal, får se informasjonen.
- Integritet: informasjonen endres ikke uten tillatelse.
- Tilgjengelighet: informasjonen kan brukes når den trengs.
- Personvern kommer i tillegg som fjerde mål (KIT pluss P).

POENG (kun disse tre)
1. Datasikkerhet angår alle som bruker eller bygger datasystemer. Hackere er stort sett ute etter tre ting: tilgang til informasjon, å endre eller forfalske den, eller å gjøre den utilgjengelig. Det er konfidensialitet, integritet og tilgjengelighet snudd opp ned.
2. Det er ikke bare teori: Lørenskog kommune ble utsatt for et angrep, og de direkte kostnadene ble anslått til 25 millioner kroner.
3. Et datasystem er aldri sikrere enn det svakeste leddet, og derfor må sikkerhet tenkes på alle steder, fra applikasjon til maskinvare og mennesket.

LENGDE OG FORMAT
- Maks 80 sekunder og ca. 170 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en trekant med K, I og T i hjørnene og et lite P ved siden av, og tre piler fra en hacker: se, endre, stenge. Vis så tallet 25 millioner kroner, og til slutt en kjede der ett ledd lyser rødt.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–10 s, ca. 22 ord): spør: «Er datasikkerhet egentlig så viktig?» Hva er en hacker egentlig ute etter?
2. Poeng 1, hva de vil (10–36 s, ca. 55 ord): tilgang til informasjon, å endre eller forfalske den, eller å gjøre den utilgjengelig. Det er konfidensialitet, integritet og tilgjengelighet, og personvern kommer i tillegg som fjerde mål.
3. Poeng 2, Lørenskog (36–58 s, ca. 45 ord): Lørenskog kommune ble utsatt for et angrep, og de direkte kostnadene er anslått til 25 millioner kroner. Det er ikke teori.
4. Poeng 3, svakeste ledd (58–74 s, ca. 35 ord): et datasystem er aldri sikrere enn det svakeste leddet. Derfor må du tenke sikkerhet i hele kjeden, også hos mennesket.
5. Avslutning (74–80 s, ca. 15 ord): én setning som gjentar poenget: datasikkerhet er viktig, fordi kjeden aldri er sterkere enn det svakeste leddet.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller forelesninger.

AVGRENSNING
Ikke forklar hvordan angrepet på Lørenskog skjedde, kryptografi eller bestemte typer skadevare. Ikke legg til tall som ikke står i lysarkene.
```

---

## Video 2: Oppsummering

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene som kilde, og oppsummer hele sikkerhetsdelen: sikkerhetsmålene, angrepsvektorene, kryptografien, trygge nett og systemer og styring. Bruk bare begreper, tall og eksempler som står på lysarkene, med unntak av sikkerhetsmålene som er gitt direkte under.

TITTEL
Videoen skal hete akkurat: «S7.1 Oppsummering». Vis den som tittel i starten og bruk den som navn på videoen.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet, integritet og tilgjengelighet, med personvern som fjerde mål (KIT pluss P).

POENG (kun disse fire)
1. Målene og angrepet: vi vil beskytte konfidensialitet, integritet og tilgjengelighet, og trusselaktørene går etter dem med angrepsvektorer: sårbarheter og skadevare, SQL-injeksjon og XSS, og sosial manipulasjon.
2. Kryptografi: kryptering gir konfidensialitet, hash sjekker integritet, og digital signatur og sertifikater knytter en nøkkel til en identitet.
3. Trygge nett og systemer: kryptering og brannmur i nettet, og minste privilegium i systemene. Helhet er nødvendig: sikkerhet i applikasjonen er ikke sikrere enn datamaskinen den kjører på, som avhenger av systemprogramvare, oppstartsprosess og maskinvare.
4. Styring: lovkrav som GDPR, trusselmodellering og risikoanalyse, og administrative tiltak som internkontroll, policyer, opplæring og øvelser. Datasikkerhet er en kontinuerlig prosess.

LENGDE OG FORMAT
- Maks 90 sekunder og ca. 200 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis KIT-trekanten i hjørnet som lyser opp ved hvert poeng, og en kjede der alle leddene til slutt er like sterke.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–10 s, ca. 22 ord): spør: «Hva var egentlig poenget med sikkerhet?» Her er hele delen på halvannet minutt.
2. Poeng 1, mål og angrep (10–32 s, ca. 50 ord): vi beskytter konfidensialitet, integritet og tilgjengelighet, og hackere angriper med sårbarheter, skadevare, SQL-injeksjon, XSS og sosial manipulasjon.
3. Poeng 2, kryptografi (32–52 s, ca. 45 ord): kryptering gir konfidensialitet, hash sjekker integritet, og signatur og sertifikat knytter en nøkkel til en identitet.
4. Poeng 3, helhet (52–72 s, ca. 45 ord): trygge nett og systemer, og helhet er nødvendig: applikasjonen er ikke sikrere enn maskinen den kjører på, som avhenger av systemprogramvare, oppstart og maskinvare.
5. Poeng 4, styring (72–84 s, ca. 28 ord): lov, risiko og administrative tiltak, og sikkerhet er en kontinuerlig prosess.
6. Avslutning (84–90 s, ca. 12 ord): én setning som gjentar poenget: sikkerhet er å beskytte målene mot angrepsvektorene, og kjeden er aldri sterkere enn det svakeste leddet.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller forelesninger.

AVGRENSNING
Ikke forklar hvordan et bestemt angrep skjedde eller hvordan algoritmene virker. Ikke legg til tall som ikke står i lysarkene.
```

---

## Etter generering

Legg videoene i `KapS/S1/` som `S1.1.mp4` og i `KapS/S7/` som `S7.1.mp4`, og gi meg beskjed. Jeg legger dem inn i delkapittel S1 og S7, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
