import React from 'react'
import { useGetDataDetails } from '../../Hooks/useGetDataDetails'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import { HEADERS } from '../../Credentials/Credentials'

function TripDetailsPage () {
  useProtectedPage()
  const params = useParams()
  const { dados, loading, erro } = useGetDataDetails(`/trip/${params.id}`, {});
  const trip = dados?.trip
console.log("aqui", trip)
console.log(params.id)
  const detailsTrip = () => {
    if (trip) {
      return (
        <div>
          <p>{trip.name}</p>
        </div>
      )
    } else {
      return (
        <p>carregando...</p>
      )
    }
  }

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Aprovar</button>
      <button>Reprovar</button>
      {detailsTrip()}
    </div>
  )
}

export default TripDetailsPage