# NotebookLM-prompter for podkaster, kapittel 7 (én kort podkast per delkapittel)

Kilde: `kap07.pdf`. Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 7 som kilde.
Lengde: ca. 6 minutter (ca. 900 ord). Vil du ha lengre, bytt «6 minutter» med «10 minutter» i prompten.

1. 7.2 Hvorfor det må være et hierarki
2. 7.3 Lokalitet
3. 7.4 Cachen
4. 7.5 Pipelinen
5. 7.6 Når pipelinen stopper

---

## Podkast 1: 7.2 Hvorfor det må være et hierarki

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 7.2 i kapittel 7 («Hvorfor det må være et hierarki»). Ikke gå inn på lokalitet, cachelinjer, pipeline eller hasarder.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Problemet: en addisjon går på under ett klokketikk, men å hente tallet fra minnet tar omtrent hundre ganger lenger tid. Prosessoren bruker mesteparten av tiden på å vente.
2. Tallene oversatt til sekunder: hvis én klokkesyklus var ett sekund, tar et register under ett sekund, L1-cachen fire sekunder, L2 tolv, L3 førti, RAM fire minutter, en SSD nesten to døgn og en harddisk ni måneder, omtrent et skoleår. Bruk dette som bilde og ikke les opp en tabell.
3. Hvorfor ikke bare bygge alt minne raskt? Avstand koster tid (signalet må fylle en lang ledning), og stort betyr tregt (flere adresser, større dekoder). Pris: SRAM har seks transistorer per bit, DRAM én transistor og en liten kondensator som lekker som et badekar og må fylles opp igjen hele tiden. 32 gigabyte SRAM ville blitt hundre ganger større enn en vanlig prosessorbrikke. Raskt, stort og billig: du får bare to.
4. Løsningen: flere lag, som pulten, hylla og biblioteket. Du flytter ting oppover når du bruker dem. Hvert lag holder en kopi av noe i laget under. Skillet mellom flyktig primærminne (registre, cache og RAM) og sekundærminne (SSD og harddisk).
5. Overraskelsen: effektiv aksesstid. Med 90 prosent treff, 1 ns for treff og 100 ns for bom blir snittet 10,9 ns, og de få bommene koster elleve ganger mer enn alle treffene til sammen. Med 99 prosent treff faller det til 1,99 ns. Derfor jakter folk på de siste prosentene.

STIL
- Mange bilder og metaforer (pulten, hylla, biblioteket, badekaret, skoleåret). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster, videoer eller andre kapitler. Ikke still spørsmål til lytteren om hva som kommer.
- Avslutt med en kort, rolig oppsummering av poenget: hierarkiet finnes fordi vi ikke kan få raskt, stort og billig samtidig, og det virker fordi det meste vi trenger allerede ligger øverst.
```

---

## Podkast 2: 7.3 Lokalitet

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 7.3 i kapittel 7 («Lokalitet»). Ikke forklar cachelinjer i detalj, treffrate, skrivestrategier eller pipeline.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Gåten: to løkker over et rutenett på 8000 ganger 8000 tall. Samme maskin, samme tall, samme antall addisjoner. Den ene går radvis og bruker 13 millisekunder, den andre kolonnevis og bruker 441, over tretti ganger så lenge. Forskjellen ligger ikke i hva maskinen regner ut, men i rekkefølgen den henter tallene.
2. Hvorfor cachen i det hele tatt virker: programmer hopper ikke tilfeldig rundt. En enkel løkke som summerer en liste rører den samme variabelen om og om igjen, går fra nabo til nabo gjennom listen, og kjører de samme instruksjonene på nytt.
3. De to navnene: tidslokalitet (brukte du noe nettopp, bruker du det snart igjen) og stedslokalitet (brukte du noe, bruker du trolig naboen). Huskeregelen er «nylig og naboen». Også instruksjonene i en løkke har tidslokalitet.
4. Løsningen på gåten: et rutenett ligger ikke som et rutenett i minnet, men brettet ut radvis til én lang linje. Den radvise løkka går bortover linja ett steg av gangen. Den kolonnevise tar ett tall, hopper over en hel rad, tar neste. Med fire byte per tall blir hvert hopp 32 000 byte.
5. Det mest interessante: ved et lite rutenett (1 MB) er forskjellen nesten borte, ved 16 MB begynner det å svi, og ved 256 MB blir forholdet over 33. Effekten vokser med hvor dårlig dataene får plass. Du som programmerer kan endre tiden bare ved å velge rekkefølgen du går gjennom data i, uten å endre algoritmen.

STIL
- Mange bilder og metaforer (hyllene i et bibliotek, å gå fra hus til hus langs en gate mot å hoppe over hele kvartaler). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster, videoer eller andre kapitler. Ikke still spørsmål til lytteren om hva som kommer.
- Avslutt med en kort, rolig oppsummering av poenget: programmer gjenbruker det de nettopp brukte og går til naboen, og det er derfor rekkefølgen du går gjennom data i kan være mer enn tretti ganger forskjellen.
```

