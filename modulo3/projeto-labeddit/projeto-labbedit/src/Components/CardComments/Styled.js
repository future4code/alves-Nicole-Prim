import styled from 'styled-components'

export const Container = styled.div`
    overflow: auto;
    &:hover{
        box-shadow: 5px 5px 5px #FFC7BB;
    }
    @media(max-width: 480px) {
width: 330px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-left: 1.4rem;
margin-right: 1.4rem;
}
`

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 25rem;
    cursor: pointer;
`

export const ContainerPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 7rem;
    gap: 2rem;
`

export const User = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
width: 150px;
text-align: center;
color: #6F6F6F;
@media(max-width: 480px) {
margin-left: 1rem;
}

`

export const Text = styled.p`
width: 345px;
margin-left: 10px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
@media(max-width: 480px) {
    width: 300px;
margin-left: 2.5rem;
}
`
export const Icones = styled.div`
display: flex;
width: 25rem;
gap: 1rem;
img {
    cursor: pointer;
}
@media(max-width: 480px) {
margin-left: 5rem;
}
`

export const Dados = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 9.56098px;
line-height: 12px;
text-align: center;
color: #6F6F6F;
`