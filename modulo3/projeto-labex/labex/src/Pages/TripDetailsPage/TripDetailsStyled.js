import styled from 'styled-components'

export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;
padding: 0;
height: 100vh;
margin: 0;
box-sizing: border-box;
background-color: #D1EDFF;
text-align: center;
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

export const ButtonCandidate = styled.div`
display: flex;
gap: 1rem;
justify-content: center;
margin: 1.5rem;
button{
background-color: transparent;
padding: 0.7rem;
border-radius: 0.7rem;
border: solid #207EB4;
color: #207EB4;
font-weight: bold;
font-size: 1rem;
cursor: pointer;
&:hover{
    box-shadow: 0 0 10px #207EB4, 0 0 10px #207EB4;
    text-shadow: 0 0 5px #D1EDFF, 0 0 5px #D1EDFF;
}
}
`