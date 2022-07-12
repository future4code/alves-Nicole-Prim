import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../Routes/Coordinator';

export function ApplicationFormPage() {
  const navigate = useNavigate ()
  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage