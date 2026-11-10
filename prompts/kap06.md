# Gemini / NotebookLM-prompter for kapittel 6

Kilde: `kap06.pdf` (legg den inn som eneste kilde i notatboken).
Bruk: lim **masterprompten** i feltet for tilpasning av Video Overview, og lim **seksjonsbriefen** rett under den. Én video per brief.

---

## Masterprompt (lim inn først, hver gang)

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk KUN kapittel 6 som kilde. Ikke finn på tall, begreper eller eksempler som ikke står der.

MÅL
Studenten skal forstå ÉN ide og kunne forklare den med egne ord etterpå. Ikke dekk hele kapitlet.

LENGDE OG FORMAT
- Maks 60 sekunder. Skriv for ca. 140–160 ord fortellertekst.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen.
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen «Hei og velkommen».

STRUKTUR
1. Krok (0–5 s): åpne med spørsmålet eller det overraskende faktum fra briefen. Aldri med en introduksjon.
2. Kjerneideen (5–35 s): forklar den ene ideen, steg for steg, og bygg figuren opp gradvis mens du snakker.
3. Eksempel med tall (35–50 s): vis ett konkret regnestykke eller en gjennomgått case fra briefen.
4. Misforståelsen (50–57 s): si kort hva mange tror, og hva som er riktig.
5. Avslutning (57–60 s): én setning som oppsummerer, og et spørsmål som får studenten til å tenke.

FAGSPRÅK (følg boka)
- Si «leder» og «stengt» om transistorer, aldri «åpen» og «lukket».
- Bruk vannbildet fra boka: spenning er høyde, strøm er mengde vann, en utgang er et badekar.
- Bruk begrepene slik boka bruker dem (VDD, GND, nMOS, pMOS, portforsinkelse, kritisk vei, klokkeperiode).
- Tall må være nøyaktig som i kilden.

VIL IKKE HA
- Ingen oppsummering av hele kapitlet.
- Ingen nye fakta utenfor kilden.
- Ingen lange definisjoner lest opp. Vis det i en figur i stedet.

