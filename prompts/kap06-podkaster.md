# NotebookLM-prompter for podkaster, kapittel 6 (6.1 til 6.10)

Kilde: `kap06.pdf`. Lim hele prompten inn i «tilpass»-feltet i NotebookLM (Audio Overview), med kapittel 6 som kilde.
Lengde: 6.1 er en kort intro på ca. 3 minutter. 6.2 til 6.9 er vanlige podkaster på ca. 12 minutter (ca. 1800 ord), og 6.10 er litt lengre (ca. 14 minutter) fordi den har syv underseksjoner. Vil du ha dem kortere, bytt «12 minutter» med «6 minutter». Promptene til 6.11 ligger i `kap06-6.11.md`.
Vannbildet fra boka (spenning er høyde, strøm er mengde vann, utgangen er et badekar) går igjen. Si «leder» og «stengt» om transistorer, aldri «åpen» og «lukket».

1. 6.1 Introduksjon (kort)
2. 6.2 Bryteren som ikke trenger en finger
3. 6.3 Strøm, spenning og jord
4. 6.4 Inverteren
5. 6.5 NAND, NOR og hvorfor AND er dyrere
6. 6.6 Null og ett er områder, ikke tall
7. 6.7 Det tar tid
8. 6.8 Den lengste veien
9. 6.9 Klokka
10. 6.10 Hvorfor klokka stoppet på rundt 3 GHz

---

## Podkast 1: 6.1 Introduksjon

```
Lag en veldig kort podkast på norsk bokmål, ca. 3 minutter (ca. 450 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare åpningen av kapittel 6, før seksjon 6.2: telefonen som blir varm, spørsmålet om hva som faktisk sitter i maskinen, vannbildet og de tre spørsmålene kapitlet svarer på. Dette er en rask introduksjon som gir lytteren et bilde av hva som venter. Ikke gå i detalj på noe, og ikke forklar transistorer, spenning eller klokkefrekvens.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Telefonen din blir varm. Etter en halvtimes spilling eller en lang videosamtale er baksiden lun, og har du laptop, hører du viften spinne opp. Det er litt rart når du tenker etter: det beveger seg ingenting der inne, ingen motor, ingen tannhjul, ingenting som gnisser. Prosessoren har ikke én eneste bevegelig del. Hva er det da som blir varmt?
2. Varmen er ikke en bieffekt man kunne konstruert seg bort fra. Den er regningen for arbeidet. Hver gang maskinen bytter et bit fra 0 til 1, tar den en liten slurk strøm, og hele slurken ender som varme. Gjør maskinen det noen milliarder ganger i sekundet på noen milliarder steder samtidig, blir slurkene til et måltid.
3. Det du leter etter, kjenner du allerede, og du bruker det hver morgen når du slår på lyset. Gjelden fra før: portene finnes ikke, de er tegninger, så hva er det som faktisk sitter der? Du trenger ingen fysikk for å følge med: vi snakker om strøm hele veien, men gjør det med vann, og vannbildet bærer deg lenger enn du skulle tro.
4. Tre spørsmål de fleste ikke kan svare på: hvorfor blir en datamaskin varm når ingenting beveger seg i den, hvorfor sluttet prosessorer å bli raskere rundt 2004 etter å ha blitt raskere hvert år i tretti år, og hvorfor har maskinen din åtte kjerner i stedet for én kjerne som går åtte ganger så fort? Alle tre har det samme svaret, og du finner det i bunnen av stabelen.

STIL
- Mange bilder og metaforer. Hold deg til få tall om gangen. Tempoet skal være lett og nysgjerrig, som en smakebit.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: det som blir varmt, er regningen for arbeidet, og svaret på alle de tre spørsmålene ligger i en enkel bryter.
```

---

