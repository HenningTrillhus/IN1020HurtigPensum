# Prompt til den lange videoen: hele kapittel 5 i én video

Denne videoen går på «5 Hele kapitlet i én video», øverst i kapittel 5. Den tar for seg hele kapittelet «Porter og logiske funksjoner» i én sammenhengende gjennomgang, fra en bryter og en lampe til en krets som husker, og binder det sammen med løftet fra starten: å bygge en krets som legger sammen to tall.

Lengde: ca. 8 minutter (rundt 1100 ord fortellertekst). Vil du ha den kortere, bytt «8 minutter» med «5 minutter» og kutt delene som er merket «kan kuttes».

Legg ved kapittel 5 («Porter og logiske funksjoner», `kap05.pdf`) som kilde.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 5 («Porter og logiske funksjoner») som kilde, og dekk hele kapittelet. Bruk bare tall, regler og eksempler som står der. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «5 Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende historie om hvordan vi kommer fra en bryter og en lampe til en krets som legger sammen to tall og en krets som husker, og kunne forklare hvorfor AND, OR og NOT finnes «der nede». Videoen skal binde sammen delene, ikke bare liste dem opp. Den røde tråden er: det du først skriver ned, er ikke det du til slutt bygger.

LENGDE OG FORMAT
- Ca. 8 minutter og ca. 1100 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tabellene fra kapittelet.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Ha en liten gjenganger i hjørnet som viser hvor vi er på veien: bryter, porter, tabell, uttrykk, forenkling, adder, mentekjede, dekoder og multiplekser, kretsen som husker. Marker delen som snakkes om.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:40, ca. 90 ord): spør hvordan maskinen vet hva AND betyr, når den bare er laget av sand, metall og strøm og ingen leser setningen din. Si at svaret er at AND er en ting der nede, mindre og dummere enn du tror, og at vi starter med en bryter og en lampe og ender med en krets som legger sammen to tall.
2. Bryteren og portene (0:40–2:00, ca. 170 ord):
   - fra bryter og lampe: to brytere etter hverandre og to ved siden av hverandre gir OG og ELLER, og den ene som snur gir IKKE.
   - sju porter i alt: IKKE, OG, ELLER og ENTEN-ELLER, pluss de tre med boble. Skrivemåten med A, B og F. Nevn de to feller kapittelet tar opp, uten å finne på nye.
3. Tabeller og uttrykk (2:00–3:15, ca. 170 ord):
   - sannhetsverditabellen: alle kombinasjoner av innganger og hva utgangen blir. n innganger gir 2 opphøyd i n rader, skrevet som binære tall i tellerekkefølge.
   - å lese en krets forlengs (fra inngangene mot utgangen) og baklengs (fra utgangen og spørre hva den siste porten er).
   - fra tabell til uttrykk: se bare på radene der utgangen er 1, ett ledd per rad, og så ELLER mellom leddene. Nevn kort at du like gjerne kunne tatt nullene.
4. Forenkling (3:15–4:15, ca. 140 ord): regelsettet som ligner på vanlig algebra (nøytralt element, dominans, idempotens, komplement, felles faktor, og de to absorpsjonsreglene), og De Morgan. Bruk ett av kapittelets eksempler: tre porter ble til én NOR. Poenget: å forenkle gir en mindre og raskere krets, og den forenklede kretsen lot seg lese.
5. Kretsen som legger sammen (4:15–5:30, ca. 170 ord):
   - svart boks med A og B inn, og sum og mente ut, fordi svaret på 1 + 1 ikke får plass i ett bit.
   - halvadderen og fulladderen, utledet fra tabellen du allerede kan lese: halvadderen har en XOR og en AND, fulladderen tar også imot mente inn.
   - mentekjeden: én fulladder per bitposisjon, menten går fra høyre mot venstre som blyanten i margen. Bare det første svaret er riktig med en gang, tiden vokser lineært med antall bit, og det verste tilfellet er 0111 pluss 0001.
   - C-flagget er mente ut av den venstre fulladderen, og V-flagget (overflyt) er menten inn i øverste posisjon sammenlignet med menten ut, én XOR. Subtraksjon gratis: én XOR per bit og en styreledning M, som også er menten inn til den første fulladderen.
6. Dekoder og multiplekser (5:30–6:30, ca. 140 ord):
   - dekoderen: ett AND-ledd per rad, alle på én gang, nøyaktig én utgang på. Fra LDA 42 til bitmønsteret 0101 00101010, der de fire første bitene er opkoden og treffer akkurat én AND-port. Den porten er grunnen til at maskinen gjør LDA og ikke ADD.
   - multiplekseren er motsatsen: flere linjer inn, én velges, F er (ikke S) · A pluss S · B. En AND-port som en grind.
7. Kretsen som husker (6:30–7:15, ca. 110 ord): alt til nå har vært kombinatorisk: utgangen følger inngangene og kretsen har ingen fortid. Så hvordan kan noe huske? Koble utgangen tilbake til inngangen. To NOR-porter som mater hverandre holder én bit, og slik er registrene bygget. Kretser med tilbakekobling kalles sekvensielle.
8. Portene finnes ikke (7:15–8:00, ca. 110 ord): den gjennomgående ideen kom igjen: tre porter ble til én NOR, fire ledd og åtte porter ble til én AND og én XNOR, overflytdeteksjonen ble til én XOR, og subtraksjon ble til én XOR per bit og en styreledning. Og til slutt: inne i prosessoren finnes ikke en eneste AND-port, bare transistorer, små brytere av halvleder, koblet slik at gruppen oppfører seg som en AND. Porten er et symbol vi har funnet opp, fordi det er umulig å tegne en milliard brytere.

REGLER FOR SLUTTEN
Avslutt med én setning som gjentar poenget: porten er en abstraksjon, like nyttig og like uvirkelig som de andre, og med den kan du bygge alt fra en bryter til en adder. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar transistorer, strøm og spenning, kritisk vei eller klokke utover det som står i kapittel 5: det kommer i kapittel 6. Ikke bruk kapittelnumre eller henvis til andre videoer. Ikke legg til tall som ikke står i kapitlet.
```

---

## Etter generering

Legg videoen i `Kap05/Videoer/` som `5.0.mp4` (eller der du vil) og gi meg beskjed. Jeg legger den inn under «Hele kapitlet» i kapittel 5, lager plakatbilde og oppsummering og sjekker at den starter raskt. Kapittel 5 har ikke et «Hele kapitlet»-delkapittel i appen ennå, så jeg oppretter det (med ikon, som for de andre kapitlene).
