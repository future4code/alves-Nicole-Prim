import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, InputUm, InputDois, ButtonForm, Inputs } from '../LoginPage/Styled'
import { useForm } from '../../Hooks/useForm'
import { BASE_URL } from '../../Constants/urls'
import { goToPostListPage } from '../../Routes/Coordinator'
import { InputTres, DivTitulo } from './Styled'

const SignUpPage = () => {
  const { form, onChange, cleanFields } = useForm({username: "", email: "", password: "" })

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/users/signup`, form)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToPostListPage(navigate)
        cleanFields()
      }).catch((error) => {
        alert("Tente novamente")
        console.log(error.response)
        cleanFields()
      })
  }

  return (
    <>
      <DivTitulo>
        <h2>Olá, boas vindas ao LabEddit ;)</h2>
      </DivTitulo>
      <Form onSubmit={onSubmitForm}>
        <Inputs>
        <InputTres
            name="username"
            type="text"
            onChange={onChange}
            value={form.username}
            placeholder="Nome de usuário *"
            required
          />
          <InputUm
            name="email"
            type="email"
            onChange={onChange}
            value={form.email}
            placeholder="E-mail *"
            required
          />
          <InputDois
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
            placeholder="Senha *"
            pattern={'^.{8,30}'}
            title={"A senha deve conter no mínimo 8 e no máximo 30 caracteres"}
            required
          />
        </Inputs>
        <p>Ao continuar, você concorda com o nosso Contrato de Usuárioe nossa Política de Privacidade.</p>
        <input type="checkbox"/>
        <p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>

        <ButtonForm>
          <button type="submit">Cadastrar</button>
        </ButtonForm>
      </Form>
    </>
  )
}

export default SignUpPage