## Podkast 2: 6.2 Bryteren som ikke trenger en finger

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.2 i kapittel 6 («Bryteren som ikke trenger en finger»). Ikke gå inn på spenning, strøm og jord i detalj, inverteren, NAND og NOR, klokka eller varme.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Hullet i historien: det du har sett til nå, bygger på to brytere og en lyspære. Brytere i serie ble OG, brytere i parallell ble ELLER, og derfra kunne man bygge helt opp til en krets som legger sammen tall. Men noen må trykke på bryterne. En bryter er et stykke metall som enten berører et annet stykke metall eller ikke, og for å flytte det må noe ta i: en finger, en fjær, en knapp. En datamaskin har ingen fingre.
2. Det verste: utgangen fra én port går rett inn som inngang på den neste, så det er utgangen fra den første porten som må trykke på bryterne i den andre. Vi trenger en bryter som et signal kan trykke på. Du kunne bygget en hel fulladder av lysbrytere i kjelleren, koblet til et batteri, og den ville regnet riktig. Folk har gjort det. Den ville bare vært ubrukelig, fordi noen måtte stått der og trykket på bryterne i riktig rekkefølge.
3. En tredje ledning: gi bryteren en tredje ledning, en som strømmen ikke går gjennom, men som bare bestemmer. Er det spenning på den, leder bryteren, og er det ingen spenning, er den stengt. Spenning betyr her at ledningen er koblet til strømkilden, ingen spenning at den er koblet til jord. Det er de to tilstandene vi skriver som 1 og 0. Tenk på det som «det er trykk på ledningen». Ingen bevegelige deler, ingen finger, ingen knapp: et signal på én ledning avgjør om strømmen får gå på en annen. Koble utgangen fra én slik bryter til styreledningen på den neste, og kretsen bygger seg videre av seg selv.
4. Den motsatte: det finnes to slags. Den ene leder når det er spenning på styreledningen. Den andre gjør det motsatte, den stenger ved spenning og leder uten. Den lille sirkelen, boblen, fra portsymbolene brukes igjen: en bryter med boble på styreledningen er den som gjør det motsatte. Ordene: i elektronikk sier man gjerne at en bryter er åpen når den ikke slipper gjennom, stikk motsatt av en åpen kran, og siden vi bruker vann som bilde, er det en felle. Derfor sier vi leder og stengt, aldri åpen og lukket.
5. Navnet: en transistor er en bryter som styres av et elektrisk signal i stedet for av en finger. Den er laget av silisium, har ingen bevegelige deler og er så liten at det er plass til noen titalls milliarder av dem i en telefon. De to typene heter nMOS, som leder når styresignalet er 1, og pMOS, som leder når det er 0 og er den med boblen. Du trenger ikke vite hva bokstavene står for eller hva som skjer inne i silisiumet. Det du må huske, er at den ene leder ved 1 og den andre ved 0. En transistor har tre tilkoblinger: styreledningen og de to kontaktene strømmen eventuelt går mellom.

STIL
- Mange bilder og metaforer (en fingerløs lysbryter, dominobrikker som faller av seg selv, en kran som styres av en annen kran, en dørvakt). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: en transistor er en bryter som styres av et signal i stedet for en finger, og det finnes to slags, en som leder ved 1 og en som leder ved 0.
```

---

## Podkast 3: 6.3 Strøm, spenning og jord

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.3 i kapittel 6 («Strøm, spenning og jord»). Ikke gå inn på inverteren, NAND og NOR, tidsforsinkelse, klokka eller varme, og ikke forklar hvordan transistoren er bygget.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Hvorfor må en datamaskin ha strøm? Det virker selvsagt, men det er det ikke: en bok trenger ingen strøm for å lagre tekst, og et ferdiglagt puslespill trenger ingen strøm for å bli liggende. Hvorfor kan ikke maskinen bare stå der med nullene og ettallene sine? Fordi et bit i en datamaskin ikke er en ting. Det er en tilstand, en spenning som må holdes oppe et sted i kretsen, og slipper du den, faller den. Og en port gjør mer enn å holde en verdi: den lager et nytt signal som er sterkt nok til å styre neste port, og det koster energi, som å løfte noe opp.
2. Vannbildet: spenning er høydeforskjellen. Står vannet høyt, er det trykk og vannet vil nedover, mens det ikke skjer noe når det står lavt. Spenning måles i volt. Strøm er hvor mye vann som faktisk renner, og det avhenger både av høydeforskjellen og av hvor mye krana er skrudd opp. De to er forskjellige ting: du kan ha stor høydeforskjell og likevel ingen strøm hvis krana er stengt, og akkurat den situasjonen skaper en stengt transistor.
3. Toppen og bunnen: en krets har et høyt punkt og et lavt punkt. Det høye heter VDD, forsyningsspenningen, der strømmen kommer inn, og i en moderne prosessor ligger den rundt 0,8 volt. Det lave heter GND, jord, 0 volt, referansepunktet alt annet måles mot. Strømmen går alltid fra høyt til lavt. VDD er logisk 1, og GND er logisk 0. Mer er det ikke i oversettelsen mellom elektrisitet og logikk.
4. Er jord virkelig jorda? Spørsmålet kommer hvert år. Svaret er: opprinnelig ja, og nå nesten. I et hus går jordlederen i stikkontakten faktisk ned i bakken. I en telefon på batteri finnes det ingen slik ledning, og jord er bare den ene polen på batteriet, som alt annet måles fra. Poenget er det samme: jord er et sted som er så stort at det ikke merkes om du heller litt ladning inn i det, som havet som står like høyt etter at du har tømt et badekar i Atlanterhavet. Derfor kan jord være en stabil nullstrek, så «0 volt» betyr det samme over hele brikken.
5. To tall, og ingenmannsland imellom: strømmen går alltid fra VDD mot GND, så enhver ledning i kretsen har en spenning et sted mellom 0 og 0,8 volt. I prinsippet kan den ha hvilken som helst verdi i det intervallet, men logikken kjenner bare to verdier. Det går i hop ved at 0 og 1 får hvert sitt område å være innenfor, i stedet for hvert sitt tall: lavt betyr 0, høyt betyr 1.

STIL
- Mange bilder og metaforer (vann som renner nedover, en tank høyt oppe, havet som ikke merkes av ett badekar, en bok som ligger i ro). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: spenning er høyden og strøm er mengden, VDD er toppen og logisk 1, GND er bunnen og logisk 0, og 0 og 1 er hvert sitt område, ikke hvert sitt tall.
```

