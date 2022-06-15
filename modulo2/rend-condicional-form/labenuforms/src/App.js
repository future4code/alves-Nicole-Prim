import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';
import { Container } from './style.js'


class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;
      default:
        return <Etapa4 />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }


  render() {
    return (
      <Container>
        {this.renderizaEtapa()}
        {
          this.state.etapa !== 4 &&
          <button onClick={this.irParaProximaEtapa} >Próxima Etapa</button>
        }
      </Container>
    );
  }
}

export default App;
