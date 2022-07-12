import React from 'react'

import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage  } from '../../Routes/Coordinator'

export function LoginPage() {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
    </div>
  )
}

export default LoginPage