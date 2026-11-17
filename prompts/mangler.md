# Prompter til videoene som mangler

Alt du ennå ikke har lagt inn i mappene, samlet på ett sted. Hver prompt er limt inn i Gemini eller NotebookLM med riktig kapittel som kilde. Legg ved kilden som står under hver overskrift.

| # | Video | Kilde å legge ved | Legg filen i |
|---|---|---|---|
| 1 | 2 Hele kapitlet i én video | `kap02.pdf` | `Kap02/HelKap/Kapittel2.mp4` |
| 2 | 2.9.9 Ett tegn, kodet bit for bit | `kap02.pdf` | `Kap02/2.9/2.9.9.mp4` |
| 3 | 6.1 Introduksjon | `kap06.pdf` | `Kap06/6.1/6.1.mp4` |
| 4 | 7.5.4 Latens og gjennomstrømning | `kap07.pdf` | `Kap07/7.5/7.5.4.mp4` |
| 5 | 7.5.5 Alle trinn må ta like lang tid | `kap07.pdf` | `Kap07/7.5/7.5.5.mp4` |
| 6 | 7.5.6 Hvorfor ikke hundre trinn | `kap07.pdf` | `Kap07/7.5/7.5.6.mp4` |
| 7 | N6.1 Oppsummering (Nettverk) | `nettverk.pdf` | `KapN/N6/N6.1.mp4` |
| 8 | S7.1 Oppsummering (Sikkerhet) | `sikkerhet.pdf` | `KapS/S7/S7.1.mp4` |

Nummer 3 er ny: den hadde ingen prompt før. Nummer 4 til 6 hører til de seks videoene jeg planla for 7.5. Du har de tre første, og titlene i promptene er satt til 7.5.4, 7.5.5 og 7.5.6 så de passer med resten.

---

## 1. 2 Hele kapitlet i én video (ca. 10 minutter)

Legg ved `kap02.pdf`.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 2 («Digital representasjon») som kilde, og dekk hele kapittelet. Bruk bare tall, regler og eksempler som står der. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «2 Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hvordan alt en datamaskin lagrer blir til bit, og kunne forklare den bærende ideen: et bitmønster betyr ingenting i seg selv, det er tolkningen (avtalen om hva mønsteret skal bety) som gir det mening, og hver representasjon har en pris og en grense. Videoen skal binde sammen delene, ikke bare liste dem opp.

