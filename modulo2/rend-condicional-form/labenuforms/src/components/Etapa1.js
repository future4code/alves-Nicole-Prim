import React from 'react';
import { Container, ListaPrimEtapa, ItensListaPrim } from '../style.js'


class Etapa1 extends React.Component {
    state = {
        valorNome: "",
        valorIdade: "",
        valorEmail: "",
        valorEscolaridade: ""
    }

    onChangeNome = (event) => {
        this.setState({
            valorNome: event.target.value
        })
    }

    onChangeIdade = (event) => {
        this.setState({
            valorIdade: event.target.value
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            valorEmail: event.target.value
        })
    }

    onChangeEscolaridade = (event) => {
        this.setState({
            valorEscolaridade: event.target.value
        })
    }

    render() {
        return (
            <Container>
                <h2>ETAPA 1 - DADOS GERAIS</h2>

                <ListaPrimEtapa>
                    <ItensListaPrim>Qual seu nome?</ItensListaPrim>
                    <input type="text" value={this.state.valorNome} onChange={this.onChangeNome} />
                    <ItensListaPrim>Qual sua idade?</ItensListaPrim>
                    <input type="number" value={this.state.valorIdade} onChange={this.onChangeIdade}/>
                    <ItensListaPrim>Qual seu email?</ItensListaPrim>
                    <input type="text" value={this.state.valorEmail} onChange={this.onChangeEmail}/>
                    <ItensListaPrim>Qual sua escolaridade?</ItensListaPrim>
                    <select name="escolaridade" value={this.state.valorEscolaridade} onChange={this.onChangeEscolaridade}>
                        <option value="medioincompleto">Ensino Médio Incompleto</option>
                        <option value="mediocompleto">Ensino Médio Completo</option>
                        <option value="superiorincompleto">Ensino Superior Incompleto</option>
                        <option value="superiorcompleto">Ensino Superior Completo</option>
                    </select>
                </ListaPrimEtapa>

            </Container>
        )
    }
}

export default Etapa1