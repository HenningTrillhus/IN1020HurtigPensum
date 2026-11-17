# Prompter til prestasjoner (badges) for alle kapitler

Hvert kapittel får to bilder: en **åpen** badge i kapittelets farge og en **låst** versjon der man nesten ikke ser noe. Hvert kapittel har sin egen form.

Slik gjør du det for hvert kapittel:

1. Åpne en ny samtale i Gemini (eller en ny bildesamtale).
2. Legg ved kapittelets ikon som stilreferanse (`public/chapter-icons/<fil>.png`, filnavn står under hver prompt).
3. Lim inn **åpen**-prompten og velg den du liker best.
4. Lag den **låste** med den generelle låst-prompten lenger ned. Legg ved den åpne du valgte.

Tips: sjekk at åpen og låst har samme størrelse og plassering, ellers hopper bildet når den låses opp. Bakgrunnen skal være helt hvit under generering. Jeg klipper den bort etterpå, så badgen blir transparent.

| Kapittel | Form | Farge | Ikonfil |
|---|---|---|---|
| Sikkerhet | Skjold | Mørk rød og laks | `datasikkerhet.png` |
| Nettverk | Sekskant | Rosa | `nettverk.png` |
| 2 Digital representasjon | Firkant med avkuttede hjørner (bit-brikke) | Blå | `ch2.png` |
| 3 Instruksjoner | Postkasse (firkant med buet topp) | Oransje | `ch3.png` |
| 4 Arkitektur og ALU | Åttekant | Petrol (mørk turkis) | `ch4.png` |
| 5 Logiske porter | Portform (flat venstreside, rund høyreside) | Lilla | `ch5.png` |
| 6 Elektronikk | Åttespisset stjerne (gnist) | Gul | `ch6.png` |
| 7 Minne | Avrundet trekant som peker opp | Grønn | `ch7.png` |
| 8 Systemer | Sky | Turkis | `ch8.png` |

---

## Felles regler (ligger i alle promptene)

Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, refleksjon, glød eller gradient. Badgen har en tydelig mørk ytterkontur og fyller rundt 85 prosent av bildehøyden. Ingen tekst, bokstaver, tall eller logoer. Kvadratisk 1:1.

---

## Åpne badger

