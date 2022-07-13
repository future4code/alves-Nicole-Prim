import React from 'react';
//hooks
import { useGetData } from '../../Hooks/useGetData'
//rotas
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from '../../Routes/Coordinator';
//styled
import {ContainerList, InfosTrip, ContainerTrips, DivImg, DivButtons} from './ListTripsStyled'
//assets
import Imagens from '../../Assets/tresimg.jpg'

export function ListTripsPage() {
  const { dados, loading, erro } = useGetData("/trips");

  const trips = dados?.trips

  const listTrips = trips?.map((trip) => {
    return (
      <div key={trip.id}>
        <InfosTrip>

        <p><strong>Nome: </strong> {trip.name}</p>
        <p><strong>Descrição: </strong> {trip.description}</p>
        <p><strong>Planeta: </strong> {trip.planet}</p>
        <p><strong>Duração: </strong> {trip.durationInDays} dias</p>
        <p><strong>Data: </strong> {trip.date}</p>
        </InfosTrip>
      </div>
    )
  })

  const navigate = useNavigate ()

  return (
    <ContainerList>
      <h1>Lista de Viagens</h1>
      <ContainerTrips>
      {listTrips}
      </ContainerTrips>
      <DivButtons>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
      </DivButtons>
    </ContainerList>
  )
}

export default ListTripsPage;