import styled from 'styled-components'

export const MaxContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 0;
    margin:0;
`
export const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 19rem;
    height: 43rem;
    display: block;
    background-image: linear-gradient(#FADED4, #F5CFC8, #FBBFB7);
`

export const DivImg = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
img{
    width: 13rem;
}
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;

`

export const MatchesDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0.8rem;
`

export const ButtonMatches = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg{
    width: 3rem;
    height: 3rem;
    color: #8C4545;
    }
`

export const ButtonDislike = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg{
    width: 4rem;
    height: 4rem;
    color: #E68282;
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