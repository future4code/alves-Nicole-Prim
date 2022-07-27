import styled from 'styled-components'

export const Container = styled.div`
    overflow: auto;
`

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
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

`

export const Text = styled.p`
width: 345px;
margin-left: 10px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
`
export const Icones = styled.div`
display: flex;
width: 25rem;
gap: 2rem;
margin-top: 18px;
`