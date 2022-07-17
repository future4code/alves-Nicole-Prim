import styled from 'styled-components'

export const ContainerAdmin = styled.div`
display: flex;
flex-direction: column;
padding: 0;
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

export const InfosTrip = styled.div`
    display: flex;
    flex-direction: column;
    width: 27rem;
    margin: 2rem;
    height: 10rem;
    background-color: #b6e4ff;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
p {
    color: #207EB4;
    font-size: 1.1rem;
    text-align: center;
    font-size: 1.6rem;
}
button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #D1EDFF;
    }
}
@media(max-width: 800px) {
    width: 20rem;
    margin-top:1rem;
    margin-left: 2rem;
    height: 9rem;
p{
    font-size: 1.2rem;
}
  }
`

export const ButtonDelete = styled.div`
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

export const ContainerTrips = styled.div`
display: flex;
flex-direction: column;
margin-top: 2rem;
align-items: center;
`

export const ButtonsAdmin = styled.div`
display: flex;
gap: 1rem;
justify-content: center;
margin: 1rem;
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