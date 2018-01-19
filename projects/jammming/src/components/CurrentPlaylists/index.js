import { connect } from 'react-redux';
import CurrentPlaylists from './CurrentPlaylists';
import { 
  updatePlaylistName
 } from '../../actions/actions';
//import { fetchSearchResults } from '../../actions/actions';


const mapStateToProps = state => {
//  console.log(state);
    return {
      loading: state.loadPlaylists.loading,
      currentPlaylists: state.loadPlaylists.currentPlaylists
    };
  }

/*const mapDispatchToProps = dispatch => {
    return {
      onNameChange: name => dispatch(updatePlaylistName(name))
      };
    }
  */
export default connect(mapStateToProps, 
    //mapDispatchToProps
)(CurrentPlaylists);
