import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    height: 100vh;
    margin: 0;
   background-image: linear-gradient(#D1EDFF, #BBDBEB, #b6d4e8, #9fc8e0, #86BAD7);
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 13rem;
    img{
        width: 17rem;
    }
`

export const DivButtonHome = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    margin-top: 2rem;
    button{
    background-color: transparent;
    padding: 0.7rem;
    border-radius: 0.7rem;
    border: solid #207EB4;
    color: #207EB4;
    font-weight: bold;
    font-size: 1rem;
    &:hover{
        box-shadow: 0 0 10px #207EB4, 0 0 10px #207EB4;
        text-shadow: 0 0 5px #D1EDFF, 0 0 5px #D1EDFF;
    }
}
`