# Gemini / NotebookLM-prompter for S4 «Kryptografi» (Sikkerhet)

Kilde: lysarkene fra forelesningen «Kryptografi: Nøkkelen til digital samhandling» (09.09). Fire videoer: hva kryptografi er og hvordan den knekkes, symmetrisk kryptering og hash, asymmetrisk kryptering og digital signatur, og sertifikater og PKI. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet.
Utelatt: tilfeldige tall og NSA-bakdøren, status på hash-algoritmer, KRACK og lenkene. Kryptering i nettverkets lag er dekket i nettverksdelen.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Hva er kryptografi, og hvordan knekkes den (S4.1)
2. Symmetrisk kryptering og hash (S4.2)
3. Asymmetrisk kryptering og digital signatur (S4.3)
4. Sertifikater og PKI (S4.4)

Felles regler i alle fire: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Hva er kryptografi, og hvordan knekkes den

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Kryptografi: Viktige definisjoner», «Hemmelige koder», «Hvordan knekke en kryptering» og «Kompleksitet vs. brute-force». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S4.1 Hva er kryptografi, og hvordan knekkes den». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Kryptografi bruker en algoritme og en nøkkel til å gjøre klartekst, plaintext, om til kryptert tekst, ciphertext. Cæsarchiffer skifter bokstavene tre plasser fremover, så DOZEN blir GRCHQ. Et monoalfabetisk chiffer har tilfeldig mapping, 26 fakultet muligheter, men bokstavfrekvens er en svakhet. Man kan knekke kryptering med bare ciphertext ved å prøve alle nøkler, brute-force, med deler av klarteksten, slik Enigma ble knekt, eller ved å finne svakheter i algoritmen eller i implementasjonen.
2. Sikkerheten avhenger av hvor komplekst det er å knekke. En kombinasjonslås med 3 tall mellom 1 og 40 har 64 000 kombinasjoner og tar 178 timer med 10 sekunder per forsøk, mens 4 tall gir 2,56 millioner og 9244 timer. Svake passord knekkes på sekunder med frekvensanalyse og ordlister, og moderne GPU-er kan teste flere milliarder passord i sekundet.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis klartekst DOZEN som går gjennom en boks merket «algoritme + nøkkel» og blir GRCHQ. Vis så to kombinasjonslåser, med 64 000 mot 2 560 000 kombinasjoner og tidene 178 og 9244 timer.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan knekker man en kryptering?»
2. Poeng 1 (begrepene, 8–34 s, ca. 55 ord): algoritme og nøkkel gjør klartekst om til kryptert tekst. Cæsarchiffer: skift tre plasser, DOZEN blir GRCHQ. Monoalfabetisk har mange nøkler, men bokstavfrekvens avslører det.
3. Poeng 2 (knekke, 34–58 s, ca. 40 ord): prøv alle nøkler (brute-force), bruk kjent klartekst (som for Enigma), eller finn svakheter. En lås med 3 tall tar 178 timer, 4 tall 9244. GPU-er tester milliarder passord i sekundet.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: sikkerheten ligger i hvor mye arbeid det er å knekke, ikke i at algoritmen er hemmelig.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn symmetrisk eller asymmetrisk kryptering, hash eller sertifikater.
```

---

## Video 2: Symmetrisk kryptering og hash

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Symmetrisk kryptering» og «Kryptografiske enveisfunksjoner (hash-funksjoner)». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S4.2 Symmetrisk kryptering og hash». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Symmetrisk kryptering bruker én felles hemmelig nøkkel: avsenderen krypterer, og mottakeren bruker samme nøkkel til å dekryptere. Block cipher som DES og AES, i blokker på 128 bit, er mest brukt. Det gir konfidensialitet, autentisk avsender og autentisk mottaker, men ikke integritet og ikke ubenektelighet, for den andre har samme nøkkel og kunne sendt meldingen til seg selv. Farene er at nøkkelen kommer på avveie eller tapes, og hvordan den deles trygt.
2. Hash-funksjoner er enveis, uten nøkkel. En god sjekksum er enkel å regne ut, det er vanskelig å finne en melding for en gitt sjekksum, vanskelig å endre en melding uten at sjekksummen endres, og vanskelig å finne to meldinger med samme sjekksum. De brukes til å beskytte passord og sjekke integritet av filer, programvare og meldinger. Faren er at svake algoritmer har begrenset levetid.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to personer med samme nøkkel og en lås, og en tabell med K=ja, I=nei, ubenektelighet=nei. Vis så en fil som går gjennom en trakt og blir en kort hash-verdi, med en pil som ikke kan gå tilbake.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er forskjellen på kryptering og hash?»
2. Poeng 1 (symmetrisk, 8–34 s, ca. 55 ord): én delt nøkkel til både å kryptere og dekryptere. AES med 128-bits blokker. Gir konfidensialitet, men ikke integritet eller ubenektelighet, og nøkkelen må deles trygt.
3. Poeng 2 (hash, 34–58 s, ca. 40 ord): enveis, uten nøkkel. Enkelt å regne ut, vanskelig å snu, vanskelig å endre uten å endre hashen. Brukes til passord og integritet. Svake algoritmer eldes.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: symmetrisk kryptering skjuler innholdet med en delt nøkkel, mens hash bare sjekker at det ikke er endret.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn offentlig og privat nøkkel, signatur eller sertifikater.
```