LENGDE OG FORMAT
- Ca. 10 minutter og ca. 1350 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk figurene og tabellene fra kapittelet.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Ha et lite bitmønster i hjørnet, 01000001, som endrer seg til tallet 65, bokstaven A og en mørk rødfarge når samme mønster tolkes på ulike måter. Marker hvilken tolkning vi snakker om i hver del.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:50, ca. 100 ord): datamaskinen din kan én ting, å skille mellom to tilstander. Likevel ringer du bestemoren din med den, hører på musikk og ser bilder av fjell du aldri har vært på. Alt er gjort om til et spørsmål med bare to svar, og maskinen stiller det milliarder av ganger i sekundet. Den ene ideen: et bitmønster betyr ingenting i seg selv, og tolkningen gir mening. Og hver avtale har en grense.
2. Bit (0:50–1:40, ca. 110 ord): et bit er noe som kan være i én av to tilstander, og navnene er tilfeldige. Inne i maskinen er det som regel en transistor, og en mobil har rundt hundre milliarder. Hvorfor bare to? Fordi to tilstander er robust, som å rope «ja» eller «nei» over en støyete bakgård i stedet for et siffer fra 0 til 9. Samme åtte bit, 01000001, kan være tallet 65, bokstaven A eller en mørk rødtone.
3. Tall i ulike baser (1:40–3:10, ca. 190 ord): et posisjonssystem gir hvert siffer en vekt etter hvor det står: 527 er fem hundrer, to tiere og sju enere. I binær er vektene 1, 2, 4, 8, 16 og videre, som en lommebok der du velger om hver seddel er med. Til desimal: vektmetoden. Fra desimal: største vekt som får plass, eller divisjonsmetoden, der restene leses nedenfra og opp. Heksadesimal er kortskrift: ett siffer er nøyaktig fire bit, så 0x669F er 0110 0110 1001 1111. Oktal er tre bit per siffer og overlever i filrettigheter. Kan kuttes: oktal.
4. Byte og designvalg (3:10–3:55, ca. 100 ord): n bit rommer to opphøyd i n verdier, og en byte er åtte bit og 256 verdier. Ti bit er omtrent tusen. En «1 TB»-disk viser 931 GiB, fordi MB og MiB ikke er det samme. BCD koder hvert desimalsiffer i fire bit og kaster seks av seksten mønstre, men er eksakt.
5. Negative tall og overflyt (3:55–5:50, ca. 250 ord): toerkomplement: alt er som før, bortsett fra at øverste bit har negativ vekt. Inverter og legg til én snur fortegnet. Addisjon virker uendret, maskinen legger sammen og kaster menten, så ingen subtraksjonskrets trengs. Området for åtte bit er −128 til 127, ett negativt tall mer enn positive, og bitene sier ikke om tallet er negativt: det gjør typen. Overflyt er kilometertelleren som ruller fra 999999 til 000000. En million ganger en million i en int blir −727 379 968, og ingen sier fra. Python har ubegrensede heltall, men det koster fart. Ariane 5: et 64-bits tall konvertert til 16 bit, og antakelsen holdt ikke lenger.
6. Tekst (5:50–7:20, ca. 200 ord): ASCII bruker sju bit, med sifrene fra 0x30 og store og små bokstaver som skiller seg i ett bit, men har ingen æ, ø, å. Latin-1 flyttet problemet, Unicode deler det i kodepunkt og koding. UTF-8 bruker én til fire byte med prefiksbit, er bakoverkompatibel med ASCII, og lar deg finne tegngrensen hvor som helst. ø er 0xC3 0xB8. Tegn er ikke byte: «Gjøvik» har seks tegn og sju byte, og du kan kutte midt i et tegn.
7. Flyttall (7:20–8:30, ca. 150 ord): mantisse ganger base opphøyd i eksponent, med et komma som flyter. IEEE 754 har 1, 8 og 23 bit, og 5,75 blir 0x40B80000. 0,1 finnes ikke eksakt i binær, så 0,1 pluss 0,2 er 0,30000000000000004. Det er ikke en feil i språket. Sammenlign aldri flyttall med ==, og bruk dem ikke til penger.
8. Bilde og lyd (8:30–9:30, ca. 170 ord): et bilde er et rutenett av piksler. RGB med 24 bit gir 16 777 216 farger, og 1000 × 1000 piksler er 3 MB rått. Fargetabell og løpelengdekoding er tapsfrie, JPEG kaster det øyet ikke ser og får det aldri tilbake, og vektorgrafikk lagrer oppskriften. Lyd samples i tid og kvantiseres i styrke, og en CD er 44 100 × 16 × 2 bit i sekundet, 783 MB på 74 minutter. MP3 fjerner det øret ikke hører.
9. Avslutning (9:30–10:00, ca. 70 ord): hver representasjon er et svar på hva som er viktigst akkurat her, presisjon eller plass, rekkevidde eller nøyaktighet, og hver har en grense. Ariane 5, banken med float og navnet kuttet etter 20 byte virket helt til de ikke gjorde det. Det eneste som skiller et bilde fra en sang er hva du har bestemt at bitene skal bety.

REGLER FOR SLUTTEN
Avslutt med én setning som gjentar poenget: et bitmønster betyr det vi har blitt enige om at det betyr, og hver avtale har en grense. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar hvordan maskinen kjører instruksjoner eller hva som skjer inni prosessoren: det hører til senere. Ikke bruk kapittelnumre eller henvis til andre videoer. Ikke legg til tall som ikke står i kapitlet.
```

---

## 2. Ett tegn, kodet bit for bit

Legg ved `kap02.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 2 som kilde, og hold deg bare til underseksjonen «Ett tegn, kodet bit for bit» i seksjon 2.9, men ikke fotnoten. Bruk bare eksempler og tall som står der.

