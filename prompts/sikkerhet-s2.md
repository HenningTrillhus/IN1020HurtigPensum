# Gemini / NotebookLM-prompter for S2 «Å innfri sikkerhetsmål» (Sikkerhet)

NB: lysarkene fra forelesningen 21. august ligger ikke i mappen, så disse promptene er bygget på definisjonene i «Repetisjon»-lysarket i forelesningen 26. august (entitet, identitet, autentisering, autorisering og tilgangskontroll) og på sikkerhetsmålene K, I, T og P som nevnes senere i kurset (KIT+P). Definisjonene står derfor direkte i hver prompt, slik at Gemini ikke trenger noen kilde. Når du har lysarkene fra 21. august, kan jeg justere promptene mot dem.

To videoer: identitet og autentisering, og autorisering og tilgangskontroll med sikkerhetsmålene. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Entitet, identitet og autentisering (S2.1)
2. Autorisering, tilgangskontroll og sikkerhetsmålene (S2.2)

Felles regler i begge: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare definisjonene under POENG og enkle, hverdagslige eksempler (innlogging, nøkkelkort). Ikke finn på detaljer, tall eller navn på angrep. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Entitet, identitet og autentisering

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk definisjonene under POENG som kilde, og hold deg bare til begrepene entitet, identitet og autentisering. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S2.1 Entitet, identitet og autentisering». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En entitet er noe med en fysisk, juridisk eller prosessuell eksistens: en person, en bedrift eller et program. En identitet er representasjonen av en entitet: et brukernavn, et nøkkelkort eller et fødselsnummer. Én entitet kan ha flere ulike identiteter, for eksempel et brukernavn på jobb og et annet privat.
2. Autentisering er å verifisere en påstått identitet: noen sier «jeg er Ola», og systemet sjekker at det stemmer, for eksempel med passord, nøkkelkort eller fingeravtrykk. Altså: identiteten er påstanden, og autentiseringen er beviset.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en person (entitet) med tre kort (identiteter): brukernavn, nøkkelkort og e-postadresse. Vis så en dør der noen påstår «jeg er Ola» og et passord eller nøkkelkort sjekkes, med en hake.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Er du den samme som brukernavnet ditt?»
2. Poeng 1 (entitet og identitet, 8–34 s, ca. 55 ord): en entitet har en fysisk, juridisk eller prosessuell eksistens. En identitet representerer den, og én entitet kan ha flere identiteter.
3. Poeng 2 (autentisering, 34–58 s, ca. 40 ord): å verifisere en påstått identitet. Identiteten er påstanden, og autentiseringen er beviset, som passord, kort eller fingeravtrykk.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: identitet er påstanden om hvem du er, og autentisering er å bevise den.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn autorisering, tilgangsrettigheter, tilgangskontroll eller sikkerhetsmål.
```

---

## Video 2: Autorisering, tilgangskontroll og sikkerhetsmålene

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk definisjonene under POENG som kilde, og hold deg bare til begrepene autorisering, tilgangskontroll og sikkerhetsmålene konfidensialitet, integritet og tilgjengelighet. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S2.2 Autorisering, tilgangskontroll og sikkerhetsmålene». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Autorisering er å spesifisere tilgangsrettigheter: hva en identitet har lov til. Tilgangskontroll er å håndheve dem: systemet sier ja eller nei hver gang noen prøver. Autentisering svarer på hvem du er, autorisering på hva du har lov til, og tilgangskontroll sørger for at det blir fulgt. Uautorisert tilgang er tilgang noen ikke har fått rett til.
2. Dette er det som skal ivareta sikkerhetsmålene: konfidensialitet, at bare de som skal, får se informasjonen, integritet, at informasjonen ikke endres uten tillatelse, og tilgjengelighet, at den kan brukes når den trengs. Riktig tilgangskontroll støtter konfidensialitet og integritet: bare de som skal ha tilgang, får det. Personvern kommer i tillegg som fjerde mål.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis tre trinn som en rad: «hvem er du» (autentisering), «hva får du lov til» (autorisering) og en vakt som slipper noen inn og stopper andre (tilgangskontroll). Vis så en trekant med K, I og T, og et personvern-ikon utenfor.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvem får egentlig se hva i et datasystem?»
2. Poeng 1 (tre begreper, 8–34 s, ca. 55 ord): autentisering svarer på hvem du er, autorisering på hva du har lov til, og tilgangskontroll håndhever det hver gang.
3. Poeng 2 (målene, 34–58 s, ca. 40 ord): konfidensialitet: bare de som skal, får se. Integritet: ingen endring uten tillatelse. Tilgjengelighet: kan brukes når det trengs. Tilgangskontroll støtter de to første. Personvern kommer i tillegg.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: tilgangskontroll gjør at bare de som skal ha tilgang, får det, og det støtter sikkerhetsmålene.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar entitet, identitet eller hvordan autentisering gjøres, og ikke nevn trusler, angrep eller kryptering.
```

---

## Etter generering

Legg videoene i `KapSikkerhet/S2/` som `S2.1.mp4` og `S2.2.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel S2, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
