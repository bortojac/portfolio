import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/spotify';

// get the accessToken
Spotify.getAccessToken();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [],
      currentPlaylists: []
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  this.loadPlaylist = this.loadPlaylist.bind(this);
  this.getPlaylistTracks = this.getPlaylistTracks.bind(this);
  }

  addTrack(track) {
    //console.log(track.name);
    // if the track isn't already in the playlist, add it.
    console.log(track)
    if(!this.state.playlistTracks.map(playlistTrack => playlistTrack.id).includes(track.id)) {
      this.setState((prevState) => {
        return {playlistTracks: prevState.playlistTracks.concat(track)};
      })

    
  }
}

  loadPlaylist() {
    Spotify.loadPlaylist().then(playlists => {
      //console.log(playlists);
      this.setState({currentPlaylists: playlists});
    });
  }

  getPlaylistTracks(playlistID) {
    
    // set the tracks of the user's selected playlist to the state of playlistTracks. 
    Spotify.getPlaylistTracks(playlistID)
    .then(tracks => this.setState({playlistTracks: tracks}));
    //console.log(this.state.playlistTracks);

  }

  removeTrack(track) {
    //console.log(track.name);
    this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    })
  }

  updatePlaylistName(name) {
    //console.log(name);
    this.setState({playlistName: name});
    //console.log(this.state.playlistName);
  }

  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    //console.log(trackURIs);
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
     searchResults={this.state.searchResults}
     playlistTracks={this.state.playlistTracks}
     />
    <Playlist
     onSave={this.savePlaylist}
     onNameChange={this.updatePlaylistName}
     onRemove={this.removeTrack}
     playlistName={this.state.playlistName}
     playlistTracks={this.state.playlistTracks}
     loadPlaylist={this.loadPlaylist}
     currentPlaylists={this.state.currentPlaylists} 
     getPlaylistTracks={this.getPlaylistTracks}
     />
    </div>
  </div>
</div>
    );
  }
}

export default App;
