import React, { Component } from 'react'
import { Background, ContainerInicio } from './StyledHome'
import Logo from '../../assets/imagens/logo.jpg'



export default class Home extends Component {
    render() {
        return (
            <Background>
                <ContainerInicio>
                    <img src={Logo} alt="Logo"/>
                    <button onClick={ () => this.props.changeScreen("playlist")}>Clique aqui para começar sua aventura musical!</button>
                </ContainerInicio>
                <footer>
                    
                </footer>
            </Background>
        )
    }
}
