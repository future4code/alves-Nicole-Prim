import React from 'react';
//hooks
import { useGetData } from '../../Hooks/useGetData'
//rotas
import { useNavigate } from 'react-router-dom';
import { goBack, goToApplicationFormPage } from '../../Routes/Coordinator';
//styled
import {ContainerList, ButtonInsc, ButtonBack, InfosTrip, ContainerTrips, DivButtons} from './ListTripsStyled'
import {TiArrowBackOutline} from 'react-icons/ti'


export function ListTripsPage() {
  const { dados, loading, erro } = useGetData("/trips");

  const trips = dados?.trips

  const listTrips = trips?.map((trip) => {
    if (trip) {
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
    } else {
      return (
        <p>carregando...</p>
      )
    }
    })

  const navigate = useNavigate ()

  return (
    <ContainerList>
      <h1>Lista de Viagens</h1>
      <ButtonInsc>
      <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
      </ButtonInsc>
      <ButtonBack>
      <button onClick={() => goBack(navigate)}><TiArrowBackOutline /></button>
      </ButtonBack>
      <ContainerTrips>
      {listTrips}
      </ContainerTrips>
      <DivButtons>
     
     
      </DivButtons>
    </ContainerList>
  )
}

export default ListTripsPage;