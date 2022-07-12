import React from 'react'
//assets
import Logo from '../../Assets/logo.png'
//styled
import { DivButtonHome, ContainerHome, DivLogo } from './HomeStyle'
//rotas
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../../Routes/Coordinator'

export function HomePage() {

  const navigate = useNavigate()

  return (
    <ContainerHome>
      <DivLogo>
      <img src={Logo} alt="Logo Labex" />
      </DivLogo>
      <DivButtonHome>
        <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
        <button onClick={() => goToLoginPage(navigate)}>Área Administrativa</button>
      </DivButtonHome>
    </ContainerHome>
  )
}

export default HomePage