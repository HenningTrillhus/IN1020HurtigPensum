# Gemini / NotebookLM-prompter for N5 «Tjenester i Internett» (Nettverk)

Kilde: lysarkene fra forelesningen «Tjenester i Internett» (30.09). Syv videoer: TCP, metningskontroll, pull, push og CDN, peer-to-peer, DNS, HTTP med cookies og HTTPS, og strømming og IoT. Dette er det største lysarket, så delkapittelet har flest videoer. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet.
Utelatt: nettverksverktøyene (ping, traceroute, netstat, dig, whois, tcpdump), betinget GET, HTTP-versjonene og lenker og referanser.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. TCP: pålitelighet (N5.1)
2. Metningskontroll (N5.2)
3. Pull, push og CDN (N5.3)
4. Peer-to-peer (N5.4)
5. DNS (N5.5)
6. HTTP, cookies og HTTPS (N5.6)
7. Strømming og IoT (N5.7)

Felles regler i alle sju: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: TCP: pålitelighet

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Transportlaget» om TCP, men ikke metningskontroll. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.1 TCP: pålitelighet». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. TCP er forbindelsesorientert: forbindelsen settes opp med et 3-veis håndtrykk, SYN, SYN pluss ACK, ACK. Det gir en byte-strøm med levering i riktig rekkefølge. Pålitelighet får TCP ved at mottakeren sender en bekreftelse tilbake for hver pakke, og nyttelasten feilsjekkes med en sjekksum.
2. I tillegg har TCP flytkontroll: den sender ikke fortere enn mottakeren kan ta imot. Det er forskjellen på UDP, som er tilkoblingsløs og uten garantier, og TCP, som gir deg en pålitelig strøm.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to maskiner som utveksler SYN, SYN+ACK og ACK som tre piler, og så en strøm av pakker med bekreftelser tilbake og én som sendes på nytt. Vis en rask sender og en treg mottaker med en bremsepil som «flytkontroll».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan TCP love at alt kommer fram i riktig rekkefølge?»
2. Poeng 1 (oppkobling og bekreftelser, 8–34 s, ca. 55 ord): TCP setter opp en forbindelse med et 3-veis håndtrykk, og mottakeren bekrefter hver pakke. Rekkefølgen og sjekksummen gjør strømmen pålitelig.
3. Poeng 2 (flytkontroll, 34–58 s, ca. 40 ord): avsenderen sender ikke fortere enn mottakeren kan ta imot. UDP har ingen av disse garantiene.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: TCP gir en pålitelig byte-strøm med håndtrykk, bekreftelser og flytkontroll.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn metningskontroll, rutere, flaskehalser eller applikasjonslaget.
```

---

## Video 2: Metningskontroll

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Metningskontroll» («congestion») i transportlaget. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.2 Metningskontroll». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En ruter er i utgangspunktet bare en FIFO-kø, først inn, først ut. Blir det for mye trafikk over en kø, stopper trafikken. Det kalles congestion, og er det så mye at det blir full stopp for alle, kalles det congestion collapse. For å unngå det bygde man mekanismer i TCP som tilpasser senderaten til nettverksforholdene.
2. Eksempel: fire maskiner vil alle sende 10 Mbps over en flaskehals på 10 Mbps. Metningskontrollen sørger for at de deler kapasiteten likt, 2,5 Mbps hver. Men ressursene deles likt mellom forbindelser, ikke mellom brukere, så du kan kapre mer ved å åpne flere forbindelser i parallell. Det finnes ingen god metode for å fordele rettferdig per maskin eller per bruker i dag.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en ruter som en kø med pakker som renner over, og en flaskehals fra 1000 Mbps til 10 Mbps. Vis så fire sendere som hver får 2,5 Mbps, og en som åpner mange forbindelser og får mer.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva skjer når alle sender for mye på en gang?»
2. Poeng 1 (metning, 8–34 s, ca. 55 ord): en ruter er en FIFO-kø. For mye trafikk gir congestion, og full stopp for alle kalles congestion collapse. TCP tilpasser senderaten for å unngå det.
3. Poeng 2 (rettferdighet, 34–58 s, ca. 40 ord): fire sendere over en flaskehals på 10 Mbps får 2,5 Mbps hver. Men delingen er per forbindelse, så flere parallelle forbindelser kaprer mer. Ingen god rettferdig metode per bruker.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: TCP deler flaskehalsen likt mellom forbindelser, men ikke mellom brukere.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar håndtrykk, bekreftelser eller flytkontroll.
```

