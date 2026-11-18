# NotebookLM-prompter til korte podkaster: ett delkapittel av gangen (Sikkerhet)

Kilde: `sikkerhet.pdf` fra mappen «Pensum Kompendier». Lim hele prompten for ett delkapittel inn i «tilpass»-feltet i NotebookLM (Audio Overview), med `sikkerhet.pdf` som kilde. Lag én podkast per delkapittel.

Lengde: 5 til 10 minutter per podkast. NotebookLM styrer lengden løst, så ordtallet i hver prompt er et ønske, ikke en garanti. Kommer en podkast ut for lang, bytt tallet med et lavere. Hver podkast står på egne ben.

| # | Delkapittel | Lengde | Legg filen i |
|---|---|---|---|
| 1 | S1 Datasikkerhet, er det så viktig? | ca. 5 min (ca. 700 ord) | `KapS/Podkast/S1.m4a` |
| 2 | S2 Å innfri sikkerhetsmål | ca. 6 min (ca. 850 ord) | `KapS/Podkast/S2.m4a` |
| 3 | S3 Hvordan hackes vi? | ca. 10 min (ca. 1400 ord) | `KapS/Podkast/S3.m4a` |
| 4 | S4 Kryptografi | ca. 10 min (ca. 1400 ord) | `KapS/Podkast/S4.m4a` |
| 5 | S5 Trygg infrastruktur og sikre datasystemer | ca. 8 min (ca. 1150 ord) | `KapS/Podkast/S5.m4a` |
| 6 | S6 Å skape trygge digitale tjenester | ca. 8 min (ca. 1150 ord) | `KapS/Podkast/S6.m4a` |
| 7 | S7 Oppsummering | ca. 6 min (ca. 850 ord) | `KapS/Podkast/S7.m4a` |

Felles for alle sju: lysarkene fra de to første forelesningene (19. og 21. august) ligger ikke i mappen. Derfor står sikkerhetsmålene og begrepene for S1 og S2 direkte i promptene, og S1 bygger på det lysarkene fra senere forelesninger sier om hva hackere vil. Hold deg til kildene: ikke bruk datoer, forelesningsnumre eller kapittelnumre i samtalen.

---

## 1. S1 Datasikkerhet, er det så viktig? (ca. 5 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 5 minutter (ca. 700 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, men hold deg bare til spørsmålet «er datasikkerhet så viktig?»: hva hackere er ute etter, sikkerhetsmålene og eksempelet fra Lørenskog kommune. Bruk bare begreper, tall og eksempler som står i lysarkene, med unntak av sikkerhetsmålene under, som er gitt direkte. Ikke finn på detaljer. Ikke forklar hvordan angrep fungerer teknisk, kryptografi eller bestemte typer skadevare: det kommer i andre podkaster.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet: bare de som skal, får se informasjonen.
- Integritet: informasjonen endres ikke uten tillatelse.
- Tilgjengelighet: informasjonen kan brukes når den trengs.
- Personvern kommer i tillegg som fjerde mål (KIT pluss P).

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: er datasikkerhet egentlig så viktig, eller er det noe for spesielt interesserte? Svaret er at det angår alle som bruker eller bygger datasystemer.
2. Hva vil hackerne? Tilgang til informasjon, å endre eller forfalske den, eller å gjøre den utilgjengelig. Det er konfidensialitet, integritet og tilgjengelighet snudd opp ned. Og personvern kommer i tillegg som fjerde mål.
3. Det er ikke teori: Lørenskog kommune ble utsatt for et datainnbrudd, med nedetid for IT-tjenester og virksomhetskritiske og sensitive opplysninger på avveie. De direkte kostnadene er anslått til 25 millioner kroner. Ikke gå inn på hvordan angrepet skjedde.
4. Det svakeste leddet: et datasystem er aldri sikrere enn det svakeste leddet, så sikkerhet må tenkes på alle steder, også hos mennesket.
5. Avslutt rolig: datasikkerhet er viktig fordi kjeden aldri er sterkere enn det svakeste leddet, og målene er det vi beskytter.

