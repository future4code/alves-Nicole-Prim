import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../Routes/Coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useForm } from '../../Hooks/useForm'
import { BASE_URL } from '../../Credentials/Credentials'
import axios from 'axios'
import { ContainerCreate, ButtonBack, Form, DivForm } from './CreateTripStyle'
import { TiArrowBackOutline } from 'react-icons/ti'
import { ToastContainer, toast } from 'react-toastify';
import { planets } from '../../Constants/Planets'

export function CreateTripPage() {
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
        toast.success("Viagem criada com sucesso")
        cleanFields()
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  return (
    <ContainerCreate>
      <ButtonBack>
        <button onClick={() => goBack(navigate)}><TiArrowBackOutline /></button>
      </ButtonBack>
      <h1>Criar Viagem</h1>
      <DivForm>
        <Form onSubmit={onSubmitCreateTrip}>
          <input
            name={'name'}
            value={form.name}
            onChange={onChange}
            placeholder="Nome"
            required
            pattern={'^.{5,}'}
            title={"O nome deve conter no mínimo cinco caracteres"} />
          <select
            name={'planet'}
            value={form.planet}
            onChange={onChange}
            required >
            <option value="" disabled>
              Planeta
            </option>
            {planets.map((item) => {
              return (
                <option value={item} key={item}>{item}</option>
              )
            })}
          </select>
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
            required
            pattern={'^.{30,}'}
            title={"A descrição deve conter no mínimo trinta caracteres"}
          />
          <input
            name={'durationInDays'}
            value={form.durationInDays}
            onChange={onChange}
            placeholder="Duração em dias"
            min={50}
            title={"A duração deve ter no mínimo 50 dias"}
            required />
          <button>Criar</button>
        </Form>
      </DivForm>
    </ContainerCreate>
  )
}

export default CreateTripPage