# Gemini / NotebookLM-prompter for kapittel 8 «Moderne maskiner» (13 videoer)

Kilde: lysarkene i kapittel 8, «Moderne maskiner og hele stabelen». Kapittel 8 knytter sammen det som er forklart i kapittel 2 til 7, så det gjentar ikke grunnleggende stoff. Hver video tar for seg to poenger og slutter på dem, uten overgang, spørsmål eller henvisning til noe annet. Lengde: maks ca. 70 sekunder og ca. 130 ord. Heller kutte detaljer enn å fylle på.

Hva som er bevisst **ikke** forklart på nytt, siden det er dekket i tidligere kapitler:
- selve pipelinen og hasardene (datahasard, kontrollhasard, strukturhasard). Videoene starter der de slutter
- hvorfor klokka stoppet på rundt 3 GHz (varme), som bare nevnes i én setning
- cache, treffrate, nivåene L1 til L3 og koherens, som 8.4 bare går fort gjennom
- klokke, kritisk vei og porter

Videoer per del: 8.1: 1, 8.2: 3, 8.3: 2, 8.4: 1 (rask), 8.5: 2, 8.6: 2, 8.7: 2. 8.8 «Hele stabelen» lages senere som en lengre oppsummeringsvideo, sammen med de andre oppsummeringene.

1. Maskinen og de tre spørsmålene (8.1.1)
2. Rekk det over bordet, og gjett riktig (8.2.1)
3. Flere samlebånd, og rekkefølgen som ikke er rekkefølgen (8.2.2)
4. Spekulativ utføring (8.2.3)
5. Prosesser, tråder og kjerner (8.3.1)
6. Amdahls lov (8.3.2)
7. Hvorfor bufferen er delt (8.4.1, rask)
8. En skoleklasse mot noen få kokker (8.5.1)
9. Kretser som kan én ting, og nevral motor (8.5.2)
10. Avbrudd (8.6.1)
11. Virtuelt minne (8.6.2)
12. Ingen feil, laget under lekker (8.7.1)
13. Fem steg og et stoppeur (8.7.2)

Felles regler i alle: ingen henvisninger til andre kapitler, forelesninger eller videoer. Bruk bare tall og eksempler som står i lysarkene. Videonummeret er ikke det samme som lysarkenes sidenummer, så ikke si noe nummer i fortellingen. Les «L3» som «nivå tre», «NPU» som «nevral motor» og «GPU» som «grafikkbrikken». Hver video har en «Ikke nevn»-linje så de ikke tar fra hverandre.

---

## Video 1: 8.1.1 Maskinen og de tre spørsmålene

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til åpningen av kapittel 8: maskinen og de tre spørsmålene. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.1.1 Maskinen og de tre spørsmålene». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Maskinen har en prosessor med 8 kjerner på 4,0 GHz, en delt buffer på 12 MB (nivå tre), 16 GB minne, integrert grafikk med 10 kjerner og en nevral motor med 16 kjerner.
2. Kapitlet svarer på tre spørsmål om den: hvorfor åtte kjerner og ikke én som er åtte ganger raskere? Hvorfor tre slags regneenheter på samme brikke? Og hvorfor kan maskinen lures til å røpe et passord?

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en maskin som en brikke med fem merkelapper rundt: 8 kjerner, 12 MB buffer, 16 GB minne, grafikk, nevral motor. Vis så tre spørsmålstegn, ett per spørsmål.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva er det egentlig som sitter inni maskinen din?»
2. Poeng 1 (maskinen, 8–34 s, ca. 55 ord): 8 kjerner på 4,0 GHz, 12 MB delt buffer, 16 GB minne, integrert grafikk med 10 kjerner og en nevral motor med 16 kjerner.
3. Poeng 2 (spørsmålene, 34–58 s, ca. 40 ord): hvorfor åtte kjerner og ikke én åtte ganger raskere? Hvorfor tre slags regneenheter? Hvorfor kan maskinen lures til å røpe et passord?
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: hver del av maskinen er et valg, og kapitlet forklarer hvorfor.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke svar på spørsmålene, og ikke forklar noen av delene.
```

---

## Video 2: 8.2.1 Rekk det over bordet, og gjett riktig

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delene om videresending (forwarding) og om forgreningsprediksjon i 8.2. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.2.1 Rekk det over bordet, og gjett riktig». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Videresending, forwarding: verdien finnes allerede inne i maskinen, så den rekkes rett fra EX til EX i stedet for å legges i hylla og hentes igjen. Avhengigheten er der fortsatt, men hasarden er borte. Triksene fjerner nesten aldri problemet, de fjerner konsekvensen.
2. Maskinen må gjette hvilken vei et hopp går før den vet det, og gjetter den feil, kastes det den har hentet inn. Den husker hva hvert hopp gjorde sist, og treffer over 95 prosent av gangene. En if som nesten alltid går samme vei bommer 1 av 16, mens en som veksler uten mønster bommer 8 av 16. Et forutsigbart hopp koster nesten ingenting.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis tre instruksjoner med en pil som går rett fra et trinn til et annet. Vis så to rader av hopp: ja ja ja ja ja nei med 1 bom, og ja nei ja nei nei ja med 8 bommer, hver bom markert med rødt.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan slipper maskinen å vente på svaret den nettopp har regnet ut?»
2. Poeng 1 (videresending, 8–34 s, ca. 55 ord): verdien rekkes rett fra EX til EX. Avhengigheten er der, men hasarden er borte. Triksene fjerner konsekvensen, ikke problemet.
3. Poeng 2 (forgreningsprediksjon, 34–58 s, ca. 40 ord): maskinen gjetter hoppet og husker hva det gjorde sist, over 95 prosent treff. En if uten mønster bommer annenhver gang.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: maskinen rekker svaret videre og gjetter hoppene, og de fleste gjettene treffer.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar pipelinen eller hasardene fra bunnen, og ikke nevn superskalar, spekulasjon eller kjerner.
```

