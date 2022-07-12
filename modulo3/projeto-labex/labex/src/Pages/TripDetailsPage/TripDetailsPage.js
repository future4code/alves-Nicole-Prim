import React from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'

function TripDetailsPage () {

  const params = useParams()
  const trip = useGetData(`/trip/${params.id}`, {});
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Aprovar</button>
      <button>Reprovar</button>
      {trip.id && <h1>{trip.name}</h1>}
    </div>
  )
}

export default TripDetailsPage