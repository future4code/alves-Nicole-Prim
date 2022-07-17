import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goBack } from '../../Routes/Coordinator';
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../Credentials/Credentials'
import { useGetData } from '../../Hooks/useGetData';
import { countries } from '../../Constants/Countries'
import { ContainerApply, Form, DivForm, ButtonBack } from './ApplicationStyled'
import { TiArrowBackOutline } from 'react-icons/ti'
import { ToastContainer, toast } from 'react-toastify';

export function ApplicationFormPage() {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId: ""
  })
  const { dados } = useGetData("/trips/")
  const trips = dados?.trips

  const onSubmitApplyToTrip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")
    axios.post(`${BASE_URL}/trips/${form.tripId}/apply`, form)
      .then((res) => {
        toast.success("Inscrição enviada com sucesso")
        cleanFields()
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    <ContainerApply>
      <ButtonBack>
        <button onClick={() => goBack(navigate)}><TiArrowBackOutline /></button>
      </ButtonBack>
      <h1>Inscreva-se para uma viagem</h1>

      <DivForm>
        <Form onSubmit={onSubmitApplyToTrip}>
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
            pattern={'^.{3,}'}
            title={"O nome deve conter no mínimo três caracteres"} />
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
            pattern={'^.{30,}'}
            title={"O nome deve conter no mínimo trinta caracteres"} 
          />
          <input
            name={'profession'}
            value={form.profession}
            onChange={onChange}
            placeholder="Profissão"
            required
            pattern={'^.{10,}'}
            title={"O nome deve conter no mínimo dez caracteres"}  />
          <select
            name={'country'}
            value={form.country}
            onChange={onChange}
            required >
            <option value="" disabled>
              País
            </option>
            {countries.map((item) => {
              return (
                <option value={item} key={item}>{item}</option>
              )
            })}
          </select>
          <button>Enviar</button>
        </Form>
      </DivForm>
    </ContainerApply>
  )
}

export default ApplicationFormPage