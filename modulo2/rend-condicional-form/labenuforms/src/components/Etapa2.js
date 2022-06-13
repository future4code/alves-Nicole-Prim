import React from 'react';
import { Container, ListaPrimEtapa, ItensListaPrim } from '../style.js'


class Etapa2 extends React.Component {
    state = {
        valorCurso: "",
        valorUnidade: "",
    }

    onChangeCurso = (event) => {
        this.setState({
            valorCurso: event.target.value
        })
    }

    onChangeUnidade = (event) => {
        this.setState({
            valorUnidade: event.target.value
        })
    }

    render() {
        return (
            <Container>
                <h3>ETAPA 2 - Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h3>

                <ListaPrimEtapa>
                    <ItensListaPrim>Qual o curso?</ItensListaPrim>
                    <input type="text" value={this.state.valorCurso} onChange={this.onChangeCurso} />
                    <ItensListaPrim>Qual a unidade de ensino?</ItensListaPrim>
                    <input type="text" value={this.state.valorUnidade} onChange={this.onChangeUnidade} />
                </ListaPrimEtapa>
            </Container>
        )
    }
}

export default Etapa2