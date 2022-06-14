import styled from "styled-components";
import background from '../img/backwhats.jpg';

export const Container = styled.div`
    height: 100vh;
    max-width: 80%;
    border: 1px solid black;
    background-image: url(${background});
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ContainerMsg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: transparent;
    margin: 0 1.5rem;
`

export const ContainerUm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  word-break: normal;
  border-radius: 10px;
  margin: 0.6rem;
`

export const Texto = styled.p`
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  word-break: break-word;
`

export const Bold = styled.p`
padding: 0.3rem 0.5rem;
  font-size: 1rem;
    font-weight:bold;
`

export const Inputs = styled.div`
    width: 100%;
    height: 3%;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    border:none;
    flex: 1 1 0%;
    align-items: flex-end;
    padding-left: 1%;
`

export const InputNome = styled.input`
    width: 15%;
    height: 20px;
    background-color: white;
    border-radius: 8px;
`

export const InputMsg = styled.input`
    height: 20px;
    background-color: white;
    border-radius: 8px;
    flex: 1 1 0%;
    
`

export const ButSend = styled.button`
    width: 10%;
    height: 20px;
    background-color: transparent;
    border: none;
    padding-right: 3%;
    padding-bottom: 25px;
`