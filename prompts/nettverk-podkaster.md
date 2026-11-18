# NotebookLM-prompter til korte podkaster: ett delkapittel av gangen (Nettverk)

Kilde: `nettverk.pdf` fra mappen «Pensum Kompendier» (lysarkene). Lim hele prompten for ett delkapittel inn i «tilpass»-feltet i NotebookLM (Audio Overview), med `nettverk.pdf` som kilde. Lag én podkast per delkapittel.

Lengde: 5 til 10 minutter per podkast. NotebookLM styrer lengden løst, så ordtallet i hver prompt er et ønske, ikke en garanti. Kommer en podkast ut for lang, bytt tallet med et lavere. Hver podkast står på egne ben.

**Tittel og plassering.** NotebookLM gir hver podkast en egen tittel som ikke sier hvilket delkapittel den hører til. Det spiller ingen rolle: jeg setter tittelen til delkapitlets navn når jeg legger den inn (for eksempel «Nettverk 3 Din hjemmeruter: lagene spiller sammen»). Det som betyr noe, er at **filnavnet sier hvilket delkapittel den er**, så gi hver fil navnet i tabellen under (`N1.m4a`, `N2.m4a` og så videre) før du legger den i mappen. Da plasserer jeg dem riktig uten å gjette.

| # | Delkapittel | Lengde | Legg filen i |
|---|---|---|---|
| 1 | Nettverk 1 Introduksjon til datakommunikasjon | ca. 5 min (ca. 700 ord) | `KapN/Podkast/N1.m4a` |
| 2 | Nettverk 2 Lagdeling og protokoller | ca. 6 min (ca. 850 ord) | `KapN/Podkast/N2.m4a` |
| 3 | Nettverk 3 Din hjemmeruter: lagene spiller sammen | ca. 9 min (ca. 1300 ord) | `KapN/Podkast/N3.m4a` |
| 4 | Nettverk 4 Introduksjon til operativsystemer | ca. 7 min (ca. 1000 ord) | `KapN/Podkast/N4.m4a` |
| 5 | Nettverk 5 Tjenester i Internett | ca. 10 min (ca. 1450 ord) | `KapN/Podkast/N5.m4a` |
| 6 | Nettverk 6 Oppsummering | ca. 6 min (ca. 850 ord) | `KapN/Podkast/N6.m4a` |

Felles for alle seks: hold deg til lysarkene, ikke bruk forelesningsdatoer, kapittelnumre eller henvisninger til andre podkaster eller videoer. Kryptografi og sikkerhet hører til sikkerhetsdelen: nevn bare at det finnes.

---

## 1. Nettverk 1 Introduksjon til datakommunikasjon (ca. 5 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 5 minutter (ca. 700 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «nettverk.pdf» som kilde, og hold deg bare til delen «Introduksjon til datakommunikasjon»: hvorfor vi lærer om nettverk, en beskjeds vei over nettet, telefonnett mot pakkenett, komponentene og aksessmodellene. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Ikke forklar lag, protokoller eller adresser i detalj: det kommer i andre podkaster.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hva skjer egentlig på andre siden av nettverkskontakten din? Mange programmer du bruker kjører ikke på maskinen din, men i skyen: bank, video, TV, kontorprogrammer, navigasjon og shopping.
2. Beskjedens vei: fra kabelen i veggen via ruteren og nettleverandøren til en tjener langt unna, og svaret tilbake.
3. Linje mot pakke: telefonnettet reserverer en dedikert linje for hele samtalen, i tre faser: tilkobling, samtale og nedkobling. Internett bruker pakkesvitsjing: ingen dedikert linje, beskjeden deles i pakker som er begrenset i størrelse og kan følge ulike veier, for eksempel hvis det blir kabelbrudd.
4. Hvem er hva: endesystemer ytterst (maskiner, mobiler, sensorer og skrivere), mellomsystemer som ruter og switch i midten. Klient-tjener, der klienter ber om en tjeneste og tjenere leverer den, mot peer-to-peer, der alle noder er likeverdige.
5. Avslutt rolig: nettverket er pakker som finner veien mellom endesystemer, med mellomsystemer i midten.

