import styled from 'styled-components'

export const MaxContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`
export const Container = styled.div`
    border: 1px solid black;
    width: 21rem;
    height: 38rem;
    display: block;
    background-color: #F9E2DC;
`

export const DivImg = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
img{
    width: 12rem;
    height: 50%;
}
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;

`

export const MatchesDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

`

export const ButtonMatches = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    svg{
    width: 2rem;
    height: 2rem;
    color: #F24949;
    }
`

export const ButtonDislike = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg{
    width: 4rem;
    height: 4rem;
    color: #D97E7E;
    }
`

export const ButtonLike = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg{
    width: 4rem;
    height: 4rem;
    color: #F20505;
    }
`