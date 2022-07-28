import styled from 'styled-components'

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 0.3rem;

button{
    border: none;
    cursor: pointer;
    background-color: transparent;
}
@media(max-width: 480px) {
    justify-content: space-between;

}
`