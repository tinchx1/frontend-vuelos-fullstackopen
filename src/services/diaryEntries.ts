import axios from 'axios'
import { diaryEntries, DiaryEntry, NewDiaryEntry } from '../types'

const getDiaryEntries = async (): Promise<diaryEntries> => {
  const response = await axios.get('http://localhost:3000/api/diaries/')
  return response.data
}
const addFlight = async (NewDiaryEntry: NewDiaryEntry): Promise<DiaryEntry> => {
  const response = await axios.post('http://localhost:3000/api/diaries/', NewDiaryEntry)
  return response.data
}
export default { getDiaryEntries, addFlight }
