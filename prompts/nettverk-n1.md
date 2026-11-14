# Gemini / NotebookLM-prompter for N1 «Introduksjon til datakommunikasjon» (Nettverk)

Kilde: lysarkene fra forelesningen «Introduksjon til datakommunikasjon» (28.08). Tre videoer: linje mot pakke, hvem som er hva i nettverket og hvordan nettverk er koblet. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet. Nettverkshistorien (semafor, morse, Baudot og telefonen) er bevisst utelatt: den er bakgrunn og ikke pensumkjerne.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Linje mot pakke (N1.1)
2. Hvem er hva i nettverket (N1.2)
3. Hvordan nettverk er koblet (N1.3)

Felles regler i alle tre: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Linje mot pakke

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Grunnleggende kommunikasjonsformer» om telefonnettverk (circuit switching) og pakkenettverk (packet switching). Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N1.1 Linje mot pakke». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Telefonnettverk bruker circuit switching: en dedikert linje mellom sender og mottaker, reservert eksklusivt for hele samtalen. Det er en tilkoblingsorientert tjeneste, kommunikasjonen følger alltid samme vei, og den har tre faser: tilkobling, samtale og nedkobling. Konseptene brukes fortsatt, for eksempel i ISDN, som reserverer 64 kbit/s mellom sender og mottaker.
2. Pakkenettverk bruker packet switching: beskjeden videresendes fra sender til mottaker, uten dedikert linje. Det er en tilkoblingsløs tjeneste, og forskjellige pakker kan følge forskjellige stier, for eksempel hvis det blir kabelbrudd. Pakkene er begrenset i størrelse, og dette er det dagens Internett bruker.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to nettverk side om side: til venstre en tykk linje fra A til B merket «reservert» med tre faser under, til høyre små pakker som tar ulike veier mellom A og B, der en vei er brutt.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er forskjellen på å ringe og å sende en pakke?»
2. Poeng 1 (dedikert linje, 8–34 s, ca. 55 ord): telefonnett reserverer en linje for hele samtalen: tilkobling, samtale, nedkobling, alltid samme vei. ISDN reserverer 64 kbit/s.
3. Poeng 2 (pakker, 34–58 s, ca. 40 ord): i pakkenett finnes ingen dedikert linje. Pakker er små, tar ulike veier, og overlever for eksempel kabelbrudd. Internett bruker pakkesvitsjing.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: telefon reserverer en linje, mens Internett sender pakker som finner sin egen vei.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn klienter, tjenere, topologier eller nettverkshistorien.
```

---

## Video 2: Hvem er hva i nettverket

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Komponenter i et datanettverk» og «Aksessmodeller i datanettverk». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N1.2 Hvem er hva i nettverket». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Et datanettverk består av tjenere, klienter, switcher og rutere. Endesystemer ligger ytterst i nettverket: datamaskiner, mobiltelefoner, sensorer og skrivere. Mellomsystemer, intermediate systems, ligger i midten og videresender trafikk: ruter, switch, gateway, repeater og bridge. Et nettverk kan være et subnett av et større nettverk.
2. Det finnes to aksessmodeller. I klient-tjener ber klienter om en tjeneste og tjenere leverer den. Det er den tradisjonelle arkitekturen, men det kan bli dyrt å få infrastrukturen skalerbar. I peer-to-peer er alle noder likeverdige og kan nå hverandre, eierskapet er distribuert, og ingen styrer nettet sentralt. Nodene kan være upålitelige og ulike.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et nettverk med endesystemer (PC, mobil, sensor, skriver) ytterst og ruter og switch i midten. Vis så to små bilder: klient-tjener med én tjener i midten, og peer-to-peer med like noder koblet til hverandre.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvem gjør hva i et nettverk?»
2. Poeng 1 (komponentene, 8–34 s, ca. 55 ord): endesystemer ytterst: maskiner, mobiler, sensorer, skrivere. Mellomsystemer i midten: ruter, switch, gateway, repeater og bridge.
3. Poeng 2 (aksessmodeller, 34–58 s, ca. 40 ord): klient-tjener: klienten ber og tjeneren leverer, men skalering er dyrt. Peer-to-peer: alle noder er likeverdige, uten sentral kontroll, og kan være upålitelige.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: endesystemer bruker tjenester, mellomsystemer videresender, og nettverket er enten klient-tjener eller peer-to-peer.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn telefonnett, pakker eller topologier.
```

---

## Video 3: Hvordan nettverk er koblet

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delen «Nettverkstopologier» om punkt-til-punkt og broadcast. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N1.3 Hvordan nettverk er koblet». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Punkt-til-punkt-nettverk kan ha ulike strukturer. DOCSIS, kabelmodem, og Ethernet bruker stjerne- eller tretopologi. Token Ring er en ring, men er utdatert. Noen supermaskiner bruker full mesh, torus eller fat tree.
2. I broadcast-systemer kan alle høre når en node sender. Det gjelder kabel, som Ethernet over coax, og radio: Aloha, den første trådløse generasjonen, WiFi, mobiltelefoni fra GSM til 4G og 5G, og satellitt som Starlink og Iridium. Egenskapene er at det kan bli problemer hvis to noder sender samtidig, feildeteksjon er viktig, og sendingen bør koordineres.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis seks små figurer for topologiene: stjerne, tre, ring, full mesh, torus og fat tree. Vis så en radiomast med bølger der to noder sender samtidig og krasjer.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan er nodene i et nettverk koblet sammen?»
2. Poeng 1 (punkt-til-punkt, 8–34 s, ca. 55 ord): stjerne og tre for kabelmodem og Ethernet, ring for utdatert Token Ring, og full mesh, torus og fat tree i supermaskiner.
3. Poeng 2 (broadcast, 34–58 s, ca. 40 ord): når en node sender, kan alle høre. Kabel og radio: Aloha, WiFi, GSM til 5G og satellitt. Samtidig sending gir problemer, så feildeteksjon og koordinering er viktig.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: nettverk er enten punkt-til-punkt med ulike strukturer eller broadcast der alle hører alt.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn klient-tjener, peer-to-peer, pakker eller telefon.
```

---

## Etter generering

Legg videoene i `KapNettverk/N1/` som `N1.1.mp4` til `N1.3.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel N1, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
