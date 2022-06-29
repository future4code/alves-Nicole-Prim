import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { Container, ContainerPlaylists, Names, BotaoDeletarDiv, BotaoIrDiv, ContainerCreate, ContainerLogo, ContainerDois, DivButton, ContainerPlaylistsDois } from './StyledPlaylist'
import Logo from '../../assets/imagens/logo2.png'
import Icone from '../../assets/imagens/iconehome.png'

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

    deletePlaylist = (id) => {
        if (window.confirm("Você deseja mesmo excluir essa playlist?")) {
            axios.delete(`${BASE_URL}/${id} `,
                {
                    headers: {
                        Authorization: "nicole-prim-alves"
                    }
                }).then((res) => {
                    this.getAllPlaylists()
                    alert("Playlist excluída com sucesso")
                }).catch((erro) => {
                    alert(erro.response)
                })
            }
    }

    render() {
        const playlists = this.state.listPlaylist.map((playlist) => {
            return <ContainerPlaylistsDois key={playlist.id}>
                <Names>
                {playlist.name}
                </Names>
                <BotaoIrDiv>
                <button onClick={() => this.props.goToMusics(playlist.id)}>Ir para a Playlist</button>
                </BotaoIrDiv>
                <BotaoDeletarDiv>
                <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </BotaoDeletarDiv>
                </ContainerPlaylistsDois>
        })
        return (
            <Container>
                <ContainerLogo>
                <img src={Logo} alt="Logo"/>
                <DivButton>
                <button onClick={() => this.props.changeScreen("home")}> <img src={Icone} alt="Ícone"/> </button>
                </DivButton>
                </ContainerLogo>
                <ContainerDois>
                <ContainerPlaylists>
                <h2>Aqui estão suas playlists</h2>
                <h3>O que vamos ouvir hoje?</h3>
                {playlists}
                </ContainerPlaylists>
                <ContainerCreate>
                <h3>Se você está enjoado(a) das suas playlists, crie uma nova abaixo:</h3>
                <input
                    type="text" onChange={this.onChangeInputPlaylist} value={this.state.inputNomePlaylist} placeholder="Digite o nome da Playlist..."
                />
                <button onClick={this.createPlaylist}>Criar Playlist</button>
                </ContainerCreate>
                </ContainerDois>
            </Container>
        )
    }
}
