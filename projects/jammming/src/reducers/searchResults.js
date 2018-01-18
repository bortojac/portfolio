import {
    ADD_TRACK,
    REMOVE_TRACK,
    SEARCH,
    REQUEST_SEARCH,
    RECEIVE_SEARCH,
    UPDATE_PLAYLIST_NAME,
    SAVE_NEEDED,
    SAVE_FINISHED
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
        tracks: [],
        trackURIs: []
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


export function savePlaylist (
    state = {
        saved: false,
        playlistName: '',
        playlistID: ''
    },
    action
) {
    switch (action.type) {
        case SAVE_NEEDED:
            return Object.assign({}, state, {
                saved: false,
                playlistName: action.playlistName,
            })
        case SAVE_FINISHED:
            return Object.assign({}, state, {
                saved: true,
                playlistName: action.playlistName,
                playlistID: action.playlistID
        })
        default:
        return state
    }
}

// this reducer governs the name of the playlist. the one managed by savePlaylist is in a different slice of the state that is just for documentation purposes
export function playlistName (
    state = {
        name: 'New Playlist'
    },
    action
) { switch(action.type) {

    case UPDATE_PLAYLIST_NAME:
        return Object.assign({}, state, {
            name: action.name
        })
        default:
        return state
}

}


