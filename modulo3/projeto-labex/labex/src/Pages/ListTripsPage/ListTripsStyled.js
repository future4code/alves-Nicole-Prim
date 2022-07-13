import styled from 'styled-components'

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: #D1EDFF;
    h1{
        color: #207EB4;
    }
`

export const InfosTrip = styled.div`
    display: flex;
    flex-direction: column;
    width: 23rem;
    margin: 4rem;
    height: 30rem;
    background-color: #BBDBEB;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
p {
    color: #207EB4;
    font-size: 1.1rem;
    text-align: center;
}
img{
    width: 20rem;
    justify-content: center;
}
`

export const ContainerTrips = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin-top: 2rem;
    padding-left: 2rem;
`

export const DivButtons = styled.div`
    display: flex;
`