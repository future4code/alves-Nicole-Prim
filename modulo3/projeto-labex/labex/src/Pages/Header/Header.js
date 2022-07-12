import React from 'react'
//assets
import Labex from '../../Assets/labex.png'
//styled
import {ContainerHeader} from './HeaderStyle'
//rotas
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../Routes/Coordinator'

export function Header() {

 //const navigate = useNavigate()

  return (
    <ContainerHeader>
      <img src={Labex} alt="Logo Labex" />
      <button onClick={() => goToHomePage()}> Home</button>
    </ContainerHeader>
  )
}

export default Header;