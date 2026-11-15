# Gemini / NotebookLM-prompter for N3 «Din hjemmeruter: lagene spiller sammen» (Nettverk)

Kilde: lysarkene fra forelesningen «Din hjemmeruter, nettverkslagene spiller sammen» (04.09). Tre videoer: adresser og subnett, DHCP og ARP, og porter og NAT. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet. Repetisjonen av lagene er utelatt, og det samme er rutingdelen (ISP, BGP, OSPF, traceroute) og kryptering i lagene. Lagene og hva de gjør er forklart tidligere og skal ikke gjentas her.
Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

1. Adresser og subnett (N3.1)
2. DHCP og ARP (N3.2)
3. Porter og NAT (N3.3)

Felles regler i alle tre: ingen henvisninger til andre forelesninger, kapitler eller videoer. Bruk bare begreper, tall og eksempler som står på lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Dette er lysark, ikke et kompendium: forklar kort og konkret, og ikke legg til detaljer som ikke står der. Les 192.168.1.5 som «ett nittito punkt ett seksti-åtte punkt en punkt fem». Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: Adresser og subnett

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Hva er en IP-adresse», «IP-adresser (IPv4)», «CIDR- og punktnotasjon» og «Regne ut subnettet fra en IP + nettverksmaske». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N3.1 Adresser og subnett». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En IP-adresse er som en postadresse, men den skiller bare mellom adresser innenfor og utenfor det lokale nettverket. Er adressen på mitt lokale nett, leveres pakken rett til mottakeren. Hvis ikke sendes den til routeren, som får ansvaret for å sende videre. Nettverksmasken sier hvilke bits i adressen som definerer nettverket: bits satt til 1 er nettverksdelen, bits satt til 0 er vertsdelen. 255.255.255.0 skrives også som skråstrek 24, CIDR-notasjon, tallet er antall enere i masken.
2. For å finne subnettet gjør du en bitvis AND mellom IP-adressen og nettverksmasken. 192.168.1.226 med masken 255.255.255.0 gir 192.168.1.0, den første adressen i subnettet. Kringkastingsadressen finner du med en bitvis OR mellom adressen og den inverse masken: 192.168.1.5 med 0.0.0.255 gir 192.168.1.255.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en postadresse ved siden av en IP-adresse. Vis så 192.168.1.226 og 255.255.255.0 i binært under hverandre, med AND og resultatet 192.168.1.0, og nederst OR med 0.0.0.255 som gir 192.168.1.255.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan vet maskinen din om en annen maskin er på samme nett?»
2. Poeng 1 (masken, 8–34 s, ca. 55 ord): adressen er lokal eller ikke. Maskens enere er nettverksdelen og nullene vertsdelen. 255.255.255.0 skrives som skråstrek 24 i CIDR.
3. Poeng 2 (AND og OR, 34–58 s, ca. 40 ord): AND mellom adresse og maske gir subnettet: 192.168.1.226 blir 192.168.1.0. OR med invers maske gir kringkastingsadressen: 192.168.1.255.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: masken deler adressen i nettverk og vert, og en bitvis AND gir subnettet.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn DHCP, ARP, MAC-adresser, porter eller NAT.
```

---

## Video 2: DHCP og ARP

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «DHCP – Utdeling av IP-adresser» og «ARP – Koblingen mellom nettverk- og link-laget». Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N3.2 DHCP og ARP». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. DHCP deler ut IP-adresser automatisk. En ny maskin kringkaster til alle på subnettet: finnes det en maskin med myndighet til å dele ut IP-adresser? Hjemmeruteren, som kjører en DHCP-tjener, svarer at for eksempel 192.168.1.5 er tilgjengelig, og gir også en liste over viktige adresser som gateway og DNS-tjener. Maskinen sier ja takk, og tjeneren skriver opp at adressen er i bruk i en periode, for eksempel 24 timer.
2. For at IP skal fungere, må avsenderen vite hvilken MAC-adresse pakken skal til. ARP, Address Resolution Protocol, kobler IP og MAC: maskinen kringkaster til FF:FF:FF:FF:FF:FF «Hvem har 192.168.1.100?», og eieren svarer «Det er meg, min MAC-adresse er AA:BB:CC:DD:EE:FF». Svaret lagres i en ARP-tabell. Siden ARP og DHCP går til alle, kan et for stort kringkastingsdomene stjele kapasitet.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en ny maskin som roper «finnes det en DHCP-tjener?» til alle, og hjemmeruteren som svarer med en adresse og en liste for 24 timer. Vis så ARP som en kringkastet forespørsel til FF:FF:FF:FF:FF:FF og et svar fra en maskin med en MAC-adresse, og en liten ARP-tabell.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan får en ny maskin en IP-adresse, og hvordan finner den MAC-adressen til en annen?»
2. Poeng 1 (DHCP, 8–34 s, ca. 55 ord): en ny maskin kringkaster, hjemmeruteren gir en ledig adresse, gateway og DNS og skriver opp lånet for 24 timer.
3. Poeng 2 (ARP, 34–58 s, ca. 40 ord): IP trenger en MAC-adresse. ARP kringkaster «hvem har denne IP-en?», og eieren svarer med sin MAC, som lagres i en tabell. Kringkasting i for store nett stjeler kapasitet.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: DHCP gir deg en adresse, og ARP finner maskinvareadressen til den du skal snakke med.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar subnettmasker, porter eller NAT.
```

---

## Video 3: Porter og NAT

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene fra forelesningen som kilde, og hold deg bare til delene «Porter & NAT» og «IPv4 til IPv6», med private adresser og ulempene med NAT. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «N3.3 Porter og NAT». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Én IP-adresse, mange tjenester: transportprotokollene UDP og TCP bruker porter, 65535 på én IP-adresse, skrevet IP-kolon-port, for eksempel 192.168.1.5:80. Port 22 er SSH og port 80 er HTTP. Men IPv4 har 2 opphøyd i 32, altså 4,3 milliarder adresser, og det finnes over 34 milliarder enheter på Internett. Løsningen er NAT, Network Address Translation: hjemmenettet bruker private adresser, som 192.168.1.100 og 192.168.1.200, og ruteren oversetter til sin ene offentlige adresse med ulike portnumre.
2. Ulempene med NAT er ekstra kompleksitet, at ruteren må huske tilstanden til forbindelsene, og at nye forbindelser må startes fra innsiden, så det blir vanskelig å koble til utenfra. Løsninger er UPnP, videresending av porter og DMZ. Det egentlige svaret er IPv6 med 128-bit adresser, 2 opphøyd i 128, men det tar tid fordi alle noder må støtte det.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en bygning med mange dører som porter (22 SSH, 80 HTTP) på én adresse. Vis så et hjemmenett med to maskiner bak en ruter som oversetter til én offentlig adresse med to ulike portnumre, og en tabell med kilde, mottaker og oversatt adresse.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan hele familien dele én IP-adresse?»
2. Poeng 1 (porter og adresser, 8–34 s, ca. 55 ord): porter skiller tjenester på én IP-adresse, 65535 per maskin. IPv4 har 4,3 milliarder adresser, men over 34 milliarder enheter finnes.
3. Poeng 2 (NAT og IPv6, 34–58 s, ca. 40 ord): NAT lar private adresser dele én offentlig adresse via portnumre, men gjør det vanskelig å koble til utenfra og krever at ruteren husker forbindelsene. IPv6 med 128 bit er den ekte løsningen.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: NAT lar mange enheter dele én adresse, og IPv6 gir nok adresser til alle.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar subnettmasker, DHCP, ARP eller ruting.
```

---

## Etter generering

Legg videoene i `KapNettverk/N3/` som `N3.1.mp4` til `N3.3.mp4` og gi meg beskjed. Jeg legger dem inn i delkapittel N3, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
