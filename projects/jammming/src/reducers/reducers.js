// import reducers from all other reducer files

import { combineReducers } from 'redux';
import { playlistTracks, searchResults} from './searchResults';
import { token } from './app';

const rootReducer = combineReducers({
  playlistTracks,
  searchResults,
  token
})

export default rootReducer

// combine the reducers into one root reducer and this will be imported into configureStore.js