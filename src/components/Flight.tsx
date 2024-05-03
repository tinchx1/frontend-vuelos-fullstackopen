import { DiaryEntry } from '../types'

interface FlightProps {
  flight: DiaryEntry
}
const Flight = ({ flight }: FlightProps): JSX.Element => {
  return (
    <div>
      <h3>{flight.date}</h3>
      <p>visibility: {flight.visibility}</p>
      <p>weather: {flight.weather}</p>
    </div>
  )
}

export default Flight
