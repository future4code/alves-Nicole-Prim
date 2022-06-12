import React from "react";
import { FiSend, FiTarget } from 'react-icons/fi';
import { Container, ContainerUm, Bold, Texto, Inputs, InputNome, InputMsg, ButSend, ContainerMsg } from './ChatStyle.js';

export class Chat extends React.Component {
    state = {
        mensagens: [
            {
                nome: "",
                mensagem: "",
            }
        ],
        valorNome: "",
        valorMensagem: ""
    }

    enviar = () => {
        const novaMsg = {
            nome: this.state.valorNome,
            mensagem: this.state.valorMensagem
        }
        const novaMsgDois = [...this.state.mensagens, novaMsg]

        this.setState({
            mensagens: novaMsgDois,
            valorNome: "",
            valorMensagem: ""
        })
    }

    onChangeInputNome = (event) => {
        this.setState({ valorNome: event.target.value })
    }

    onChangeInputMsg = (event) => {
        this.setState({ valorMensagem: event.target.value })
    }


    render() {
        const listaDeMensagens = this.state.mensagens.map((mensagemchat, indice) => {
            const nome = mensagemchat.nome.toLowerCase()
            if (nome === 'eu') {
                return (
                    <ContainerUm key={indice}>
                    
                    <Texto>{mensagemchat.mensagem}</Texto>
                    </ContainerUm>

                )
            } else {
                return (
                    <ContainerUm key={indice}>
                        <Bold>{mensagemchat.nome}</Bold>
                        <Texto>{mensagemchat.mensagem}</Texto>
                    </ContainerUm>
                )
            }
        })

        return (

            <Container>
                <ContainerMsg>
                    {listaDeMensagens}
                </ContainerMsg>

                <Inputs>
                    <InputNome value={this.state.valorNome} type={"text"} placeholder={"Usuário"} onChange={this.onChangeInputNome} />

                    <InputMsg value={this.state.valorMensagem} type={"text"} placeholder={"Digite sua mensagem..."} onChange={this.onChangeInputMsg} />

                    <ButSend onClick={this.enviar}>
                        <FiSend size={20} />
                    </ButSend>

                </Inputs>
            </Container>


        )
    }
}
