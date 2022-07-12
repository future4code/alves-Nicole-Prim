import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToCreateTripPage, goToLoginPage, goToTripDetailsPage } from '../../Routes/Coordinator'

export function AdminHomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToTripDetailsPage(navigate)}>Detalhes viagem</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(navigate)}>Logout</button>
    </div>
  )
}

export default AdminHomePage