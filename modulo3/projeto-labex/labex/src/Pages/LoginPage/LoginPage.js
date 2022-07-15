import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage  } from '../../Routes/Coordinator'

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
      console.log(error.response)
    })
  }

  return (
    <div>
      <form onSubmit={submitLogin} >
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
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>

    </div>
  )
}

export default LoginPage