---

## Podkast 3: 7.4 Cachen

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 7.4 i kapittel 7 («Cachen»). Ikke gå inn på pipeline, hasarder eller selve lokalitetsmålingene.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Maskinen henter mer enn du ba om: ber prosessoren om fire byte, kommer det typisk 64 tilbake. Den klumpen heter en cachelinje og er den minste enheten cachen håndterer. Det er som å bære opp hele kassa fra kjelleren fordi turen er dyr, ikke bærejobben. En kassa rommer seksten tall på fire byte, så én bom gir femten gratis treff når du går i rekkefølge. Går du i store hopp, rekker du aldri å bruke naboene.
2. Treff og bom: ved en bom spør L1 L2, L2 spør L3, L3 spør RAM, hele linja hentes opp, og noe annet må vike. Treffrate er andelen treff. Eksempel: en linje rommer fire tall og du leser tolv i rekkefølge fra en tom cache, gir 3 bommer og 9 treff, altså 75 prosent.
3. Flere nivåer: avveiningen mellom fart og størrelse forsvinner ikke av at vi har en cache, så den gjentar seg. En cache som svarer på fire sykluser må være liten, en stor kan ikke være så rask. Derfor har vi L1, L2 og L3. L1 er privat for hver kjerne og delt i to, én for instruksjoner og én for data. L2 er privat og større, L3 er delt av alle kjernene.
4. Når du skriver: gjennomskriving skriver begge steder med en gang, enkelt men tregt. Tilbakeskriving skriver bare i cachen og ned til RAM senere, raskt, men kopiene er uenige en stund.
5. Flere kjerner med hver sin kopi: endrer én kjerne sin kopi av en linje, må de andre få vite at deres er utdatert. Det heter cache-koherens og løses i maskinvaren ved at cachene holder øye med hverandre. Cachen er usynlig for programmet: svaret blir det samme med eller uten, bare tiden endres.

STIL
- Mange bilder og metaforer (kassa fra kjelleren, en kollega som rydder bort notatene dine). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster, videoer eller andre kapitler. Ikke still spørsmål til lytteren om hva som kommer.
- Avslutt med en kort, rolig oppsummering av poenget: cachen henter i klumper og gjetter at du trenger naboen, og når gjettet treffer, merker du ingenting.
```

---

## Podkast 4: 7.5 Pipelinen

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 7.5 i kapittel 7 («Pipelinen»). Ikke gå inn på hasarder, bobler eller hva som skjer når pipelinen stopper.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Oppvasken: Amina, Jonas og Henrik skal vaske tretti tallerkener. Alene bruker én person tre minutter per tallerken, altså 90 minutter. På rad (vask, skyll, tørk) blir den første tallerkenen ferdig etter tre minutter, men deretter kommer det én ferdig hvert minutt, og alt er ferdig på 32 minutter. Ingen tallerken går fortere, men de kommer ut oftere.
2. I prosessoren: en instruksjon går gjennom fire trinn, IF (hente), DE (tyde), EX (utføre) og WB (skrive tilbake). Uten pipeline står tre fjerdedeler av maskinen stille: tre instruksjoner tar 12 sykluser. Med pipeline starter neste instruksjon så snart trinnet foran er ledig, og fra syklus 4 jobber alle fire samtidig.
3. Regnestykket: tre sykluser for å fylle pipelinen, så én ferdig per syklus. Fem instruksjoner tar 3 + 5 = 8 sykluser. Gevinsten nærmer seg fire, men når den aldri: 1 instruksjon gir ingen, 10 gir 3,1, 1000 gir 3,99.
4. Det viktigste skillet: latens (tiden én instruksjon bruker) endres ikke, fortsatt fire sykluser. Gjennomstrømning (hvor mange som blir ferdige per syklus) går fra 0,25 til nesten 1. Hele gevinsten ligger der, akkurat som med tallerkenene.
5. Alle trinn må ta like lang tid: samlebåndet går i takt med det tregeste trinnet, og er skyllingen lynrask hjelper det ikke om vaskingen tar tre minutter. I prosessoren er det klokka som må være lang nok for det tregeste trinnet.
6. Hvorfor ikke hundre trinn: mer er ikke bedre. Intel bygde prosessorer med rundt tjue og senere over tretti trinn, og fikk høy klokkefrekvens, men ikke ytelsen. Registre mellom trinnene tar tid, arbeidet lar seg ikke dele i like biter, og dype pipelines koster mye når noe går galt. Moderne prosessorer har ti til tjue trinn, et kompromiss. Mange bøker tegner fem trinn der minnetilgangen (MEM) får sitt eget trinn.

STIL
- Bruk oppvasken som rød tråd og gjenta den i flere av delene. Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster, videoer eller andre kapitler. Ikke still spørsmål til lytteren om hva som kommer.
- Avslutt med en kort, rolig oppsummering av poenget: pipelinen gjør ingen enkelt instruksjon raskere, men får flere ferdige per syklus, og den går i takt med det tregeste trinnet.
```

