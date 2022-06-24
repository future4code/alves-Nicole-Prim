import React, { Component } from 'react'
import Home from './pages/Home/Home'
import Playlist from './pages/Playlist/Playlist'
import PlaylistDetails from './pages/PlaylistDetails/PlaylistDetails'

export default class App extends Component {
  state = {
    screen: "home",
    clickedPlaylistId: ""
  }

  chooseScreen = () => {
    switch (this.state.screen) {
      case "home":
        return <Home
          changeScreen={this.changeScreen}
        />
      case "playlist":
        return <Playlist
          changeScreen={this.changeScreen}
          goToMusics={this.goToMusics}
          id={this.state.clickedPlaylistId}
        />
      case "playlistdetails":
        return <PlaylistDetails 
          id={this.state.clickedPlaylistId}
          changeScreen={this.changeScreen}
        />
      default:
        return <Home
          changeScreen={this.changeScreen}
        />
    }
  }

  changeScreen = (screen) => {
    this.setState({ screen: screen })
  }

  goToMusics = (id) => {
    this.setState({screen: "playlistdetails", clickedPlaylistId: id})
  }

  render() {
    return (
      <div>
        {this.chooseScreen()}
      </div>
    )
  }
}
