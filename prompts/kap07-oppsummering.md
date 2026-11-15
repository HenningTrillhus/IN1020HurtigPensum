# Kapittel 7: oppsummering (7.7)

Delkapittelet «7.7 Oppsummering» finnes ikke i appen ennå. Her er prompten til den ene videoen og prompten til ikonet, så kan jeg opprette delkapittelet når de er klare.

---

## Videoprompt: 7.7 Oppsummering

Kilde: kapittel 7 (`kap07.pdf`), seksjon 7.7. Én kort video, like lang som de andre: maks ca. 70 sekunder og ca. 130 ord.

```
Du lager en kort, visuell forklaringsvideo for en student på IN1020 (Universitetet i Oslo).
Bruk kapittel 7 som kilde, og hold deg bare til seksjon 7.7 («Oppsummering»), delen «Den ene ideen, to ganger». Bruk bare tall og eksempler som står der.

TITTEL
Videoen skal hete akkurat: «7.7 Oppsummering». Vis den som tittel i starten og bruk den som navn på videoen.

POENG (kun disse to)
1. Cachen og pipelinen er den samme ideen to ganger: de nekter å vente. Cachen venter ikke på RAM, den holder en kopi nær, så svaret som regel allerede er der. Pipelinen venter ikke på at instruksjonen foran blir ferdig, den setter i gang med den neste med en gang. Begge virker fordi programmer har et mønster: lokalitet, at du bruker det samme om igjen og naboene, og en jevn strøm av instruksjoner som kan deles i trinn.
2. Begge svikter på nøyaktig samme måte: når mønsteret brytes. Et oppslag langt unna gir en bom, og et hopp gir en tømt pipeline, og maskinen står stille. Ingen av dem er synlige for programmet og ingen endrer hva det regner ut. Den eneste forskjellen er farten, og det er den eneste måten du kan oppdage dem på.

LENGDE OG FORMAT
- Maks 70 sekunder og ca. 130 ord fortellertekst. Har du ikke plass, kutt heller en detalj enn å snakke fortere.
- Vertikal video (9:16) hvis mulig. Stor tekst, maks én figur på skjermen om gangen. Vis en liten minnepyramide og et samlebånd side om side, forbundet av ordene «nekter å vente».
- Norsk bokmål. Muntlig, direkte og presist, som en dyktig medstudent. Ingen hilsen.

STRUKTUR
1. Krok (0–8 s, ca. 18 ord): spør: «Hva har en cache og en pipeline felles?»
2. Poeng 1, nekter å vente (8–36 s, ca. 55 ord): cachen venter ikke på RAM, pipelinen venter ikke på instruksjonen foran. Begge virker fordi programmer har et mønster.
3. Poeng 2, når mønsteret brytes (36–58 s, ca. 40 ord): en bom og en tømt pipeline gir stillstand. Ingen er synlige for programmet, bare farten endres.
4. Avslutning (58–68 s, ca. 12 ord): én setning som gjentar poenget: begge nekter å vente, og begge feiler når mønsteret brytes.

REGLER FOR SLUTTEN
Slutt på avslutningssetningen. Ikke still et spørsmål, ikke varsle om noe mer, og ikke si «neste», «senere» eller henvis til andre videoer eller kapitler.

AVGRENSNING
Ikke forklar cachelinjer, treffrate, skrivepolicy, hasardtyper eller pipelinetrinnene i detalj: det er forklart i videoene i kapitlet. Ikke nevn kapittelnumre, og ikke nevn at flere løsninger kommer senere.
```

---

## Ikonprompt: 7.7 Oppsummering

Legg ved `public/chapter-icons/ch7.png` som stilreferanse. Lim inn hovedprompten først, så motivet.

### Hovedprompt

```
Lag et lite, rundt app-ikon i samme stil som det vedlagte referansebildet (kapittel 7-ikonet). Følg referansen nøyaktig i stil, farger og linjetykkelse.

STIL
- Flat vektorillustrasjon, rene former, ingen gradienter, ingen skygger, ingen glans, ingen 3D.
- Rund medalje: en tykk, mørk dempet skogsgrønn ytterkant (omtrent RGB 56, 96, 70) og en rolig, dempet fyllflate inni, i samme fargefamilie (omtrent RGB 115, 160, 117). Samme toner som referansen, ingen andre fargetoner i selve medaljen.
- Kanten skal ha samme tykkelse på alle bilder i serien: omtrent 9 prosent av radiusen.
- Innholdet tegnes med mørk strek (nesten svart i fargefamilien) og fyllflater i lysere toner av samme farge og lys krem/hvit for lyse flater. Ingen knall-farger, ingen rødt, gult, lilla eller blått.
- Enkle, tydelige symboler med jevn strektykkelse, i samme stil som komponentene i referansen (rette linjer og avrundede hjørner). Maks 2 eller 3 symboler som kan leses ved 48 piksler. Ingen små detaljer.
- Motivet skal fylle mellom 60 og 75 prosent av bredden til den indre sirkelen, sentrert både vannrett og loddrett, med god luft rundt. Ikke la symbolene bli små i et stort tomt felt.
- ABSOLUTT INGEN TEKST: ingen ord, ingen bokstaver, ingen tall, ingen sifre (heller ikke 0 og 1), ingen etiketter. Ingen emojis, ingen mennesker, ingen ansikter.
- Kvadratisk bilde, 1024 x 1024, sirkelen fyller hele bildet, hvit bakgrunn utenfor sirkelen.
- Rolig, ryddig og dempet. Skal passe visuelt sammen med de andre kapittelikonene.

MOTIV
```

### Motiv

```
Motiv: en liten trappepyramide (cache) og et kort samlebånd av små firkanter side om side, forbundet av en tynn linje, og over dem en liten klokke. Viser at kapitlet gikk fra cachen via pipelinen til den ene ideen bak begge: å ikke vente. Balansert og ryddig, ingen tekst.
```

Når bildet er laget, legg det i `Kap07/DelKapBilder/7.7.jpeg`. Jeg beskjærer det til rundt 256 x 256, gir det samme ring som de andre i kapittel 7 og legger det inn.
