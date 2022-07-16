import React from 'react'
//assets
import Labex from '../../Assets/labex.png'
//styled
import { ContainerHeader, DivImg, DivButtonHeader } from './HeaderStyle'
//rotas
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToLoginPage } from '../../Routes/Coordinator'

function Header() {

  const navigate = useNavigate()

  return (
    <ContainerHeader>
      <DivImg>
      <img src={Labex} alt="Logo Labex" />
      </DivImg>
      <DivButtonHeader>
      <button onClick={() => goToHomePage(navigate)}> Home</button>
    <button onClick={() => goToLoginPage(navigate)}>Login</button>
    </DivButtonHeader>
    </ContainerHeader>
  )
}

export default Header;