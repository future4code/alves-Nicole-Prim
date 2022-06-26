import axios from 'axios'
import React, { Component } from 'react'
import { BASE_URL } from '../../constants/url'
import { Container, ContainerPlaylists, MusicasDiv, ArtistDiv, AudioDiv, BotaoDeletarDiv, ContainerCreate, ContainerLogo, ContainerDois, DivButton, ContainerPlaylistsDois } from './StyledDetails.js'
import Logo from '../../assets/imagens/logo2.png'
import Icone from '../../assets/imagens/iconehome.png'

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

  componentDidUpdate(){
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

  addMusic = (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }
    axios.post(`${BASE_URL}/${this.props.id}/tracks`, body,
      {
        headers: {
          Authorization: "nicole-prim-alves"
        }
      }).then((res) => {
        alert("Pronto. A música foi adicionada!")
        this.setState({ name: "", artist: "", url: "" })
      }).catch((erro) => {
        alert(erro.response.data.message)
      })
  }

  newMusicName = (e) => {
    this.setState({ name: e.target.value})
  }

  newMusicArtist = (e) => {
    this.setState({ artist: e.target.value})
  }

  newMusicURL = (e) => {
    this.setState({ url: e.target.value})
  }

  deleteMusics = (id) => {
    if (window.confirm("Você deseja mesmo excluir essa música?")) {
        axios.delete(`${BASE_URL}/${this.props.id}/tracks/${id}`,
            {
                headers: {
                    Authorization: "nicole-prim-alves"
                }
            }).then((res) => {
              this.getPlaylistTracks()
                alert("Música excluída com sucesso")
            }).catch((erro) => {
                alert(erro.response)
            })
        }
}

  render() {
    const musics = this.state.musicsList.map((music) => {
      return <ContainerPlaylistsDois key={music.id}>
        <MusicasDiv>
        <p>{music.name}</p>
        </MusicasDiv>
        <ArtistDiv>
        <p>{music.artist}</p>
        </ArtistDiv>
        
        <AudioDiv ref="audio_tag" src={music.url} controls />
       
        <BotaoDeletarDiv>
        <button onClick={() => this.deleteMusics(music.id)}>X</button>
        </BotaoDeletarDiv>
      </ContainerPlaylistsDois>
    })
    return (
      <Container>
        <ContainerLogo>

      <img src={Logo} alt="Logo"/>
      <DivButton>
        <button onClick={() => this.props.changeScreen("home")}><img src={Icone} alt="Ícone"/></button>
        <button onClick={() => this.props.changeScreen("playlist")}>Voltar para Playlists</button>
        </DivButton>
      </ContainerLogo>
  
      <ContainerDois>
      <ContainerPlaylists>
        <h4>Dê o play e divirta-se com suas músicas!</h4>
        {musics}
        </ContainerPlaylists>
        <ContainerCreate>
        <h3>Insira novas músicas na sua playlist:</h3>
        <input type="text" onChange={this.newMusicName} value={this.state.name} placeholder="Nome da Música" />
        <input type="text" onChange={this.newMusicArtist} value={this.state.artist} placeholder="Artista" />
        <input type="text" onChange={this.newMusicURL} value={this.state.url} placeholder="URL" />
        <button onClick={this.addMusic}>Adicionar</button>
        </ContainerCreate>
        </ContainerDois>

      </Container>
    )
  }
}