### Sikkerhet (skjold)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (mørk rød og laksrosa, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av et stort skjold, sett rett forfra og nøyaktig sentrert. Skjoldet har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger skjoldformen. I midten et stort, enkelt linjeikon av en bærbar PC med en hengelås foran. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Nettverk (sekskant)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (rosa og lilla-rosa, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor, regelmessig sekskant med lett avrundede hjørner, sett rett forfra og nøyaktig sentrert. Sekskanten har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av et lite nettverk: noen noder koblet sammen med streker, og en ruter med et wifi-symbol over. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 2 (firkant med avkuttede hjørner)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (blå, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor firkant med kraftig avkuttede hjørner (som en åttekantet brikke med lengre rette sider), sett rett forfra og nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av en rad med biter (små ruter, noen fylt og noen tomme) og en sinusbølge over. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 3 (postkasse)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (oransje, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor, høy postkasse sett rett forfra: en firkant med rette sider og et høyt, rundt buet tak. Nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av et lite flytdiagram med en løkke og et lite tannhjul. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 4 (åttekant)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (petrol, en mørk turkisgrønn, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor, regelmessig åttekant, sett rett forfra og nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av en ALU: en bred trapes med to innganger øverst og én utgang nederst, og et par piler som går inn. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 5 (portform)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (lilla, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor logisk OG-port: flat, rett venstreside og en stor, rund høyreside (som en bokstaven D lagt ned på siden), sett rett forfra og nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av to logiske porter koblet sammen med en strek. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 6 (gnist-stjerne)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (gul, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor stjerne med åtte tydelige, litt avrundede spisser (som en gnist), sett rett forfra og nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av en transistor og en liten strømkrets med et batteri. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 7 (avrundet trekant)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (grønn, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor, jevnsidig trekant som peker oppover, med tydelig avrundede hjørner, sett rett forfra og nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av en pyramide delt i fire lag (som en minnehierarki) med en pil som går ned. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Kapittel 8 (sky)
```
Bruk det vedlagte ikonet som stilreferanse: samme flate, moderne klistremerkestil og samme fargepalett (turkis, med en lysere og en mørkere nyanse). Lag en prestasjonsbadge i form av en stor, tykk, avrundet sky med flat bunn, sett rett forfra og nøyaktig sentrert. Formen har en tykk, jevn, mørk ytterkontur, og en tykk indre ring som følger formen. I midten et stort, enkelt linjeikon av en bærbar PC og en mobil ved siden av hverandre, med et lite wifi-symbol over. Dette er en fullført prestasjon, så badgen skal føles belønnende: en liten gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil badgen. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at badgen kan klippes ut. Badgen fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

---

## Låst badge (samme prompt for alle kapitler)

Legg ved den åpne badgen du valgte for kapittelet, og lim inn denne. Bytt `[TONE]` med kapittelets fargetone: rødbrun (Sikkerhet), rosabrun (Nettverk), blågrå (2), brun (3), mørk petrolgrå (4), mørk lilla (5), mørk oker (6), mørk grønngrå (7), mørk blågrønn (8).

```
Bruk det vedlagte emblemet og lag nøyaktig samme badge, med samme form, størrelse og plassering, men som en låst versjon. Hele badgen er svært mørk og avdempet: nesten svart, i en dyp, nedtonet [TONE] tone uten metning og uten glans. Bare ytterkonturen og ringen skimtes svakt som litt lysere linjer, og ikonet i midten kan så vidt anes som en mørk, innpresset silhuett. Ingen stjerne, ingen konfetti, ingen glød, ingen lysskinn og ingen farger. Behold den mørke ytterkonturen helt rundt, så badgen kan klippes ut. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon og uten gradient. Ingen tekst, ingen bokstaver, ingen tall. Kvadratisk format 1:1, høy oppløsning.
```

---

## Etter generering

Legg bildene i en mappe, for eksempel `Prestasjoner/` med navn som `sikkerhet-apen.png` og `sikkerhet-last.png`, og gi meg beskjed. Jeg klipper dem ut til transparente PNG-er, sjekker at åpen og låst har samme størrelse og plassering, og legger dem inn.

---

## Merket for hele pensum (ligger i fremdriftsarket)

Dette er det store merket for å ha sett alt. Det skal skille seg tydelig fra kapittelmerkene: gull i stedet for kapittelfarge, en større og mer høytidelig form (en krone), og de ni kapittelfargene som små edelstener i kronen. Lag det åpne først, og det låste fra det, på samme måte som for kapitlene. Legg ved ett av kapittelmerkene (for eksempel skjoldet) som stilreferanse.

### Åpen
```
Bruk det vedlagte merket som stilreferanse: samme flate, moderne klistremerkestil, tykk jevn mørk ytterkontur og enkle flate farger med en lysere og en mørkere nyanse. Lag et stort prestasjonsmerke i form av en gullkrone sett rett forfra og nøyaktig sentrert: tre tydelige spisser og en bred, avrundet bunn, med en tykk indre ring som følger formen. Kronen er gull (varm gul med lysere og mørkere gullnyanser). På kronen sitter ni små, runde edelstener på rekke, hver i sin farge: blå, oransje, petrol, lilla, gul, grønn, turkis, rosa og rød. I midten under dem et enkelt linjeikon av en studenthette. Dette er den største prestasjonen i appen, så den skal føles ekstra belønnende: en gullfarget stjerne øverst til høyre på kanten og et par små konfettistjerner helt inntil merket. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon, uten glød og uten gradient, slik at merket kan klippes ut. Merket fyller rundt 85 prosent av bildehøyden. Ingen tekst, ingen bokstaver, ingen tall, ingen logoer. Kvadratisk format 1:1, skarpe kanter, høy oppløsning.
```

### Låst
(legg ved den åpne du valgte)
```
Bruk det vedlagte kronemerket og lag nøyaktig samme merke, med samme form, størrelse og plassering, men som en låst versjon. Hele merket er svært mørkt og avdempet: nesten svart, i en dyp, nedtonet gråbrun tone uten metning og uten glans. Bare ytterkonturen og ringen skimtes svakt som litt lysere linjer, og edelstenene og ikonet kan så vidt anes som mørke, innpressede silhuetter. Ingen farger, ingen stjerne, ingen konfetti, ingen glød og ingen lysskinn. Behold den mørke ytterkonturen helt rundt, så merket kan klippes ut. Bakgrunnen er helt ensfarget ren hvit (#FFFFFF), uten skygge, uten refleksjon og uten gradient. Ingen tekst, ingen bokstaver, ingen tall. Kvadratisk format 1:1, høy oppløsning.
```

Legg bildene i `Kap Badges/` som `Total.jpeg` og `TotalLåst.jpeg`, så klipper jeg dem ut og slår på merket i appen.
