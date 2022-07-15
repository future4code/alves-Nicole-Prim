import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../Routes/Coordinator';
import {useProtectedPage} from '../../Hooks/useProtectedPage'

export function ApplicationFormPage() {
  const navigate = useNavigate ()
  useProtectedPage()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage