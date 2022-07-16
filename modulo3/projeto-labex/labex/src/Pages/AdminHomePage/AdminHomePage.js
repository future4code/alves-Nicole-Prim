import React, {useState} from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from '../../Routes/Coordinator'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../../Credentials/Credentials'
import {ContainerAdmin, ButtonBack, ButtonsAdmin, InfosTrip, ButtonDelete, ContainerTrips} from './AdminStyled'
import {TiArrowBackOutline} from 'react-icons/ti'
import {TbTrash} from 'react-icons/tb'

function AdminHomePage() {
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false)
  const { dados, loading, erro } = useGetData("/trips", refresh);
  const trips = dados?.trips
  console.log("testando2")
  console.log(dados)

const handleDelete = () => {
  setRefresh(!refresh)
}

  const handleClickDelete = (id) => {
    console.log("testando1")
    const token = localStorage.getItem('token')
    axios.delete(`${BASE_URL}/trips/${id}`,
    {
      headers: {
        auth: token
      }
    }
    )
    .then((res) => {
      alert("Viagem deletada com sucesso")
      handleDelete()
      document.location.reload(true)
    })
    .catch((err) => {
      console.log(err)
      console.log("testando")
    })
  }
  const listTrips = trips?.map((trip) => {
      return (
        <div key={trip.id}>
          <InfosTrip>
          <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>
          <p><strong>Nome:</strong> {trip.name}</p>
          </button>
          <ButtonDelete>
          <button onClick={() => handleClickDelete(trip.id)}><TbTrash/></button>
          </ButtonDelete>
          </InfosTrip>
        </div>
      )
  })

 
  useProtectedPage()

  return (
    <ContainerAdmin>
           <ButtonBack>
      <button onClick={() => goBack(navigate)}><TiArrowBackOutline/></button>
      </ButtonBack>
      <h1>Painel Administrativo</h1>
      <ButtonsAdmin>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(navigate)}>Logout</button>
      </ButtonsAdmin>
      <ContainerTrips>
      {listTrips}
      </ContainerTrips>
    </ContainerAdmin>
  )
}

export default AdminHomePage