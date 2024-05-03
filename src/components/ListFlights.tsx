import { diaryEntries } from '../types'
import Flight from './Flight'

interface FlightsProps {
  diaryFlights: diaryEntries
}

const ListFlights = ({ diaryFlights }: FlightsProps): JSX.Element => {
  return (
    <div>
      {diaryFlights.map((flight) => (
        <Flight key={flight.id} flight={flight} />
      ))}
    </div>
  )
}

export default ListFlights
