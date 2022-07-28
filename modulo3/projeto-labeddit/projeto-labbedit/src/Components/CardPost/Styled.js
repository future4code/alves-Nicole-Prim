import styled from 'styled-components'

export const Container = styled.div`
    overflow: auto;
    background-color: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
display: flex;
flex-direction: column;

width: 25rem;
    @media(max-width: 480px) {
        width: 373px;

margin-left: 1.4rem;
margin-right: 1.4rem;
}
`

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 335px;
    cursor: pointer;

   
`

export const ContainerPost = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    gap: 1rem;
    width: 330px;
    @media(max-width: 480px) {
        align-items: flex-start;
padding: 0px;
gap: 10px;
position: absolute;
width: 373px;
}
`

export const User = styled.p`
width: 132px;
height: 16px;
    font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #6F6F6F;
text-align: center;

@media(max-width: 480px) {

}
`

export const Text = styled.p`
width: 335px;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;

@media(max-width: 480px) {
    width: 304px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;
}
`
export const Icones = styled.div`
display: flex;
width: 175px;
gap: 10px;
img {
    cursor: pointer;
    border: 0.793333px solid #ECECEC;
border-radius: 28px;
padding: 4.66667px;
}
@media(max-width: 480px) {

}
`

export const Dados = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 9.56098px;
line-height: 12px;
text-align: center;
align-items: center;
color: #6F6F6F;
display: flex;
width: 1rem;

`