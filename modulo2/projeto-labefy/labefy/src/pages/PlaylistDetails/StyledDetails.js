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
h4 {
    font-size: 2rem;
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
`

export const ContainerLogo = styled.div`
color: white;
display: block;
padding-top: 5%;
img {
    width: 22rem;
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

`

export const ContainerPlaylistsDois = styled.div`
align-items: center;
width: 100%;
display: flex;
justify-content: space-around;
p {
    font-size: 1.5rem;
    font-weight: bold;
}
`

export const BotaoDeletar = styled.button`
padding: 1%;
color: black;
font-size: 1rem;
border-radius: 1rem;
border: 3px solid;
background-color: #5F6A6B;
width: 10%;
cursor: pointer;
:hover {
        color: #39D5E3;
    }
`

export const BotaoIr = styled.button`
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

`