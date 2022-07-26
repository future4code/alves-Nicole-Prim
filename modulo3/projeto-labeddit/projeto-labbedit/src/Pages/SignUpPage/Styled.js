import styled from 'styled-components'

export const InputTres = styled.input`
box-sizing: border-box;
width: 340px;
height: 60px;
position: absolute;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
top: 254px;
@media(max-width: 480px) {
top: 288px;
}
`

export const DivTitulo = styled.div`
display: flex;
justify-content: center;
align-items: center;
h2{
position: absolute;
width: 364px;
height: 86px;
left: 32px;
top: 95px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;
color: #373737;
}
`

export const Check = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
margin-top: 0px;
width: 337.22px;
height: 38px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #000000;
}
`

export const DivP = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
height: 93px;
top: 520px;
p{
    width: 337.22px;
height: 38px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #000000;
}
`

export const ButtonForm = styled.div`
display: flex;
justify-content: center;
padding: 13px, 133px, 13px, 133px;
align-items: center;
button{
    cursor: pointer;
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
top: 540px;
}
@media(max-width: 480px) {
button{
top: 640px;
}
}
`