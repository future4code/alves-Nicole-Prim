import styled from 'styled-components'

export const ContainerHome = styled.div`


`

export const DivImg = styled.div`
@media(max-width: 480px) {
display: flex;
justify-content: center;
align-items: center;
margin-top: 6rem;
position: relative;
img{
width: 9.5rem;
height: 8.8rem;
}
}

`
export const DivP = styled.div`
@media(max-width: 480px) {
display: flex;
justify-content: center;
height: 1.3rem;
p{ 
font-family: 'IBM Plex Sans';
margin-top: 1rem;
font-style: normal;
position: absolute;
font-weight: 300;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #000000
}
}
`

export const Form = styled.form`
@media(max-width: 480px) {
display: flex;
flex-direction: column;
justify-content: center;
}
`

export const Inputs = styled.div`
display: flex;
justify-content: center;
`

export const InputUm = styled.input`
@media(max-width: 480px) {
box-sizing: border-box;
width: 340px;
height: 60px;
position: absolute;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
top: 359px;
}
`
export const InputDois = styled.input`
@media(max-width: 480px) {
box-sizing: border-box;
width: 340px;
height: 60px;
position: absolute;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
top: 427px;
}
`

export const ButtonForm = styled.div`
@media(max-width: 480px) {
display: flex;
justify-content: center;
padding: 13px, 133px, 13px, 133px;
align-items: center;
button{
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
border: none;
border-radius: 27px;
position: absolute;
width: 21rem;
height: 51px;
top: 543px;
}
}
`

export const DivLine = styled.div`
@media(max-width: 480px) {
display: flex;
justify-content: center;
position: relative;
img{

    width: 21rem;
    margin-top: 360px;
}
}
`

export const ButtonSign = styled.div`
@media(max-width: 480px) {
padding: 13px, 133px, 13px, 133px;
display: flex;
justify-content: center;
align-items: center;
button{
box-sizing: border-box;
position: absolute;
height: 51px;
width: 21rem;
top: 634px;
border: 1px solid #FE7E02;
border-radius: 27px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #FE7E02;
}
}
`