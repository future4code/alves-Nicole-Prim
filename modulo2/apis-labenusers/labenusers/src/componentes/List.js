import axios from 'axios'
import React, { Component } from 'react'

export default class List extends Component {


  render() {
    const listUsers = this.props.users.map((user) => {
      return (
      <div key={user.id}>
        <li> {user.name}</li>
        <button onClick={() => this.props.deleteUser(user.id)}>X</button>

      </div>
      )
    })

    return (
      <div>
        <button onClick={() => this.props.trocaTela("cadastro") }>Voltar</button>
        <button onClick={() => this.props.getUsers()}>Ver Lista</button>
        <h2>Lista de Usuários</h2>
        {listUsers}
        <hr />
        <h3>Procurar Usuário</h3>
        <input type="text" placeholder='Nome exato para busca' />
        <button>Salvar edição</button>
      </div>
    )
  }
}
