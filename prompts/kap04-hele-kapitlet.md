# Prompt til den lange videoen: hele kapittel 4 i én video

Denne videoen går på «4 Hele kapitlet i én video», øverst i kapittel 4. Den tar for seg hele kapittelet «Arkitektur og ALU» i én sammenhengende gjennomgang, fra to gravelag som møtes til en maskin der alt må gjennom én flaskehals.

Lengde: ca. 8 minutter (rundt 1100 ord fortellertekst). Vil du ha den kortere, bytt «8 minutter» med «5 minutter» og kutt delene som er merket «kan kuttes».

Legg ved kapittel 4 («Arkitektur og ALU», `kap04.pdf`) som kilde.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 4 («Arkitektur og ALU») som kilde, og dekk hele kapittelet. Bruk bare tall, regler og eksempler som står der. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «4 Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hvordan en ordre i bit blir til noe maskinen gjør, og kunne forklare hvorfor så mye i en datamaskin er et valg mellom to ting som begge vil ha plass. Den røde tråden er: noe du gjerne vil ha mer av, kan bare vokse på bekostning av noe annet. Videoen skal binde sammen delene, ikke bare liste dem opp.

LENGDE OG FORMAT
- Ca. 8 minutter og ca. 1100 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tabellene fra kapittelet.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Ha en liten gjenganger i hjørnet som viser datastien: programteller, MAR, minne, MDR, instruksjonsregister, kontrollenhet, ALU og akkumulator. Marker delen som snakkes om.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:40, ca. 90 ord): et fjell som bores fra to sider. Lærdalstunnelen er 24,5 kilometer, og lagene møttes med noen centimeters avvik. Vi har gravd ovenfra siden kapittel 1: tekst og tall ble bit, og ordrene maskinen utfører. Nedenfra graves det med strøm, brytere, porter og kretser. Her møtes de to gangene, og møtepunktet er ordren skrevet i bit.
2. To ord for den samme maskinen (0:40–1:25, ca. 100 ord): hva den kan gjøre (instruksjonssettarkitektur, ISA) mot hvordan den gjør det (mikroarkitektur). Rattet og pedalene mot motoren. Derfor kjører gamle programmer på nye maskiner, og en ny prosessorgenerasjon er som regel ny mikroarkitektur på gammel ISA.
3. Ordren som bitmønster (1:25–2:50, ca. 190 ord):
   - LDA 42 blir 0101 00101010: 4 bit opkode (16 mønstre, nok til ni) og 8 bit adresse (256 postkasser). Mellomrommet finnes ikke, feltbredden er avtalt.
   - ordet har fast bredde, så hver bit til opkoden tas fra adressen. Tabellen med 3 og 9, 4 og 8, 5 og 7, 6 og 6 bit. Skulle du legge til tjue nye ordrer, er det ikke plass.
   - regne baklengs: 40 ordrer og 1 megabyte gir 6 bit opkode og 20 bit adresse, 26 bit, rundet opp til 32 (et helt antall byte).
   - MIPS: tre formater (R, I og J) på 32 bit, alle med 6 bit opkode. I R-formatet peker ordren på registre: fem bit til et registernummer mot trettito til en minneadresse. Fast mot variabel lengde (x86), og hvorfor programtelleren øker med fire: minnet adresseres i byte og en ordre på 32 bit er fire byte.
4. Registrene (2:50–3:35, ca. 100 ord): lommer, ikke garderobe: et register er en fast lagringsplass viet til én oppgave, uten adresse. Akkumulator, programteller, instruksjonsregister, og generelle registre i en registerfil (32, 31 og 16). Hvorfor registre finnes: minnet tar tid. Telleren som skal ned med én tar seks turer til minnet i LMC og én med registre.
5. Minnet og bussene (3:35–4:45, ca. 150 ord):
   - MAR holder adressen og går bare én vei, MDR holder verdien og går begge veier. Lese/skriv-linja og aktiveringslinja, som venter til signalene har falt til ro.
   - bredden på MAR setter taket for minnet: 16 bit gir 64 kilobyte, 20 bit gir 1 megabyte, 32 bit gir 4 gigabyte og 64 bit gir 16 exabyte. Derfor stoppet 32-bits maskiner på fire gigabyte.
   - adressebuss, databuss og kontrollbuss. Bussbredde er antall ledninger. Brede busser taper på skjevhet, så løsningen er færre ledninger og høyere fart: serielle busser. Kan kuttes: PCI Express og USB.
6. ALU og flagg (4:45–5:50, ca. 140 ord):
   - ALU-en har tre inn (to data og ett styresignal fra opkoden) og to ut (resultat og flagg). Den kan addisjon og subtraksjon, logikk og skift. Mye kan bygges av addisjon, men ikke alt, og derfor finnes en flyttallsenhet.
   - Z, N, C og V settes etter hver regneoperasjon. Å sammenligne er å trekke fra og se på flaggene. Mente og overflyt er ikke det samme: (+4) + (+6) gir −6 og V, mens (−4) + (−2) gir C og riktig svar. Maskinen sjekker ikke flagget av seg selv.
7. Kontrollenheten og datastien (5:50–7:00, ca. 160 ord):
   - en dekoder: fire bit inn og seksten ut, bare én på. 0101 slår på LDA-linja.
   - datastien er veiene data kan ta, og MAR brukes to ganger per ordre.
   - LDA 42 steg for steg: teller 17 til MAR, ordren inn i MDR og telleren til 18, ordren til instruksjonsregisteret, opkoden til kontrollenheten og 42 til MAR, tallet 83 inn i MDR og til akkumulatoren. Det meste er flytting.
   - ADD og STA er nesten lik, og i et hopp går adressedelen til programtelleren i stedet for MAR, derfor må telleren klikkes fram tidlig.
   - klokka slipper hvert steg løs, og tempoet må rekke over det tregeste steget. Frekvens er et dårlig mål på fart.
8. Von Neumann (7:00–8:00, ca. 120 ord): fire regler, der lagret program er viktigst: program og data i samme minne, lineær adressering, adressen sier ingenting om innholdet, og ordrene utføres i rekkefølge. Kjøkkenet: oppskriften og råvarene i samme skap. Prisen er flaskehalsen: alt må gjennom den samme veien. Og den gjennomgående ideen kom fire ganger: opkode mot adresse, registre mot plass, bussbredde mot fart, og enkel og fleksibel mot flaskehals.

REGLER FOR SLUTTEN
Avslutt med én setning som gjentar poenget: ordren er stedet der de to gangene møtes, og hvert valg i maskinen er noe du får mer av på bekostning av noe annet. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar hvordan ALU-en eller dekoderen er bygget av porter, eller hvordan et register husker: nevn bare at svaret ligger ett lag ned. Ikke bruk kapittelnumre eller henvis til andre videoer. Ikke legg til tall som ikke står i kapitlet.
```

---

## Etter generering

Legg videoen i `Kap04/HeleKap/` og gi meg beskjed. Jeg legger den inn i delkapittelet «Hele kapitlet» øverst i kapittel 4, lager plakatbilde og oppsummering og sjekker at den starter raskt.