---

## Video 3: 8.2.2 Flere samlebånd, og rekkefølgen som ikke er rekkefølgen

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delene om superskalar og utføring ute av rekkefølge i 8.2, inkludert eksemplet med de to løkkene. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.2.2 Flere samlebånd, og rekkefølgen som ikke er rekkefølgen». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Pipelining gir flere trinn, superskalar gir flere hele regneenheter side om side: en pipeline får 4 instruksjoner gjort på 7 sykluser, en superskalar bredde to får 8 på 7. To løkker gjør like mange addisjoner: A legger alltid til i det samme tallet og bruker 0,497 sekunder, 1,00 ferdig addisjon per syklus, mens B legger til i fire ulike tall og bruker 0,124 sekunder, 4,02 per syklus. Samme arbeid, men B er raskere fordi kjedene ikke venter.
2. Utføring ute av rekkefølge: maskinen gjør det som er klart, ikke det som står neste i oppskriften. En instruksjon som venter på minnet blir stående, og en uavhengig ADD går forbi. Alt utføres hulter til bulter, men fullføres i programmets rekkefølge, så utsiden ser ut som den enkle maskinen. Det er kontrakten.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to samlebånd side om side mot ett, med 8 mot 4 ferdige. Vis så to løkker A og B med tidene 0,497 og 0,124 sekunder. Vis til slutt en kø der en instruksjon venter og to andre går forbi, og mål i riktig rekkefølge.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan to løkker med like mange addisjoner ha fire ganger forskjellig fart?»
2. Poeng 1 (flere samlebånd, 8–34 s, ca. 55 ord): superskalar gir flere hele regneenheter: 8 instruksjoner på 7 sykluser mot 4. Løkke B med fire uavhengige addisjoner gjør 4,02 per syklus, mot 1,00 for A.
3. Poeng 2 (ute av rekkefølge, 34–58 s, ca. 40 ord): maskinen gjør det som er klart, og fullfører i programmets rekkefølge. Utføres hulter til bulter, men utsiden ser enkel ut.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: maskinen gjør flere ting samtidig og i feil rekkefølge, men viser deg riktig rekkefølge.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar pipelinen, hasardene, videresending eller forgreningsprediksjon, og ikke nevn spekulasjon.
```

---

## Video 4: 8.2.3 Spekulativ utføring

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delen om spekulativ utføring i 8.2 og linjen «Mesteparten av en CPU-kjerne leter etter arbeid». Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.2.3 Spekulativ utføring». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Spekulativ utføring: maskinen regner videre ut fra en gjetning om hvilken vei et hopp går, før den vet svaret. Gjetter den riktig, har den vunnet tid. Gjetter den feil, går kladden i papirkurven: registrene settes tilbake, og resultatene forkastes.
2. Målet er at ingen skal kunne se at maskinen gjettet, og programmet får nøyaktig de samme svarene som på en maskin som aldri spekulerte. Ingenting av dette regner ut noe selv: mesteparten av en CPU-kjerne leter etter arbeid, med forgreningsprediktor, omsorteringsvindu og spekulasjon rundt de få regneenhetene.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en kladd og en ren utgave: kladden fortsetter etter et hopp, og går enten inn i den rene eller i papirkurven. Vis så en kjerne tegnet med en liten regnebit i midten og store bokser rundt merket «finner arbeid».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva gjør maskinen mens den venter på å vite hvilken vei et hopp går?»
2. Poeng 1 (spekulasjon, 8–34 s, ca. 55 ord): maskinen regner videre på gjetningen. Riktig gir vunnet tid, feil gir kladden i papirkurven: registre tilbake, resultat forkastet.
3. Poeng 2 (garantien, 34–58 s, ca. 40 ord): ingen skal se at maskinen gjettet: samme svar som uten spekulasjon. Det meste av en kjerne leter etter arbeid, og regner ikke selv.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: maskinen gjetter og regner i forveien, og rydder så grundig at du aldri merker det.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn Spectre, tid eller cache som en svakhet, og ikke forklar prediksjon eller videresending på nytt.
```

