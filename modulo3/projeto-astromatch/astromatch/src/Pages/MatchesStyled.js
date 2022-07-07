import styled from 'styled-components'

export const ContainerMatches = styled.div`
    display: flex;
    height: 27rem;
    width: 19rem;
    flex-direction: column;
    padding-top: 2rem;
    overflow-y: scroll;
`

export const InfosUser = styled.div`
    display: flex;
    margin: 0.5rem;
    background-color: #F5CFC8;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    img{
    display: flex;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 30rem;
}
p {
    display: flex;
    align-items: center;
    color: #8C4545;
    font-size: 1.2rem;
    font-weight: bold;
    width: 6rem;
}
`

export const ButtonDivClear = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background-color: #8C4545;
        border-radius: 2rem;
        color: #F5CFC8;
        padding: 1rem;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    }
`