---

## Podkast 4: 6.4 Inverteren

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.4 i kapittel 6 («Inverteren: den første porten vi faktisk bygger»). Ikke gå inn på NAND og NOR, tidsforsinkelse, klokka eller hvor mye varme en brikke lager.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Den enkleste porten som finnes er NOT-porten, inverteren, som snur signalet. Oppskriften er kort: sett de to transistortypene over hverandre mellom VDD og GND, og ta utgangen ut midt imellom. Begge styres av det samme inngangssignalet. Den øverste er pMOS-en, den med boblen, som leder når inngangen er 0. Den nederste er nMOS-en, som leder når inngangen er 1. Tegnet som to brytere eller med transistorsymboler er det samme krets.
2. Gå gjennom begge tilfellene, rolig. Inngangen er 0: pMOS-en øverst leder, mens nMOS-en nederst er stengt. Utgangen har fri vei opp til VDD og ingen vei ned til GND, og blir høy, altså 1. Inngangen er 1: det er motsatt. pMOS-en er stengt, nMOS-en leder, og utgangen har fri vei ned til GND og ingen vei opp. Den blir 0. Inn med 0, ut med 1. Inn med 1, ut med 0.
3. Det som er lett å gå glipp av: ettallet kom ikke fra inngangen. Inngangen rørte aldri utgangen, og det går ingen ledning mellom dem. Den gikk bare til de to styreledningene og valgte hvilken av de to veiene som skulle brukes. Verdien på utgangen kom fra VDD eller GND, altså fra forsyningen. Hver eneste ener i maskinen er hentet rett fra strømforsyningen, og hver eneste null fra jord. Signalet som kommer inn, bærer ikke verdien videre, det åpner bare en kran. Verdien som renner ut, er ny og like sterk uansett hvor slapp inngangen var. Derfor kan du koble tusen porter etter hverandre uten at signalet blir utvannet.
4. Aldri begge samtidig: så lenge inngangen ligger i ro, leder de to transistorene aldri samtidig, for de to typene reagerer motsatt. Hadde begge ledet, ville det gått en rak strøm fra VDD til GND uten å gjøre noe nyttig, en kortslutning. Følgen: når kretsen står i ro, går det nesten ingen strøm gjennom den, og strømmen går bare i det korte øyeblikket utgangen skifter. Det eneste unntaket er selve omslaget, der begge så vidt leder i noen få pikosekunder. Derfor kan en telefon ligge på bordet i en uke og fortsatt ha batteri. De to typene utfyller hverandre, complementary, og teknologien heter CMOS.

STIL
- Mange bilder og metaforer (to sluser der bare den ene slipper vann gjennom, en dørvakt, en kran som bare styres av en annen kran). Hold deg til få tall om gangen. Si «leder» og «stengt» om transistorene, aldri «åpen» og «lukket».
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: en inverter er to transistorer som aldri leder samtidig, inngangen velger bare veien, og verdien kommer alltid fra forsyningen.
```

---

## Podkast 5: 6.5 NAND, NOR og hvorfor AND er dyrere

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.5 i kapittel 6 («NAND, NOR, og hvorfor AND er dyrere»). Ikke gå inn på tidsforsinkelse, klokka, varme eller hvordan 0 og 1 er spenningsområder.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Inverteren hadde én inngang og trengte én transistor oppe og én nede. Med to innganger trenger vi to oppe og to nede, til sammen fire. Spørsmålet er hvordan de skal kobles, og det finnes bare to muligheter: etter hverandre eller ved siden av hverandre. To brytere i serie: strømmen må gjennom begge, så begge må lede. To brytere i parallell: strømmen har to veier, så det holder at én leder.
2. NAND-porten: nede står de to nMOS-ene i serie, så veien ned til jord åpner seg bare når begge inngangene er 1. Oppe står de to pMOS-ene i parallell, og siden de leder ved 0, holder det at én av inngangene er 0 for at utgangen kobles til VDD. Utgangen er altså 0 bare når begge inngangene er 1, og det er sannhetsverditabellen til NAND. Sjekk ett tilfelle: A er 1 og B er 0. Veien til jord er brutt, og utgangen kobles til VDD, så den blir 1. NOR er samme idé speilvendt: serie oppe, parallell nede.
3. Hvor er AND-porten? Prøv å bygge den. Setter du de to nMOS-ene i serie nede, trekkes utgangen til jord når begge er 1, og du får 0 ut når begge er 1. Det er NAND, ikke AND. Hvordan du enn kobler dem, blir det slik, for transistorene oppe kobler utgangen til VDD, transistorene nede kobler den til GND, og de to gruppene gjør alltid det motsatte av hverandre. Et slikt trinn snur derfor alltid signalet. Det betyr ikke at AND-porten ikke finnes: den ligger i alle kretsbiblioteker og tegnes som ett symbol, men den er bygget som en NAND med en inverter etter, to trinn der det andre snur tilbake.
4. Regnskapet: en inverter koster to transistorer, en NAND fire og en AND seks, fordi AND er en NAND pluss en inverter. NOR koster fire og OR seks, og XOR mellom åtte og tolv. Det er motsatt av det de fleste gjetter: AND føles som den enkle porten og NAND som den rare med boble på, men i silisium er NAND den enkle. Regn på det: en krets bruker tolv AND-porter med to innganger, og en designer finner en måte å få samme resultat med tolv NAND-porter. Tolv ganger seks mot tolv ganger fire: 24 transistorer spart av 72, altså en tredel. Hver port du sparer, er transistorer som slipper å ta plass, trekke strøm og bli varme, og derfor skriver en kretsdesigner heller om et uttrykk til NAND-er enn til AND-er.

STIL
- Mange bilder og metaforer (to dører etter hverandre mot to dører ved siden av hverandre, en bryter som snur alt, et regnskap over hva delene koster). Hold deg til få tall om gangen. Si «leder» og «stengt» om transistorene, aldri «åpen» og «lukket».
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: serie nede og parallell oppe gir NAND, hvert trinn snur signalet, og derfor er AND en NAND med en inverter og dyrere enn NAND.
```

