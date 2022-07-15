import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import {useProtectedPage} from '../../Hooks/useProtectedPage'

export function CreateTripPage () {
  const navigate = useNavigate()
  useProtectedPage()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Criar</button>
    </div>
  )
}

export default CreateTripPage