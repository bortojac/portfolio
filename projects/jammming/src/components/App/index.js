import { connect } from 'react-redux';
import App from './App';
import { getAccessToken } from '../../actions/actions';


const mapStateToProps = state => ({ tokenGranted: state.token.tokenGranted })

const mapDispatchToProps = dispatch => {
    return {
      getAccessToken: () => {
        dispatch(getAccessToken())
      }
    }
  }

//const SearchBarContainer = connect(mapStateToProps, 
 //   mapDispatchToProps
//)(SearchBar);

export default connect(mapStateToProps, 
    mapDispatchToProps
)(App);
