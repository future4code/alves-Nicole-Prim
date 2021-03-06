import React, { useState } from 'react'
import { useGetData } from '../../Hooks/useGetData'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from '../../Routes/Coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import axios from 'axios'
import { BASE_URL, HEADERS } from '../../Credentials/Credentials'
import { ContainerAdmin, ButtonBack, ButtonsAdmin, InfosTrip, ButtonDelete, ContainerTrips } from './AdminStyled'
import { TiArrowBackOutline } from 'react-icons/ti'
import { TbTrash } from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify';

function AdminHomePage() {
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false)
  const { dados, loading, erro } = useGetData("/trips", refresh);
  const trips = dados?.trips

  const handleDelete = () => {
    setRefresh(!refresh)
  }

  const handleClickDelete = (id) => {
    const token = localStorage.getItem('token')
    axios.delete(`${BASE_URL}/trips/${id}`,
      {
        headers: {
          auth: token
        }
      }
    )
      .then((res) => {
        handleDelete()
        toast.success("Viagem deletada com sucesso")
      })
      .catch((err) => {
        console.log(err)
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
            <button onClick={() => handleClickDelete(trip.id)}><TbTrash /></button>
          </ButtonDelete>
        </InfosTrip>
      </div>
    )
  })

  const logout = () => {
    localStorage.clear();
    goToLoginPage(navigate)
  }

  useProtectedPage()

  return (
    <ContainerAdmin>
      <ButtonBack>
        <button onClick={() => goBack(navigate)}><TiArrowBackOutline /></button>
      </ButtonBack>
      <h1>Painel Administrativo</h1>
      <ButtonsAdmin>
        <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
        <button onClick={logout}>Logout</button>
      </ButtonsAdmin>
      <ContainerTrips>
        {listTrips}
      </ContainerTrips>
    </ContainerAdmin>
  )
}

export default AdminHomePage