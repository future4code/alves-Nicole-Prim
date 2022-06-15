import React from 'react'
import styled from 'styled-components'
import { textChangeRangeNewSpan } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  cursor: pointer;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: Date.now(),
      texto: 'Aula',
      completa: false,

    }],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefaComponent = localStorage.getItem("tarefas")
    const converteTarefa = JSON.parse(tarefaComponent)
    converteTarefa && this.setState({
      tarefas: converteTarefa
    })
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novasTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({ tarefas: novasTarefas })
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const umaNovaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return umaNovaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  deletarTarefa = (id) => {
    const tarefasDelete = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })

    this.setState({ tarefas: tarefasDelete })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <p>Clique duas vezes na tarefa para exclui-la</p>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (

                <Tarefa

                  completa={tarefa.completa}

                  onClick={() => this.selectTarefa(tarefa.id)}
                  onDoubleClick={() => this.deletarTarefa(tarefa.id)}

      
                >
                  {tarefa.texto}

                </Tarefa>
            )

          })}

        </TarefaList>
      </div >
    )
  }
}

export default App