---

## Video 5: 8.3.1 Prosesser, tråder og kjerner

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delene «Prosesser og trådene deres», «Trådene er arbeidet, kjernene er arbeiderne» og SMT i 8.3. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.3.1 Prosesser, tråder og kjerner». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En prosess er et program som kjører: nettleseren, musikken, tekstbehandleren, oppdateringen og operativsystemet. Prosessene har tråder, og operativsystemet fordeler trådene på de åtte kjernene. Trådene er arbeidet, og kjernene er arbeiderne. Klokka kunne ikke gå fortere, så svaret ble flere kjerner.
2. SMT, to tråder på én kjerne: to gryter, én sleiv. Kjernen bytter mellom tråder når den ene venter. Gevinsten er 10 til 30 prosent, ikke det dobbelte.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis fem prosesser som bokser med tråder som små streker, og åtte kjerner under, med linjer fra trådene. Vis så en kjerne med to tråder inni og tallet «10 til 30 %».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvem gjør jobben når maskinen har åtte kjerner?»
2. Poeng 1 (arbeid og arbeidere, 8–34 s, ca. 55 ord): prosess er et program som kjører, med tråder. Trådene fordeles på kjernene. Trådene er arbeidet, kjernene er arbeiderne.
3. Poeng 2 (SMT, 34–58 s, ca. 40 ord): to tråder deler én kjerne, to gryter og én sleiv. Gevinsten er 10 til 30 prosent, ikke dobbelt.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: trådene er arbeidet, kjernene er arbeiderne, og SMT gir bare litt ekstra.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar Amdahls lov, og ikke forklar hvorfor klokka stoppet utover én setning.
```

---

## Video 6: 8.3.2 Amdahls lov

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delen om Amdahls lov og «Det de åtte kjernene faktisk gir» i 8.3. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.3.2 Amdahls lov». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Middag til tjue tar fire timer alene, 240 minutter, og én av de fire timene kan ikke deles. Dere er åtte: 82,5 minutter. Med tusen går det bare ned til 60,2, for den delen som ikke kan deles, setter taket: aldri under 60 minutter, så taket er 240 delt på 60, altså 4 ganger. Åtte gir 2,9 ganger. Amdahls lov: den udelelige delen bestemmer taket.
2. Er ni av ti deler delbare, er taket ti ganger, og fra 64 til 1000 kjerner vinner du bare 1,1. Åtte kjerner gir 8 ganger bare hvis alt kan deles, 4,7 ganger hvis 90 prosent kan deles og 1,8 ganger hvis halvparten kan deles. Sjelden åtte ganger.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis middagsregnestykket som søyler: 240, 82,5 og 60,2 minutter, med en rød stripe på 60 som «kan ikke deles». Vis så en kurve for hastighetsøkning mot antall kjerner som flater ut, med 8, 4,7 og 1,8 markert.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvor mye raskere blir noe med åtte kjerner?»
2. Poeng 1 (middagen, 8–34 s, ca. 55 ord): 240 minutter alene, 82,5 med åtte, 60,2 med tusen. Den udelelige timen setter taket: 4 ganger. Åtte gir 2,9.
3. Poeng 2 (hva åtte kjerner gir, 34–58 s, ca. 40 ord): 90 prosent delbart gir taket ti og 4,7 med åtte kjerner. Halvparten delbart gir 1,8. Fra 64 til 1000 kjerner vinner du 1,1.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: den delen som ikke kan deles, setter taket, så åtte kjerner gir sjelden åtte ganger.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar prosesser, tråder eller SMT.
```

