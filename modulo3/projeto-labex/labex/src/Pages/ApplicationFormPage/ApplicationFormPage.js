import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../Routes/Coordinator';
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
import {BASE_URL} from '../../Credentials/Credentials'
import { useGetData } from '../../Hooks/useGetData';
import {countries} from '../../Constants/Countries'

export function ApplicationFormPage() {
  const navigate = useNavigate ()
  useProtectedPage()
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId: ""
  })
  const {dados} = useGetData("/trips/")
  const trips = dados?.trips

  const onSubmitApplyToTrip = (event, id) => {
    event.preventDefault()
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/trips/${form.tripId}/apply`, form, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      alert("Inscrição enviada com sucesso")
      console.log("feito", res)
      cleanFields()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <div>
        <form onSubmit={onSubmitApplyToTrip}>
          <select name={'tripId'}
          value={form.tripId}
          onChange={onChange}
          required >
            <option value="" disabled>
              Escolha uma das nossas viagens
            </option>
            {dados && trips.map((trip) => {
              return (
              <option key={trip.id} value={trip.id}>{trip.name}</option>
              )
            })}
            </select>
        <input 
        name={'name'} 
        value={form.name} 
        onChange={onChange} 
        placeholder="Nome" 
        required 
        pattern={'^.{5,}'} 
        tittle={"O nome deve ter no mínimo cinco caracteres"} />
        <input 
        name={'age'} 
        value={form.age} 
        onChange={onChange} 
        placeholder="Idade" 
        required
        min={18} />
        <input 
        name={'applicationText'} 
        value={form.applicationText} 
        onChange={onChange} 
        placeholder="Texto de candidatura" 
        required 
         />
        <input 
        name={'profession'} 
        value={form.profession} 
        onChange={onChange} 
        placeholder="Profissão" 
        required />
         <select
         name={'country'}
         value={form.country}
          onChange={onChange}
          required >
            <option value="" disabled>
              Escolha uma viagem para se inscrever
            </option>
         {countries.map((item) => {
           return (
            <option value={item} key={item}>{item}</option>
           )
         })}
            </select>
        <button>Enviar</button>
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}

export default ApplicationFormPage