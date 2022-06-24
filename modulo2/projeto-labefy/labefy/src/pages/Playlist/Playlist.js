import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

export default class Playlist extends Component {
    state = {
        inputNomePlaylist: "",
        listPlaylist: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    onChangeInputPlaylist = (e) => {
        this.setState({ inputNomePlaylist: e.target.value })
    }
    createPlaylist = () => {
        const newPlaylist = {
            name: this.state.inputNomePlaylist
        }
        axios.post(`${BASE_URL}`,
            newPlaylist,
            {
                headers: {
                    Authorization: "nicole-prim-alves"
                }
            }
        ).then(() => {
            alert("A Playlist foi criada com sucesso!")
            this.setState({ inputNomePlaylist: "" })
            this.getAllPlaylists()
        }).catch((erro) => {
            alert("Opa, algo deu errado. Tente novamente")
        })
    }

    getAllPlaylists = () => {
        axios.get(`${BASE_URL}`,
            {
                headers: {
                    Authorization: "nicole-prim-alves"
                }
            }).then((res) => {
                this.setState({ listPlaylist: res.data.result.list })
            }).catch(() => {
            })
    }

    render() {
        const playlists = this.state.listPlaylist.map((playlist) => {
            return <p key={playlist.id} onClick={ () => this.props.goToMusics (playlist.id)}>{playlist.name}</p>
        })
        return (
            <div>

                <input
                    type="text" onChange={this.onChangeInputPlaylist} value={this.state.inputNomePlaylist} placeholder="Digite o nome da Playlist..."
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>
                {playlists}
                <button onClick={() => this.props.changeScreen("home")}>Ir para a Home</button>



            </div>
        )
    }
}
