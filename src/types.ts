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

export interface Topic {
  id: string
  chapter?: string
  title: string
  description: string
  videos: Video[]
  podcasts?: Podcast[]
  quiz?: QuizQ[]
}
