import React from "react";
import axios from "axios";
import List from './componentes/List.js'


class App extends React.Component {
  state = {
    nomeUsuario: "",
    emailUsuario: "",
    erro: "",
    users: [],
    tela: "cadastro"
  }

  createUser = () => {
    const newUser = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }
    axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
      newUser,
      {
        headers: {
          Authorization: "nicole-prim-alves"
        }
      }
    )
      .then((resposta) => {
        alert("Usário cadastrado");
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  }

  novoNomeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value })
  }

  novoEmailUsuario = (e) => {
    this.setState({ emailUsuario: e.target.value })
  }

  getUsers = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
        {
          headers: {
            Authorization: "nicole-prim-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ users: resposta.data })
        console.log(resposta.data)
      })
      .catch((erro) => {
        console.log(erro.response)
      })
  }

  componentDidMount() {
    this.getUsers()
  }

  trocaTela = (telaEscolhida) => {
    this.setState({ tela: telaEscolhida })
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "nicole-prim-alves"
        }
      }
    ).then((resposta) => {
      alert("Tem certeza de que deseja deletar?")
      this.getUsers()
      alert("Usuário removido da lista")
    }).catch((erro) => {
      alert(erro.response.data)
    })
  }

  telaExibida = () => {
    if (this.state.tela === "cadastro") {
      return <div>
        <button onClick={() => this.trocaTela("List")}>Trocar de Tela</button>
        <input type="text" placeholder="Nome" value={this.state.nomeUsuario} onChange={this.novoNomeUsuario} />
        <input type="email" placeholder="E-mail" value={this.state.emailUsuario} onChange={this.novoEmailUsuario} />
        <button onClick={this.createUser}>Criar Usuário</button>
      </div>
    } else {
      return <List
        users={this.state.users}
        trocaTela={this.trocaTela}
        deleteUser={this.deleteUser}
        getUsers={this.getUsers}
      />
    }
  }

  render() {
    return (
      <div>
        {this.telaExibida()}
      </div>
    );
  }
}

export default App;
