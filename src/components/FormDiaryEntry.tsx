import { useState } from 'react'
import { NewDiaryEntry } from '../types'
import { Visibility, Weather } from '../enums'
import { Button } from './ui/button'
interface FormState {
  inputValues: NewDiaryEntry
}

interface FormProps {
  onNewDiary: (newDiaryEntry: NewDiaryEntry) => void
}
const FormDiaryEntry = ({ onNewDiary }: FormProps): JSX.Element => {
  const [newDiaryEntry, setNewDiaryEntry] = useState<FormState['inputValues']>({
    date: '',
    visibility: '',
    weather: '',
    comment: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.type === 'radio' ? e.target.id : e.target.value
    setNewDiaryEntry({
      ...newDiaryEntry,
      [e.target.name]: value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    onNewDiary(newDiaryEntry)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>date</label>
      <input name='date' onChange={handleChange} type='date' value={newDiaryEntry.date} />
      <br />
      <label>visibility</label>
      {
        Object.values(Visibility).map((visibility) => (
          <div key={visibility}>
            <input onChange={handleChange} type='radio' id={visibility} name='visibility' value={newDiaryEntry.visibility} />
            <label>{visibility}</label>
          </div>
        ))
      }      <br />
      <label>weather</label>
      {
        Object.values(Weather).map((weather) => (
          <div key={weather}>
            <input onChange={handleChange} type='radio' id={weather} name='weather' value={newDiaryEntry.weather} />
            <label>{weather}</label>
          </div>
        ))
      }
      <br />
      <label>comment</label>
      <input name='comment' onChange={handleChange} type='text' value={newDiaryEntry.comment} />
      <br />
      <Button variant='default' size='sm'>Add</Button>
    </form>
  )
}

export default FormDiaryEntry