---

## Podkast 6: 6.6 Null og ett er områder, ikke tall

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.6 i kapittel 6 («Null og ett er områder, ikke tall»). Ikke gå inn på tidsforsinkelse, klokka, varme eller hvordan portene er koblet.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Verden er analog, og det er et problem: en ledning fører en spenning som kan være hva som helst mellom 0 og 0,8 volt. Den kan være 0,37 volt, den kan dirre litt opp og ned, og den blir dratt på av naboledninger, av varme og av at noe annet på brikken skifter i samme øyeblikk. Logikken kjenner derimot bare 0 og 1. Hvordan kan et system med to verdier bygges av noe som kan ha uendelig mange?
2. Svaret er enkelt, og hele den digitale teknologien hviler på det: gi hvert tall et rom å bo i. I stedet for å kreve at 0 betyr nøyaktig 0,000 volt, sier vi at alt under en viss grense teller som 0, og alt over en annen grense teller som 1. Mellom de to grensene ligger et belte der kretsen ikke lover noe. Signalet trenger ikke treffe presist, det holder at det havner i riktig felt: en ener på 0,74 volt og en ener på 0,79 volt er den samme eneren.
3. Hvorfor et belte i midten og ikke bare én grense? En krets som får et signal helt på grensa, må velge, og den kan velge ulikt fra gang til gang. Med et bredt ingenmannsland i midten havner ingen der ved et uhell. Beltet er med vilje, og bredden på det er en designbeslutning. Det tekniske navnet er støymargin: hvor mye juks signalet tåler før det blir misforstått.
4. Hver port vasker signalet rent: når et slapt, forvrengt signal kommer inn i en port, bærer ikke porten det videre. Den leser det, avgjør om det er over eller under grensa, og lager et helt nytt signal fra VDD eller GND. Utgangen er skarp, selv om inngangen var slurvete. Rusk som samler seg underveis, forsvinner med en gang, og regnskapet starter på nytt etter hver port. Fagordet er signalgjenoppretting.
5. Derfor overlever en kopi av en kopi: kopierer du en lydfil og kopierer kopien, tusen ganger, er den siste fila bit for bit lik den første, fordi hvert bit ble lest som enten over eller under grensa og skrevet på nytt like skarpt. En kassett kopiert tusen ganger blir bare susing, fordi hver liten unøyaktighet fulgte med videre og la seg oppå den forrige. Forskjellen er ikke at digitalt er mer nøyaktig, men at digitalt retter seg selv hele tiden. «Et bit er en 0 eller en 1» er en påstand om noe fysisk, og den holder fordi hver port tvinger signalet tilbake i form, noen milliarder ganger i sekundet. Kunne en ener bli litt slapp underveis, ville ingenting høyere opp fungert.