STIL
- Bruk bilder og metaforer (kjeden, en dør med mange låser). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 2. S2 Å innfri sikkerhetsmål (ca. 6 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter (ca. 850 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, men hold deg bare til definisjonene i «Repetisjon»-lysarket og sikkerhetsmålene K, I og T (pluss P), som er gitt direkte under. Ikke finn på detaljer. Ikke forklar kryptering, nettverk eller bestemte angrep: det kommer i andre podkaster.

BEGREPENE (gitt direkte, bruk disse)
- Entitet: noe med en fysisk, juridisk eller prosessuell eksistens.
- Identitet: representasjonen av en entitet.
- Autentisering: å verifisere en påstått identitet.
- Autorisering: å spesifisere tilgangsrettigheter.
- Tilgangskontroll: å håndheve tilgangsrettigheter.
- Sikkerhetsmålene: konfidensialitet (bare de som skal, får se), integritet (ikke endret uten tillatelse) og tilgjengelighet (kan brukes når den trengs), med personvern som fjerde mål.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hvem er det egentlig du gir tilgang til? Et system må vite hvem som spør, hva de har lov til, og passe på at reglene holdes.
2. Entitet og identitet: en entitet er noe med en fysisk, juridisk eller prosessuell eksistens, og en identitet er representasjonen av den. Du kan altså ha flere identiteter, og én identitet er bare en påstand om hvem du er.
3. Autentisering: å verifisere påstanden. Identiteten er påstanden, autentiseringen er beviset.
4. Autorisering og tilgangskontroll: autorisering er å bestemme rettighetene, tilgangskontroll er å håndheve dem. Et eksempel med en dør: regelen om hvem som får gå inn mot låsen som faktisk stenger.
5. Knytt det til målene: tilgangskontroll støtter konfidensialitet og integritet, og tilgjengelighet betyr at de som har rett, faktisk kommer inn. Personvern kommer i tillegg.
6. Avslutt rolig: identitet er påstanden, autentisering er beviset, autorisering er reglene og tilgangskontroll er håndhevingen.

STIL
- Bruk bilder og metaforer (en dør, et adgangskort, en vekter ved porten). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 3. S3 Hvordan hackes vi? (ca. 10 minutter)

```
Lag en podkast på norsk bokmål, ca. 10 minutter (ca. 1400 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, og hold deg bare til delen «Hvordan hackes vi?»: hva angriperne vil ha, sårbarhet og angrepsvektor, skadevare, SQL-injeksjon og XSS, sikkerhetstiltak og mennesket. Bruk bare begreper, tall og eksempler som står der. Ikke finn på detaljer. Ikke forklar kryptografi eller nettverk i detalj: det kommer i andre podkaster.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hva er en hacker egentlig ute etter? Tilgang til informasjon, å endre eller forfalske den, eller å gjøre den utilgjengelig. Det er konfidensialitet, integritet og tilgjengelighet snudd opp ned. Og metodene er ID-tyveri, å utnytte sårbarheter i programvare, systemer eller infrastruktur, eller å få noen til å gi deg det du vil ha.
2. Sårbarhet og angrepsvektor: en sårbarhet er en feil, mangel eller svakhet som gjør at et system kan utnyttes. En nulldags-sårbarhet er en noen kjenner til før produsenten og brukerne gjør det. Sårbarhetsflaten er summen av alt som kan nås og utnyttes. Skadevare er programvare som har som mål å gjøre skade. En angrepsvektor er metoden en angriper bruker: sårbarheten er svakheten, og vektoren er veien inn.
3. Skadevare, et utvalg (gruppene overlapper): løsepengevirus krypterer kritiske data så de blir utilgjengelige. Dataorm sprer seg og finner nye ofre på egen hånd. Trojaner utgir seg for å være et nyttig program. Bakdør er en ubeskyttet og ukjent åpning laget av en angriper. Spionvare spionerer på brukeren, og tastelogger lagrer alle tastetrykk. Rootkit endrer eller erstatter funksjoner i operativsystemet for å ta kontroll. Exploit er en oppskrift på hvordan en sårbarhet utnyttes.
4. Applikasjoner: SQL-injeksjon, der du skriver noe ekstra i passordfeltet, for eksempel «OR 1 er lik 1», så SQL-setningen alltid blir sann, og DROP TABLE for å slette data. Cross Site Scripting: ondsinnet kode lagres på en webside, kamuflert som innhold fra en bruker, og sendes tilbake til en intetanende bruker som besøker siden. Sikre applikasjoner krever kartlegging av trusler i design, å unngå sårbarheter i programmeringen og oppdatert programvare.
5. Tiltak: sikkerhetstiltak ivaretar målene for lagring, overføring og bruk, og er forebyggende, detekterende og korrigerende. For lagret informasjon: tilgangskontroll støtter konfidensialitet og integritet, kryptering gjør data uleselige hvis en laptop blir stjålet, og sikkerhetskopiering gir tilgjengelighet, for eksempel etter løsepengevirus.
6. Mennesket: svindelangrep og utpressing, og deepfakes gjør det vanskeligere å ikke la seg lure. Men du er også en viktig forsvarsmekanisme, og sikkerhetskultur er viktig. Sikkerhet i en applikasjon er ikke sikrere enn datamaskinen den kjører på.
7. Avslutt rolig: et datasystem er aldri sikrere enn det svakeste leddet.

STIL
- Bruk bilder og metaforer (en dør med låser, en kjede, et falskt brev). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 4. S4 Kryptografi (ca. 10 minutter)

```
Lag en podkast på norsk bokmål, ca. 10 minutter (ca. 1400 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, og hold deg bare til delen «Kryptografi: nøkkelen til digital samhandling». Bruk bare begreper, tall og eksempler som står der. Ikke finn på detaljer. Ikke gå inn på tilfeldige tall, hash-algoritmenes status eller kryptering i nettverkets lag.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hvordan kan to som aldri har møttes, holde en hemmelighet over et nett alle kan lytte til? Kryptografi bruker en algoritme og en nøkkel til å gjøre klartekst, plaintext, om til kryptert tekst, ciphertext.
2. Å knekke: Cæsarchiffer skifter bokstavene tre plasser, så DOZEN blir GRCHQ. Et monoalfabetisk chiffer har 26 fakultet muligheter, men bokstavfrekvensen er en svakhet. Man kan knekke ved å prøve alle nøkler, brute-force. En kombinasjonslås med 3 tall mellom 1 og 40 har 64 000 kombinasjoner og tar 178 timer med 10 sekunder per forsøk, mens 4 tall gir 2,56 millioner og 9244 timer. Svake passord knekkes på sekunder, og moderne GPU-er tester flere milliarder passord i sekundet.
3. Symmetrisk kryptering: én felles hemmelig nøkkel, som DES og AES i blokker på 128 bit. Det gir konfidensialitet, men ikke integritet og ikke ubenektelighet, siden den andre har samme nøkkel. Problemet er å dele nøkkelen trygt.
4. Hash: enveis, uten nøkkel. En god sjekksum er enkel å regne ut og vanskelig å gå baklengs fra eller forfalske. Brukes til å beskytte passord og sjekke integritet. Svake algoritmer har begrenset levetid.
5. Asymmetrisk kryptering: et nøkkelpar, offentlig og privat. Omid krypterer med Kristins offentlige nøkkel, og bare Kristin kan dekryptere. Det er tregt, så løsningen er hybrid: asymmetrisk for å bli enige om en midlertidig nøkkel (Diffie-Hellman) og symmetrisk resten av økten.
6. Digital signatur snur det: signer med den private nøkkelen, og alle kan verifisere med den offentlige. Det gir autentisk avsender og ubenektelighet, men ikke konfidensialitet.
7. Sertifikater og PKI: hvordan stoler du på at en offentlig nøkkel er ekte? Et sertifikat knytter en identitet til en nøkkel og signeres av en betrodd sertifikat-myndighet. PKI er rammeverket rundt, og en hengelås betyr ikke at nettstedet er til å stole på.
8. Avslutt rolig: kryptering gir konfidensialitet, integritet, autentisering og ubenektelighet, avhengig av hva du velger.

STIL
- Bruk bilder og metaforer (en lås og en nøkkel, et brev med segl, en postkasse med åpen luke). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 5. S5 Trygg infrastruktur og sikre datasystemer (ca. 8 minutter)

```
Lag en podkast på norsk bokmål, ca. 8 minutter (ca. 1150 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, og hold deg bare til delen «Trygg infrastruktur og sikre datasystemer»: nettverkssikkerhet, systemsikkerhet og digitale verdikjeder. Bruk bare begreper, tall og eksempler som står der. Ikke finn på detaljer. Ikke forklar kryptering i detalj: nevn bare at den er et tiltak.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: du kan ha verdens sikreste passord, og likevel er du ikke sikrere enn nettet du sitter på, maskinen du bruker og tjenestene du stoler på.
2. Nettverket: i trådløse nett kan hvem som helst lytte til radiosignalene, forstyrrelser kan gjøre nettet utilgjengelig, og falske aksesspunkter lokker enheter til å koble til fordi de velger sterkeste signal. I kablede nett krever avlytting fysisk tilgang, men er mulig, og en ødelagt kabel gir utilgjengelighet. Tiltak: TLS, IPSec, VPN og WPA beskytter informasjon under overføring. En brannmur er et sjekkpunkt som slipper inn eller avviser trafikk etter regler, og IDS overvåker og oppdager mistenkelig trafikk.
3. Systemet: operativsystemet styrer tilgangen etter minste privilegium, og kjernen kjører i supervisor mode med tilgang til alt, så en sårbarhet i kjernen eller driverne er kritisk. Copy Fail er en feil i Linux-kjernen. Programvaren må være trygg og oppdatert.
4. Minnet: en buffer er en sammenhengende seksjon av minnet avsatt til data. Skriver et sårbart program uhemmet, kan du plassere egen kode der det ligger kjørbar kode og endre returadressen så den peker dit. Heartbleed i OpenSSL viser at åpen kildekode og utbredelse ikke gjør noe automatisk trygt.
5. Verdikjeden: du bruker tjenester og programvarebiblioteker fra andre, og blir avhengig av dem. Ruter fant at kinesiske elbusser i Oslo kunne tas kontroll over og stoppes av produsenten via fjerntilgang. IaaS, PaaS og SaaS: jo høyere opp, jo mer er leverandørens, men du har fortsatt kontrollansvar. Virksomheten er juridisk ansvarlig for personopplysninger og må ha en databehandleravtale.
6. Avslutt rolig: sikkerhet er en kjede av nett, system og leverandører, og den er aldri sterkere enn det svakeste leddet.

STIL
- Bruk bilder og metaforer (en borg med mur og port, en kjede, et hus du leier). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 6. S6 Å skape trygge digitale tjenester (ca. 8 minutter)

```
Lag en podkast på norsk bokmål, ca. 8 minutter (ca. 1150 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, og hold deg bare til delen «Å skape trygge digitale tjenester krever innsats»: lovkrav, trusselmodellering og risikoanalyse, administrative tiltak og eksempelet fra Lørenskog kommune. Bruk bare begreper, tall og eksempler som står der. Ikke finn på detaljer. Ikke ta med OWASP Top 10 eller lister over rammeverk.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: sikkerhet er ikke bare teknikk, det er noe en virksomhet må styre, og loven stiller krav.
2. Loven: innebygd personvern, GDPR artikkel 25: personvern må tas hensyn til i alle utviklingsfaser, og det minst inngripende alternativet skal være standard: minst mulig personopplysninger, minst mulig omfang, kortest mulig lagringstid, og bare tilgjengelig for berettigede. Sikkerhet ved behandlingen, artikkel 32: egnede tekniske og organisatoriske tiltak, som pseudonymisering og kryptering, evne til å gjenopprette etter en hendelse, og regelmessig testing. For annen informasjon finnes foreløpig få generelle krav, men sikkerhetsloven og digitalsikkerhetsloven for bestemte sektorer.
3. Styring og risiko: sikkerhetsstyring er systematiske aktiviteter for å oppnå og opprettholde et sikkerhetsnivå, og må være en del av virksomhetsstyringen. Trusselmodellering er å beskrive angrepsscenarier ut fra trusselaktøren, sårbarhetene eller verdiene. En risiko er en kombinasjon av trussel, sårbarhet og hendelse som kan skade verdier. Risikoanalyse vurderer sannsynlighet og konsekvens: skal du bruke innsatsen på en usannsynlig hendelse med store tap eller på sannsynlige hendelser med lavere kostnad?
4. Administrative tiltak: internkontroll, styringssystem, policyer og standarder, prosedyrer, bevissthetstrening, sikkerhetsøvelser og rutiner for hendelseshåndtering. Datasikkerhet er en kontinuerlig prosess.
5. Lørenskog: en ansatt søkte på nettet, fant en side som så legitim ut og lastet ned en zip-fil, SEO-forgiftning. En fil startet et PowerShell-skript og etablerte en tjener angriperen styrte. Maskinen var en laptop med VPN, så angriperen kom inn på kommunens nett, utnyttet en sårbarhet, ba om et administratorsertifikat og spredte skadevare til domenekontrollerne. 1,8 TB data ble hentet ut, krypteringen startet 8. mai, angrepet ble oppdaget 9. mai da ingen kom inn, og kommunen stengte alt. Direkte kostnad: 25 millioner kroner. Kan kuttes: detaljene om hvordan angrepet skjedde.
6. Avslutt rolig: ett klikk kan koste 25 millioner, og derfor trenger sikkerhet både regler, risikovurdering og kultur.

STIL
- Bruk bilder og metaforer (et brannvern med øvelser, et sikkerhetsbelte). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 7. S7 Oppsummering (ca. 6 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter (ca. 850 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «sikkerhet.pdf» som kilde, og oppsummer hele sikkerhetsdelen. Bruk bare begreper, tall og eksempler som står der, med unntak av sikkerhetsmålene under, som er gitt direkte. Ikke finn på detaljer. Ikke gå inn i detaljer om algoritmer eller hvordan et bestemt angrep skjedde: dette er en oppsummering, ikke en ny gjennomgang.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet, integritet og tilgjengelighet, med personvern som fjerde mål (KIT pluss P).

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: sikkerhet handler om å beskytte noe, mot noen, med noe. Her er hele delen i én sammenheng.
2. Målene og angrepet: vi beskytter konfidensialitet, integritet og tilgjengelighet, med personvern som fjerde mål. Hackerne går etter dem med angrepsvektorer: sårbarheter og skadevare, SQL-injeksjon og XSS, og sosial manipulasjon.
3. Kryptografi: kryptering gir konfidensialitet, hash sjekker integritet, og digital signatur og sertifikater knytter en nøkkel til en identitet og gir ubenektelighet.
4. Nett og systemer: kryptering og brannmur i nettet, minste privilegium i systemene, og digitale verdikjeder der du er avhengig av andre. Sikkerhet i en applikasjon er ikke sikrere enn datamaskinen den kjører på, som avhenger av systemprogramvare, oppstartsprosess og maskinvare.
5. Styring: lovkrav som GDPR, trusselmodellering og risikoanalyse, og administrative tiltak som internkontroll, policyer, opplæring og øvelser. Lørenskog, 25 millioner kroner. Datasikkerhet er en kontinuerlig prosess.
6. Avslutt rolig: sikkerhet er å beskytte målene mot angrepsvektorene, og kjeden er aldri sterkere enn det svakeste leddet.

STIL
- Bruk bilder og metaforer (kjeden, en borg, en nøkkelring). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## Etter generering

Gi hver fil navnet fra tabellen (`S1.m4a` til `S7.m4a`), legg dem i `KapS/Podkast/` og gi meg beskjed. NotebookLM gir podkastene sine egne titler som ikke sier hvilket delkapittel de hører til, så filnavnet er det jeg plasserer etter. Jeg setter delkapitlets navn som tittel og legger dem inn i hvert delkapittel med et ikon med både mann og dame fra Sikkerhets egne podkastikoner, siden alle er lengre enn to minutter. Jeg sjekker at lengden stemmer og at de starter raskt.
