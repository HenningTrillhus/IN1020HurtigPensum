# Prompt til den lange videoen: hele kapittel 3 i én video

Denne videoen går på «3 Hele kapitlet i én video», øverst i kapittel 3. Den tar for seg hele kapittelet «Instruksjoner» i én sammenhengende gjennomgang, fra en Python-linje til et program som skriver om seg selv.

Lengde: ca. 8 minutter (rundt 1100 ord fortellertekst). Vil du ha den kortere, bytt «8 minutter» med «5 minutter» og kutt delene som er merket «kan kuttes».

Legg ved kapittel 3 («Instruksjoner», `kap03.pdf`) som kilde.

```
Du lager en lang, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 3 («Instruksjoner») som kilde, og dekk hele kapittelet. Bruk bare tall, regler og eksempler som står der. Ikke finn på detaljer.

TITTEL
Videoen skal hete akkurat: «3 Hele kapitlet i én video». Vis den som tittel i starten og bruk den som navn på videoen.

MÅL
Studenten skal sitte igjen med én sammenhengende forklaring på hva en instruksjon er og hvordan en maskin utfører et program, og kunne forklare den ene ideen som kommer igjen gjennom hele kapitlet: for maskinen er alt tall, og ingenting ved tallet sier om det er data eller en ordre. Det avgjøres av om det hentes som ordre eller som verdi. Videoen skal binde sammen delene, ikke bare liste dem opp.

LENGDE OG FORMAT
- Ca. 8 minutter og ca. 1100 ord fortellertekst. Heller kutte detaljer enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Bruk programmene og tabellene fra kapittelet.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.
- Ha et lite rom i hjørnet som viser LMC: postkassene, kalkulatoren (akkumulatoren), telleren, innkurven og utkurven. Marker delen som snakkes om.

STRUKTUR (følg denne rekkefølgen)
1. Åpning (0:00–0:50, ca. 110 ord):
   - de første «computers» var mennesker i 1930-årenes USA, for det ordet betydde «en som regner». De fulgte en liste med instruksjoner uten å vite hva tabellen skulle brukes til, og det er nettopp derfor arbeidet lot seg overta av en maskin.
   - Python-linja «svar = a + b» når bit gjennom høynivåspråk, assemblerspråk og maskinkode. En kompilator oversetter hele programmet én gang, en tolk tar det linje for linje mens det kjører.
   - Poenget: et program er tall i minnet, og maskinen kan ikke se forskjell på et tall den skal regne med og et tall den skal adlyde.
2. Rommet (0:50–1:50, ca. 130 ord):
   - Little Man Computer, LMC, laget av Stuart Madnick ved MIT (simulator av Peter Higginson). Et lukket rom med hundre postkasser, 00 til 99, hver med et tresifret tall. En kalkulator som viser tre sifre, en teller, en innkurv og en utkurv.
   - hundre postkasser fordi en adresse skal få plass i to sifre, og adressefeltet konkurrerer med resten om plassen.
   - postkasse 42 er et sted, tallet 42 er en verdi. ADD 99 betyr «legg til det som ligger i postkasse 99», ikke «legg til 99».
   - regelen som bærer resten av kapitlet: kontoristen kan ikke se forskjell på en ordre og en verdi.
3. Instruksjonen (1:50–2:50, ca. 130 ord):
   - en instruksjon er et tresifret tall i to deler: opkoden (hva) og adressedelen (hvor). 542 er hent verdien i postkasse 42. 199 er legg postkasse 99 til kalkulatoren. 000 er stopp, og alle tall som begynner på null stopper maskinen.
   - 901, 902 og 922 har ingen postkasse: adressedelen skiller mellom innlesing, utskrift og tegn. 901 betyr ikke «gjør noe med postkasse 01».
   - elleve instruksjoner: lite, men nok, fordi kraften kommer av at enkle operasjoner gjentas svært mange ganger. I en ekte maskin er ordren et bitmønster med to felt, og samme avveining: flere bit til opkoden gir flere ordrer, flere til adressen gir mer minne.
4. Hent-utfør (2:50–3:50, ca. 130 ord):
   - fire steg: hent, del, utfør, gjenta. Én runde med tall: telleren 25, postkasse 25 inneholder 589, postkasse 89 inneholder 222. Instruksjonen hentes og telleren blir 26, 589 deles i 5 og 89, kalkulatoren viser 222.
   - fire registre: akkumulatoren, programtelleren, instruksjonsregisteret og adresseregisteret.
   - telleren klikkes fram i steg 1, så den peker alltid på den neste instruksjonen. Derfor virker et hopp: klikket blir bare overskrevet.
   - syklusen spør aldri om det den hentet er en ordre. Legger du data der den henter sin neste ordre, blir dataene utført.
5. De første programmene (3:50–4:50, ca. 130 ord):
   - to tall: 901 les, 399 lagre i 99, 901 les, 199 legg til, 902 skriv ut, 000 stopp. Akkumulatoren er en arbeidsbenk, ikke et lager, og derfor finnes STA. Kjørt med 12 og 5 blir svaret 17, og postkasse 99 er fortsatt 12.
   - postkasse 99 fordi den er langt unna programmet. Å glemme HLT er den vanligste feilen: kontoristen fortsetter inn i dataene.
   - tre tall: les, legg til, lagre tilbake, det samme mønsteret som en løkke.
   - tegn er tall: 104, 101 og 105 med OTC skriver «hei». Hadde HLT manglet, ville tallet 104 blitt lest som ADD 04: det er både bokstaven h og en ordre.
6. Assembler (4:50–5:40, ca. 110 ord):
   - «901 399 901 199 902 000»: du husker hva det gjør, men du ser det ikke. Fire grunner til at tall er tungvint, og den fjerde er verst: setter du inn én instruksjon, må alle adresser rettes.
   - løsningen: gi instruksjonene navn, og skriv et program som bytter navnene tilbake til tall. Det er en assembler, og språket heter assemblerspråk.
   - en én-til-én-oversettelse: hver linje blir nøyaktig én postkasse. En kompilator kan gjøre én Python-linje om til hundre instruksjoner, eller til null. Maskinen har aldri sett bokstavene LDA.
7. Hopp (5:40–6:30, ca. 110 ord):
   - BRA hopper alltid, BRZ hopper hvis akkumulatoren er null, BRP hopper hvis den er null eller positiv. Null er positivt i BRP.
   - nedtellingen fra 10: med BRA hopper løkka alltid og kommer aldri til HLT. Byttes BRA med BRP, skrives 10 til 0, og så stopper det, fordi −1 ikke er positivt.
   - hoppet ser bare på akkumulatoren. Alle sammenligninger blir en subtraksjon og et hopp. I LMC står hoppet nederst og betingelsen er en subtraksjon lenger opp, mens Python har betingelsen øverst.
   - if-else er en BRP som hopper forbi else-grenen. Dataene rett etter HLT gir en feil som bare viser seg for noen inndata.
8. Etiketter og selvmodifisering (6:30–7:30, ca. 130 ord):
   - nedtellingsprogrammet med en INP øverst: alt forskyves, og tre adresser peker feil uten at noe sier fra. Løsningen er etiketter: et navn på en adresse som ligger fast. Ikke det samme som en variabel i Python. DAT er ikke en instruksjon, men en beskjed til assembleren, og data skal alltid få et starttall.
   - i postkassen er en etikett bare et tall, og en instruksjon bare et tall. Forskjellen på «peker DAT en» og «hent LDA en» er sifferet lengst til venstre.
   - selvmodifiserende kode: LDA 12 er tallet 512, og legger du til én blir det LDA 13. Du endrer adressedelen, ikke verdien. Ekte prosessorer bruker indeksregistre i stedet.
9. Sikkerhet og avslutning (7:30–8:00, ca. 90 ord): grensen mellom kode og data finnes ikke i silisiumet, den håndheves av operativsystemet, og nettleseren din skriver kode med vilje når den kjører JavaScript. Et program som skriver til feil adresse, overskriver det som lå der: data gir feil svar, en instruksjon gjør at maskinen kjører noe annet, og kan en utenforstående påvirke adressen, bestemmer vedkommende hva som kjøres. Det ligger under en stor andel sikkerhetshull. Kontoristen var aldri der: det sitter ingen i maskinen. Samme ordre i tre former: som assembler LDA 42, som tall 542, og som bit et mønster av nuller og enere.

REGLER FOR SLUTTEN
Avslutt med én setning som gjentar poenget: det er bare tall i postkassene, og hva et tall er, avgjøres av hvordan det brukes. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste» eller «senere».

AVGRENSNING
Ikke forklar hvordan kretsene som utfører instruksjonene er bygd, eller hvordan en instruksjon er kodet i bit utover det som står. Ikke bruk kapittelnumre eller henvis til andre videoer. Ikke ta med selvtest og refleksjonsspørsmål. Ikke legg til tall som ikke står i kapitlet.
```

---

## Etter generering

Legg videoen i `Kap03/HeleKap/` og gi meg beskjed. Jeg legger den inn i delkapittelet «Hele kapitlet» øverst i kapittel 3, lager plakatbilde og oppsummering og sjekker at den starter raskt.
