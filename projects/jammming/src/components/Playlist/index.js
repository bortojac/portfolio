import { connect } from 'react-redux';
import Playlist from './Playlist';
//import { fetchSearchResults } from '../../actions/actions';


const mapStateToProps = state => {
    console.log(state.playlistTracks.tracks);
    return {playlistTracks: state.playlistTracks.tracks};
  }

/*const mapDispatchToProps = dispatch => {
    return {
      addOrRemove: term => 
        dispatch(fetchSearchResults(term))
      }
    };
  */
export default connect(mapStateToProps, 
    //mapDispatchToProps
)(Playlist);
