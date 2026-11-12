# NotebookLM-prompter for vanlige podkaster, kapittel 5 (5.8, 5.9 og 5.10)

Kilde: `kap05.pdf`. Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 5 som kilde.
Lengde: ca. 12 minutter (ca. 1800 ord), som de andre vanlige podkastene i kapittelet. Vil du ha kortere, bytt «12 minutter» med «6 minutter».
Dette erstatter den korte 5.9-podkasten i `kap05-5.9.md`.

1. 5.8 Mentekjeden
2. 5.9 Kretser som velger
3. 5.10 Kretsen som husker

---

## Podkast 1: 5.8 Mentekjeden

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 5.8 i kapittel 5 («Mentekjeden»). Ikke gå inn på dekoder, multiplekser eller kretser som husker.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Utgangspunktet: en fulladder legger sammen én bit, men et tall har flere. Resten er kopiering: én fulladder per bitposisjon, og menten fra hver kobles inn i den neste. Fire bokser på rad, det minst betydende bitet til høyre og menten som beveger seg mot venstre, akkurat som blyanten når du legger sammen i margen. Den første fulladderen får 0 inn som mente. Kretsen heter ripple carry adder på engelsk, fordi menten «rippler» gjennom rekken.
2. Hvorfor bare det første svaret er riktig med en gang: slår du på alle inngangene samtidig, begynner alle å regne, men de fleste svarene er feil. Den høyre vet at den får 0 inn og blir ferdig. Den neste venter på menten fra den første, og slik fortsetter det. Dominoeffekten: den første brikken faller med en gang, den siste ikke før alle foran har falt. Det er også en feilkilde: leser du av for tidlig, ser tallet legitimt ut og er galt, og ingenting sier fra. Derfor venter maskinen et fast antall klokkeslag, og mentekjeden er ofte det tregeste steget.
3. Hva det koster: tiden vokser lineært med antall bit, så dobler du fra 32 til 64 bit, dobler du ventetiden. Det verste tilfellet er 0111 pluss 0001, der menten må gjennom hver eneste posisjon. Det forklarer hvorfor en ELLER mellom to 64-bits tall går fortere enn en addisjon: ELLER har ingen kjede, alle 64 porter blir ferdige samtidig. Idéen om å gjette menten på forhånd (carry look-ahead) og prisen: flere porter og mer strøm for å slippe å vente.
4. Hvor C-flagget kommer fra: det er mente ut av den venstre fulladderen, én ledning rett inn i statusregisteret. Ble det mente ut av den øverste posisjonen, var svaret for stort til bitbredden.
5. Hvor V-flagget kommer fra: sammenlign menten inn i den øverste posisjonen med menten ut. Er de like, gikk det bra, er de forskjellige, er det overflyt. Én XOR-port. Eksempelet 5 pluss minus 6 i fire bit, der to negative tall gir et positivt svar og flagget har rett. Det dyre er ikke å oppdage overflyt, men å gjøre noe med det.
6. Subtraksjon, gratis: a minus b er a pluss minus b, og minus b er alle bitene i b snudd pluss 1. Bytt hver snu-port med en XOR-port med en styreledning M, og sett M også som mente inn til den første fulladderen. M = 0 legger sammen, M = 1 trekker fra. Prisen: fire XOR-porter og én ledning. Når kretsen trekker fra, betyr C-flagget noe annet (det er 1 når a er større eller lik b, altså når den ikke trengte å låne), og M kommer til slutt fra opkoden, så forskjellen mellom ADD og SUB er én ledning som er 1 i stedet for 0.

