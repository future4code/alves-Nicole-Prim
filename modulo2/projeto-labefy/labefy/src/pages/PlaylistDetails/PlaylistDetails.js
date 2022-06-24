import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../../constants/url'

export default class PlaylistDetails extends Component {
  state = {
    name: "",
    artist: "",
    url: "",
    musicsList: [],
  }

  componentDidMount() {
    this.getPlaylistTracks()
  }

  getPlaylistTracks = (id) => {
    axios.get(`${BASE_URL}/${this.props.id}/tracks`,
      {
        headers: {
          Authorization: "nicole-prim-alves"
        }
      }).then((res) => {
        this.setState({ musicsList: res.data.result.tracks })
      }).catch(() => {
      })
  }

  render() {
    const musics = this.state.musicsList.map((music) => {
      return <p key={music.id}>{music.name}</p>
    })
    return (
      <div>
         <input
                    type="text" value={this.state.name} placeholder="Digite o nome da Música"
                />
        {musics}
        <button onClick={() => this.props.changeScreen("home")}>Ir para a Home</button>
        <button onClick={() => this.props.changeScreen("playlist")}>Voltar para Playlists</button>
      </div>
    )
  }
}
