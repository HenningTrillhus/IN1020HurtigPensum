# Podkastikoner: bruk de gamle favorittene som mal, ett sett per kapittel

Plan: du legger ved 16 av de gamle ikonene du liker, og Gemini lager et nytt sett på 16 i samme stil, men med kapittelets tema og farger. Du kjører prompten én gang per kapittel, og hver gang legger du ved de samme 16 referansene.

Før du starter:
- Velg 16 gamle ikoner. 4 av dem skal være en dame alene, og 12 skal være mann og dame sammen. Ingen ikoner har to av samme kjønn.
- Last dem opp i den rekkefølgen du vil ha dem i rutenettet: først de 4 damene alene, så de 12 parene.
- Kjør én samtale per kapittel, så fargene ikke blandes mellom kapitlene.

---

## Prompt (fyll inn {FARGEFAMILIE}, {RING} og {TEMA} fra tabellen under)

```
Jeg har lagt ved 16 podkast-ikoner i en bestemt rekkefølge. Lag ett nytt bilde med et rutenett på nøyaktig 4 kolonner og 4 rader som inneholder 16 nye runde ikoner, ett for hvert vedlagte ikon, i samme rekkefølge (rad for rad, fra venstre mot høyre).

SAMME STIL OG SAMME PERSONER
- Hvert nye ikon skal ligne sitt vedlagte ikon så mye som mulig: samme tegnestil og linjetykkelse, samme personer med samme frisyre, klær og hudtone, samme vinkel, samme studio med akustikkpaneler, lamper og mikrofoner, og samme måte å sitte og gestikulere på.
- Alle sitter i et podkaststudio og har hodetelefoner og en tydelig synlig mikrofon rett foran seg.
- De 4 øverste ikonene viser NØYAKTIG én dame alene, og de 12 nederste viser NØYAKTIG én mann og én dame sammen. Aldri to damer, aldri to menn. Ikke legg til eller fjern personer.
- Alle 16 skal være tydelig forskjellige fra hverandre. Ikke lag to like.

ENDRE BARE DISSE TINGENE
1. Bytt bakgrunnsfargene til ulike toner av {FARGEFAMILIE}, fra mørk til lys, så de varierer litt fra ikon til ikon, men alle hører tydelig til samme fargefamilie.
2. Bytt ytterkanten (ringen) til {RING}, samme farge og tykkelse i alle 16.
3. Legg inn {TEMA} som små dekorelementer på studioveggen, som plakater, innrammede bilder eller små skilt. Ulikt i hvert ikon, uten å dekke personene. Bruk bare noen få i hver scene. Rommet skal fortsatt tydelig være et podkaststudio.
4. Bytt gjerne fargen på klærne litt der den ellers ville forsvunnet mot den nye bakgrunnen, men behold personene gjenkjennelige.

RUTENETT OG FORMAT
- Kvadratisk bilde, 2048 x 2048 piksler, ren hvit bakgrunn.
- 16 sirkler i 4 kolonner og 4 rader, alle nøyaktig like store, midt i sin rute og med lik hvit avstand (omtrent en tiendedel av sirkelens bredde). Ingen overlapp, ingen rammer eller linjer rundt rutenettet.
- Ingen tekst, ingen sifre, ingen logoer og ingen vannmerke, bortsett fra de røde «ON AIR»-skiltene som allerede finnes i referansene.
- Hver sirkel skal kunne leses som et lite ikon på 56 piksler: store figurer, få detaljer, tydelig kontrast mellom figurene og bakgrunnen.
```

## Verdier per kapittel

| Kapittel | {FARGEFAMILIE} | {RING} | {TEMA} | Filnavn |
|---|---|---|---|---|
| 2 | dempet blå (marineblå til lys blå) | marineblå, RGB 47, 72, 140 | rutenett av tomme firkanter (bit), sinusbølge og trappekurve, et pikselbilde i en ramme | `Kap02.jpeg` |
| 3 | dempet kobber/oransje (terrakotta til lys fersken) | kobberbrun, RGB 181, 99, 51 | postkasser på rad, et flytskjema med en rombe og piler, små minneceller | `Kap03.jpeg` |
| 4 | dempet petrol/blågrønn | mørk petrol, RGB 33, 85, 88 | en prosessorbrikke, en V-formet ALU-trapes, brede bussbånd, små registerbokser | `Kap04.jpeg` |
| 5 | dempet lilla (mørk lilla til lys lavendel) | lilla, RGB 119, 68, 126 | logiske porter (AND, OR, NOT), kretslinjer med knekk og prikker, en liten lyspære | `Kap05.jpeg` |
| 6 | dempet gul/gylden (mørk oker til lys gul) | gyllen, RGB 190, 139, 42 | en transistor, en motstand, et batteri, en firkantbølge, en lyspære | `Kap06.jpeg` |
| 7 | dempet skogsgrønn (mørk grønn til lys mint) | skogsgrønn, RGB 56, 96, 68 | en trappepyramide, et samlebånd av små firkanter, en klokke, en bokhylle | `Kap07.jpeg` |
| 8 | dempet turkis (mørk turkis til lys isblå) | turkis, RGB 45, 128, 132 | en sky, en brikke med ben, et hjerneomriss, en laptop og telefon, tannhjul | `Kap08.jpeg` |
| Nettverk | dempet plomme/rosa (mørk plomme til lys lavendelrosa) | plomme, RGB 145, 69, 116 | et nettverk av noder og linjer, en ruter med antenner, konvolutter, Wi-Fi-buer | `Nettverk.jpeg` |
| Sikkerhet | dempet rød/vinrød (mørk vinrød til lys rosa) | mørk rød, RGB 121, 28, 33 | hengelåser, nøkler, skjold med hake, et fingeravtrykk | `Sikkerhet.jpeg` |

## Sjekk i hvert bilde
- Rad 1 har fire damer alene, og de tolv under har én mann og én dame hver.
- Alle sitter i et studio med mikrofon.
- Fargene holder seg i kapittelets fargefamilie, og alle ringene har lik farge. Hvis ett ikon er feil, be om at akkurat det ikonet tegnes på nytt.

## Når du er ferdig
Legg bildene i `KapIconer/PodkastIkoner/` med filnavnene over og si fra. Jeg klipper dem opp, gir alle lik ring og fordeler dem: korte podkaster får en dame alene, lange en mann og en dame, og ingen i samme kapittel deler ikon.