TITTEL
Videoen skal hete akkurat: «2.9.9 Ett tegn, kodet bit for bit». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. La oss kode ø. Kodepunktet er U+00F8, altså 248. Det er større enn 127 og mindre enn 2048, så vi trenger toformen. 248 er 11111000 binært, og toformen har plass til 11 bit, så vi fyller på med nuller foran: 000 11111000. Toformen er 110xxxxx 10xxxxxx, så vi deler i 00011 og 111000.
2. Første byte er 110 00011, som er 0xC3, og andre byte er 10 111000, som er 0xB8. Bokstaven ø er altså 0xC3 0xB8 i UTF-8. Åpner du en tekstfil med et program som tror den er Latin-1, blir de to bytene tolket som hvert sitt tegn: 0xC3 er Ã og 0xB8 er ¸. Der har du mønsteret Ã¸. Den smilende emojien, U+1F600, trenger 17 bit, mer enn treformen rommer, så den blir fire byte: 0xF0 0x9F 0x98 0x80.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis ø med U+00F8 til høyre, og så fire steg som trapp: kodepunkt, antall byte, binært med nuller foran, og bitene fordelt i 110xxxxx og 10xxxxxx. Til slutt 0xC3 0xB8 og en pil til Ã¸. Vis emojien helt til slutt med fire byte under.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvordan blir ø til to byte i UTF-8?»
2. Poeng 1 (fire steg, 8–34 s, ca. 55 ord): ø er U+00F8, 248, som trenger toformen. 11111000 fylles med nuller til 00011111000 og deles i 00011 og 111000. Byte én er 110 00011 som er 0xC3. Byte to er 10 111000 som er 0xB8.
3. Poeng 2 (tolket feil, 34–58 s, ca. 40 ord): et program som tror det er Latin-1 leser 0xC3 som Ã og 0xB8 som ¸, og du får Ã¸. En emoji som U+1F600 trenger fire byte.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: ø er 0xC3 0xB8 i UTF-8, og feil tolkning gir det velkjente Ã¸.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar prefiksreglene på nytt, og ikke nevn at opprinnelig UTF-8 tillot opptil seks byte.
```

---

## 3. 6.1 Introduksjon

Legg ved `kap06.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 6 som kilde, og hold deg bare til åpningen av kapitlet, før læringsmålene i 6.1. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «6.1 Introduksjon». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal forstå to ting og kunne forklare dem med egne ord etterpå: telefonen blir varm selv om det ikke beveger seg noe inni den, og varmen er regningen for arbeidet: hver gang et bit byttes fra 0 til 1, tar maskinen en liten slurk strøm, og hele slurken ender som varme. Og kapitlet går ned til bunnen av stabelen, der portene fra før viser seg å være tegninger, og svaret er en bryter som styres av et signal.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 150 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en telefon som blir varm uten bevegelige deler, og så en liten bryter som slår seg av og på mange ganger, med en varmeglød som vokser.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–10 s, ca. 25 ord): etter en halvtimes spilling er baksiden av telefonen lun, og en laptop spinner opp viften. Det beveger seg ingenting der inne: ingen motor, ingen tannhjul. Hva er det da som blir varmt?
2. Poeng 1, regningen (10–34 s, ca. 55 ord): varmen er ikke en bieffekt vi kunne konstruert oss bort fra, den er regningen for arbeidet. Hver gang maskinen bytter et bit fra 0 til 1, tar den en liten slurk strøm, og hele slurken ender som varme. En prosessor gjør det noen milliarder ganger i sekundet, på noen milliarder steder samtidig.
3. Poeng 2, gjelden (34–58 s, ca. 45 ord): kapittel 5 endte med at portene ikke finnes: de er tegninger, ingen orker å tegne en milliard brytere. Da gjenstår spørsmålet om hva som faktisk sitter der. Og det du leter etter, kjenner du allerede: en bryter, som du bruker hver morgen når du slår på lyset.
4. Avslutning (58–68 s, ca. 25 ord): én setning som gjentar poenget: varmen er regningen for hvert bitbytte, og det som bytter, er en bryter.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer.

