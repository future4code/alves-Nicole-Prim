import React, {useState} from 'react'
import {TiArrowBackOutline} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage  } from '../../Routes/Coordinator'
import {ContainerLogin, ButtonBack, Form, DivForm} from './LoginStyled'
import {useForm} from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../Credentials/Credentials'


export function LoginPage() {
  const {form, onChange, cleanFields} = useForm({email: "", password: ""})

  const navigate = useNavigate()

  const submitLogin = (event) => {
    console.log("entrou")
    event.preventDefault()
    axios.post(`${BASE_URL}/login`, form)
    .then((response) => {
      console.log("Deu certo", response.data)
      localStorage.setItem('token', response.data.token)
      goToAdminHomePage(navigate)
      cleanFields()
    }).catch((error) => {
      alert("Usuário ou senha inválidos")
      console.log(error.response)
    })
  }

  return (
    <ContainerLogin>
            <ButtonBack>
      <button onClick={() => goBack(navigate)}><TiArrowBackOutline /></button>
      </ButtonBack>
      <h1>Login</h1>
<DivForm>
      <Form onSubmit={submitLogin} >
        <input
        name="email"
        type="email"
        onChange={onChange}
        value={form.email}
        placeholder={"E-mail"}
        required
        />
       <input
       name="password"
       type="password"
       onChange={onChange}
        value={form.password}
        placeholder={"Senha"}
        pattern={"^.{6,}"}
        tittle={"A senha deve ter no mínimo seis caracteres"}
        required
        />
      
      <button >Entrar</button>
      </Form>
      </DivForm>


    </ContainerLogin>
  )
}

export default LoginPage