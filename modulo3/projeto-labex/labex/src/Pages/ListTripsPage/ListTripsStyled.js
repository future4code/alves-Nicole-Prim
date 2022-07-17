import styled from 'styled-components'

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    text-align: center;
    background-color: #D1EDFF;
    h1{
        color: #207EB4;
    }
`

export const InfosTrip = styled.div`
    display: flex;
    flex-direction: column;
    width: 27rem;
    margin: 4rem;
    height: 32rem;
    background-color: #b6e4ff;
    padding: 0.5rem;
    overflow: auto;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
p {
    color: #207EB4;
    text-align: center;
    font-size: 1.6rem;
}
@media(max-width: 800px) {
    width: 17rem;
    margin-top:1rem;
    margin-left: 0;
    height: 24rem;
p{
    font-size: 1.2rem;
}
  }
`

export const ContainerTrips = styled.div`
    display: flex;
    padding-left: 2rem;
    flex-wrap: wrap;
`

export const DivButtons = styled.div`
    display: flex;
`

export const ButtonInsc = styled.div`
    display: flex;
    justify-content: center;
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

export const ButtonBack = styled.div `
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