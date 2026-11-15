# Prompt til den lange videoen: hele Nettverk i én video

Denne videoen går på «Nettverk Hele kapitlet i én video», øverst i Nettverk. Den går gjennom hele nettverksdelen i én sammenhengende fortelling, fra den første pakken til tjenestene du bruker hver dag.

Lengde: ca. 10 minutter (rundt 1350 ord fortellertekst). Vil du ha den kortere, bytt «10 minutter» med «7 minutter» og kutt delene som er merket «kan kuttes».

Legg ved `nettverk.pdf` fra mappen «Pensum Kompendier» som kilde. Den inneholder alle de fem lysarkene (N1 til N5).

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i den vedlagte filen «nettverk.pdf» som kilde, og dekk hele nettverksdelen. Bruk bare begreper, tall og eksempler som står i lysarkene. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «Nettverk Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hva som skjer fra du trykker på en lenke til siden dukker opp: hvordan beskjeden deles i pakker, hvordan lagene hver tar sin jobb, hvordan adresser og rutere finner veien, hva operativsystemet gjør og hvordan tjenestene som DNS og HTTP bygger på det. Videoen skal binde sammen delene med en rød tråd, ikke bare liste dem opp.

LENGDE OG FORMAT
- Ca. 10 minutter og ca. 1350 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tallene fra lysarkene.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Rød tråd: en melding på vei fra din maskin til en tjener. Vis den som en liten konvolutt i hjørnet som får flere «konvolutter» (headere) rundt seg for hvert lag den går gjennom, og som pakkes ut igjen på andre siden. La konvolutten markere hvor i reisen vi er.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:40, ca. 80 ord): spør «hva skjer egentlig fra kabelen i veggen til svaret kommer?». Vis veien fra din maskin via hjemmeruteren og leverandøren til en tjener langt unna.
2. Linje mot pakke og hvem som er hva (0:40–1:50, ca. 150 ord): telefonnett bruker circuit switching, en dedikert linje reservert for hele samtalen, med tre faser. Internett bruker packet switching: ingen fast linje, pakker er små og kan ta ulike veier. Endesystemer ytterst (maskiner, mobiler, sensorer, skrivere), mellomsystemer i midten (ruter, switch). Klient-tjener mot peer-to-peer. Kan kuttes: topologiene.
3. Lagdeling og protokoller (1:50–3:20, ca. 200 ord): en protokoll definerer format, rekkefølge og hva som skjer ved sending og mottak. Lagdeling forenkler det komplekse: klare ansvarsområder, lagene kan byttes ut, men ikke alt passer. TCP/IP har fem lag: applikasjon, transport, nettverk, link og fysisk, med dataenhetene segments, packets, frames og bits. Beskjeden går ned hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget. TCP gir pålitelig strøm, UDP er best effort.
4. Hjemmeruteren (3:20–5:40, ca. 330 ord): IP-adressen skiller lokalt fra utenfor. Nettverksmasken deler adressen i nettverk og vert, 255.255.255.0 er skråstrek 24, og en bitvis AND mellom adresse og maske gir subnettet (192.168.1.226 blir 192.168.1.0). DHCP deler ut adresser: en ny maskin kringkaster, hjemmeruteren svarer med adresse, gateway og DNS for 24 timer. ARP kobler IP til MAC-adresse: «Hvem har 192.168.1.100?». Porter skiller tjenester på én IP-adresse, 65535 per maskin. Det er 4,3 milliarder IPv4-adresser mot over 34 milliarder enheter, så NAT lar hjemmenettet dele én offentlig adresse via portnumre, og IPv6 med 128 bit er den egentlige løsningen.
5. Operativsystemet (5:40–6:50, ca. 170 ord): et operativsystem er mellomleddet mellom maskinvare og bruker, en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass. Komponenter: brukergrensesnitt, filer, enheter (drivere er 50 til 95 prosent av koden), prosess, minne, kommunikasjon. Planleggeren velger hvem som får CPU-en. Brukermodus mot kjernemodus, og systemkall som read(fd, buffer, nbytes) med en TRAP til kjernen.
6. Tjenester i Internett (6:50–9:00, ca. 300 ord): TCP med 3-veis håndtrykk, bekreftelser, flytkontroll og metningskontroll: en ruter er en FIFO-kø, og fire sendere over en flaskehals på 10 Mbps får 2,5 hver. DNS gjør navn som login.ifi.uio.no om til adresser gjennom et hierarki, og går i klartekst, så DNSSEC signerer det. HTTP: request og response over TCP port 80, statuskoder (200, 301, 404), stateless, og cookies gir tilstand. HTTPS er HTTP over TLS med sertifikat fra en CA.
7. Innhold nær deg, strømming og IoT (9:00–9:40, ca. 90 ord, kan kuttes): pull, push og publish-subscribe, CDN og proxy gir 10 til 250 ms. P2P deler ressurser uten sentral kontroll, men en sentral indeks (Napster) er en single point of failure. Strømming deler videoen i segmenter på 2 til 10 sekunder, og klienten velger kvalitet. S-en i IoT står for sikkerhet.
8. Avslutning (9:40–10:00, ca. 30 ord): én setning som gjentar poenget: en melding går ned gjennom lagene, finner veien med adresser og rutere, og kommer opp igjen hos mottakeren, og hvert lag gjør bare én jobb.

REGLER FOR SLUTTEN
Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar kryptografi (nøkler, hash, signatur) i detalj: det hører til sikkerhetsdelen. Ikke bruk uke- eller forelesningsdatoer, kapittelnumre eller henvis til andre videoer. Ikke legg til tall som ikke står i lysarkene.
```

---

## Etter generering

Legg videoen i `KapN/Hele/` som `Nettverk.mp4` og gi meg beskjed. Jeg legger den inn i «Nettverk Hele kapitlet i én video», lager plakatbilde og oppsummering og sjekker at den starter raskt.
