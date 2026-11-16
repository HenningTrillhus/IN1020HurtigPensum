# Prompt til den lange videoen: hele kapittel 6 i én video

Denne videoen går på «6 Hele kapitlet i én video», øverst i kapittel 6. Den tar for seg hele kapittelet «Transistor, strøm og spenning» i én sammenhengende gjennomgang, fra en bryter uten finger til varmeveggen, og svarer på de tre spørsmålene fra starten av kapittelet.

Lengde: ca. 8 minutter (rundt 1100 ord fortellertekst). Vil du ha den kortere, bytt «8 minutter» med «5 minutter» og kutt delene som er merket «kan kuttes».

Legg ved kapittel 6 («Transistor, strøm og spenning», `kap06.pdf`) som kilde.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 6 («Transistor, strøm og spenning») som kilde, og dekk hele kapittelet. Bruk bare tall, regler og eksempler som står der. Ikke finn på detaljer. Du trenger ingen fysikk: bruk vann som bilde hele veien (spenning er høydeforskjell, strøm er det som renner, en transistor er en kran som styres av et signal).

TITTEL
Videoen skal hete akkurat: «6 Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hvorfor en datamaskin blir varm når ingenting beveger seg i den, og kunne svare på de tre spørsmålene fra starten: hvorfor blir en datamaskin varm, hvorfor sluttet prosessorer å bli raskere rundt 2004, og hvorfor har maskinen åtte kjerner i stedet for én som går åtte ganger så fort. Alle tre har samme svar. Videoen skal binde sammen delene, ikke bare liste dem opp.

LENGDE OG FORMAT
- Ca. 8 minutter og ca. 1100 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tallene fra kapittelet.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Ha en liten gjenganger i hjørnet som viser hvor vi er på veien: transistor, strøm og spenning, inverter, NAND og NOR, signal, tid, kritisk vei, klokke, varme. Marker delen som snakkes om.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:45, ca. 100 ord): telefonen blir varm, og det beveger seg ingenting der inne. Hva er det da som blir varmt? Vis de tre spørsmålene: hvorfor blir en maskin varm, hvorfor sluttet prosessorer å bli raskere rundt 2004 etter tretti år med vekst, og hvorfor åtte kjerner. Si at alle tre har samme svar, og at det ligger i bunnen av stabelen.
2. Transistoren (0:45–1:45, ca. 130 ord): til nå har vi hatt brytere i serie (OG) og parallell (ELLER), men noen må trykke på dem, og en datamaskin har ingen fingre. Utgangen fra én port må trykke på bryterne i den neste. Løsningen er en tredje ledning som ikke fører strøm, men bare bestemmer: spenning på den leder, ingen spenning stenger. Det er en transistor: laget av silisium, uten bevegelige deler. To typer: nMOS leder ved 1, pMOS leder ved 0 og er den med boblen. Si «leder» og «stengt», ikke «åpen» og «lukket».
3. Strøm og spenning (1:45–2:30, ca. 100 ord): et bit er en tilstand som må holdes oppe, og en port lager et nytt signal som er sterkt nok til å styre neste port, noe som koster energi. Vannbildet: spenning er høydeforskjellen, strøm er hvor mye som renner. VDD er toppen (rundt 0,8 volt) og betyr 1, GND er bunnen (0 volt) og betyr 0. Mer er det ikke i oversettelsen mellom elektrisitet og logikk.
4. Inverteren og portene (2:30–3:45, ca. 160 ord):
   - inverteren: pMOS øverst og nMOS nederst, utgangen midt imellom. Inn med 0 gir 1, inn med 1 gir 0. Ettallet kommer fra VDD og nullen fra GND, ikke fra inngangen, og derfor kan tusen porter kobles etter hverandre uten at signalet blir utvannet. De to leder aldri samtidig, så i ro går det nesten ingen strøm (CMOS).
   - NAND og NOR: serie og parallell i silisium. AND er en NAND med en inverter etter. Regnskapet: inverter 2 transistorer, NAND 4, AND 6. NAND er den enkle porten i silisium.
5. Digitalt fra analogt (3:45–4:30, ca. 100 ord): en ledning kan ha hvilken som helst spenning, men logikken kjenner bare to verdier. Gi hvert tall et rom å bo i, med et belte i midten der kretsen ikke lover noe: støymargin. Hver port vasker signalet rent og lager et nytt, skarpt signal fra VDD eller GND. Derfor overlever en kopi av en kopi bit for bit, mens en kassett blir susing.
6. Det tar tid (4:30–5:15, ca. 100 ord): badekaret. Utgangen på en port er et badekar som må fylles og tømmes, og det tar tid. Karet er kapasitans: ledningen og styreledningene til neste porter. Portforsinkelse er tiden fra inngangen endres til utgangen har skiftet, og vi regner med 5 pikosekunder per port.
7. Kritisk vei (5:15–6:00, ca. 100 ord): portene står ikke i kø, de jobber samtidig. En fulladder er fem porter, men tiden er ikke 25 pikosekunder, den er 15: den lengste veien (XOR1, AND2 og OR). Middagen som bilde: poteter 20 minutter, kjøtt 15, saus 10, salat 4, og middagen er klar etter 20 minutter, ikke 49. I en mentekjede blir det en kø: 64 bit koster 960 pikosekunder. Kan kuttes: at overslaget er for pessimistisk (645 ps).
8. Klokka (6:00–6:45, ca. 110 ord): ulike veier blir ferdige til ulik tid, og noen må si fra når alle er det. Alle leverer samtidig, som på en skriftlig prøve. Klokkeperioden og frekvensen: frekvens er 1 delt på perioden, så 500 pikosekunder er 2 GHz og 250 er 4 GHz. Perioden må være minst like lang som den kritiske veien, og overklokking er å korte den ned og håpe marginen var romslig.
9. Varmeveggen (6:45–7:45, ca. 150 ord): Moores lov (1965) var en trend og ikke en naturlov, og lenge fikk man både flere og raskere transistorer gratis. Hver vending av et bit fyller og tømmer et badekar, og energien blir varme: derfor blir telefonen varm. Tre ting avgjør varmen: hvor mange kar, hvor høyt vannet løftes (spenningen i andre potens) og hvor ofte (frekvensen). Eksempelet: fra 2 GHz på 1,0 volt til 4 GHz på 1,2 volt gir omtrent 2,9 ganger effekten. Triksen med å senke spenningen sluttet å virke rundt 2004, og det er varmeveggen.
10. Svarene (7:45–8:15, ca. 60 ord): svar på de tre spørsmålene med ett og samme svar. Maskinen blir varm fordi hver vending av et bit koster energi som blir varme. Klokka sluttet å gå fortere fordi den kritiske veien og varmen satte taket. Og åtte kjerner i stedet for én som går åtte ganger så fort, fordi flere kjerner i rolig tempo gir mer fart uten mer varme.

REGLER FOR SLUTTEN
Avslutt med én setning som gjentar poenget: alt i maskinen er transistorer som fyller og tømmer badekar, og hver fylling koster varme. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar cache, pipeline, minnehierarki eller flere kjerner utover én setning: det kommer i senere kapitler. Ikke bruk kapittelnumre eller henvis til andre videoer. Ikke legg til tall som ikke står i kapitlet.
```

---

## Etter generering

Legg videoen i `Kap06/HeleKap/` og gi meg beskjed. Jeg legger den inn i delkapittelet «Hele kapitlet» øverst i kapittel 6, lager plakatbilde og oppsummering og sjekker at den starter raskt. Podkasten ligger der fra før.
