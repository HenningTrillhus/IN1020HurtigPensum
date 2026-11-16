# NotebookLM-prompt for den lange podkasten: hele kapittel 5

Kilde: `kap05.pdf` fra mappen «Pensum Kompendier». Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 5 som kilde.

Lengde: ca. 25 minutter (ca. 3600 ord). Vil du ha den kortere, bytt «25 minutter» med «15 minutter» (ca. 2200 ord) og kutt delene som er merket «kan kuttes».

Podkasten hører til «5 Hele kapitlet i én video», øverst i kapittel 5.

```
Lag en lang podkast på norsk bokmål, ca. 25 minutter (ca. 3600 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk kapittel 5 («Porter og logiske funksjoner») som kilde, og dekk hele kapittelet. Bruk bare tall og eksempler som står der. Ikke finn på detaljer. Ikke forklar transistorer, strøm, spenning, kritisk vei eller klokke: det kommer i neste kapittel.

HOVEDLINJE (fortell det som én sammenhengende historie rundt den ene ideen bak kapittelet: det du først skriver ned, er ikke det du til slutt bygger. Ikke som en liste)
1. Åpning: en if-linje med AND, OR og NOT. Hvordan vet maskinen hva AND betyr, når den er laget av sand, metall og strøm og ingen leser setningen din? Svaret er at AND er en ting der nede, mindre og dummere enn du tror. Vi starter med en bryter og en lampe og ender med en krets som legger sammen to tall, uten at du trenger matematikk, bare at noe enten er sant eller usant.
2. Bryteren og portene: to brytere etter hverandre gir OG, to ved siden av hverandre gir ELLER, og en som snur gir IKKE. Sju porter i alt: IKKE, OG, ELLER og ENTEN-ELLER, pluss de tre med boble. Skrivemåten med A, B og F. Kapittelets feller: det som ser enkelt ut, men koster poeng.
3. Tabellen: en sannhetsverditabell lister alle kombinasjoner av innganger og hva utgangen blir. n innganger gir 2 opphøyd i n rader, skrevet som binære tall i tellerekkefølge, så alle kombinasjoner er med nøyaktig én gang. Å lese en krets forlengs (fra inngangene mot utgangen) og baklengs (fra utgangen, og spørre hva den siste porten er): to metoder til hver sin jobb, og begge er mekaniske.
4. Fra tabell til uttrykk: se bare på radene der utgangen er 1, skriv ett ledd per rad, og sett ELLER mellom leddene. Du kunne like gjerne tatt nullene, og kapittelet viser hva som da skjer. Metoden gir alltid et riktig uttrykk, men sjelden et pent.
5. Forenkling: reglene ligner på vanlig algebra: nøytralt element, dominans, idempotens, komplement og felles faktor, og de to absorpsjonsreglene, pluss De Morgan. Gå gjennom et av kapittelets eksempler helt ut, med overraskelsen i det andre. Å forenkle gir en mindre, raskere og lesbar krets, og tre porter ble til én NOR.
6. Kretsen som legger sammen: svart boks med A og B inn og sum og mente ut, fordi svaret på 1 + 1 ikke får plass i ett bit. Halvadderen (en XOR og en AND), og fulladderen som også tar imot mente. Fulladderen utledes fra tabellen du allerede kan lese, og tegnes. Mentekjeden: én fulladder per bitposisjon, menten går fra høyre mot venstre som blyanten i margen. Bare det første svaret er riktig med en gang, og leser du for tidlig, ser tallet legitimt ut og er galt. Tiden vokser lineært med antall bit, og det verste tilfellet er 0111 pluss 0001. C-flagget er mente ut av den venstre fulladderen, og V-flagget er menten inn i øverste posisjon sammenlignet med menten ut, én XOR (eksempelet 5 pluss minus 6 i fire bit). Subtraksjon gratis: én XOR per bit og en styreledning M, som også er menten inn til den første fulladderen. M = 0 legger sammen, M = 1 trekker fra.
7. Dekoder og multiplekser: en dekoder har noen få innganger og én utgang per kombinasjon, og nøyaktig én er på. Den er alle AND-leddene fra tabellen på én gang. Hele veien fra program til krets: LDA 42 blir bitmønsteret 0101 00101010, der de fire første bitene er opkoden og treffer akkurat én AND-port. Den porten er grunnen til at maskinen gjør LDA og ikke ADD. Multiplekseren er motsatsen: flere linjer inn og én velges, F er (ikke S) · A pluss S · B. En AND-port brukt som en grind.
8. Kretsen som husker: alt til nå har vært kombinatorisk, uten fortid. Så hvordan kan noe huske? Koble utgangen tilbake til inngangen. To NOR-porter som mater hverandre holder én bit, og slik er registrene bygget. Kretser med tilbakekobling kalles sekvensielle.
9. Portene finnes ikke: den gjennomgående ideen kom igjen: tre porter ble til én NOR, fire ledd og åtte porter ble til én AND og én XNOR, overflytdeteksjonen ble til én XOR, og subtraksjon ble til én XOR per bit og en styreledning. Og inne i prosessoren finnes ikke en eneste AND-port, bare transistorer, små brytere av halvleder, koblet slik at gruppen oppfører seg som en AND. Porten er et symbol vi har funnet opp, fordi det er umulig å tegne en milliard brytere. Kan kuttes: detaljene om absorpsjon og De Morgan.

STIL
- Mange bilder og metaforer (blyanten i margen, dominobrikker, en dørvakt, en jernbanevekselbryter, en gyngestol som blir stående). Hold deg til få tall om gangen. Gjenta de viktigste begrepene noen ganger, slik at de sitter.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: en bryter og en lampe ble til en adder og en krets som husker, med en liten regelbok og litt tålmodighet, og porten er en abstraksjon som er like nyttig og like uvirkelig som de andre.
```

---

## Etter generering

Legg podkasten i `Kap05/Podkast/` som `Kapittel5.m4a` og gi meg beskjed. Jeg legger den inn i «5 Hele kapitlet i én video» med et ikon med mann og dame. Alle parikonene i kapittel 5 er allerede i bruk på de vanlige podkastene, så jeg velger det som passer best (eller du lager et nytt).
