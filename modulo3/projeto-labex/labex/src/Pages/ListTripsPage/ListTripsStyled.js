import styled from 'styled-components'

export const ContainerList = styled.div`
    display: inline-block;
    flex-direction: column;
    padding: 0;
    height: 100vh;
    width: 100vw;
    text-align: justify;
    margin: 0;
    background-image: linear-gradient(#D1EDFF, #BBDBEB, #b6d4e8, #9fc8e0, #86BAD7);
`

export const InfosTrip = styled.div`
    display: inline-block;
    flex-direction: column;
    width: 45rem;
    margin: 0.5rem;
    background-color: #BBDBEB;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
p {
    color: #207EB4;
    font-size: 1.1rem;
    text-align: center;
}
`

export const ContainerTrips = styled.div`
    display: inline-block;
    height: 50rem;
    width: 50rem;
    flex-direction: column;
    margin-top: 2rem;
    overflow-y: scroll;
    padding-left: 2rem;
    &::-webkit-scrollbar {
        width: 0.7rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #BBDBEB;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #86BAD7;
        border-radius: 1rem;
    }
`

export const DivImg = styled.div`
    display: inline-block;
    margin: 11rem;

`

export const DivButtons = styled.div`
    display: inline-block;
`