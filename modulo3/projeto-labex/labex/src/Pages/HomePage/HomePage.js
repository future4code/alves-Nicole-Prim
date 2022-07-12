import React from 'react'
//assets
import Logo from '../../Assets/logo.png'
import { DivButtonHome, ContainerHome, DivLogo } from './HomeStyle'

export function HomePage() {
  return (
    <ContainerHome>
      <DivLogo>
      <img src={Logo} alt="Logo Labex" />
      </DivLogo>
      <DivButtonHome>
        <button>Lista de Viagens</button>
        <button>Área Administrativa</button>
      </DivButtonHome>
    </ContainerHome>
  )
}

export default HomePage