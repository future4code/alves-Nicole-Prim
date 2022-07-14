import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminHomePage  } from '../../Routes/Coordinator'

import {useForm} from '../../Hooks/useForm'

export function LoginPage() {
  const {form, onChange, cleanFields} = useForm({email: "", password: ""})



  const navigate = useNavigate()


  const submitLogin = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitLogin} onClick={() => goToAdminHomePage(navigate)}>
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