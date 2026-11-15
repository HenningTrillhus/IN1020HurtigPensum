# NotebookLM-prompt for den lange podkasten: hele Sikkerhet

Kilde: `sikkerhet.pdf` fra mappen «Pensum Kompendier» (lysarkene fra 26. august, 9. september, 18. september og 23. september). Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med `sikkerhet.pdf` som kilde.

Lysarkene fra 19. og 21. august (de to første forelesningene) finnes ikke, så definisjonene av sikkerhetsmålene og begrepene står direkte i prompten under. De er standardformuleringer og ikke hentet fra lysarkene dine.

Lengde: ca. 25 minutter (ca. 3600 ord). Vil du ha den kortere, bytt «25 minutter» med «15 minutter» (ca. 2200 ord) og kutt delene som er merket «kan kuttes».

Podkasten hører til «Sikkerhet Hele kapitlet i én video», øverst i Sikkerhet. Bruk et ikon med mann og dame (dame-mann-3 til dame-mann-8 er ledige).

```
Lag en lang podkast på norsk bokmål, ca. 25 minutter (ca. 3600 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk lysarkene i den vedlagte filen «sikkerhet.pdf», og dekk hele sikkerhetsdelen. Bruk bare begreper, tall og eksempler som står i lysarkene, med unntak av definisjonene under «SIKKERHETSMÅLENE», som er gitt direkte her. Ikke finn på detaljer. Ikke gå dypt i nettverksprotokoller: det hører til nettverksdelen.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet: bare de som skal, får se informasjonen.
- Integritet: informasjonen endres ikke uten tillatelse.
- Tilgjengelighet: informasjonen kan brukes når den trengs.
- Personvern kommer i tillegg som fjerde mål (KIT pluss P).
- Entitet: noe med en fysisk, juridisk eller prosessuell eksistens. Identitet: representasjonen av en entitet. Autentisering: å verifisere en påstått identitet. Autorisering: å spesifisere tilgangsrettigheter. Tilgangskontroll: å håndheve dem.

HOVEDLINJE (fortell det som én sammenhengende historie rundt spørsmålet «hva vil de ha, og hvordan kommer de seg inn?», ikke som en liste)
1. Hva er en hacker ute etter? Tre ting: tilgang til informasjon, å endre eller forfalske den, eller å gjøre den utilgjengelig. Det er konfidensialitet, integritet og tilgjengelighet snudd opp ned. Og metodene er ID-tyveri, å utnytte sårbarheter i programvare, systemer eller infrastruktur, eller å få noen til å gi deg det du vil ha. Introduser målene og begrepene entitet, identitet, autentisering, autorisering og tilgangskontroll med et enkelt bilde, for eksempel en dør, et nøkkelkort og en dørvakt.
2. Sårbarhet og angrepsvektor: en sårbarhet er en feil, mangel eller svakhet som kan utnyttes. En nulldags-sårbarhet er en noen kjenner før leverandøren gjør det, og sårbarhetsflaten er summen av alle som kan nås. En angrepsvektor er metoden en angriper bruker: sårbarheten er svakheten, vektoren er veien inn. Skadevare er en samlebetegnelse, og typene er løsepengevirus (krypterer data), dataorm (sprer seg selv), trojaner (utgir seg for å være et nyttig program), bakdør, spionvare, tastelogger, rootkit og exploit. Gruppene overlapper.
3. Applikasjonene og menneskene: applikasjoner snakker med brukeren, behandler input og bruker en database, og det utnytter hackere. SQL-injeksjon: du skriver «OR 1=1» i passordfeltet, og SQL-setningen blir alltid sann. Du kan også forsøke DROP TABLE. XSS: ondsinnet kode ligger på en webside som brukerinnhold og sendes tilbake til intetanende brukere. Og mennesker utnyttes også, med svindelangrep, utpressing og deepfakes, men du er også en forsvarsmekanisme. Et datasystem er aldri sikrere enn det svakeste leddet.
4. Kryptografi: klartekst og kryptert tekst, algoritme og nøkkel. Cæsarchiffer. Å knekke: brute-force, kjent klartekst som med Enigma, eller svakheter. En kombinasjonslås med tre tall mellom 1 og 40 har 64 000 kombinasjoner og tar 178 timer, fire tall tar 9244 timer. Symmetrisk kryptering med én delt nøkkel (AES) gir konfidensialitet men ikke integritet eller ubenektelighet. Hash er enveis og sjekker integritet. Asymmetrisk kryptering har en offentlig og en privat nøkkel, tregere, så man bruker en hybrid med Diffie-Hellman. Digital signatur gir ubenektelighet. Sertifikat og sertifikatmyndighet (CA) knytter en nøkkel til en identitet, og PKI er rammeverket. En hengelås betyr ikke at nettstedet er til å stole på.
5. Trygge nett og systemer: trådløse nett kan avlyttes og forstyrres, og falske aksesspunkter lokker enheter. Kablede nett trues av avlytting med fysisk tilgang. Beskyttelse: TLS, IPSec, VPN og WPA, og brannmur og IDS. Kjernen i operativsystemet har tilgang til alt, så en feil der er kritisk: Copy Fail på 732 byte ga root på Linux. Buffer-utnyttelser overskriver returadressen. OpenSSL hadde Heartbleed. Digitale verdikjeder: Ruters elbusser kan stoppes av produsenten, Crowdstrike i 2024, og IaaS, PaaS og SaaS flytter ansvar men du beholder kontrollansvaret.
6. Lov, risiko og styring: GDPR artikkel 25 (innebygd personvern: minst data, minst omfang, kortest lagring) og artikkel 32 (sikkerhet ved behandlingen: kryptering, vedvarende konfidensialitet, integritet, tilgjengelighet og robusthet, gjenoppretting og testing). Trusselmodellering og risikoanalyse: en risiko er trussel, sårbarhet og hendelse som kan skade verdier, vurdert på sannsynlighet og konsekvens. Administrative tiltak: internkontroll, policyer, opplæring, øvelser og rutiner for hendelser. Kan kuttes: lenkesamlingen og de ulike lovene for bestemte sektorer.
7. Lørenskog som avslutning: en ansatt søkte på nettet, fant en forgiftet side og lastet ned en zip-fil (SEO-forgiftning). Et skript etablerte en kommando-og-kontroll-tjener, VPN ga tilgang til LAN-et, angriperen fikk et admin-sertifikat og spredte seg til domenekontrollerne. 1,8 TB ble hentet ut, krypteringen startet 8. mai og ble oppdaget 9. mai. Kostnad: 25 millioner kroner. Bruk den til å vise at alt vi har gått gjennom, mål, sårbarheter, angrepsvektorer og administrative tiltak, henger sammen i ett angrep.
8. Avslutt med å knytte det sammen: sikkerhet er å beskytte konfidensialitet, integritet og tilgjengelighet mot angrepsvektorene, og kjeden er aldri sterkere enn det svakeste leddet.

STIL
- Mange bilder og metaforer (en dør og en dørvakt, en nøkkel og en lås, et brevkort som alle kan lese, en kjede). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn forelesningsdatoer, andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: hva de vil ha, hvordan de kommer inn, og hvordan vi stenger dem ute.
```

---

## Etter generering

Legg podkasten i `KapS/Podkast/` som `Sikkerhet.m4a` og gi meg beskjed. Jeg legger den inn i «Sikkerhet Hele kapitlet i én video» med et ikon med mann og dame som ikke er brukt i kapitlet fra før.
