import { connect } from 'react-redux';
import PlaylistModal from './PlaylistModal';
import { 
  updatePlaylistName
 } from '../../actions/actions';
//import { fetchSearchResults } from '../../actions/actions';


const mapStateToProps = state => {
//  console.log(state);
    return {
      currentPlaylists: state.loadPlaylists.currentPlaylists
    };
  }

const mapDispatchToProps = dispatch => {
    return {
      onNameChange: name => dispatch(updatePlaylistName(name))
      };
    }
  
export default connect(mapStateToProps, 
    mapDispatchToProps
)(PlaylistModal);
