import React from 'react';
import { useGetData } from '../Hooks/useGetData';

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

  return (
    <div>
      <h1>Lista de Viagens</h1>
      {listTrips}
      <button>Voltar</button>
      <button>Inscrever-se</button>
    </div>
  )
}

export default ListTripsPage;