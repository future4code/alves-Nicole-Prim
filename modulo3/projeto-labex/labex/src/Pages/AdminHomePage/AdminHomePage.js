import React from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from '../../Routes/Coordinator'

export function AdminHomePage() {
  const { dados, loading, erro } = useGetData("/trips");
  const trips = dados?.trips

  const listTrips = trips?.map((trip) => {
    return (
      <div key={trip.id}>
        <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>
        <p><strong>Nome:</strong> {trip.name}</p>
        <button>Deletar Viagem</button>
        </button>
      </div>
    )
  })
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(navigate)}>Logout</button>
      {listTrips}
    </div>
  )
}

export default AdminHomePage