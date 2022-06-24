import React, { Component } from 'react'

export default class PlaylistDetails extends Component {
  state = {
    musics: []
    
  }
  render() {
    return (
      <div>
          {this.props.id}
        <button onClick={() => this.props.changeScreen("home")}>Ir para a Home</button>
        <button onClick={() => this.props.changeScreen("playlist")}>Voltar para Playlists</button>
      </div>
    )
  }
}
