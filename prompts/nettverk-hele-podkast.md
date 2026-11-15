# NotebookLM-prompt for den lange podkasten: hele Nettverk

Kilde: `nettverk.pdf` fra mappen «Pensum Kompendier» (alle de fem lysarkene, N1 til N5). Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med `nettverk.pdf` som kilde.

Lengde: ca. 25 minutter (ca. 3600 ord). Vil du ha den kortere, bytt «25 minutter» med «15 minutter» (ca. 2200 ord) og kutt delene som er merket «kan kuttes».

Podkasten hører til «Nettverk Hele kapitlet i én video», øverst i Nettverk. Når du lager ikon til den, bruk et av ikonene med mann og dame (dame-mann-3 til dame-mann-8 er de som er ledige med en mann og en dame).

```
Lag en lang podkast på norsk bokmål, ca. 25 minutter (ca. 3600 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk lysarkene i den vedlagte filen «nettverk.pdf», og dekk hele nettverksdelen. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Ikke gå dypt i kryptografi (nøkler, hash, signatur): det hører til sikkerhetsdelen, og her nevnes kryptering bare som at HTTPS og DNSSEC finnes.

HOVEDLINJE (fortell det som én sammenhengende historie om en melding på vei fra din maskin til en tjener, ikke som en liste)
1. Du trykker på en lenke. Hva skjer egentlig fra kabelen i veggen til svaret kommer? Veien går via hjemmeruteren og leverandøren til en tjener langt unna. For å forstå den må vi ned i detaljene, ett lag om gangen.
2. To måter å kommunisere på: telefonnett bruker circuit switching, en dedikert linje som er reservert for hele samtalen, med tre faser (tilkobling, samtale og nedkobling). Internett bruker packet switching: ingen fast linje, beskjeden deles i små pakker som kan ta ulike veier, og det tåler for eksempel kabelbrudd. Og hvem er hvem i nettet: endesystemer ytterst (maskiner, mobiler, sensorer, skrivere), mellomsystemer i midten (rutere og switcher). Klient-tjener mot peer-to-peer. Kan kuttes: topologiene (stjerne, ring, full mesh, torus og fat tree) og broadcast.
3. Hvorfor lag? En protokoll er reglene for beskjedene: format, rekkefølge og hva som skjer ved sending og mottak. For å holde det komplekse håndterbart deler vi det i lag, så hvert lag har ett ansvar, kan utvikles uavhengig og byttes ut, selv om det ikke passer alt. TCP/IP har fem lag: applikasjon, transport, nettverk, link og fysisk, og dataenhetene heter segments, packets, frames og bits. Beskjeden går ned gjennom lagene hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget. Bruk gjerne et bilde av en konvolutt som får flere konvolutter rundt seg for hvert lag.
4. Hjemmeruteren, og lagene som spiller sammen: en IP-adresse er som en postadresse, men den skiller bare mellom lokalt og utenfor. Nettverksmasken deler adressen i nettverk og vert, 255.255.255.0 skrives som skråstrek 24, og en bitvis AND mellom adresse og maske gir subnettet (192.168.1.226 blir 192.168.1.0). En ny maskin finner ut hvem den er med DHCP: den kringkaster, hjemmeruteren svarer med en adresse, gateway og DNS, og skriver opp lånet for 24 timer. Og for å sende på lokalnettet må den kjenne MAC-adressen, som ARP finner med spørsmålet «hvem har 192.168.1.100?». Porter skiller tjenester på én adresse, 65535 per maskin, for eksempel 22 for SSH og 80 for HTTP. Siden IPv4 har 4,3 milliarder adresser og det finnes over 34 milliarder enheter, lar NAT hjemmenettet dele én offentlig adresse via portnumre, men det gjør det vanskelig å koble til utenfra. IPv6 med 128 bit er den egentlige løsningen.
5. Operativsystemet: maskinen din kjører ikke bare nettverk, den har et operativsystem, mellomleddet mellom maskinvare og bruker. Det er både en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass. Det har komponenter for brukergrensesnitt, filer, enheter, prosess, minne og kommunikasjon, og drivere er 50 til 95 prosent av koden. Planleggeren avgjør hvem som får CPU-en. Programmene kjører i brukermodus med begrenset tilgang, og ber kjernen om hjelp gjennom systemkall.
6. Tjenestene: TCP setter opp forbindelsen med et 3-veis håndtrykk, bekrefter hver pakke og har flytkontroll og metningskontroll, siden en ruter bare er en FIFO-kø: fire sendere over en flaskehals på 10 Mbps får 2,5 hver. DNS gjør navn som login.ifi.uio.no om til adresser, gjennom et hierarki fra roten til .no og uio.no, og går i klartekst. HTTP bruker request og response over TCP, med statuskoder som 200, 301 og 404, er stateless og bruker cookies for å huske deg. HTTPS er HTTP over TLS, med sertifikat fra en sertifikatmyndighet.
7. Til slutt, innhold nær deg (kan kuttes): pull, push og publish-subscribe, CDN og proxy som gir 10 til 250 ms. P2P deler ressurser uten sentral kontroll, men en sentral indeks som Napster er en single point of failure. Strømming deler videoen i segmenter på 2 til 10 sekunder, og klienten velger kvalitet. Og S-en i IoT står for sikkerhet.
8. Avslutt med å knytte det sammen: hver gang du åpner en side, går en melding ned gjennom lagene, finner veien med adresser og rutere, og kommer opp igjen hos mottakeren, og hvert lag gjør bare én jobb.

STIL
- Mange bilder og metaforer (konvolutter, postadresser, en dørvakt, en kø, et telefonsentralbord). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn forelesningsdatoer, andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering av reisen fra lenken du trykket på til siden som dukket opp.
```

---

## Etter generering

Legg podkasten i `KapN/Podkast/` som `Nettverk.m4a` og gi meg beskjed. Jeg legger den inn i «Nettverk Hele kapitlet i én video» med et ikon med mann og dame som ikke er brukt i kapitlet fra før.
