import styled from 'styled-components'
import Gif from '../../assets/imagens/gifdisco.gif'

export const Background = styled.div`
background-image: url(${Gif});
background-size: cover;
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
`

export const ContainerInicio = styled.div`
margin-top: 4%;
background-color: white;
opacity: 0.6;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
img{
    width: 40rem;
}
button {
    margin-bottom: 2%;
    padding: 1%;
    color: black;
    font-size: 1rem;
    border-radius: 1rem;
    border: 3px solid;
    cursor: pointer;
}
`