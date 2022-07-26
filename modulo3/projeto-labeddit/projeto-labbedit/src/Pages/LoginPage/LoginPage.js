import React from 'react'
import Logo from '../../Assets/Logo.svg'
import { DivImg, DivP, Form, InputUm, InputDois, ButtonForm, Inputs, DivLine, ButtonSign } from './Styled'
import { useForm } from '../../Hooks/useForm'
import Line from '../../Assets/Line.svg'
import { goToSignUpPage, goToPostListPage } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import axios from 'axios'
import { login } from '../../Services/User'
import {useUnprotectedPage} from '../../Hooks/useUnprotectedPage'

const LoginPage = () => {
  useUnprotectedPage()
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, cleanFields, navigate)
  }



  return (
    <>
      <DivImg>
        <img src={Logo} alt="imagem logo" />
      </DivImg>
      <DivP>
        <p>O projeto de rede social da Labenu</p>
      </DivP>
      <Form onSubmit={onSubmitForm}>
        <Inputs>
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
            required
          />
        </Inputs>
        <ButtonForm>
          <button type="submit">Continuar</button>
        </ButtonForm>
      </Form>
      <DivLine>
        <img src={Line} alt="linha" />
      </DivLine>
      <ButtonSign>
        <button onClick={() => goToSignUpPage(navigate)}>Crie uma conta!</button>
      </ButtonSign>
    </>
  )
}

export default LoginPage