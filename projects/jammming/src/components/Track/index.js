import { connect } from 'react-redux';
import Track from './Track';
import { addTrack, removeTrack } from '../../actions/actions';


const mapStateToProps = state => ({
    playlistTracks:  state.playlistTracks.tracks
  })

const mapDispatchToProps = dispatch => {
    return {
      onAdd: track => dispatch(addTrack(track)),
      onRemove: track => dispatch(removeTrack(track))
    
      }
    };
  
//const SearchBarContainer = connect(mapStateToProps, 
 //   mapDispatchToProps
//)(SearchBar);

export default connect(mapStateToProps, 
    mapDispatchToProps
)(Track);