AVGRENSNING
Ikke forklar transistoren, strøm og spenning, inverteren, NAND eller klokka: bare nevn at kapitlet tar dem. Ikke nevn årstall eller de tre spørsmålene fra «Hva du sitter igjen med». Ikke legg til tall som ikke står i kapitlet.
```

---

## 4. Latens og gjennomstrømning

Legg ved `kap07.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 7 som kilde, og hold deg bare til boksen «Latens og gjennomstrømning: det viktigste skillet i kapitlet» i seksjon 7.5.3. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «7.5.4 Latens og gjennomstrømning». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Latens er hvor lang tid én instruksjon bruker fra start til slutt: fire sykluser både med og uten pipeline. Pipelinen gjorde ingen instruksjon raskere.
2. Gjennomstrømning er hvor mange instruksjoner som blir ferdige per syklus: 0,25 uten pipeline og nesten 1 med. Her ligger hele gevinsten. Som med tallerkenene: hver tallerken brukte tre minutter før og etter, men en ferdig tallerken kom ut oftere.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis to tall side om side: latens 4 sykluser, og gjennomstrømning 0,25 mot nesten 1.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Gjør en pipeline prosessoren raskere?» Svar: det kommer an på hva du måler.
2. Poeng 1, latens (8–28 s, ca. 45 ord): latens er tiden én instruksjon bruker fra start til slutt. Med pipeline fire sykluser, uten pipeline også fire. Pipelinen gjorde ingen instruksjon raskere, ikke én.
3. Poeng 2, gjennomstrømning (28–56 s, ca. 55 ord): gjennomstrømning er antall instruksjoner som blir ferdige per syklus. Uten pipeline 0,25, med pipeline nesten 1. Der er hele gevinsten. Tallerkenene brukte tre minutter før og etter, men en ferdig tallerken kom ut oftere.
4. Avslutning (56–68 s, ca. 15 ord): én setning som gjentar poenget: for én instruksjon er svaret nei, for programmet som helhet nesten fire ganger raskere.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke regn ut tabellen over gevinst med 3 + n, og ikke nevn klokkefrekvens eller hasarder. Det tas i andre videoer.
```

---

## 5. Alle trinn må ta like lang tid

Legg ved `kap07.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 7 som kilde, og hold deg bare til seksjon 7.5.4 («Alle trinn må ta like lang tid»), bortsett fra boksen «Det samme, sett fra kapittel 6» og avsnittet om pipelineregistre. Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «7.5.5 Alle trinn må ta like lang tid». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Samlebåndet går i takt med det tregeste trinnet. Hvis skyllingen tar ett minutt og vaskingen tre, står Jonas ledig i to av tre minutter, og tallerkenene kommer ut hvert tredje minutt i stedet for hvert minutt. Hele gevinsten er borte.
2. I en prosessor er dette klokka: klokkeperioden må være lang nok til at alle trinnene rekker å bli ferdige. Det tregeste trinnet bestemmer, og de raske står og venter på det.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis tre trinn der ett er tre ganger så langt som de andre.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva skjer hvis ett trinn i samlebåndet tar lengre tid enn de andre?»
2. Poeng 1, oppvasken (8–32 s, ca. 50 ord): skyllingen tar ett minutt, men vaskingen tre. Da står Jonas ledig i to av tre minutter og venter på Amina. Tallerkenene kommer ut hvert tredje minutt, ikke hvert minutt. Det hjelper ikke at skyllingen er lynrask.
3. Poeng 2, prosessoren (32–56 s, ca. 40 ord): i en prosessor er dette klokka. Klokkeperioden må være lang nok til at alle trinnene rekker å bli ferdige. Det tregeste trinnet bestemmer, og de raske står og venter.
4. Avslutning (56–68 s, ca. 15 ord): én setning som gjentar poenget: samlebåndet går i takt med det tregeste trinnet, alltid.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar kritisk vei, at klokka kan gå fire ganger raskere, eller pipelineregistre. Det tas ikke her.
```

---

## 6. Hvorfor ikke hundre trinn

Legg ved `kap07.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 7 som kilde, og hold deg bare til seksjon 7.5.5 («Hvorfor ikke hundre trinn?») og 7.5.6 («Modellen med fem trinn»). Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «7.5.6 Hvorfor ikke hundre trinn». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Fire trinn er bra, men førti ble ikke bedre. Intel bygde en prosessorfamilie med rundt tjue trinn og i siste utgave over tretti, og fikk høy klokkefrekvens, men ytelsen fulgte ikke med. Tre ting setter en grense: registrene mellom trinnene tar tid selv, arbeidet lar seg ikke dele vilkårlig, og jo dypere pipeline, jo flere instruksjoner må kastes når noe går galt. Moderne prosessorer har mellom ti og tjue trinn, et kompromiss.
2. Mange bøker bruker fem trinn i stedet for fire, IF, ID, EX, MEM og WB, der minnetilgangen får sitt eget trinn fordi den er en helt annen jobb enn å regne.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis fire trinn mot fem trinn med MEM utheva.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hvis fire trinn er bra, er ikke førti bedre?»
2. Poeng 1, grensene (8–38 s, ca. 60 ord): rundt år 2000 bygde Intel prosessorer med rundt tjue og senere over tretti trinn. Høy klokkefrekvens, men ytelsen fulgte ikke med. Registrene mellom trinnene tar tid, arbeidet kan ikke deles i hundre like biter, og dype pipelines koster mye når noe går galt. Moderne prosessorer har ti til tjue trinn.
3. Poeng 2, fem trinn (38–56 s, ca. 35 ord): mange bøker tegner fem trinn: IF, ID, EX, MEM og WB. Minnetilgangen får sitt eget trinn, fordi å lese og skrive minnet er en annen jobb enn å regne.
4. Avslutning (56–68 s, ca. 15 ord): én setning som gjentar poenget: antall trinn er et kompromiss, ikke et riktig svar.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler. Ikke si «neste avsnitt» om hasarder.

