import { connect } from 'react-redux';
import Playlist from './Playlist';
import { 
  updatePlaylistName,
  saveToSpotify,
  loadPlaylists
 } from '../../actions/actions';
//import { fetchSearchResults } from '../../actions/actions';


const mapStateToProps = state => {
  console.log(state);
    //console.log(state.playlistTracks.tracks);
    //let URIs = state.playlistTracks.tracks.map(track => track.uri);
    return {
      playlistTracks: state.playlistTracks.tracks,
      playlistName: state.playlistName.name,
      //trackURIs: state.playlistTracks.URIs,
      saved: state.savePlaylist.saved,
      currentPlaylists: state.currentPlaylists

    };
  }

const mapDispatchToProps = dispatch => {
    return {
      onNameChange: name => dispatch(updatePlaylistName(name)),
      onSave: (playlistName, trackURIs) => dispatch(saveToSpotify(playlistName, trackURIs)),
      loadPlaylists: () => dispatch(loadPlaylists())
      };
    }
  
export default connect(mapStateToProps, 
    mapDispatchToProps
)(Playlist);
