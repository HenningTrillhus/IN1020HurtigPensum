export interface Video { title: string; file: string; summary?: string }
export interface QuizQ { q: string; options: string[]; answer: number }

/** En podkast-episode til et tema. Lydfilen ligger i temamappen. */
export interface Podcast {
  title: string
  /** Lydfil i temamappen, f.eks. podkast-dame.m4a */
  file: string
  /** Ikon i /podcast-icons/, uten filendelse (f.eks. «dame» eller «dame-mann»). */
  icon: string
  /** Lengde i sekunder (vises på knappen). */
  duration?: number
}

/** Et fagbegrep brukt i delkapittelet, med forklaring. */
export interface Term { term: string; def: string }

export interface Topic {
  id: string
  chapter?: string
  title: string
  description: string
  videos: Video[]
  podcasts?: Podcast[]
  /** Fagbegreper i delkapittelet (vises i fanen «Fagbegreper»). */
  terms?: Term[]
  quiz?: QuizQ[]
}
