import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import { useForm } from '../../Hooks/useForm'
import { BASE_URL } from '../../Credentials/Credentials'
import axios from 'axios'

export function CreateTripPage () {
  const navigate = useNavigate()
  useProtectedPage()
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  })

  const onSubmitCreateTrip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/trips`, form, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      alert("Viagem criada com sucesso")
      cleanFields()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <div>
            <button onClick={() => goBack(navigate)}>Voltar</button>
      <h2>Criar Viagem</h2>
      <form onSubmit={onSubmitCreateTrip}>
        <input 
        name={'name'} 
        value={form.name} 
        onChange={onChange} 
        placeholder="Nome" 
        required 
        pattern={'^.{3,}'} 
        tittle={"O nome deve ter no mínimo três caracteres"} />
        <input 
        name={'planet'} 
        value={form.planet} 
        onChange={onChange} 
        placeholder="Escolha um planeta" 
        required />
        <input 
        name={'date'} 
        value={form.date} 
        onChange={onChange} 
        placeholder="dd/mm/aaaa" 
        required 
        type={'date'} />
        <input 
        name={'description'} 
        value={form.description} 
        onChange={onChange} 
        placeholder="Descrição" 
        required />
        <input 
        name={'durationInDays'} 
        value={form.durationInDays} 
        onChange={onChange} 
        placeholder="Duração em dias" 
        required />
        <button>Criar</button>
      </form>
    </div>
  )
}

export default CreateTripPage