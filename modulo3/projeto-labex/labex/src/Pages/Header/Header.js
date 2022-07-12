import React from 'react'
import Labex from '../../Assets/labex.png'
import {ContainerHeader} from './HeaderStyle'

export function Header() {
  return (
    <ContainerHeader>
      <img src={Labex} alt="Logo Labex" />
    </ContainerHeader>
  )
}

export default Header;