STIL
- Bruk bilder og metaforer (postvesenet mot en telefonlinje, en pakke som tar omveien). Hold deg til få tall og begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 2. Nettverk 2 Lagdeling og protokoller (ca. 6 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter (ca. 850 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «nettverk.pdf» som kilde, og hold deg bare til delen om lagdeling: protokoller, lagdeling, OSI og TCP/IP og hva hvert lag gjør. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Ikke gå inn på adresser, DHCP, ARP eller NAT: det kommer i en annen podkast.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: hvorfor deler vi nettverkskommunikasjon i lag? Fordi det er veldig komplisert.
2. Protokoll: en protokoll definerer formatet på beskjeden og headeren, rekkefølgen, utvekslingen mellom systemene og hva som skjer ved sending og mottak. Den må ta seg av maskinvare, levering, garantier, kø og tap.
3. Lagdeling: standardiserte abstraksjonsnivåer. Fordelene er klare koblinger og ansvarsfordeling, at lagene kan utvikles uavhengig og byttes ut. Ulempene er at det ikke passer for alle oppgaver, og at like problemer kan bli løst flere ganger.
4. Modellene: OSI har syv lag, men Internett bruker TCP/IP med fem: applikasjon, transport, nettverk, link og fysisk. Dataenhetene heter segments, packets, frames og bits. Forespørselen går nedover lagene hos avsenderen og oppover hos mottakeren, og i en ruter går pakken bare opp til nettverkslaget. Timeglass-modellen, fordi IP er den smale midten.
5. Hva hvert lag gjør: applikasjonslaget har tjenester for programmene, transportlaget kobler systemene ende-til-ende (TCP gir pålitelig strøm med bekreftelser, UDP har ingen garantier og brukes til strømming), nettverkslaget sender data ende-til-ende og bestemmer ruten (IP), linklaget gir pålitelig overføring mellom to noder (Ethernet og WiFi), og det fysiske laget sender bit ut på mediet.
6. Avslutt rolig: en protokoll er reglene, lagdeling gjør det komplekse håndterbart, og hvert lag gjør én jobb.

STIL
- Bruk bilder og metaforer (en konvolutt i en konvolutt, et stafettlag, en sjef og en sekretær). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 3. Nettverk 3 Din hjemmeruter: lagene spiller sammen (ca. 9 minutter)

```
Lag en podkast på norsk bokmål, ca. 9 minutter (ca. 1300 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «nettverk.pdf» som kilde, og hold deg bare til delen om hjemmeruteren: IP-adresser og subnett, DHCP, ARP, porter og NAT. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Ikke forklar lagene fra bunnen av: anta at lytteren kjenner dem.

HOVEDLINJE (fortell det som én sammenhengende historie rundt hjemmeruteren, ikke som en liste)
1. Åpning: du kobler en ny maskin til hjemmenettet. Hva må skje før du får laget en eneste nettside? Maskinen trenger en adresse, den må vite hvem den skal snakke med, og ruteren må få trafikken ut.
2. IP-adresse og subnett: en IP-adresse er som en postadresse, men den skiller bare mellom adresser innenfor og utenfor det lokale nettverket. Er adressen lokal, leveres pakken rett til mottakeren. Hvis ikke sendes den til ruteren. Nettverksmasken sier hvilke bit som er nettverksdelen (satt til 1) og hvilke som er vertsdelen (satt til 0). 255.255.255.0 skrives også som skråstrek 24. For å finne subnettet gjør du en bitvis AND mellom adressen og masken: 192.168.1.226 blir 192.168.1.0. Kringkastingsadressen finner du med en bitvis OR mellom adressen og den inverse masken: 192.168.1.5 blir 192.168.1.255.
3. DHCP: en ny maskin kringkaster «finnes det noen som kan dele ut adresser?». Hjemmeruteren, som kjører en DHCP-tjener, svarer at 192.168.1.5 er ledig, og gir også gateway og DNS-tjener. Maskinen sier ja takk, og tjeneren skriver opp at adressen er i bruk i en periode, for eksempel 24 timer.
4. ARP: for at IP skal fungere, må avsenderen vite hvilken MAC-adresse pakken skal til. Maskinen kringkaster «Hvem har 192.168.1.100?», eieren svarer med sin MAC-adresse, og svaret lagres i en ARP-tabell. Siden ARP og DHCP går til alle, kan et for stort kringkastingsdomene stjele kapasitet.
5. Porter og NAT: porter skiller tjenestene på én IP-adresse, 65535 per maskin, for eksempel 192.168.1.5:80. Port 22 er SSH og port 80 er HTTP. IPv4 har 4,3 milliarder adresser, og det finnes over 34 milliarder enheter. Derfor NAT: hjemmenettet bruker private adresser, og ruteren oversetter til sin ene offentlige adresse, med portnumre. Ulempen er kompleksitet, at ruteren må huske tilstand, og at nye forbindelser må startes fra innsiden. Løsninger er UPnP, videresending av porter og DMZ. Det egentlige svaret er IPv6 med 128-bit adresser.
6. Avslutt rolig: hjemmeruteren gir adresser, finner veien, skiller tjenester og deler én adresse mellom alle.

STIL
- Bruk bilder og metaforer (et hus med postkasse, en resepsjonist, et leilighetsbygg med mange dører). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 4. Nettverk 4 Introduksjon til operativsystemer (ca. 7 minutter)

```
Lag en podkast på norsk bokmål, ca. 7 minutter (ca. 1000 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «nettverk.pdf» som kilde, og hold deg bare til delen om operativsystemer: hva det er, hva det består av, planleggeren og brukermodus mot kjernemodus med systemkall. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Ikke gå inn på nettverk.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: du åpner et program, og det bare virker, uansett hva slags maskin du har. Det er operativsystemets jobb.
2. Hva det er: en samling programmer som fungerer som mellomledd mellom maskinvaren og brukerne, med et høynivågrensesnitt til CPU, minne og I/O-enheter. To sider: en utvidet maskin som skjuler de rotete detaljene, og en ressursforvalter som gir hvert program tid og plass. Hvorfor vi trenger det: maskinvaren er ulik, og mange oppgaver og brukere kjører samtidig, så vi trenger utnyttelse, beskyttelse og rettferdighet. Det finnes i PC-er, telefoner, spillkonsoller, biler og klokker.
3. Hva det består av: synlige deler er brukergrensesnitt (shell), filhåndtering og enhetshåndtering, og mer gjemt er prosesshåndtering, minnehåndtering og kommunikasjon mellom prosesser. Enheter styres av drivere, og de utgjør 50 til 95 prosent av koden, rundt 60 prosent i Linux-kjernen.
4. Planleggeren: når flere oppgaver vil ha CPU-en, velger en planlegger hvem som får den. Målene motsier hverandre: like oppgaver likt, ingen skal vente for alltid, korte svartider, maksimal gjennomstrømning og lite overhead. Med prioriteter kjører den viktigste først, men lave prioriteter kan sulte.
5. Brukermodus og kjernemodus: programmer kjører i brukermodus, beskyttet, uten direkte tilgang til maskinvare, med begrenset instruksjonssett. OS-et kjører i kjernemodus med tilgang til alt. Grensesnittet er systemkall: som et funksjonskall, men inn i kjernen, for eksempel count = read(fd, buffer, nbytes). Parametrene legges på stakken, systemkallets nummer i et register, og en TRAP går til kjernen, som utfører operasjonen og returnerer.
6. Avslutt rolig: operativsystemet er mellomleddet, og systemkall er døren inn til kjernen.

STIL
- Bruk bilder og metaforer (en hotellresepsjon, en trafikkbetjent, en dør med vakt). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 5. Nettverk 5 Tjenester i Internett (ca. 10 minutter)

```
Lag en podkast på norsk bokmål, ca. 10 minutter (ca. 1450 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «nettverk.pdf» som kilde, og hold deg bare til delen «Tjenester i Internett»: TCP og metningskontroll, pull, push og CDN, peer-to-peer, DNS, HTTP med cookies og HTTPS, og strømming og IoT. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Ikke forklar kryptografi i detalj: nevn bare at HTTPS bruker det.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Åpning: du trykker på en lenke. Hva er det egentlig som skjer i tjenestene over nettet?
2. TCP: forbindelsesorientert, med 3-veis håndtrykk (SYN, SYN pluss ACK, ACK), en byte-strøm i riktig rekkefølge, bekreftelse for hver pakke og sjekksum. Flytkontroll: den sender ikke fortere enn mottakeren kan ta imot. UDP er tilkoblingsløs, uten garantier.
3. Metning: en ruter er bare en FIFO-kø. For mye trafikk gir congestion, og full stopp for alle er congestion collapse. TCP tilpasser senderaten. Fire maskiner som alle vil sende 10 Mbps over en flaskehals på 10 Mbps, får 2,5 hver. Men ressursene deles mellom forbindelser, ikke brukere, så du kan kapre mer ved å åpne flere forbindelser.
4. Klient-tjener og CDN: pull, push og publish-subscribe. Å skalere koster, så innhold distribueres: i et CDN ligger populært innhold nær brukerne, og en proxy mellomlagrer. Tidene er under 10 ms lokalt og under 50 ms i et CDN. Kan kuttes: peer-to-peer, med BitTorrent og Napster, der en sentral indeks ble en single point of failure og Napster ble stengt i 2001.
5. DNS: navn som login.ifi.uio.no gjøres om til adresser av en distribuert database med hierarkisk navngiving, på port 53. Navnene bygges fra roten og ned: .no, uio.no, ifi.uio.no. Sikkerheten er svak fordi oppslag skjer i klartekst: DNS-forfalskning, man-in-the-middle og kapring. DNSSEC signerer det.
6. HTTP: nettleseren åpner en TCP-forbindelse til port 80, sender en request som GET /ifi/index.html og får en response med statuskode: 200 OK, 301 flyttet, 404 ikke funnet. HTTP er stateless, så cookies tar vare på tilstand: tjeneren sender Set-cookie med et nummer, og klienten legger det ved senere. HTTPS er HTTP over SSL/TLS, med sertifikat fra en tiltrodd myndighet.
7. Strømming og IoT: video står for 57 prosent av trafikken på Internett, og Netflix alene for 30 prosent i USA. Strømming lar deg se mens det lastes, og DASH deler videoen i segmenter på 2 til 10 sekunder, der klienten velger kvalitet. Internet of Things er hverdagsenheter som snakker med skyen, men husk at S-en i IoT står for sikkerhet. Kan kuttes: IoT.
8. Avslutt rolig: tjenestene bygger på lagene under, og hver tjeneste løser ett problem: pålitelighet, navn, sider eller strømmer.

STIL
- Bruk bilder og metaforer (en telefonkatalog, en motorvei med flaskehals, en kopi på hylla i nærbutikken). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## 6. Nettverk 6 Oppsummering (ca. 6 minutter)

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter (ca. 850 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk den vedlagte filen «nettverk.pdf» som kilde, og oppsummer hele nettverksdelen. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer. Dette er en oppsummering, ikke en ny gjennomgang: ikke gå i detalj på subnettberegning eller statuskoder. Ikke forklar kryptografi i detalj.

HOVEDLINJE (fortell det som én sammenhengende historie rundt én melding på vei fra din maskin til en tjener, ikke som en liste)
1. Åpning: hva skjer egentlig når du trykker på en lenke? Her er hele nettverksdelen i én reise.
2. Pakker og lag: beskjeden deles i pakker, og fem lag tar hver sin jobb: applikasjon, transport, nettverk, link og fysisk. Den går ned gjennom lagene hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget. Telefonnettet reserverer en linje, Internett sender pakker som kan ta ulike veier.
3. Adresser: IP-adressen skiller lokalt fra utenfor, nettverksmasken deler den i nettverk og vert, DHCP deler ut adresser, ARP kobler IP til MAC, og porter skiller tjenestene på én maskin. NAT lar hjemmenettet dele én offentlig adresse, og IPv6 er den egentlige løsningen.
4. Operativsystemet: mellomleddet mellom maskinvare og bruker, en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass. Brukermodus mot kjernemodus, og systemkall som døren inn.
5. Tjenestene: TCP gir pålitelig levering med flytkontroll og metningskontroll, DNS gjør navn til adresser, og HTTP henter sidene, beskyttet av HTTPS. Strømming deler videoen i segmenter, og S-en i IoT står for sikkerhet.
6. Avslutt rolig: en melding går ned gjennom lagene, finner veien med adresser og rutere, og kommer opp igjen hos mottakeren, og hvert lag gjør bare én jobb.

STIL
- Bruk bilder og metaforer (en pakke på reise, et stafettlag, en postkasse). Hold deg til få begreper om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, forelesninger eller «nå går vi til neste del». La overgangene komme naturlig.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn. Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering.
```

---

## Etter generering

Gi hver fil navnet fra tabellen (`N1.m4a` til `N6.m4a`), legg dem i `KapN/Podkast/` og gi meg beskjed. Jeg legger dem inn i riktig delkapittel, setter delkapitlets navn som tittel og velger et ikon med både mann og dame fra Nettverks podkastikoner, siden alle er lengre enn to minutter. Jeg sjekker at lengden stemmer og at de starter raskt.
