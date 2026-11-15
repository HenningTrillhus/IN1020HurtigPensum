# Prompt til den lange videoen: hele Sikkerhet i én video

Denne videoen går på «Sikkerhet Hele kapitlet i én video», øverst i Sikkerhet. Den går gjennom hele sikkerhetsdelen i én sammenhengende fortelling, med vekt på det du trenger mest: sikkerhetsmålene og angrepsvektorene.

Lengde: ca. 10 minutter (rundt 1350 ord fortellertekst). Vil du ha den kortere, bytt «10 minutter» med «7 minutter» og kutt delene som er merket «kan kuttes».

Legg ved `sikkerhet.pdf` fra mappen «Pensum Kompendier» som kilde. Den inneholder lysarkene fra 26. august, 9. september, 18. september og 23. september. Lysarkene fra 19. og 21. august (de to første forelesningene) finnes ikke, så definisjonene av sikkerhetsmålene står derfor direkte i prompten under.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i den vedlagte filen «sikkerhet.pdf» som kilde, og dekk hele sikkerhetsdelen. Bruk bare begreper, tall og eksempler som står i lysarkene, med unntak av definisjonene i delen «Sikkerhetsmålene» under, som er gitt direkte i prompten. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «Sikkerhet Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hva sikkerhet handler om: hva vi vil beskytte (sikkerhetsmålene), hvem som angriper og hvordan (angrepsvektorene), hvordan vi beskytter oss (kryptografi, nettverk, systemer) og hvordan en virksomhet styrer det (lov, risiko og administrative tiltak). Videoen skal binde sammen delene med en rød tråd, ikke bare liste dem opp.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet: bare de som skal, får se informasjonen.
- Integritet: informasjonen endres ikke uten tillatelse.
- Tilgjengelighet: informasjonen kan brukes når den trengs.
- Personvern kommer i tillegg som fjerde mål (KIT pluss P).
- Entitet: noe med en fysisk, juridisk eller prosessuell eksistens. Identitet: representasjonen av en entitet. Autentisering: å verifisere en påstått identitet. Autorisering: å spesifisere tilgangsrettigheter. Tilgangskontroll: å håndheve dem.

LENGDE OG FORMAT
- Ca. 10 minutter og ca. 1350 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tallene fra lysarkene.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Rød tråd: en liten trekant med K, I og T i hjørnet av skjermen. Marker hvilket mål som angripes eller beskyttes i hver del.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:40, ca. 80 ord): hva er en hacker ute etter? Tilgang til informasjon, å endre eller forfalske den, eller å gjøre den utilgjengelig. Det er K, I og T snudd opp ned. Og metodene er ID-tyveri, å utnytte sårbarheter eller å få noen til å gi deg det du vil ha.
2. Målene og begrepene (0:40–1:50, ca. 150 ord): konfidensialitet, integritet, tilgjengelighet og personvern. Entitet, identitet, autentisering, autorisering og tilgangskontroll: identiteten er påstanden, autentiseringen er beviset, og tilgangskontrollen håndhever rettighetene.
3. Sårbarheter og skadevare (1:50–3:50, ca. 270 ord): sårbarhet, nulldags-sårbarhet, sårbarhetsflate, angrepsvektor. Typer skadevare: løsepengevirus, dataorm, trojaner, bakdør, spionvare, tastelogger, rootkit og exploit. Gruppene overlapper.
4. Applikasjoner og mennesket (3:50–5:10, ca. 180 ord): SQL-injeksjon med «OR 1=1» i passordfeltet og DROP TABLE, og XSS i tre steg. Sosial manipulasjon, svindelangrep, deepfakes og at du også er en forsvarsmekanisme. Et datasystem er aldri sikrere enn det svakeste leddet.
5. Kryptografi (5:10–7:10, ca. 270 ord): klartekst og kryptert tekst, algoritme og nøkkel, brute-force (kombinasjonslås: 64 000 kombinasjoner tar 178 timer, 4 tall 9244 timer). Symmetrisk kryptering med én delt nøkkel (AES) gir konfidensialitet men ikke integritet eller ubenektelighet. Hash er enveis og sjekker integritet. Asymmetrisk kryptering med offentlig og privat nøkkel, hybridmodell og Diffie-Hellman. Digital signatur gir ubenektelighet. Sertifikat og CA knytter nøkkel til identitet, og PKI.
6. Trygge nett og systemer (7:10–8:30, ca. 180 ord): trusler mot trådløse nett (avlytting, falske aksesspunkter) og kablede nett, TLS, IPSec, VPN og WPA, brannmur og IDS. Kjernen kjører i supervisor mode med tilgang til alt, minste privilegium, Copy Fail, buffer-utnyttelser. Digitale verdikjeder: Ruters elbusser og Crowdstrike, IaaS, PaaS, SaaS og kundens ansvar.
7. Lov, risiko og styring (8:30–9:40, ca. 160 ord): GDPR artikkel 25 (innebygd personvern) og 32 (sikkerhet ved behandlingen). Trusselmodellering, risiko som trussel pluss sårbarhet pluss hendelse, sannsynlighet mot konsekvens, og administrative tiltak som internkontroll, policyer, opplæring og øvelser. Lørenskog: ett klikk på en forgiftet nedlasting ble et angrep som kostet 25 millioner kroner. Kan kuttes: detaljene om hvordan angrepet skjedde.
8. Avslutning (9:40–10:00, ca. 40 ord): én setning som gjentar poenget: sikkerhet er å beskytte konfidensialitet, integritet og tilgjengelighet mot angrepsvektorene, og kjeden er aldri sterkere enn det svakeste leddet.

REGLER FOR SLUTTEN
Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke bruk forelesningsdatoer, kapittelnumre eller henvis til andre videoer. Ikke gå dypt i nettverksprotokoller: det hører til nettverksdelen. Ikke legg til tall som ikke står i lysarkene.
```

---

## Etter generering

Legg videoen i `KapS/Hele/` som `Sikkerhet.mp4` og gi meg beskjed. Jeg legger den inn i «Sikkerhet Hele kapitlet i én video», lager plakatbilde og oppsummering og sjekker at den starter raskt.
