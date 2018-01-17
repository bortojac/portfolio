import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchSearchResults } from '../../actions/actions';


const mapStateToProps = state => ({
    searchResults:  state.searchResults.tracks
  })

const mapDispatchToProps = dispatch => {
    return {
      onSearch: term => 
        dispatch(fetchSearchResults(term))
      }
    };
  
//const SearchBarContainer = connect(mapStateToProps, 
 //   mapDispatchToProps
//)(SearchBar);

export default connect(mapStateToProps, 
    mapDispatchToProps
)(SearchBar);
