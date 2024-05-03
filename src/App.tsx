import { useEffect, useState } from 'react'
import diaryEntriesServise from './services/diaryEntries'
import ListFlights from './components/ListFlights'
import { diaryEntries, DiaryEntry, NewDiaryEntry } from './types'
import FormDiaryEntry from './components/FormDiaryEntry'
const App = (): JSX.Element => {
  const [diaryFlights, setDiaryEntries] = useState<diaryEntries>([])
  const [notification, setNotification] = useState<string>('')
  useEffect(() => {
    diaryEntriesServise.getDiaryEntries().then((data: diaryEntries) => {
      setDiaryEntries(data)
    })
      .catch((error) => {
        setNotification(error)
      })
  }, [])
  const onNewDiary = (newDiaryEntry: NewDiaryEntry): void => {
    diaryEntriesServise.addFlight(newDiaryEntry)
      .then((data: DiaryEntry) => {
        setDiaryEntries([...diaryFlights, data])
      })
      .catch((error) => {
        setNotification(error.response.data)
      })
  }
  return (
    <>
      <h1>Add a new entry</h1>
      {notification === null ? null : <p>{notification}</p>}
      <h1>Diary Entries</h1>
      <FormDiaryEntry onNewDiary={onNewDiary} />
      <ListFlights diaryFlights={diaryFlights} />
    </>
  )
}

export default App