---

## Video 7: 8.4.1 Hvorfor bufferen er delt

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til bufferen på 12 MB (nivå tre) som del av den helhetlige maskinen, og linjene om at cachen er usynlig for programmet. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.4.1 Hvorfor bufferen er delt». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Bufferen på 12 MB er delt mellom kjernene, fordi minnet er hundre ganger for tregt. Instruksjonen lå i den raskeste bufferen, og tallene a og b lå i cachen, så regnestykket gikk uten å vente på minnet.
2. Cachen er usynlig for programmet: det samme programmet gir det samme svaret enten maskinen har cache eller ikke. Det eneste som endrer seg, er hvor lang tid det tar.

LENGDE OG FORMAT
- Dette er en rask oppsummering: ca. 90 ord og maks 50 sekunder. Gå raskt gjennom, uten å forklare grunnbegrepene.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en trapp fra liten, rask buffer til stort, tregt minne med «100 ganger» på minnet. Vis så to kjøringer av samme program med samme svar og ulike tider.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor sitter det en buffer mellom prosessoren og minnet?»
2. Poeng 1 (minnet er for tregt, 8–34 s, ca. 55 ord): minnet er hundre ganger for tregt, så en buffer på 12 MB deles av kjernene. Instruksjonen og tallene lå allerede i bufferen.
3. Poeng 2 (usynlig, 34–58 s, ca. 40 ord): samme svar med og uten cache. Det eneste som endrer seg, er tiden.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: bufferen er en rask, delt mellomstasjon, og det eneste den endrer, er tiden.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar hvordan cachen virker, treffrate eller nivåene. Dette er en rask oppsummering.
```

---

## Video 8: 8.5.1 En skoleklasse mot noen få kokker

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delen om CPU og GPU i 8.5. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.5.1 En skoleklasse mot noen få kokker». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En GPU er en skoleklasse på tusen elever som alle gjør det samme, hver på sine egne tall: «nå ganger alle med tre». En CPU har noen få, store regneenheter og bruker mye av arealet på bokholderi, som når den må vente, mens en GPU har tusenvis av små og bruker mer av arealet på regning.
2. CPU-en er god på én oppgave med mange valg, og holder dataene nær. GPU-en er god på mange like oppgaver uten valg. Ingen er raskest, de passer til ulike oppgaver. Spørsmålet er «hvordan ser oppgaven ut?». Et filter på et bilde med tolv megapiksler passer på en GPU. En løkke der hver runde trenger svaret fra forrige, eller et program med mange if-er, passer ikke.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en CPU som noen få store bokser og en GPU som et rutenett av tusenvis av små, med «mange valg» og «mange like». Vis så fire oppgaver som peker til CPU eller GPU: bildefilter til GPU, løkke og if-er til CPU.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor har maskinen både en CPU og en GPU?»
2. Poeng 1 (forskjellen, 8–34 s, ca. 55 ord): GPU er tusenvis av små som gjør det samme på hver sine tall. CPU er noen få store som bruker mye areal på bokholderi og klarer valg.
3. Poeng 2 (hva som passer hvor, 34–58 s, ca. 40 ord): ingen er raskest. Et bildefilter passer for GPU. En løkke som trenger forrige svar, eller mange if-er, passer for CPU.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: spørsmålet er ikke hva som er raskest, men hvordan oppgaven ser ut.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn nevral motor eller fastfunksjonskretser.
```

---