STIL
- Mange bilder og metaforer (to rom med en gang imellom, en kopimaskin som kopierer en kopi, en kassett som blir til susing, en vaskemaskin som gjør signalet rent). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: 0 og 1 er hvert sitt område, beltet imellom er med vilje, og hver port lager et nytt, rent signal, og derfor overlever en kopi av en kopi.
```

---

## Podkast 7: 6.7 Det tar tid

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.7 i kapittel 6 («Det tar tid»). Ikke regn ut tid for hele kretser, og ikke gå inn på klokka, den kritiske veien eller hvor varm en brikke blir.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Badekaret: til nå har vi beskrevet alt som om det skjer momentant, at bryteren begynner å lede og utgangen er 1. Så enkelt er det ikke. Tenk deg utgangen på en port som et badekar. Skal porten sette utgangen til 1, åpner den krana øverst og fyller karet. Skal den sette utgangen til 0, stenger den krana og åpner avløpet. Det tar tid å fylle et badekar, og det tar tid å tømme det. Hvor lang tid, avhenger av to ting: jo større kran, jo raskere fylles karet, og jo større kar, jo lengre tid tar det.
2. Hvorfor er det et badekar der? Ingen har satt inn et badekar, det oppstår av seg selv. En ledning som skal føre en spenning, må lades opp til den spenningen, som et kar som må fylles før vannstanden er høy. Det samme gjelder styreledningen inn til neste port, siden det er spenningen på den som avgjør om transistoren leder. Summen av ledningen og styreledningene til portene den går til, er badekaret. Fagordet er kapasitans: «hvor mye som må fylles på». Kapasitansen er ikke en komponent noen har plassert der fordi den trengs. Den er en uunngåelig følge av at ledninger og transistorer er fysiske ting som tar plass. Ingen designer er glad i den, og alle jobber for å få den ned, fordi mindre kar gir raskere kretser. Den lille mengden lagret ladning er heller ikke minne, bare den uunngåelige tregheten i at et signal må bygge seg opp.
3. Portforsinkelse: nå kan tiden få et navn. Portforsinkelse er tiden fra inngangen til en port endrer seg til utgangen har kommet over på den nye verdien. Den er ikke lik for alle porter: en XOR har flere trinn inni seg enn en NAND og bruker lengre tid. Likevel regner vi med samme tall for alle, siden poenget er hvordan man teller. I en moderne prosess ligger portforsinkelsen på noen få pikosekunder, og et pikosekund er en billiondel av et sekund. Vi regner med 5 pikosekunder per port. Avstanden fra et pikosekund til et sekund er omtrent like stor som fra ett sekund til tretti tusen år. Størrelsesordenene, så du har dem: en port skifter på pikosekunder, en instruksjon kjøres på nanosekunder, en lesing fra en SSD tar mikrosekunder, og en lesing fra en treg disk tar millisekunder, hvert trinn tusen ganger lengre enn det forrige.
4. Større kran, raskere port, og en regning: hvorfor gjør man ikke bare alle transistorene større, slik at de fyller karet fortere? Det gjør man faktisk, der det haster: en bredere transistor leverer mer strøm og skifter raskere, som en bredere kran fyller badekaret fortere. Men den koster. Den tar mer plass, den trekker mer strøm, og den er selv et større kar for porten som står foran. Gjør du én port raskere, gjør du porten før den tregere. Fart, plass og strøm drar hver sin vei, og en kretsdesigner velger hele dagen.

STIL
- Mange bilder og metaforer (badekaret med kran og avløp, et basseng mot en teskje, en bredere kran som gjør karet bak tregere). Hold deg til få tall om gangen. Si «leder» og «stengt» om transistorene, aldri «åpen» og «lukket».
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: utgangen er et badekar, det tar tid å fylle og tømme, en port bruker noen få pikosekunder, og å gjøre den raskere koster plass og strøm.
```

---

## Podkast 8: 6.8 Den lengste veien

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.8 i kapittel 6 («Den lengste veien»). Portforsinkelsen er 5 pikosekunder per port. Ikke gå inn på klokkeperiode og frekvens, eller på varme.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Portene står ikke i kø: en fulladder er bygget av fem porter, og hver port tar 5 pikosekunder. Hvor lang tid bruker fulladderen? Det fristende svaret er fem ganger fem, altså 25. Det er feil, og grunnen er viktig. Portene jobber ikke etter tur. De jobber alle sammen hele tiden, og en port begynner i samme øyeblikk inngangene er klare, uten å bry seg om hva de andre holder på med. Tiden gjennom kretsen er derfor ikke summen av alle portene, men lengden på den lengste veien fra en inngang til en utgang.
2. Fulladderen, målt: følg den røde veien. Signalet går først gjennom XOR1, som er ferdig etter 5 pikosekunder, så gjennom AND2, ferdig etter 10, og så gjennom OR-porten, ferdig etter 15. Tre porter på rad gir 15 pikosekunder. AND1 var ferdig allerede etter 5, men det hjalp ikke: OR-porten har to innganger og kan ikke svare før begge er på plass, så den raske inngangen må stå og vente på den trege. Denne lengste veien kalles den kritiske veien, og det er den som bestemmer hvor rask kretsen er. Å gjøre noe på en av de andre veiene raskere, endrer ingenting. Finn det som faktisk bestemmer tiden, og la resten ligge.
3. Middagen som bilde: fire personer lager middag sammen, og alle jobber samtidig. Potetene tar 20 minutter, kjøttet 15, sausen 10 og salaten 4. Middagen er klar etter 20 minutter, ikke etter 49, og skal dere spise tidligere, hjelper det ikke å hakke salaten raskere. Potetene er den kritiske veien.
4. Og så legger vi dem i rekke: i en mentekjede må menten ut av den første fulladderen før den andre kan bli ferdig, og den andre før den tredje. Ingenting går i parallell, det er en kø der hvert ledd venter på det forrige. Fire bit koster dermed fire ganger 15, altså 60 pikosekunder. En kjede på 64 bit koster 64 ganger 15, altså 960 pikosekunder: nesten et helt nanosekund for én addisjon, plass til omtrent en milliard slike addisjoner i sekundet. En krets som gjør alt annet på 15 pikosekunder, bruker nesten tusen på å legge sammen to tall.
5. Men overslaget er for pessimistisk. I ledd nummer to er A og B klare fra første stund, og det eneste som kommer sent, er menten fra naboen. Menten trenger bare gjennom AND2 og OR, to porter og 10 pikosekunder. Bare det første leddet koster 15, de 63 andre koster 10 hver: 15 pluss 63 ganger 10 er 645 pikosekunder. Det er fortsatt tregt, og tiden vokser fortsatt rett opp med antall bit, men eksempelet viser at den kritiske veien ikke alltid er den du ser først, og at det lønner seg å spørre hvilket signal som faktisk kommer sist. Ekte prosessorer bruker ikke en rett mentekjede på 64 bit, men kretser som gjetter menten på forhånd i stedet for å vente, carry look-ahead: mye raskere, men med betydelig flere transistorer. Fart mot plass og strøm.