---

## Video 3: Pull, push og CDN

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Aksessmodeller i Applikasjonslaget», «Forbindelsesstrategier (push og pull)», «Distribusjon med CDN» og «Proxy-cache». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.3 Pull, push og CDN». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. I klient-tjener ber klienter om en tjeneste og tjenere leverer den: web, e-post og FTP. Strategiene er pull, der klienten ber tjeneren om noe, som er den vanligste. Push, der tjeneren dytter noe til klienten, krever en forbindelse fra før eller at klienten lytter. Publish-subscribe er en variant av push, der tjeneren sender til en gruppe abonnenter.
2. Å skalere klient-tjener kan bli dyrt, så innhold distribueres. I et CDN, content delivery network, ligger populært innhold nær brukerne, hierarkisk: kjerneservere, regionale servere og lokale servere. Det er viktig når båndbredden er begrenset, som WiFi på fly. En proxy mellomlagrer: en forward proxy nær klienten og en reverse proxy nær tjeneren. Det gir lastbalansering, sparer kapasitet og lavere forsinkelse. Tidene er under 10 ms lokalt, under 50 ms i CDN og 10 til 250 ms fra originalen.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis tre piler mellom klient og tjener: pull (klient ber), push (tjener dytter) og publish-subscribe (tjener til mange). Vis så et CDN som en trapp av servere fra kjerne til lokale med tidene 10, 50 og 250 ms og en proxy ved siden av klienten.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor ligger videoene du ser så nær deg?»
2. Poeng 1 (pull og push, 8–34 s, ca. 55 ord): klient-tjener: pull er klienten som ber, og er vanligst. Push er tjeneren som dytter, og publish-subscribe sender til en gruppe abonnenter.
3. Poeng 2 (CDN og proxy, 34–58 s, ca. 40 ord): populært innhold lagres nær brukerne i et hierarki. En proxy mellomlagrer og gir lastbalansering, sparer kapasitet og lavere forsinkelse: under 10 ms lokalt, under 50 i CDN, opptil 250 fra originalen.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: innhold flyttes nær brukeren for å spare kapasitet og gi raskere svar.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn peer-to-peer, Napster, DNS eller HTTP.
```

---

## Video 4: Peer-to-peer

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Peer-to-Peer», «P2P: Styrker og svakheter», «Napster» og «Varianter av P2P-baserte topologier». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.4 Peer-to-peer». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. I peer-to-peer er endesystemene både klient og tjener, og det er ingen sentralisert kontroll. Likheten med CDN er distribuert lagring og innhold nærmere brukeren, men det er ingen klare roller og ikke noe hierarki, og klientene vet ikke nødvendigvis hvor innholdet er, så det trengs protokoller for å oppdage innhold. P2P er ideelt for å dele ressurser som CPU (SETI@home), lagring, nettverk (BitTorrent) og alle tre (Bitcoin). Det er robust mot endringer, men dårlig for onlinespill som krever lav forsinkelse, og peers kommer og går.
2. Napster, lansert i 1999, delte musikk: en sentral indeks, distribuert lagring og nedlasting. Maskinene registrerte filene sine hos Napster, spurte indeksen og lastet ned direkte fra hverandre. Den sentrale tjeneren var en single point of failure, og Napster ble stengt i 2001. Varianter er ren P2P, der alle er likeverdige, og hybrid P2P, med noen sentrale noder eller superpeers med mer funksjonalitet.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis noder koblet i et nett der alle er både klient og tjener, og ved siden av et CDN-tre for sammenligning. Vis så Napster som en sentral indeks i midten som spørres og peker mellom noder, og en markering «stengt 2001».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan deler du filer uten en sentral tjener?»
2. Poeng 1 (likt og ulikt, 8–34 s, ca. 55 ord): peers er både klient og tjener, med distribuert lagring. Men ingen roller eller hierarki, og innhold må oppdages. Robust, men dårlig for spill, og peers kommer og går.
3. Poeng 2 (Napster, 34–58 s, ca. 40 ord): sentral indeks og distribuert nedlasting, lansert 1999. Sentral tjener er en single point of failure, stengt i 2001. Hybrid P2P har superpeers.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: P2P deler ressurser uten sentral kontroll, men en sentral indeks gjør det sårbart.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn pull, push, CDN, proxy eller DNS.
```