## Video 9: 8.5.2 Kretser som kan én ting, og nevral motor

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delene «En krets som bare kan én ting» og «Du har bygd en nevral enhet før» i 8.5. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.5.2 Kretser som kan én ting, og nevral motor». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. En krets som bare kan én ting, som videodekoderen, henter ingen instruksjoner og gjetter aldri, så den bruker minst strøm per oppgave. CPU, GPU og fastfunksjon er tre punkter på den samme kurven: fleksibilitet koster, og jo mindre en krets kan, jo mindre strøm bruker den per oppgave.
2. En nevral enhet er en vektet sum med terskel: AND og OR er det samme, og nettet stiller bare inn vektene. Det som koster er transporten, ikke gangingen: å hente tallet fra minnet hver gang er flere tusen ganger dyrere enn å gange. Derfor sendes tallet videre til naboen i stedet for å hentes.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis tre punkter på en kurve fra «fleksibel, mye strøm» til «én ting, lite strøm»: CPU, GPU og videodekoder. Vis så AND som en enhet med to innganger, vekter og en terskel, og en rutenett-matrise der tall sendes videre mellom naboer.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvorfor trengs en egen krets for nevrale nett?»
2. Poeng 1 (fleksibilitet koster, 8–34 s, ca. 55 ord): en krets som bare kan én ting bruker minst strøm per oppgave. CPU, GPU og fastfunksjon er punkter på samme kurve.
3. Poeng 2 (nevral motor, 34–58 s, ca. 40 ord): en nevral enhet er en vektet sum med terskel, som AND og OR. Transporten koster, ikke gangingen, så tallet sendes videre i stedet for å hentes.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: jo mer spesialisert en krets er, jo mindre strøm bruker den, og nevral motor sparer transport.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar forskjellen på CPU og GPU på nytt.
```

---

## Video 10: 8.6.1 Avbrudd

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delen om avbrudd i 8.6. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.6.1 Avbrudd». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Et avbrudd er som en dørklokke i stedet for å sjekke døra: en ledning som prosessoren ser på én gang per instruksjon. Trykker du på en tast, går ledningen høy.
2. Maskinen gjør instruksjonen ferdig, lagrer programtelleren og registrene, slår opp rutinen for tastaturet, kjører den og legger alt tilbake. Programmet ditt fortsetter nøyaktig der det slapp og merker ingenting. Et avbrudd er et funksjonskall som maskinvaren tvinger igjennom.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis et program som kjører, en tast som trykkes og en ledning som lyser, og fire steg i en rad: ferdig, lagre, slå opp rutine, legg tilbake. Vis så programmet som fortsetter uendret.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan vet maskinen at du har trykket på en tast?»
2. Poeng 1 (dørklokken, 8–34 s, ca. 55 ord): et avbrudd er en ledning prosessoren ser på én gang per instruksjon, i stedet for å sjekke døra hele tiden.
3. Poeng 2 (fire steg, 34–58 s, ca. 40 ord): gjør ferdig instruksjonen, lagre programtelleren og registrene, slå opp og kjør rutinen, legg alt tilbake. Programmet merker ingenting.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: et avbrudd er et funksjonskall maskinvaren tvinger igjennom, og programmet merker det ikke.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn virtuelt minne eller tid som lekkasje.
```

---

