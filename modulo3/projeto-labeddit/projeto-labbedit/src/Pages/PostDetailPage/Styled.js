import styled from 'styled-components'

export const ContainerPost = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`

export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 23px;
`

export const InputDois = styled.textarea`
width: 25rem;
height: 131px;
background: #FFFFFF;
border: none;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
border-radius: 12px;
@media(max-width: 480px) {
top: 427px;
width: 330px;
}
`

export const ButtonForm = styled.div`
display: flex;
justify-content: center;
padding: 12px, 145px, 12px, 145px;
align-items: center;
button{
cursor: pointer;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
border: none;
border-radius: 27px;
position: absolute;
width: 25rem;
height: 47px;
top: 473px;
}
@media(max-width: 480px) {
button{
width: 330px;
}
}
`

export const DivLine = styled.div`
display: flex;
justify-content: center;
position: relative;
height: 1rem;
img{
    height: 1rem;
    width: 25rem;
    margin-top: 62px;
}
@media(max-width: 480px) {
img{
    width: 330px;
}
}
`