import styled from 'styled-components'

export const ContainerHeader = styled.div`
    background-color: #d1edff;
    display: flex;
    justify-content: space-between;
`

export const DivImg = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
`

export const DivButtonHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: end;
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