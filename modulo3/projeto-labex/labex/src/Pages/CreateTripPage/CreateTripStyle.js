import styled from 'styled-components'

export const ContainerCreate = styled.div`
display: flex;
flex-direction: column;
padding: 0;
height: 100vh;
margin: 0;
box-sizing: border-box;
text-align: center;
background-color: #D1EDFF;
h1{
    color: #207EB4;
}
`

export const ButtonBack = styled.div`
display: flex;
margin-left: 2rem;
button{
    background-color: transparent;
    border: none;
    cursor: pointer;
svg {
    color: #207EB4;
    font-size: 3rem;
}
}
`

export const DivForm = styled.div`
display: flex;
margin-top: 3rem;
width: 100%;
justify-content: center;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 40rem;
button{
    background-color: transparent;
    margin: 1rem;
    width: 7rem;
    padding: 0.5rem;
    border-radius: 0.7rem;
    border: solid #207EB4;
    color: #207EB4;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 10px #207EB4, 0 0 10px #207EB4;
        text-shadow: 0 0 5px #D1EDFF, 0 0 5px #D1EDFF;
    }
}
input, select{
    font-size: 1.3rem;
    padding: 0.7rem;
    margin: 0.3rem;
    border-radius: 1rem;
    border: none;
}
`