---

## Video 5: DNS

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «DNS – Domain Name System» med hierarki, soner, alias og sikkerhet. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.5 DNS». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. IP-adresser er vanskelige å huske, så vi bruker navn som login.ifi.uio.no og www.google.com. DNS, Domain Name System, er en distribuert database med hierarkisk navnetilordning, med enkel klient-tjener-arkitektur på port 53 over UDP eller TCP. Navnene bygges fra roten og ned: topp-nivå-domener som .no og .com, så uio.no, ifi.uio.no og www.ifi.uio.no. Treet er delt i soner, hver med en administrator som kan delegere deltrær videre. En maskin kan ha mange alias, og ett domene kan kobles til mange maskiner, som lastbalansering.
2. Sikkerheten er svak: navneoppslag skjer i klartekst. Farene er DNS-forfalskning, DNS-modifisering med man-in-the-middle, og DNS-kapring der offerets navnetjener byttes. Tiltakene er DNSSEC, signert DNS basert på asymmetrisk kryptering, å sikre navnetjenerne godt og å se etter hengelåssymbolet på websider.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et tre med rot, .no, .com og uio.no, ifi.uio.no og www, og en sone omringet med en administrator. Vis så et oppslag som går som klartekst og tre trusler: forfalsket, endret og kapret, med DNSSEC som et skjold.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan blir et navn som uio.no til en IP-adresse?»
2. Poeng 1 (hierarkiet, 8–34 s, ca. 55 ord): DNS er en distribuert database med navn bygd fra roten: .no, uio.no, ifi.uio.no. Soner har hver sin administrator. Alias og lastbalansering. Port 53.
3. Poeng 2 (sikkerhet, 34–58 s, ca. 40 ord): oppslag skjer i klartekst: forfalskning, modifisering og kapring. DNSSEC signerer DNS, og du ser etter hengelåssymbolet på websider.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: DNS gjør navn til adresser gjennom et hierarki, og må sikres fordi det går i klartekst.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn HTTP, TCP-håndtrykk eller cookies.
```

---

## Video 6: HTTP, cookies og HTTPS

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene om HTTP-protokollen, meldingsformat, persistente forbindelser, statuskoder, cookies og HTTPS. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.6 HTTP, cookies og HTTPS». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. HTTP er applikasjonslagsprotokollen for web, i klient-tjener-modell: nettleseren spør etter og viser objekter, tjeneren svarer. Klienten åpner en TCP-forbindelse til tjeneren på port 80, sender en request, for eksempel GET /ifi/index.html, og får en response med en statuskode: 200 OK, 301 flyttet, 400 uforståelig, 404 ikke funnet. HTTP er stateless: tjeneren husker ingenting om tidligere forespørsler, fordi tilstand er komplekst. Ikke-persistente forbindelser trenger 2 RTT per objekt, og persistente, standard i HTTP/1.1, gjenbruker forbindelsen.
2. Cookies tar vare på tilstand: tjeneren sender Set-cookie med et nummer, og klienten legger det ved senere forespørsler, til autentisering og brukerpreferanser. HTTPS er HTTP over SSL/TLS: kryptert kommunikasjon og tillit til at tjeneren er ekte. Tjeneren har et nøkkelpar og et sertifikat utstedt av en tiltrodd sertifikatmyndighet (CA), som nettleseren sjekker.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en request og en response som to bokser med GET og 200 OK, med statuskodene 301, 404 under. Vis så en cookie-sekvens: tjeneren sier Set-cookie 1678453, klienten sender cookie 1678453, og en hengelås der nettleseren sjekker et sertifikat.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan husker en nettside hvem du er når HTTP ikke husker noe?»
2. Poeng 1 (HTTP, 8–34 s, ca. 55 ord): nettleseren sender en request over TCP til port 80 og får en response med en statuskode. HTTP er stateless. Persistente forbindelser sparer RTT.
3. Poeng 2 (cookies og HTTPS, 34–58 s, ca. 40 ord): Set-cookie gir tilstand: klienten legger cookien ved neste forespørsel. HTTPS er HTTP over TLS med et sertifikat fra en CA som sjekkes.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: HTTP husker ingenting selv, så cookies gir tilstand, og HTTPS gir kryptering og tillit.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn DNS, TCP-håndtrykk eller metningskontroll.
```

