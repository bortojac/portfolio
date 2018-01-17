import {
    ADD_TRACK,
    REMOVE_TRACK,
    SEARCH,
    REQUEST_SEARCH,
    RECEIVE_SEARCH,
} from '../actions/actions.js';


// helper function for adding track. remember that 'state' here is going to be the slice of the state managed by playlistTracks()
function addTrack(state, track) {
        return Object.assign({}, state, {
            tracks: [
                ...state.tracks,
                track
            ]
          })
}

// helper function for removing track. remember that 'state' here is going to be the slice of the state managed by playlistTracks()
function removeTrack(state, track) {
    return Object.assign({}, state, {
        tracks: [
            ...state.tracks.filter(playlistTrack => playlistTrack.id !== track.id)
        ]
      })

    //this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    //})
}

export function playlistTracks(
    state = {
        tracks: []
    }, action) {

    switch(action.type) {
        case ADD_TRACK:
            return addTrack(state, action.track);
        case REMOVE_TRACK:
            return removeTrack(state, action.track);
        
         default:
            return state
    }

}

export function searchResults (
    state = {
        tracks: [],
        isFetching: false
    },
    action
  ) {
    switch (action.type) {
      case REQUEST_SEARCH:
        return Object.assign({}, state, {
          isFetching: true,
          //didInvalidate: false
        })
      case RECEIVE_SEARCH:
        return Object.assign({}, state, {
          isFetching: false,
          //didInvalidate: false,
          tracks: action.jsonSearchResults,
          //lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }




