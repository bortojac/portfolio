import { connect } from 'react-redux';
import SearchResults from './SearchResults';
//import { fetchSearchResults } from '../../actions/actions';


const mapStateToProps = state => {
    console.log(state.searchResults.tracks);
    return {searchResults: state.searchResults.tracks};
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
)(SearchResults);