STIL
- Mange bilder og metaforer (middagen med poteter som tar lengst tid, en stafett der hver løper venter på den forrige, en kø foran en dør). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: tiden gjennom en krets er den lengste veien og ikke summen av portene, og i en mentekjede er den lengste veien en kø som vokser med antall bit.
```

---

## Podkast 9: 6.9 Klokka

```
Lag en podkast på norsk bokmål, ca. 12 minutter, for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.9 i kapittel 6 («Klokka»). Ikke forklar hvorfor brikker blir varme, og ikke gå inn på Moores lov eller flere kjerner.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Problemet som må løses: ulike veier gjennom en krets blir ferdige til ulik tid. Noen svar er klare etter 5 pikosekunder, andre først etter 960. I mellomtiden står det halvferdige verdier på ledningene som skifter mens signalene arbeider seg gjennom. Leser noe av en ledning i feil øyeblikk, leser det søppel. Maskinen trenger derfor en avtale om når det er trygt å se, og den avtalen er klokka. En forklaring du kan møte, stemmer ikke: at verdiene lekker ut hvis man venter for lenge. Så lenge inngangen ligger fast, holder porten utgangen aktivt oppe, fordi én av transistorene leder og kobler den til VDD eller GND. Grunnen til klokka er en annen: ulike veier blir ferdige til ulik tid, og noen må si fra når alle er det.
2. Alle leverer samtidig: tenk på en skriftlig prøve. Alle begynner når det ringer inn, alle jobber i sitt eget tempo, og alle leverer når det ringer ut. Den som ble ferdig tidlig, sitter og venter, for tiden settes etter den som trenger lengst. Klokka i en datamaskin gjør det samme: den deler tiden i like lange biter, innenfor hver bit får alle kretsene jobbe fritt, og på slutten av biten lagres alle svarene samtidig. Strengt tatt er det sløsing, for de raske kretsene står og venter mesteparten av tiden. Til gjengjeld slipper man å holde rede på hvem som blir ferdig når, og det er en enorm forenkling.
3. Hvordan et klokkesignal ser ut: klokka er bare en ledning til, og den går til nesten alt på brikken. På den ledningen veksler spenningen mellom 0 og 1 i et helt jevnt mønster. Klokkeperioden er tiden fra ett sted i mønsteret til samme sted neste gang, målt fra en stigende flanke til neste stigende flanke, eller fra en fallende til neste fallende. Stigende flanke er øyeblikket signalet går fra 0 til 1, fallende er det motsatte. Det er på flankene ting skjer: det er da resultatene lagres.
4. Fra periode til frekvens: frekvensen er hvor mange perioder som går per sekund, målt i hertz. En hertz er én periode i sekundet, og en gigahertz er en milliard av dem. Frekvens er 1 delt på klokkeperioden, samme slags sammenheng som mellom fart og tid: kjører du strekningen på halvparten av tiden, kjørte du dobbelt så fort. En prosessor på 3 GHz gjør tre milliarder perioder i sekundet, og hver varer 333 pikosekunder, en tredjedels nanosekund. Den andre veien: en periode på 500 pikosekunder gir 2 GHz, 250 gir 4 GHz og 1 nanosekund gir 1 GHz. Jo kortere periode, jo høyere frekvens.
5. Hva som setter taket: alt som skal bli ferdig innen neste flanke, må rekke det, så klokkeperioden må være minst like lang som den kritiske veien. Er perioden 20 pikosekunder og den kritiske veien 15, rekker den det, med litt margin. Er den kritiske veien 25, rekker den ikke fram, et halvferdig svar blir lagret, og maskinen regner feil: ikke litt feil, men helt feil, og vanskelig å finne i etterkant. Derfor kan man ikke bare skru opp klokkefrekvensen. Dette er nettopp det folk gjør når de overklokker en maskin: de setter klokkeperioden kortere enn produsenten anbefaler og håper marginen var romslig. Ofte går det bra, fordi produsenten har lagt inn margin for varme dager og dårlige eksemplarer. Går det ikke bra, får man tilfeldige krasj, ikke programvarefeil, men kretser som ikke rakk fram.
6. Hvorfor ikke 200 GHz? En port tar 5 pikosekunder, så klokkeperioden kunne settes til 5 pikosekunder, og det gir 200 GHz. Hvorfor går ikke prosessorer i 200 GHz? Tre grunner: den kritiske veien er aldri bare én port, men mange på rad, og perioden må romme hele veien. Perioden trenger margin for at brikken er varm, for at akkurat dette eksemplaret er litt tregere, og for at klokkesignalet ikke kommer helt samtidig overalt. Og den avgjørende grunnen er at brikken ville brent opp. En moderne brikke har dessuten ikke én klokke, men flere: kjernene kan gå i én takt, minnegrensesnittet i en annen og grafikken i en tredje. Deler som ikke er i bruk, kan få klokka slått av. Når noen oppgir 3,5 GHz, er det den globale klokka til kjernene.

