import React from 'react'
//assets
import Logo from '../../Assets/logo.png'
//styled
import { DivButtonHome, ContainerHome, DivLogo } from './HomeStyle'
//rotas
import { useNavigate } from 'react-router-dom'

export function HomePage() {

  const navigate = useNavigate()

  const goToListTripsPage = () => {
    navigate("/ListTripsPage")
  }

  const goToLoginPage = () => {
    navigate("/LoginPage")
  }

  return (
    <ContainerHome>
      <DivLogo>
      <img src={Logo} alt="Logo Labex" />
      </DivLogo>
      <DivButtonHome>
        <button onClick={goToListTripsPage}>Lista de Viagens</button>
        <button onClick={goToLoginPage}>Área Administrativa</button>
      </DivButtonHome>
    </ContainerHome>
  )
}

export default HomePage