SEKSJONSBRIEF FØLGER UNDER:
```

---

## 6.2 Bryteren som ikke trenger en finger

```
Fokus: kun seksjon 6.2.
Krok: «En datamaskin har ingen fingre. Hvem trykker da på alle bryterne?»
Kjerneide: gi bryteren en tredje ledning som bare bestemmer. Spenning på den gjør at bryteren leder. Da kan utgangen fra én port styre den neste, og kretsen bygger seg selv. Dette er en transistor. nMOS leder når styresignalet er 1, pMOS (den med boblen) leder når det er 0.
Eksempel: noen titalls milliarder transistorer i en telefon.
Misforståelse: i andre bøker heter det «åpen bryter» og betyr stengt. Vi sier «leder» og «stengt».
Avslutning: «Men hva er det egentlig som går gjennom bryteren?»
```

## 6.3 Strøm, spenning og jord

```
Fokus: kun seksjon 6.3.
Krok: «En bok trenger ingen strøm for å huske tekst. Hvorfor trenger en datamaskin det?»
Kjerneide: et bit er ikke en ting, men en spenning som må holdes oppe. En port lager i tillegg et nytt signal, og det koster energi. Vannbildet: spenning er høydeforskjell, strøm er mengden som renner. VDD er toppen (logisk 1, ca. 0,8 volt i dag), GND er bunnen (logisk 0). Strømmen går alltid fra VDD mot GND.
Eksempel: stor høydeforskjell men ingen strøm når krana er stengt, og det er en stengt transistor.
Misforståelse: «jord» er ikke nødvendigvis jorda. Det er et sted så stort at det ikke merkes om du heller litt ladning i det, som å tømme et badekar i Atlanterhavet.
Avslutning: «Så hvordan blir 0 og 1 til en port?»
```

## 6.4 Inverteren

```
Fokus: kun seksjon 6.4.
Krok: «Hvor kommer ettallet fra? Ikke fra inngangen.»
Kjerneide: bygg en NOT-port av to transistorer. pMOS øverst mot VDD, nMOS nederst mot GND, utgangen tas ut midt imellom. Gå gjennom begge tilfellene i ro og mak: inn 0 gir ut 1, inn 1 gir ut 0. Inngangen velger bare hvilken vei som åpnes. Verdien kommer fra forsyningen.
Eksempel: vis figuren to ganger, en gang for A=0 og en gang for A=1, og marker veien med farge.
Misforståelse: «signalet bæres videre». Nei, hver port lager et nytt signal. Derfor kan du koble tusen porter etter hverandre.
Ekstra (kort): de to transistorene leder aldri samtidig, så det går nesten ingen strøm i ro. Det er CMOS.
Avslutning: «Hva skjer når vi har to innganger?»
```

## 6.5 NAND, NOR og hvorfor AND er dyrere

```
Fokus: kun seksjon 6.5.
Krok: «Hvilken port er billigst, AND eller NAND? De fleste gjetter feil.»
Kjerneide: en port med to innganger trenger fire transistorer. NAND: to nMOS i serie nede, to pMOS i parallell oppe. NOR er speilvendt. Hvert trinn snur signalet, så AND må bygges som NAND + inverter.
Eksempel: tabellen NOT 2, NAND 4, NOR 4, AND 6, OR 6. Regnestykket: tolv AND mot tolv NAND sparer 24 av 72 transistorer, en tredel.
Misforståelse: AND-porten finnes, den er bare satt sammen av to trinn.
Avslutning: «Så hva sparer du egentlig når du forenkler et uttrykk?»
```

## 6.6 Null og ett er områder, ikke tall

```
Fokus: kun seksjon 6.6.
Krok: «Du kan kopiere en lydfil tusen ganger uten tap. Gjør det med en kassett, og du får bare susing. Hvorfor?»
Kjerneide: 0 og 1 er ikke eksakte spenninger, men områder, med et udefinert belte i midten (støymargin). 0,74 V og 0,79 V er den samme eneren. Hver port leser signalet, avgjør om det er over eller under grensa, og lager et helt nytt, skarpt signal fra VDD eller GND (signalgjenoppretting).
Eksempel: figuren med et rusket signal inn og et rent signal ut.
Misforståelse: digitalt er ikke mer nøyaktig. Det retter seg selv i hvert ledd.
Avslutning: «Hva ville skjedd om en ener fikk bli litt slapp underveis?»
```

## 6.7 Det tar tid

```
Fokus: kun seksjon 6.7.
Krok: «Ingenting i en datamaskin skjer momentant. Ikke en gang én port.»
Kjerneide: en utgang er et badekar. Å sette den til 1 er å fylle karet, til 0 er å tømme det. Karet er kapasitans: ledningen pluss styreledningene den går til. Tiden fra inngang endres til utgangen har skiftet er portforsinkelsen, ca. 5 ps i boka.
Eksempel: størrelsesordenene, hver tusen ganger lengre enn forrige: pikosekund (én port), nanosekund (en instruksjon eller et tall fra minnet), mikrosekund (SSD), millisekund (treg disk).
Misforståelse: kapasitansen er ikke en komponent noen har satt inn, og den er ikke minne. Den oppstår av at ting er fysiske.
Avveining: større transistor = raskere port, men et større kar for porten foran.
Avslutning: «Så hvor lang tid bruker en hel krets?»
```

## 6.8 Den lengste veien

```
Fokus: kun seksjon 6.8.
Krok: «En fulladder har fem porter på 5 ps hver. Hvor lang tid tar den? 25? Feil.»
Kjerneide: portene jobber samtidig, ikke etter tur. Tiden er den lengste veien fra inngang til utgang, den kritiske veien. I fulladderen: XOR1 → AND2 → OR, tre porter, 15 ps.
Eksempel (velg ett): middagen der potetene tar 20 minutter, kjøttet 15, sausen 10 og salaten 4. Middagen er klar etter 20 minutter, ikke 49. ELLER mentekjeden: 64 bit × 15 ps = 960 ps, fordi hvert ledd må vente på det forrige.
Misforståelse: å gjøre noe på en kort vei raskere hjelper ikke. Det er kun den kritiske veien som teller.
Avslutning: «Hvem bestemmer hvor ofte svaret kan hentes ut?»
```

## 6.9 Klokka

```
Fokus: kun seksjon 6.9.
Krok: «Hva er den eneste jobben til en klokke i en datamaskin?»
Kjerneide: ulike veier blir ferdige til ulik tid, så noen må si fra når det er trygt å se. Bildet: en skriftlig prøve der alle leverer når det ringer ut. Klokka er en ledning som veksler mellom 0 og 1. Klokkeperiode, stigende flanke, og frekvens = 1 / periode. Perioden må være minst like lang som den kritiske veien.
Eksempel: 3 GHz gir 1 / (3·10⁹) = 333 ps. Motsatt: 500 ps gir 2 GHz.
Misforståelse: klokka trengs IKKE fordi verdier lekker ut. Porten holder utgangen aktivt oppe.
Ekstra (kort): hvorfor ikke 200 GHz når en port tar 5 ps? Kritisk vei er mange porter, det trengs margin, og brikken ville brent opp.
Avslutning: «Så hvorfor sluttet klokka å gå fortere?»
```

## 6.10 Hvorfor klokka stoppet på rundt 3 GHz

Denne seksjonen er stor. Lag to videoer.

### Video A: hvorfor blir maskinen varm

```
Fokus: kun 6.10.1–6.10.3.
Krok: «Hvorfor blir en datamaskin varm, når ingenting beveger seg i den?»
Kjerneide: hver gang en utgang går fra 0 til 1 fylles et badekar fra VDD, og når den går tilbake til 0 tømmes det i jord. Energien blir varme. Tre ting avgjør varmen: antall kar (transistorer), hvor høyt vannet løftes (spenningen, som teller dobbelt, V²) og hvor ofte (frekvensen).
Eksempel: 2 GHz på 1,0 V til 4 GHz på 1,2 V: frekvensen ×2, spenning² ×1,44, til sammen ca. 2,9. Du doblet farten og nesten tredoblet varmen.
Bonus: all strøm en datamaskin tar inn blir til varme. En laptop på 45 W varmer rommet som en 45 W varmeovn.
Misforståelse: «Moores lov» er ikke en naturlov, men en observasjon som ble en selvoppfyllende bransjeplan.
Avslutning: «Så hva skjedde i 2004?»
```

### Video B: varmeveggen og flere kjerner

```
Fokus: kun 6.10.4–6.10.6.
Krok: «I tretti år ble prosessorer raskere hvert år uten at du gjorde noe. Så sluttet det.»
Kjerneide: mens transistorene krympet kunne spenningen senkes, og siden den teller dobbelt, ga det gratis fart. Rundt 2004 traff spenningen gulvet: går du lavere slutter transistoren å være en god bryter, og støymarginen krymper. Fra da ble hver gigahertz betalt i varme. Det er varmeveggen. I tillegg lekker stengte transistorer litt, mer jo mindre de er.
Eksempel: spenningen gikk fra ca. 1,3 V i 2004 via 1,0 V i 2010 til 0,7–0,8 V i dag. Løsningen: to kjerner på samme frekvens i stedet for én dobbelt så rask, så slipper man faktoren 1,44.
Misforståelse: regningen ble sendt fra maskinvare til programvare. Bare programmer skrevet for flere kjerner blir raskere.
Avslutning: «Hvor langt kommer du med flere kjerner? Det er kapittel 8.»
```

---

## Tips for best mulig resultat

- Be om én video om gangen, og hold briefen kort. Mange ideer i én video gir dårligere videoer.
- Sjekk alltid tallene mot boka før du publiserer klippet. Gemini kan runde eller bytte tall.
- Får du en lengre video enn 60 sekunder, klipp den ned til ett poeng fremfor å la den løpe.
- Hvis videoen kommer i 16:9, beskjær til 9:16 i et klippeprogram (CapCut o.l.).
- Lagre ferdig klipp som `video1.mp4` (og `video2.mp4` for 6.10) i mappen `public/content/<tema-id>/`.
