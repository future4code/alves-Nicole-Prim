import styled from 'styled-components'

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100vw;
    border: 2px solid black;
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
    border: 2px solid purple;

    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
p {
    color: #207EB4;
    font-size: 1.1rem;
    text-align: center;
    font-size: 1.6rem;
}
`

export const ContainerTrips = styled.div`
    display: flex;
    height: 100%;
    margin-top: 2rem;
    padding-left: 2rem;
    border: 2px solid red;
    flex-wrap: wrap;
    justify: center;
`

export const DivButtons = styled.div`
    display: flex;
`