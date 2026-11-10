// Små bokstaver uten tegn som skiller æ/ø/å fra a/o, så «jord» finner «Jord» og «strom» finner «strøm».
export const norm = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ø/g, 'o').replace(/æ/g, 'ae')
