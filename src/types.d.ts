
export interface DiaryEntry {
  id: number
  date: string
  weather: string
  visibility: string
  comment: string
}
export type diaryEntries = DiaryEntry[]

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
