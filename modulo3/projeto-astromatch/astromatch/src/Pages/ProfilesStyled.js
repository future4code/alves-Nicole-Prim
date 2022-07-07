import styled from 'styled-components'

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImageProfile = styled.img`
    margin-bottom: 1rem;
    display: flex;
    width: 17rem;
    height: 20rem;
    object-fit: cover, contain;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 8rem;
    h2{
        color: #8C4545;
        margin-bottom:0;
    }
    p{
        margin-left: 0.9rem;
        margin-right: 0.9rem;
        color: #8C4545;
    }
`