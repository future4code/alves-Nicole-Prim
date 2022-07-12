import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'

export function TripDetailsPage () {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  )
}

export default TripDetailsPage