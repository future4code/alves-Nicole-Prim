import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../Constants/urls'
import axios from 'axios'
import { goToSignUpPage, goToPostListPage } from '../Routes/Coordinator'


export const login = (body, cleanFields, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToPostListPage(navigate)
            cleanFields()
        }).catch((error) => {
            alert("Usuário ou senha inválidos")
            console.log(error.response)
            cleanFields()
        })
}

export const signUp = (body, cleanFields, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
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