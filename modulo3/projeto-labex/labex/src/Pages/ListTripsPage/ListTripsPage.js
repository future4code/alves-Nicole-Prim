import React from 'react';
//hooks
import { useGetData } from '../../Hooks/useGetData'
//rotas
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from '../../Routes/Coordinator';

export function ListTripsPage() {
  const { dados, loading, erro } = useGetData("/trips");

  const trips = dados?.trips

  const listTrips = trips?.map((trip) => {
    return (
      <div key={trip.id}>
        <p><strong>Nome:</strong> {trip.name}</p>
        <p><strong>Descrição:</strong> {trip.description}</p>
        <p><strong>Planeta:</strong> {trip.planet}</p>
        <p><strong>Duração:</strong> {trip.durationInDays} dias</p>
        <p><strong>Data:</strong> {trip.date}</p>
      </div>
    )
  })

  const navigate = useNavigate ()

  return (
    <div>
      <h1>Lista de Viagens</h1>
      {listTrips}
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
    </div>
  )
}

export default ListTripsPage;