---

## Video 7: Strømming og IoT

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Videostreaming», «HTTP-streaming (DASH)» og «Internet of Things (IoT)». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N5.7 Strømming og IoT». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Video står for 57 prosent av trafikken på Internett, Netflix alene for 30 prosent i USA. Ved nedlasting lastes hele innholdet ned til maskinen, ved strømming kommer en konstant strøm av data til avspillingen slutter. Det sparer lagring og nettverksressurser, siden bare det du ser, lastes, og det er lettere å ta vare på opphavsrett. Utfordringene er forsinkelse, tap og variasjon i leveringstid, jitter. DASH, dynamisk adaptiv strømming over HTTP, deler videoen i segmenter på 2 til 10 sekunder med ulike kvalitetslag, og klienten velger kvalitet, ikke tjeneren.
2. Internet of Things er hverdagsenheter som leverer ekstra tjenester via Internett: automatiske strømmålere, helse, smarthus, smartbyer og logistikk. De snakker med tjenere i skyen og leverer data til analyse. Men husk at S-en i IoT står for sikkerhet: ting kobles ofte til bare fordi det høres kult ut, og de får sjelden sikkerhetsoppdateringer, som gir et sikkerhetshull eller en bakdør inn på nettet ditt.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en video som deles i små segmenter i tre kvalitetslag, og en spiller som velger lag etter forbindelsen. Vis så en rad enheter (strømmåler, kjele, kamera) koblet til en sky og en angriper som kommer inn gjennom en av dem.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan klarer Netflix å spille video på dårlig nett?»
2. Poeng 1 (strømming, 8–34 s, ca. 55 ord): video er 57 prosent av trafikken. DASH deler videoen i segmenter på 2 til 10 sekunder i flere kvalitetslag, og klienten velger kvaliteten, ikke tjeneren.
3. Poeng 2 (IoT, 34–58 s, ca. 40 ord): hverdagsenheter som snakker med skyen: strømmålere, helse, smarthus. S-en i IoT står for sikkerhet: ting får sjelden oppdateringer, og blir en bakdør inn til nettet ditt.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: strømming tilpasser seg nettet, mens IoT-enheter ofte gjør deg sårbar.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn HTTP-detaljer som cookies, DNS eller TCP.
```

---

## Etter generering

Legg videoene i `KapNettverk/N5/` som `N5.1.mp4` til `N5.7.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel N5, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