## Video 11: 8.6.2 Virtuelt minne

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delen om virtuelt minne i 8.6. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.6.2 Virtuelt minne». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Program A og program B sier begge «kasse 42». De havner i hver sin: sidetabellen og TLB-en oversetter adressen programmet bruker til et fysisk rom i minnet, for A rom 1 og 3, for B rom 5 og 9.
2. Det betyr at program A ikke engang kan uttrykke en adresse som tilhører B. Hvert program ser sitt eget minne, og oversettelsen gir isolasjon.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to programmer som begge peker på «kasse 42», en sidetabell i midten og to ulike rom i det fysiske minnet. Vis en stoppet pil fra A mot B sitt rom.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Kan ett program lese minnet til et annet?»
2. Poeng 1 (oversettelsen, 8–34 s, ca. 55 ord): begge sier kasse 42. Sidetabellen og TLB-en oversetter til hvert sitt fysiske rom.
3. Poeng 2 (isolasjon, 34–58 s, ca. 40 ord): A kan ikke engang uttrykke en adresse som tilhører B. Hvert program har sitt eget adresserom.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: virtuelt minne gir hvert program sitt eget minne, og oversettelsen hindrer at de blandes.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke nevn avbrudd, cache eller Spectre.
```

---

## Video 12: 8.7.1 Ingen feil, laget under lekker

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delen «Hvor er programmeringsfeilen i Spectre?» og avsnittene om at begge utsagn er sanne. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.7.1 Ingen feil, laget under lekker». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. To utsagn: det samme programmet gir det samme svaret enten maskinen har cache eller ikke, og det eneste som endrer seg er tiden. Og: registrene settes tilbake, resultatene forkastes, og programmet får nøyaktig de samme svarene som på en maskin som aldri spekulerte. Begge er sanne, og sammen er de et sikkerhetshull.
2. Hvor er programmeringsfeilen i Spectre? I sjekken, i prosessoren eller i angriperens program? Ingen av stedene. Ingen feil, laget under lekker. Spekulasjonen etterlater et spor i tiden, og tid kan måles. Spectre ble offentliggjort i 2018, og maskinen din er for lengst lappet over hullet.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to ruter side om side med hvert sitt utsagn, hver merket «sann», og en tredje der de smelter sammen merket «hull». Vis så fire alternativer for hvor feilen er, med «ingen av stedene» markert.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvor er feilen i Spectre?»
2. Poeng 1 (to sanne utsagn, 8–34 s, ca. 55 ord): programmet gir samme svar med og uten cache, bare tiden endres. Og spekulasjonen rydder alt, så svarene er like. Begge sanne.
3. Poeng 2 (hullet, 34–58 s, ca. 40 ord): ingen feil i sjekken, prosessoren eller angriperens program. Spekulasjonen etterlater et spor i tiden, og tid kan måles. 2018, og lappet.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: Spectre er ingen feil, men en lekkasje som ligger mellom to korrekte lag.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke gå gjennom de fem stegene eller forklar hvordan tiden måles.
```

---

## Video 13: 8.7.2 Fem steg og et stoppeur

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene i kapittel 8 («Moderne maskiner og hele stabelen») som kilde, og hold deg bare til delene «Fem steg, og du har sett hvert av dem før» og «Den som ikke får se svaret, kan se tiden». Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «8.7.2 Fem steg og et stoppeur». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Fem steg: sjekken er riktig skrevet, prediktoren er lært opp til å gjette «innenfor», den leser det hemmelige tallet og bruker det som adresse, gjetningen var feil og alt ryddes, men cachen husker linja. Programmet er riktig, maskinen er riktig, ingen regel er brutt.
2. Så måles tiden: angriperen prøver 256 lovlige oppslag, og det ene som går fort, røper verdien. Går oppslag 65 fort, var hemmeligheten 65. Den som ikke får se svaret, kan se tiden.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis fem steg i en rad med små symboler: sjekk, prediktor, lesing, opprydding og en cache som husker. Vis så 256 stolper med tid per oppslag der stolpe 65 er kort og markert.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan kan du lese en hemmelighet du ikke får se?»
2. Poeng 1 (fem steg, 8–34 s, ca. 55 ord): riktig sjekk, en prediktor opplært til å gjette «innenfor», lesing av det hemmelige tallet som adresse, feil gjetning ryddes, men cachen husker linja.
3. Poeng 2 (stoppeuret, 34–58 s, ca. 40 ord): angriperen prøver 256 oppslag, og ett går fort. Det er hemmeligheten, i dette tilfellet 65. Tid røper svaret.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: hemmeligheten røpes av tiden, og ingen regel er brutt.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar hvorfor det ikke er noen feil, og ikke nevn at hullet er lappet.
```

---

## Etter generering

Legg videoene i `Kap08/Videoer/` som `8.1.1.mp4`, `8.2.1.mp4`, `8.2.2.mp4`, `8.2.3.mp4`, `8.3.1.mp4`, `8.3.2.mp4`, `8.4.1.mp4`, `8.5.1.mp4`, `8.5.2.mp4`, `8.6.1.mp4`, `8.6.2.mp4`, `8.7.1.mp4` og `8.7.2.mp4`, og gi meg beskjed. Jeg legger dem inn i delkapitlene, lager plakatbilder og oppsummeringer, og sjekker at de starter raskt.
