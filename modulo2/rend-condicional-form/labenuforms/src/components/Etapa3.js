import React from 'react';
import { Container, ListaPrimEtapa, ItensListaPrim } from '../style.js'


class Etapa3 extends React.Component {
    state = {
        valorGraduacao: "",
        valorComplementar: "",
    }

    onChangeGraduacao = (event) => {
        this.setState({
            valorGraduacao: event.target.value
        })
    }

    onChangeComplementar = (event) => {
        this.setState({
            valorComplementar: event.target.value
        })
    }

    render () {
        return (
            <Container>
                <h3>ETAPA 3 - Informações sobre quem não se formou no ensino superior nem está cursando</h3>

                <ListaPrimEtapa>
                    <ItensListaPrim>Por que você não terminou um curso de graduação?</ItensListaPrim>
                    <input type="text" value={this.state.valorGraduacao} onChange={this.onChangeGraduacao} />
                    <ItensListaPrim>Você fez algum curso complementar?</ItensListaPrim>
                    <select name="cursocomplementar" value={this.state.valorComplementar} onChange={this.onChangeComplementar}>
                        <option value="tecnico">Curso Técnico</option>
                        <option value="ingles">Cursos de Inglês</option>
                        <option value="naofez">Não fiz curso complementar</option>
                    </select>
                </ListaPrimEtapa>

            </Container>
        )
    }
}

export default Etapa3