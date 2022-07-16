import React from 'react'
import { useGetDataDetails } from '../../Hooks/useGetDataDetails'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { BASE_URL, HEADERS } from '../../Credentials/Credentials'
import axios from 'axios'
import {ContainerDetails} from './TripDetailsStyled'

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
      <p>Nome: {candidate.name}</p>
      <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
      <button onClick={() => decideCandidate(candidate.id, false)}>Reprovar</button>
    </div>)
  })

  const detailsTrip = () => {
    if (trip) {
      return (
        <div>
          <div>
            <p>{trip.name}</p>
          </div>
          <div>
            <h1>Candidatos Pendentes</h1>
            {candidates}
          </div>
          <h1>Candidatos Aprovados</h1>
      {(approved.length === 0) ? (<p>Não há candidatos aprovados</p>) : (<div> {approved}</div>)}
      </div>
      )
    } else {
      return (
        <p>carregando...</p>
      )
    }
  }

  const approved = trip?.approved.map((approved, index) => {
    return (<ul key={index}>{approved.name}</ul>)
  })

  const navigate = useNavigate()

  return (
    <ContainerDetails>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      {detailsTrip()}
    </ContainerDetails>
  )
}

export default TripDetailsPage