import React from 'react'
import { useGetDataDetails } from '../../Hooks/useGetDataDetails'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { BASE_URL, HEADERS } from '../../Credentials/Credentials'
import axios from 'axios'
import {ContainerDetails, ButtonBack, ButtonCandidate} from './TripDetailsStyled'
import {TiArrowBackOutline} from 'react-icons/ti'

function TripDetailsPage() {
  useProtectedPage()
  const params = useParams()
  const { dados, loading, erro } = useGetDataDetails(`/trip/${params.id}`, {});
  const trip = dados?.trip
  console.log("aqui", trip)
  console.log(params.id)

  const decideCandidate = (id, choice) => {
    const token = localStorage.getItem("token")
    const body = {
      approve: choice
    }
    axios.put(`${BASE_URL}/trips/${trip.id}/candidates/${id}/decide`, body, {
      headers: {
        auth: token
      }
    }).then((res) => {
      if (choice === true) {
        console.log("aprovado")
      }else {
        console.log("reprovado")
      }
      document.location.reload(true)
    }).catch((err) => {
      console.log(err)
    })
  }


  const candidates = trip?.candidates.map((candidate, index) => {
    return (<div key={index}>
      <div>
      <p> <strong> Nome: </strong> {candidate.name}</p>
    <p> <strong> Idade: </strong>  {candidate.age}</p>
    <p> <strong> Profissão: </strong>  {candidate.profession}</p>
    <p> <strong> Texto de candidatura: </strong>  {candidate.applicationText}</p>
    <p> <strong> País: </strong> {candidate.country}</p>
      </div>
      <ButtonCandidate>
      <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
      <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
      </ButtonCandidate>
    </div>)
  })

  const detailsTrip = () => {
    if (trip) {
      return (
        <div>
          <div>
            <h1>Detalhes da Viagem</h1>
            <p> <strong> Nome: </strong> {trip.name}</p>
            <p> <strong> Descrição: </strong> {trip.description}</p>
    <p> <strong> Planeta: </strong>  {trip.planet}</p>
    <p> <strong> Duração: </strong>  {trip.durationInDays} dias</p>
    <p> <strong> Data: </strong>  {trip.date}</p>
          </div>
          <div>
            <h1>Candidatos Pendentes</h1>
            {(candidates.length === 0) ? (<p>Não há candidatos pendentes</p>) : (<div> {candidates} </div>)}
          </div>
          <h1>Candidatos Aprovados</h1>
      {(approved.length === 0) ? (<p>Não há candidatos aprovados</p>) : (<div> {approved}</div>)}
      </div>
      )
    } else {
      return (
        <p>Carregando...</p>
      )
    }
  }

  const approved = trip?.approved.map((approved, index) => {
    return (<div key={index}><p>{approved.name}</p> </div>)
  })

  const navigate = useNavigate()

  return (
    <ContainerDetails>
      <ButtonBack>
      <button onClick={() => goBack(navigate)}><TiArrowBackOutline/></button>
      </ButtonBack>
      {detailsTrip()}
    </ContainerDetails>
  )
}

export default TripDetailsPage