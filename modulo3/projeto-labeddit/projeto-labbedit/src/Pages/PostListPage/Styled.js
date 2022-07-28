import styled from 'styled-components'

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
margin-top: 50px;
`

export const InputUm = styled.textarea`
width: 25rem;
height: 40px;
background: #FFFFFF;
border: none;
border-radius: 12px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #6F6F6F;
@media(max-width: 480px) {
top: 359px;
width: 330px;
}

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
top: 280px;
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
    margin-top: 70px;
}
@media(max-width: 480px) {
img{
    width: 330px;
}
}
`