STIL
- Mange bilder og metaforer (den skriftlige prøven, en dirigent, en metronom, en stafett som må rekke vekslingen). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: klokka er en avtale om når det er trygt å se, perioden må være minst like lang som den kritiske veien, og derfor er det et tak for hvor raskt den kan gå.
```

---

## Podkast 10: 6.10 Hvorfor klokka stoppet på rundt 3 GHz

```
Lag en podkast på norsk bokmål, ca. 14 minutter (ca. 2100 ord), for en student som leser IN1020 (Universitetet i Oslo). To programverter snakker sammen: den ene er nysgjerrig og stiller de spørsmålene en student ville stilt, den andre forklarer rolig og med glimt i øyet. Hyggelig kjemi, som to venner som koser seg over et fag de liker. Muntlig og avslappet, aldri oppramsing.

KILDE OG AVGRENSNING
Bruk bare seksjon 6.10 i kapittel 6 («Hvorfor klokka stoppet på rundt 3 GHz»). Ikke gå inn på hvordan inverteren eller portene er koblet, eller hvordan en klokke er bygget. Ikke varsle om hva som kommer etterpå.

HOVEDLINJE (fortell det som én sammenhengende historie, ikke som en liste)
1. Femti år med krymping: i 1965 skrev Gordon Moore, senere med på å grunnlegge Intel, en kort artikkel der han la merke til at antallet komponenter på en brikke hadde doblet seg hvert år, og gjettet at det ville fortsette. Det fortsatte i over femti år. I 1975 justerte han til en dobling hvert annet år. Det kalles Moores lov, og navnet er misvisende: det er ingen naturlov, men en trend han observerte. Så skjedde noe interessant: hele bransjen begynte å planlegge etter spådommen, og den ble en selvoppfyllende profeti, en felles tidsplan alle holdt seg til fordi alle andre gjorde det. Krympingen ga to ting, og lenge fikk man begge gratis: flere transistorer på samme flate, og raskere transistorer, fordi en mindre transistor har et mindre badekar å fylle. I tretti år fikk nye brikker både flere transistorer og høyere klokkefrekvens, og programmene ble raskere av seg selv. Så sluttet det: rundt 2004 flatet klokkefrekvensen ut, mens antall transistorer fortsatte oppover, og i samme øyeblikk begynte antall kjerner å stige.
2. Hver eneste vending koster: hver gang en utgang skal gå fra 0 til 1, må badekaret fylles. Vannet kommer fra VDD, og det koster energi å løfte det dit. Når utgangen senere skal tilbake til 0, tømmes karet ut i jord, og energien som lå i det, er borte som varme. Telefonen blir varm fordi den fyller og tømmer milliarder av små badekar, milliarder av ganger i sekundet. Og det er alt som blir varme, ikke bare det meste: en datamaskin tar inn elektrisk energi og leverer ikke noe tilbake. En laptop som trekker 45 watt, varmer rommet like mye som en varmeovn på 45 watt.
3. Hva som bestemmer hvor varmt det blir: tre ting, og alle følger av badekarbildet. Hvor mange kar: flere transistorer betyr flere kar å fylle. Hvor høyt vannet må løftes: det er forsyningsspenningen, og den teller dobbelt, fordi du både løfter mer vann og løfter det høyere. Hvor ofte: det er klokkefrekvensen, så dobler du frekvensen, bruker du dobbelt så mye strøm. Det eneste du bør merke deg, er at spenningen står i andre potens: halverer du spenningen, får du en firedel av effekten. Eksempel: en brikke går i 2 GHz på 1,0 volt, og du vil ha den til 4 GHz. Frekvensen dobles, så effekten dobles, men en høyere frekvens krever som regel litt høyere spenning, la oss si 1,2 volt, og da ganges effekten i tillegg med 1,44. Til sammen blir det omtrent 2,9 ganger: du doblet farten og nesten tredoblet varmen.
4. Triksen som sluttet å virke: så lenge transistorene krympet, kunne man senke forsyningsspenningen samtidig, for mindre transistorer trenger mindre spenning. Siden spenningen teller dobbelt, falt effekten per transistor raskt nok til at man kunne pakke inn flere og kjøre dem fortere uten at brikken ble varmere. Den balansen ga tretti år med gratis fart. Så traff spenningen gulvet: en transistor trenger en viss spenning for å skille klart mellom på og av, og går du under den, leder den litt når den skal være stengt, og den blir treg. Rundt 2004 sluttet spenningen å følge krympingen nedover: fra rundt 1,3 volt, via 1,0 volt rundt 2010, til de 0,7 til 0,8 voltene vi ligger på nå. Fra da ble hver ny gigahertz betalt nesten rett i varme. Dette punktet har fått navnet varmeveggen, og den står der fordi to ønsker kolliderer: lavere spenning for å spare strøm, og høy nok spenning til at bryteren fortsatt er en bryter.
5. Og krana som drypper: en stengt transistor er ikke helt stengt. Det lekker alltid litt strøm gjennom, og jo tynnere og mindre transistoren er, jo mer lekker den. Dette kalles lekkasje, og det er en utgift som løper hele tiden, også når brikken ikke gjør noe som helst. For noen tiår siden kunne du tenke på utgangen til en port som et svømmebasseng, og en liten lekkasje betydde ingenting. I dag er det samme karet på størrelse med en teskje. Det fylles raskt, men nå er lekkasjen stor i forhold til karet. Det er vanskelig å holde noe i en teskje med hull i.
6. Svaret ble flere kjerner: da spenningen ikke kunne senkes mer, hadde bransjen et valg. De kunne fortsette å skru opp frekvensen og la brikkene bli varmere og varmere, og rundt 2004 lå noen prosessorer på 3,8 GHz og krevde kjølere som fylte halve kabinettet. Eller de kunne slutte å skru opp frekvensen og bruke de stadig flere transistorene til noe annet. De valgte det siste: i stedet for én kjerne som går dobbelt så fort, to kjerner som går like fort som før. På papiret gir det like mange beregninger i sekundet, men man slipper spenningsøkningen den doble frekvensen ville krevd, faktoren 1,44. Haken: en raskere kjerne gjør alle programmer raskere uten at noen trenger å gjøre noe, men to kjerner gjør bare de programmene raskere som er skrevet for å bruke begge. Da frekvensen stoppet, ble regningen sendt fra maskinvaren til programvaren, og det er derfor parallellprogrammering gikk fra å være et spesialfelt til noe alle må forholde seg til.
7. Om tallene du leser i nyhetene: når en produsent sier at de lager brikker på en «2 nm-prosess», er det lett å tro at noe i transistoren er 2 nanometer langt. Det er det ikke. En gang viste tallet til en faktisk lengde, men den koblingen ble brutt for lenge siden, og i det som markedsføres som en 2 nm-prosess, er den tilsvarende lengden snarere 12 til 20 nanometer. Nodenavnet er i dag et generasjonsnavn, omtrent som modellåret på en bil: det forteller at denne generasjonen er tettere og bedre enn den forrige, men det er ikke et mål på noe. Og hva kommer etter? Når transistorene ikke kan bli stort mindre i flaten, begynner man å stable dem i høyden, man bygger spesialiserte kretser som gjør én oppgave svært effektivt, og det forskes på helt andre materialer og helt andre måter å regne på.

STIL
- Mange bilder og metaforer (badekar som fylles og tømmes, en kran som drypper, en teskje med hull i, en varmeovn som brukes som regnestykke). Hold deg til få tall om gangen.
- Ikke annonser seksjonsnumre, kapittelnumre eller «nå går vi til neste del». La overgangene komme naturlig i samtalen.
- Ikke snakk om stemmene, verten selv eller at dette er en podkast. Ingen hilsen eller avskjed med navn.
- Ikke nevn andre podkaster eller videoer.
- Avslutt med en kort, rolig oppsummering: hver vending koster en slurk som blir varme, spenningen kunne ikke senkes mer, og derfor stoppet frekvensen rundt 2004 og svaret ble flere kjerner.
```

---

## Ikoner

Hver podkast trenger et eget mann- og dame-ikon, unikt per delkapittel i kapitlet. Si fra hvis du trenger at jeg viser hvilke som er ledige.
