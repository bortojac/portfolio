import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/spotify';

Spotify.getAccessToken();
//console.log(Spotify.loadPlaylist());


//Spotify.test();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: [],
      currentPlaylists: []
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  this.loadPlaylist = this.loadPlaylist.bind(this);
  }

  addTrack(track) {
    //console.log(track.name);
    // if the track isn't already in the playlist, add it.
    if(this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id) !== track.id) {
      this.setState((prevState) => {
        return {playlistTracks: prevState.playlistTracks.concat(track)};
      })
    }
  }
  
  loadPlaylist() {
    Spotify.loadPlaylist().then(playlists => {
      console.log(playlists);
      this.setState({currentPlaylists: playlists});
    });
  }

  removeTrack(track) {
    //console.log(track.name);
    this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    })
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    console.log(trackURIs);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    
  }

  search(term) {
    Spotify.search(term)
    .then(searchResults => {
      //console.log(searchResults);
      this.setState({
      searchResults: searchResults
      });
    });

    //this.setState({searchResults: searchResults}));
    //this.setState({searchResults: Spotify.search(term)});
  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar
     onSearch={this.search}
     />
    <div className="App-playlist">
    <SearchResults 
     onAdd={this.addTrack}
     searchResults={this.state.searchResults}/>
    <Playlist
     onSave={this.savePlaylist}
     onNameChange={this.updatePlaylistName}
     onRemove={this.removeTrack}
     playlistName={this.state.playlistName}
     playlistTracks={this.state.playlistTracks}
     loadPlaylist={this.loadPlaylist}
     currentPlaylists={this.state.currentPlaylists} 
     />
    </div>
  </div>
</div>
    );
  }
}

export default App;
