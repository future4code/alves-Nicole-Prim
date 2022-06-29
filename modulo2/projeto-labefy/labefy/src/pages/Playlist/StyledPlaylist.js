import styled from 'styled-components'
import Show from '../../assets/imagens/micro.jpeg'

export const Container = styled.div`
background-image: url(${Show});
background-size: cover;
display: flex;
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
opacity: 0.9;

`
export const ContainerDois = styled.div`

`

export const ContainerPlaylists = styled.div`
margin-top: 8vh;
border: 5px solid #39D5E3;
border-radius: 2rem;;
padding-left: 2%;
padding-right: 2%;
color: black;
display:flex;
flex-direction: column;
overflow-y: scroll;
align-items: center;
width: 60rem;
max-height: 30rem;
@media screen and (min-device-width : 1200px) {
margin-top: 5vh;
width: 40rem;
}
`

export const ContainerCreate = styled.div`
margin-top: 3%;
width: 60rem;
font-size: 1.5rem;
color: black;
display: flex;
align-items: center;
flex-direction: column;
input {
    padding: 2%;
    width: 20%;
    border: 2px solid #39D5E3;
    border-radius: 2rem;
    font-size: 60%;
}
button {
    margin-top: 3%;
    padding: 1%;
color: black;
font-size: 1rem;
border-radius: 1rem;
border: 3px solid;
background-color: #5F6A6B;
width: 20%;
cursor: pointer;
:hover {
        color: #39D5E3;
    }
}
@media screen and (min-device-width : 1200px) {
margin-top: 5vh;
width: 40rem;
font-size: 1.2rem;
}
`

export const ContainerLogo = styled.div`
color: white;
display: block;
padding-top: 5%;
img {
    width: 22rem;
}
@media screen and (min-device-width : 1200px) {
img{
    width: 17rem;
}
padding-top: 3%;
}
`

export const DivButton = styled.div`
margin-left: 5%;
padding-top: 6%;
display: flex;
height: 13vh;
button {
    background-color: transparent;
    width: 5rem;
    font-weight: bold;
    cursor: pointer;
    img {
        width: 3rem;
    }
}
@media screen and (min-device-width : 1200px) {
margin-left: 15%;
height: 8vh;
margin-top: 120%;
}
`

export const ContainerPlaylistsDois = styled.div`
align-items: center;
width: 100%;
display: flex;
justify-content: space-around;
`

export const Names = styled.div`
font-size: 1.5rem;
font-weight: bold;
width: 11%;
padding-top: 3%;
`

export const BotaoDeletarDiv = styled.div`
display: flex;
width: 10%;
button {
    padding: 1%;
color: black;
font-size: 1rem;
border-radius: 1rem;
border: 3px solid;
background-color: #5F6A6B;
width: 100%;
cursor: pointer;
:hover {
        color: #39D5E3;
    }
}
`

export const BotaoIrDiv = styled.div`
width: 30%;
button {
    padding: 1%;
color: black;
font-size: 1rem;
border-radius: 1rem;
border: 3px solid;
background-color: #5F6A6B;
width: 100%;
cursor: pointer;
:hover {
        color: #39D5E3;
    }
}
`