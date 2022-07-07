import styled from 'styled-components'

export const ContainerMatches = styled.div`
    display: flex;
    overflow-y: scroll;
    height: 27rem;
    flex-direction: column;
    padding-top: 2rem;
`

export const InfosUser = styled.div`
    display: flex;
    gap: 2rem;
    background-color: white;
img{
    display: flex;
    width: 6rem;
    height: 6rem;
    margin-bottom: 1rem;
    border-radius: 30rem;
    margin-left: 1rem;
}
p {
    display: flex;
    align-items: center;
    color: #8C4545;
    font-weight: bold;
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
        color: #F2EFE9;
        padding: 1rem;
        font-weight: bold;
        font-size: 1rem;
    }
`