AVGRENSNING
Ikke forklar hasarder, bobler eller at pipelinen tømmes i detalj, og ikke ta med boksen om at fire er den korteste pipelinen. Det tas ikke her.
```

---

## 7. N6.1 Oppsummering (Nettverk)

Legg ved `nettverk.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene som kilde, og oppsummer hele nettverksdelen: pakker og lag, adresser og rutere, operativsystemet og tjenestene i Internett. Bruk bare begreper, tall og eksempler som står på lysarkene.

TITTEL
Videoen skal hete akkurat: «N6.1 Oppsummering». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse fire)
1. Beskjeden deles i pakker, og lagdelingen gir hvert lag én jobb. TCP/IP har fem lag: applikasjon, transport, nettverk, link og fysisk. Beskjeden går ned gjennom lagene hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget.
2. Adressene finner veien: IP-adressen skiller lokalt fra utenfor, nettverksmasken deler den i nettverk og vert, DHCP deler ut adresser, ARP kobler IP-adresse til MAC-adresse, og porter skiller tjenestene på én maskin. NAT lar hjemmenettet dele én offentlig adresse, og IPv6 er den egentlige løsningen.
3. Operativsystemet er mellomleddet mellom maskinvare og bruker: en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass.
4. Tjenestene bygger på dette: TCP gir pålitelig levering med flytkontroll og metningskontroll, DNS gjør navn om til adresser, og HTTP henter sider, med HTTPS og TLS for å beskytte dem.

LENGDE OG FORMAT
- Maks 90 sekunder og ca. 200 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en konvolutt som går ned gjennom fem lag og opp igjen, og så en liten reise fra en maskin via DNS og en ruter til en tjener.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–10 s, ca. 22 ord): spør: «Hva skjer egentlig når du trykker på en lenke?» Her er hele nettverksdelen på halvannet minutt.
2. Poeng 1, pakker og lag (10–32 s, ca. 50 ord): beskjeden deles i pakker, og fem lag tar hver sin jobb: applikasjon, transport, nettverk, link og fysisk. Den går ned hos avsenderen og opp hos mottakeren, og rutere behandler bare opp til nettverkslaget.
3. Poeng 2, adresser (32–56 s, ca. 55 ord): IP-adressen skiller lokalt fra utenfor, DHCP deler ut adresser, ARP kobler IP til MAC, og porter skiller tjenestene på én maskin. NAT lar hjemmenettet dele én adresse, og IPv6 er den egentlige løsningen.
4. Poeng 3, operativsystemet (56–70 s, ca. 30 ord): mellomleddet mellom maskinvare og bruker: en utvidet maskin som skjuler detaljer og en ressursforvalter som fordeler tid og plass.
5. Poeng 4, tjenestene (70–82 s, ca. 30 ord): TCP gir pålitelig levering, DNS gjør navn til adresser, og HTTP henter sidene, beskyttet av HTTPS.
6. Avslutning (82–90 s, ca. 15 ord): én setning som gjentar poenget: en melding går ned gjennom lagene, finner veien med adresser og rutere, og kommer opp igjen hos mottakeren.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller forelesninger.

