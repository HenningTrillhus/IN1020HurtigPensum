# Prompt til den lange videoen: hele kapittel 8 i én video

Denne videoen går på «8 Hele kapitlet i én video», øverst i kapittel 8. Den tar for seg hele kapittelet «Moderne maskiner og hele stabelen» i én sammenhengende gjennomgang, og binder det sammen med spørsmålene fra starten av kapittelet.

Lengde: ca. 7 til 8 minutter (rundt 1000 ord fortellertekst). Vil du ha den kortere, bytt «7 til 8 minutter» med «5 minutter» og kutt delene som er merket «kan kuttes».

Legg ved lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og dekk hele kapittelet. Bruk bare tall og eksempler som står der. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «8 Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hvorfor en moderne maskin ser ut som den gjør, og kunne svare på de tre spørsmålene fra starten: hvorfor åtte kjerner og ikke én som er åtte ganger raskere, hvorfor tre slags regneenheter på samme brikke, og hvorfor maskinen kan lures til å røpe et passord. Videoen skal binde sammen delene, ikke bare liste dem opp.

LENGDE OG FORMAT
- Ca. 7 til 8 minutter og ca. 1000 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tallene fra lysarkene.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Vis maskinen fra starten som en gjenganger i hjørnet: prosessor med 8 kjerner på 4,0 GHz, buffer på 12 MB (nivå tre), 16 GB minne, integrert grafikk med 10 kjerner og nevral motor med 16 kjerner. Marker delen som snakkes om.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:30, ca. 70 ord): vis maskinen og de tre spørsmålene. Si at svaret ligger i valgene som er gjort, og at vi skal gå gjennom dem.
2. Gjetting og spekulasjon (0:30–2:30, ca. 250 ord):
   - videresending: verdien rekkes rett fra EX til EX, avhengigheten er der men hasarden er borte. Triksene fjerner konsekvensen, ikke problemet.
   - forgreningsprediksjon: maskinen gjetter hopp og husker hva hvert hopp gjorde sist, over 95 prosent treff. En if som nesten alltid går samme vei bommer 1 av 16, en som veksler uten mønster bommer 8 av 16.
   - superskalar: flere hele samlebånd side om side, 8 instruksjoner på 7 sykluser mot 4. De to løkkene: A 0,497 s og 1,00 per syklus, B 0,124 s og 4,02 per syklus.
   - ute av rekkefølge: maskinen gjør det som er klart, men fullfører i programmets rekkefølge.
   - spekulativ utføring: kladden går i papirkurven hvis gjetningen var feil, og programmet får de samme svarene som uten spekulasjon.
3. Kjerner og tråder (2:30–4:00, ca. 200 ord): prosesser, tråder og kjerner (trådene er arbeidet, kjernene er arbeiderne). SMT gir 10 til 30 prosent. Amdahls lov med middagen: 240 minutter alene, 82,5 med åtte, 60,2 med tusen, taket er 4 ganger fordi én time ikke kan deles. Åtte kjerner gir sjelden åtte ganger: 4,7 hvis 90 prosent kan deles, 1,8 hvis halvparten kan deles. Svar på det første spørsmålet: åtte kjerner fordi klokka ikke kunne gå fortere.
4. Bufferen (4:00–4:30, ca. 70 ord, kan kuttes): bufferen på 12 MB er delt mellom kjernene fordi minnet er hundre ganger for tregt, og cachen er usynlig for programmet: samme svar, bare ulik tid.
5. Tre slags regneenheter (4:30–5:30, ca. 170 ord): GPU er en skoleklasse som gjør det samme på tusenvis av tall, CPU er noen få store som klarer valg. Kretser som kan én ting, som videodekoderen, bruker minst strøm: fleksibilitet koster. Nevral motor: en vektet sum med terskel, og transporten koster mer enn gangingen. Svar på det andre spørsmålet.
6. Avbrudd og virtuelt minne (5:30–6:15, ca. 130 ord):
   - avbrudd er en dørklokke: en ledning som prosessoren ser på én gang per instruksjon. Ferdig, lagre, slå opp, legg tilbake, og programmet merker ingenting.
   - virtuelt minne: to programmer sier «kasse 42» og havner i hvert sitt rom, så ingen kan uttrykke en adresse som tilhører et annet.
7. Spectre (6:15–7:15, ca. 150 ord): to utsagn som begge er sanne: samme svar med og uten cache, og spekulasjonen rydder alt. Sammen er de et sikkerhetshull. Ingen feil, laget under lekker. Fem steg, og et stoppeur: 256 oppslag der ett går fort, og det røper hemmeligheten (65). Svar på det tredje spørsmålet.
8. Hele stabelen (7:15–8:00, ca. 120 ord): fra «svar er a pluss b» ned gjennom oversettelsen, ordren som et tall, bit og toerkomplement, maskineriet, porter og fulladdere, transistorer og ladning, og tiden som følger med hele veien. Hver egenskap ved maskinen har en grunn: åtte kjerner fordi klokka stoppet, 4,0 GHz fordi varmen setter grensen, 12 MB buffer fordi minnet er tregt, grafikk fordi noen jobber er like biter, nevral motor fordi å flytte et tall koster mer enn å gange det.

REGLER FOR SLUTTEN
Avslutt med én setning som gjentar poenget: ingen av lagene er magi lenger, de er valg noen tok av grunner du kan gjøre rede for. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar pipelinen, hasardene, cache med treffrate og nivåer, klokke og kritisk vei, eller hvorfor klokka stoppet utover én setning: det er forklart tidligere i kurset, og her skal det bare brukes. Ikke bruk kapittelnumre eller henvis til andre videoer. Ikke legg til tall som ikke står i lysarkene.
```

---

## Etter generering

Legg videoen i `Kap08/Videoer/` som `8.0.mp4` og gi meg beskjed. Jeg legger den inn i «8 Hele kapitlet i én video», lager plakatbilde og oppsummering og sjekker at den starter raskt. Delkapittel 8.8 «Hele stabelen» kommer som en egen oppsummering senere.