---

## Podkast 5: 7.6 Når pipelinen stopper

```
Lag en kort podkast på norsk bokmål, ca. 6 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 7.6 i kapittel 7 («Når pipelinen stopper»). Forklar pipelinen med fire trinn (IF, DE, EX, WB) kort der det trengs, men ikke regn ut gevinsten.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Tre ting kan stoppe oppvasken: Henrik kan ikke tørke en tallerken Jonas ikke har skylt ferdig, noen roper «stopp, nå tar vi glass» så alt i køen er feil, og to trenger den samme vasken. I en prosessor heter det hasard: datahasard, kontrollhasard og strukturhasard. Skillet mellom avhengighet (en egenskap ved programmet, sann på alle maskiner) og hasard (en følge av maskinvaren, som bare oppstår hvis verdien ikke rekker fram i tide).
2. Datahasard: LDA henter en verdi, ADD legger til, STA lagrer. ADD trenger verdien i syklus 3, men den er først klar i syklus 4, så ADD venter. De tomme rutene kalles bobler, og å vente heter å stoppe opp (stall). Stansene legger seg oppå hverandre, og tre instruksjoner som skulle tatt seks sykluser bruker ti. Hent, regn, lagre er så vanlig at en løkke med en million runder gir millioner av tapte sykluser.
3. Kontrollhasard: pipelinen henter instruksjoner i rekkefølge uten å spørre. Et betinget hopp avgjøres først i EX, og da er to instruksjoner til hentet. Tas hoppet, er begge feil, de kastes og maskinen begynner på nytt fra riktig sted, og pipelinen tømmes. I en pipeline med tjue trinn kan femten eller flere kastes hver gang, derfor er dype pipelines risikable. En if som veksler uregelmessig inne i en løkke koster noen sykluser hver gang.
4. Strukturhasard: to trinn vil ha samme maskinvare i samme syklus, for eksempel IF som henter en instruksjon og en LDA i EX som henter en dataverdi, begge fra minnet. Løsningen er to minner, og derfor er L1-cachen delt i en for instruksjoner og en for data. Den sjeldneste og enkleste typen.
5. Å stå stille: en prosessor kan vente på minnet (en bom på tolv, førti eller to hundre og førti sykluser) eller på seg selv (en hasard). Utenfra er det det samme, klokka tikker og ingenting nyttig skjer. Hvis en syklus var ett sekund, koster en datahasard to sekunder og en bom helt til RAM fire minutter.

STIL
- Bruk oppvasken som rød tråd. Mange bilder og metaforer, men hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster, videoer eller andre kapitler, og ikke forklar hvordan hasarder løses. Ikke still spørsmål til lytteren om hva som kommer.
- Avslutt med en kort, rolig oppsummering av poenget: pipelinen kan stoppe på tre måter, og enten den venter på minnet eller på seg selv, er det tapt tid.
```
