import React from 'react'
//assets
import Logo from '../Assets/logo.png'

export function HomePage () {
  return (
    <div>
      <h1>HomePage</h1>
      <img src={Logo} alt="Logo Labex" />
      <button>Lista de Viagens</button>
      <button>Área Administrativa</button>
      </div>
  )
}

export default HomePage