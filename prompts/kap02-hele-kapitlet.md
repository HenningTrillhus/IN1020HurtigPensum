# Prompt til den lange videoen: hele kapittel 2 i én video

Denne videoen går på «2 Hele kapitlet i én video», øverst i kapittel 2. Den tar for seg hele kapittelet «Digital representasjon» i én sammenhengende gjennomgang, fra to tilstander i en transistor til bilder og lyd, og binder det sammen med den ene ideen bak kapittelet.

Lengde: ca. 10 minutter (rundt 1350 ord fortellertekst), siden kapittel 2 er det lengste kapittelet. Vil du ha den kortere, bytt «10 minutter» med «7 minutter» og kutt delene som er merket «kan kuttes».

Legg ved kapittel 2 («Digital representasjon», `kap02.pdf`) som kilde.

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

## Etter generering

Legg videoen i `Kap02/HelKap/` som `Kapittel2.mp4` og gi meg beskjed. Jeg legger den inn i delkapittelet «2 Hele kapitlet i én video» øverst i kapittel 2, lager plakatbilde og oppsummering og sjekker at den starter raskt.