---

## Video 3: Asymmetrisk kryptering og digital signatur

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Asymmetrisk kryptering», «Utfordringer med asymmetrisk kryptering» og «Digital signatur». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S4.3 Asymmetrisk kryptering og digital signatur». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Asymmetrisk kryptering bruker et nøkkelpar: en offentlig nøkkel, som publiseres for alle, og en privat nøkkel, som er hemmelig. Omid krypterer meldingen med Kristins offentlige nøkkel, og bare Kristin kan dekryptere den med sin private nøkkel. Det gir konfidensialitet, men ikke autentisk avsender. Asymmetriske algoritmer er mange ganger tregere, så løsningen er en hybrid modell: asymmetrisk kryptering for å bli enige om en midlertidig nøkkel, kjent som Diffie-Hellman, og symmetrisk kryptering resten av tiden.
2. Digital signatur snur det: avsenderen signerer med sin private nøkkel, og alle med den offentlige nøkkelen kan verifisere. En korrekt verifisert signatur bekrefter avsenderens identitet og at meldingen ikke ble endret. Den gir autentisk avsender og ubenektelighet, men ikke konfidensialitet. Omid kan ikke si at han ikke sendte den.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en postkasse med to nøkler: den offentlige er et blått kopi-ikon som alle har, den private er en rød nøkkel bare eieren har. Vis så to piler: «krypter med offentlig, dekrypter med privat» og «signer med privat, verifiser med offentlig». Vis en hybrid med en liten rask lås.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan to som aldri har møttes, sende hemmelige meldinger?»
2. Poeng 1 (nøkkelparet, 8–34 s, ca. 55 ord): kryptér med mottakerens offentlige nøkkel, og bare mottakerens private nøkkel kan dekryptere. Det er tregt, så man bruker Diffie-Hellman til å bli enige om en nøkkel og så symmetrisk kryptering.
3. Poeng 2 (signatur, 34–58 s, ca. 40 ord): signér med din private nøkkel, og alle kan verifisere med din offentlige. Det gir autentisk avsender og ubenektelighet, men ikke konfidensialitet.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: offentlig nøkkel gir konfidensialitet, og privat nøkkel gir signatur og ubenektelighet.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn sertifikater, PKI eller hash.
```

---

## Video 4: Sertifikater og PKI

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Nøkkelutveksling og sertifikater», «Men hva er et offentlig-nøkkel sertifikat?», «Og hvordan distribuere offentlige nøkler?», «Tillitsforvirring» og «Kryptering oppsummert». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «S4.4 Sertifikater og PKI». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Utfordringen er hvordan man stoler på at en offentlig nøkkel er ekte. Løsningen er at en identitet og tilhørende nøkkel knyttes sammen i et offentlig-nøkkel sertifikat. Et sertifikat består av den offentlige nøkkelen og attributter: eier, gyldighetsperiode, utsteder, kryptoalgoritme og nøkkelstørrelse. Attributtene signeres av utstederen, og det finnes standarder for innholdet, som X.509. Neste utfordring er hvordan man stoler på sertifikatet: det utstedes av en betrodd virksomhet, en sertifikat-myndighet, CA, som går god for at nøklene tilhører identiteten.
2. En offentlig-nøkkel infrastruktur, PKI, er et rammeverk for å utstede, administrere og bruke digitale sertifikater. Den har en policy, teknologi, prosedyrer og en tillitsmodell, og hovedformålet er å sikre ektheten av offentlige nøkler og trygg distribusjon. Internett har sin egen PKI. Pass på tillitsforvirring: en hengelås betyr ikke at nettstedet er til å stole på. Oppsummert gir kryptering konfidensialitet, integritet, autentisering og ubenektelighet.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et sertifikat som et kort med nøkkel, eier, gyldighet og utsteder, og en stempel fra en CA. Vis så en tillitskjede fra nettleseren til en CA, og et nettsted «kriminelt-firma.com» med hengelås og et spørsmålstegn.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan vet du at en offentlig nøkkel er ekte?»
2. Poeng 1 (sertifikatet, 8–34 s, ca. 55 ord): en offentlig nøkkel og en identitet knyttes i et sertifikat med eier, gyldighet og utsteder, signert av en betrodd CA. X.509 er standarden.
3. Poeng 2 (PKI og tillit, 34–58 s, ca. 40 ord): PKI er rammeverket for sertifikater, med policy, teknologi, prosedyrer og tillitsmodell. Internett har en PKI. En hengelås betyr ikke at nettstedet er pålitelig.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: sertifikater og en CA lar oss stole på at en offentlig nøkkel hører til den den utgir seg for.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar symmetrisk eller asymmetrisk kryptering, hash eller signatur på nytt.
```

---

## Etter generering

Legg videoene i `KapSikkerhet/S4/` som `S4.1.mp4` til `S4.4.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel S4, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