STIL
- Mange bilder og metaforer (dominobrikker, stafett, blyanten i margen, en bryter som snur alt). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: fulladdere i rekke gir en adder, men svaret må vente på menten posisjon for posisjon, og med én XOR per bit og en styreledning får vi subtraksjon på kjøpet.
```

---

## Podkast 2: 5.9 Kretser som velger

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 5.9 i kapittel 5 («Kretser som velger»): dekoderen, veien fra opkoden til styresignalet og multiplekseren. Ikke gå inn på mentekjeden, flaggene eller kretsen som husker.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Dekoderen: en krets med noen få innganger og én utgang per mulig kombinasjon, der nøyaktig én er på. Hemmeligheten er at du allerede har skrevet den: ett AND-ledd per rad i tabellen, alle på én gang, hver port skreddersydd for sin kombinasjon. Eksempelet med to innganger og fire utganger: A = 1 og B = 0, og bare linje 2 får to ettall inn. De tre andre får en null og er mørke, fordi en AND med en null alltid er 0. Derfor er nøyaktig én utgang på.
2. Hele veien fra program til krets: LDA 42 blir bitmønsteret 0101 00101010, der de fire første bitene er opkoden. De går inn i en dekoder med seksten AND-porter med fire innganger hver. Én port har nettopp mønsteret og får fire ettall inn, de femten andre er mørke. Utgangen er LDA-linja, som går til bryterne i datastien og åpner akkurat de veiene som skal åpnes. Det er hele koblingen mellom et program og en krets: du skrev en ordre, assembleren gjorde den til et tall, og fire av bitene traff én AND-port. Den porten er grunnen til at maskinen gjør LDA og ikke ADD. Ingen tolker noe, ingen leser og skjønner.
3. Multiplekseren: motsatsen. En dekoder tar et tall og velger én linje, en multiplekser tar flere linjer og velger én. F er (ikke S) · A pluss S · B. S = 0 gir A, S = 1 gir B. En bryter bygget av to AND-porter, en OR-port og en inverter.
4. Den felles idéen: en AND-port brukt som en grind, der ett signal bestemmer om det andre slipper gjennom. Multipleksere sitter overalt i en prosessor, hver gang datastien har to mulige kilder til samme sted, selv om de sjelden tegnes. Subtraksjonskretsen kunne også brukt en, men en XOR er billigere der.

STIL
- Mange bilder og metaforer (en dørvakt, en jernbanevekselbryter, en lysbryter i hvert rom, en bibliotekar som henter én bok). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: en dekoder velger én linje ut fra et tall, en multiplekser velger én kilde blant flere, og begge er AND-porter som fungerer som grinder.
```

---

## Podkast 3: 5.10 Kretsen som husker

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 5.10 i kapittel 5 («Kretsen som husker»). Seksjonen er kort, så ta deg tid med bildene og ideene. Ikke gå inn på SR-latch, D-latch, vippe, den forbudte kombinasjonen eller Appendiks C, og ikke bruk tid på det som står i andre seksjoner.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Alt vi har bygget til nå har én egenskap felles: utgangen følger inngangene, hele tiden. Endrer du en inngang, endrer utgangen seg straks etter. Kretsen har ingen fortid. Slike kretser heter kombinatoriske, og det er portene, adderen, dekoderen og multiplekseren.
2. Problemet: et register skal holde på en verdi så lenge strømmen står på. Det kan ingen kombinatorisk krets gjøre, for tar du bort inngangen, forsvinner svaret. Så hvordan kan noe huske?
3. Ideen er én setning: koble utgangen tilbake til inngangen. Da avhenger ikke kretsen bare av det som kommer inn nå, men også av hva den selv sa sist. Er tilbakekoblingen satt opp riktig, kan den holde seg selv i ro i den tilstanden den er i, helt til noen med vilje dytter den over i den andre. Bruk bilder: en gyngestol som blir stående, en bryter som klikker på plass, et ekko som holder lyden i live.
4. To NOR-porter som mater hverandre, holder nøyaktig én bit på denne måten. Registrene fra tidligere i faget er bygget av nettopp dette, og det samme er cachen. Kretser med tilbakekobling heter sekvensielle, fordi utgangen avhenger av rekkefølgen på det som har skjedd, og ikke bare av hva som står på inngangene nå. Alt annet i kapitlet har vært kombinatorisk.
5. Sett det i perspektiv: på én side får vi svaret på hvordan en maskin kan huske, etter å ha begynt kapitlet med to brytere i en trappeoppgang. Hukommelse er ikke noe nytt, bare porter som lytter til seg selv.

STIL
- Mange bilder og metaforer. Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer, og ikke henvis til noe lenger bak i boka.
- Avslutt med en kort, rolig oppsummering: kretser uten tilbakekobling regner, kretser med tilbakekobling husker, og to porter som mater hverandre holder én bit.
```

---

## Ikoner

Hver podkast trenger et eget mann- og dame-ikon (unikt per delkapittel), så si fra hvis du trenger at jeg bytter dem ut med nye.
