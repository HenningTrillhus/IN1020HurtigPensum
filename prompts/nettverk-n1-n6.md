# Gemini / NotebookLM-prompter for Nettverk: introduksjon (N1) og oppsummering (N6)

Kilde: `nettverk.pdf` (lysarkene). To videoer, én per delkapittel: introduksjonen og oppsummeringen. Hver video står på egne ben og er litt lengre enn de vanlige, siden de skal åpne og lukke hele nettverksdelen.

1. Introduksjon til datakommunikasjon (N1.1), lysarkene fra første forelesning
2. Oppsummering (N6.1), hele nettverksdelen samlet

Felles regler i begge: ingen henvisninger til forelesningsdatoer, kapitler eller andre videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der.

---

## Video 1: Introduksjon til datakommunikasjon

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene som kilde, og hold deg bare til delen «Introduksjon til datakommunikasjon»: hvorfor vi lærer om nettverk, en beskjeds vei over nettet, telefonnett mot pakkenett, komponentene og aksessmodellene. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N1.1 Introduksjon til datakommunikasjon». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse tre)
1. Mange av programmene vi bruker kjører ikke på maskinen vår, men i skyen: bank, video, TV, kontorprogrammer, navigasjon og shopping. Det er nettverket som binder dem sammen, og beskjeden din går fra kabelen i veggen via ruteren og nettleverandøren til en tjener langt unna og tilbake.
2. Det finnes to grunnleggende kommunikasjonsformer. I telefonnettet (circuit switching) reserveres en dedikert linje for hele samtalen, i tre faser: tilkobling, samtale og nedkobling. I pakkenettet (packet switching) er det ingen dedikert linje: beskjeden deles i pakker som er begrenset i størrelse og kan følge ulike veier. Det er pakkesvitsjing Internett bruker i dag.
3. Endesystemene ligger ytterst (maskiner, mobiler, sensorer og skrivere), og mellomsystemene som ruter og switch ligger i midten. Klient-tjener-modellen har klienter som ber om en tjeneste og tjenere som leverer den. I peer-to-peer er alle noder likeverdige og kan nå hverandre.

LENGDE OG FORMAT
- Maks 90 sekunder og ca. 190 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en konvolutt som reiser fra en maskin via en ruter og en leverandør til en tjener, og så to linjer: en rett, reservert linje mot en beskjed delt i pakker som tar ulike veier.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–12 s, ca. 28 ord): spør: «Hva skjer egentlig på andre siden av nettverkskontakten din?» Mange programmer du bruker kjører ikke her, men i skyen.
2. Poeng 1, beskjedens vei (12–34 s, ca. 45 ord): bank, video, TV, kontorprogrammer, navigasjon og shopping bor i nettverket. Beskjeden din går fra kabelen i veggen via ruteren og nettleverandøren til en tjener langt unna, og svaret kommer tilbake.
3. Poeng 2, linje mot pakke (34–62 s, ca. 55 ord): telefonnettet reserverer en dedikert linje for hele samtalen: tilkobling, samtale, nedkobling. Internett deler beskjeden i pakker som kan følge ulike veier, og det er det som gjør at et kabelbrudd ikke stopper alt.
4. Poeng 3, hvem er hva (62–82 s, ca. 45 ord): endesystemene ligger ytterst, mellomsystemene i midten. Klienter ber om tjenester og tjenere leverer dem, mens i peer-to-peer er alle likeverdige.
5. Avslutning (82–90 s, ca. 15 ord): én setning som gjentar poenget: nettverket er pakker som finner veien mellom endesystemer, med mellomsystemer i midten.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller forelesninger.

AVGRENSNING
Ikke forklar lag, protokoller, adresser eller utfordringene i nettverket i detalj: bare nevn dem om nødvendig. Ikke nevn bestemte lag, OSI eller TCP/IP.
```

---

## Video 2: Oppsummering

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene som kilde, og oppsummer hele nettverksdelen: pakker og lag, adresser og rutere, operativsystemet og tjenestene i Internett. Bruk bare begreper, tall og eksempler som står på lysarkene.

TITTEL
Videoen skal hete akkurat: «N6.1 Oppsummering». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse fire)
1. Beskjeden deles i pakker, og lagdelingen gir hvert lag én jobb. TCP/IP har fem lag: applikasjon, transport, nettverk, link og fysisk. Beskjeden går ned gjennom lagene hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget.
2. Adressene finner veien: IP-adressen skiller lokalt fra utenfor, nettverksmasken deler den i nettverk og vert, DHCP deler ut adresser, ARP kobler IP-adresse til MAC-adresse, og porter skiller tjenestene på én maskin. NAT lar hjemmenettet dele én offentlig adresse, og IPv6 er den egentlige løsningen.
3. Operativsystemet er mellomleddet mellom maskinvare og bruker: en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass.
4. Tjenestene bygger på dette: TCP gir pålitelig levering med flytkontroll og metningskontroll, DNS gjør navn om til adresser, og HTTP henter sider, med HTTPS og TLS for å beskytte dem.

LENGDE OG FORMAT
- Maks 90 sekunder og ca. 200 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en konvolutt som går ned gjennom fem lag og opp igjen, og så en liten reise fra en maskin via DNS og en ruter til en tjener.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–10 s, ca. 22 ord): spør: «Hva skjer egentlig når du trykker på en lenke?» Her er hele nettverksdelen på halvannet minutt.
2. Poeng 1, pakker og lag (10–32 s, ca. 50 ord): beskjeden deles i pakker, og fem lag tar hver sin jobb: applikasjon, transport, nettverk, link og fysisk. Den går ned hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget.
3. Poeng 2, adresser (32–56 s, ca. 55 ord): IP-adressen skiller lokalt fra utenfor, DHCP deler ut adresser, ARP kobler IP til MAC, og porter skiller tjenestene på én maskin. NAT lar hjemmenettet dele én adresse, og IPv6 er den egentlige løsningen.
4. Poeng 3, operativsystemet (56–70 s, ca. 30 ord): mellomleddet mellom maskinvare og bruker: en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass.
5. Poeng 4, tjenestene (70–82 s, ca. 30 ord): TCP gir pålitelig levering, DNS gjør navn til adresser, og HTTP henter sidene, beskyttet av HTTPS.
6. Avslutning (82–90 s, ca. 15 ord): én setning som gjentar poenget: en melding går ned gjennom lagene, finner veien med adresser og rutere, og kommer opp igjen hos mottakeren.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller forelesninger.

AVGRENSNING
Ikke forklar kryptografi (nøkler, hash, signatur) i detalj: det hører til sikkerhetsdelen. Ikke legg til tall som ikke står i lysarkene.
```

---

## Etter generering

Legg videoene i `KapN/N1/` som `N1.1.mp4` og i `KapN/N6/` som `N6.1.mp4`, og gi meg beskjed. Jeg legger dem inn i delkapittel N1 og N6, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
