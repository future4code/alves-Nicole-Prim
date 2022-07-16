import React, {useState} from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from '../../Routes/Coordinator'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../../Credentials/Credentials'

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
          <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>
          <p><strong>Nome:</strong> {trip.name}</p>
          </button>
          <button onClick={() => handleClickDelete(trip.id)}>Deletar Viagem</button>
        </div>
      )
  })

  // const listTrips = trips?.map((trip) => {
  //   if (trip) {
  //   return (
  //     <div key={trip.id}>
  //       <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>
  //       <p><strong>Nome:</strong> {trip.name}</p>
  //       </button>
  //       <button onClick={() => handleClickDelete(trip.id)}>Deletar Viagem</button>
  //     </div>
  //   )} else {
  //     return (
  //       <p>carregando...</p>
  //     )
  //   }
  // })

 
  //useProtectedPage()

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