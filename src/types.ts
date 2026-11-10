export interface Video { title: string; file: string; summary?: string }
export interface QuizQ { q: string; options: string[]; answer: number }
export interface Topic {
  id: string
  chapter?: string
  title: string
  description: string
  videos: Video[]
  podcast?: { title: string; file: string }
  quiz?: QuizQ[]
}