AVGRENSNING
Ikke forklar kryptografi (nøkler, hash, signatur) i detalj: det hører til sikkerhetsdelen. Ikke legg til tall som ikke står i lysarkene.
```

---

## 8. S7.1 Oppsummering (Sikkerhet)

Legg ved `sikkerhet.pdf`.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk lysarkene som kilde, og oppsummer hele sikkerhetsdelen: sikkerhetsmålene, angrepsvektorene, kryptografien, trygge nett og systemer og styring. Bruk bare begreper, tall og eksempler som står på lysarkene, med unntak av sikkerhetsmålene som er gitt direkte under.

TITTEL
Videoen skal hete akkurat: «S7.1 Oppsummering». Vis den som tittel i starten og bruk den som navn på videoen.

SIKKERHETSMÅLENE (gitt direkte, bruk disse)
- Konfidensialitet, integritet og tilgjengelighet, med personvern som fjerde mål (KIT pluss P).

POENG (kun disse fire)
1. Målene og angrepet: vi vil beskytte konfidensialitet, integritet og tilgjengelighet, og trusselaktørene går etter dem med angrepsvektorer: sårbarheter og skadevare, SQL-injeksjon og XSS, og sosial manipulasjon.
2. Kryptografi: kryptering gir konfidensialitet, hash sjekker integritet, og digital signatur og sertifikater knytter en nøkkel til en identitet.
3. Trygge nett og systemer: kryptering og brannmur i nettet, og minste privilegium i systemene. Helhet er nødvendig: sikkerhet i applikasjonen er ikke sikrere enn datamaskinen den kjører på, som avhenger av systemprogramvare, oppstartsprosess og maskinvare.
4. Styring: lovkrav som GDPR, trusselmodellering og risikoanalyse, og administrative tiltak som internkontroll, policyer, opplæring og øvelser. Datasikkerhet er en kontinuerlig prosess.

LENGDE OG FORMAT
- Maks 90 sekunder og ca. 200 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis KIT-trekanten i hjørnet som lyser opp ved hvert poeng, og en kjede der alle leddene til slutt er like sterke.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–10 s, ca. 22 ord): spør: «Hva var egentlig poenget med sikkerhet?» Her er hele delen på halvannet minutt.
2. Poeng 1, mål og angrep (10–32 s, ca. 50 ord): vi beskytter konfidensialitet, integritet og tilgjengelighet, og hackere angriper med sårbarheter, skadevare, SQL-injeksjon, XSS og sosial manipulasjon.
3. Poeng 2, kryptografi (32–52 s, ca. 45 ord): kryptering gir konfidensialitet, hash sjekker integritet, og signatur og sertifikat knytter en nøkkel til en identitet.
4. Poeng 3, helhet (52–72 s, ca. 45 ord): trygge nett og systemer, og helhet er nødvendig: applikasjonen er ikke sikrere enn maskinen den kjører på, som avhenger av systemprogramvare, oppstart og maskinvare.
5. Poeng 4, styring (72–84 s, ca. 28 ord): lov, risiko og administrative tiltak, og sikkerhet er en kontinuerlig prosess.
6. Avslutning (84–90 s, ca. 12 ord): én setning som gjentar poenget: sikkerhet er å beskytte målene mot angrepsvektorene, og kjeden er aldri sterkere enn det svakeste leddet.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller forelesninger.

AVGRENSNING
Ikke forklar hvordan et bestemt angrep skjedde eller hvordan algoritmene virker. Ikke legg til tall som ikke står i lysarkene.
```

---

## Etter generering

Legg filene i mappene i tabellen øverst og gi meg beskjed. Jeg importerer dem, lager plakatbilder og sammendrag, og sjekker at de starter raskt.
