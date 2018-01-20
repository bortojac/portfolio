import React from 'react';
import './app.css';
import SearchBar from '../searchComponents/SearchBar';
import SearchResults from '../searchComponents/SearchResults';
import Playlist from '../playlistComponents/Playlist';



const App = ({ getAccessToken }) => {

  getAccessToken();

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
