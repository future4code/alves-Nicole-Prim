import React from 'react'
import Logo from '../../Assets/Logo.svg'
import {DivImg, DivP} from './Styled'

const LoginPage = () => {
  return (
    <>
      <DivImg>
        <img src={Logo} alt="imagem logo" />
      </DivImg>
      <DivP>
      <p>O projeto de rede social da Labenu</p>
      </DivP>
    </>
  )
}

export default LoginPage