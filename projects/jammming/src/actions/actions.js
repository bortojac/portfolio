//import {Spotify} from '../util/spotify';

export const ADD_TRACK = 'ADD_TRACK'
export const REMOVE_TRACK = 'REMOVE_TRACK'
export const SEARCH = 'SEARCH'
export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
//export const GET_AUTH = 'GET_AUTH'
export const AUTH_RECEIVED = 'AUTH_RECEIVED'
export const SAVE_NEEDED = 'SAVE_NEEDED'
export const SAVE_FINISHED = 'SAVE_FINISHED'
export const UPDATE_PLAYLIST_NAME = 'UPDATE_PLAYLIST_NAME'
export const PLAYLISTS_REQUEST = 'PLAYLISTS_REQUEST'
export const PLAYLISTS_RECIEVED = 'PLAYLISTS_RECEIVED'
export const PLAYLIST_TRACKS_REQUEST = 'PLAYLIST_TRACKS_REQUEST'
export const PLAYLIST_TRACKS_RECEIVED = 'PLAYLIST_TRACKS_RECEIVED'

let accessToken = '';
let expireTime = '';
const clientID = '889519bd940a428087d936a46da18350';
const redirectURI = 'http://localhost:3000';
//const redirectURI = 'https://jammming.now.sh';
const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=playlist-modify-public&response_type=token`;

// this action uses thunk middleware by returning a function and is needed
// since adding a track changes the playlist (i.e. it needs to be saved)
export function addTrack(track) {
    return (dispatch, getState) => {
        let name = getState().playlistName.playlistName
        dispatch(saveNeeded(name));

        // dispatching an "addTrack action below. return will not work since using thunk
        dispatch ({
            type: ADD_TRACK,
            track: track
        });
    }
}

// this action uses thunk middleware by returning a function and is needed 
//since removing a track changes the playlist (i.e. it needs to be saved)
export function removeTrack(track) {
    return (dispatch, getState) => {
        let name = getState().playlistName.playlistName
        dispatch(saveNeeded(name));
        
        // dispatching a "removeTrack" action below. return will not work since using thunk
        dispatch ({
            type: REMOVE_TRACK,
            track: track
        });
    }
}

export function requestSearch(term) {
    return {
        type: REQUEST_SEARCH,
        term: term
    };
} 

export function receiveSearch(jsonResponse) {
    //console.log(jsonResponse);
    return {
        type: RECEIVE_SEARCH,
        jsonSearchResults: jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        })
    )
    
        };
    }

export function fetchSearchResults(term) {
    return dispatch => {
        dispatch(requestSearch(term));
        return fetch(
            `https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        ).then(
            response => {
            if(response.ok) {
                //console.log(response.json());
                 return response.json();
            }
            throw new Error('The Request to Spotify API failed');
        },
       networkError => console.log(networkError.message)
    ).then(jsonResponse =>  dispatch(receiveSearch(jsonResponse)));
    };
}


/*export function getAuth() {
    //console.log('getAuth');
    return {
        type: GET_AUTH
        };
}*/

export function authReceived() {
    //console.log('authReceived');
    return {
    type: AUTH_RECEIVED
  };
}

export function getAccessToken() {
    
    return dispatch => {

        //dispatch(getAuth())
        if(accessToken) {
            return accessToken;
        }
        //check if there is a token in the url 
        const accessTokenRegX = /access_token=([^&]*)/;  //we use () around [^&]* so that it captures the access token
        const expireTimeRegX  = /expires_in=([^&]*)/;
        const urlAccessToken = window.location.href.match(accessTokenRegX);
        const urlExpireTime = window.location.href.match(expireTimeRegX); 
        // if there is a token in the url, update the accessToken and expireTime, and set the timeout
        if(urlAccessToken && urlExpireTime) {
            accessToken = urlAccessToken[1]; // accessing the 'captured' value from the match function above, which is the token
            expireTime = urlExpireTime[1];
            window.setTimeout(() => accessToken = '', expireTime*1000);  // on when the token expires, we need to reset the token. 
            window.history.pushState('Access Token', null, '/'); // need to clear the url so that the app doesn't try to grab the token after it's expired
        }
        else {
            //if there is no accessToken and also no accessToken in the URL, we need to redirect the user to the spotifyURL
            window.location = spotifyURL;
        }
        dispatch(authReceived())
   
    }

}

export function saveNeeded(name) {
    return {
        type: SAVE_NEEDED,
        playlistName: name
    };
}

export function saveFinished(name, id) {
    return {
        type: SAVE_FINISHED,
        playlistName: name,
        playlistID: id
    };
}

// saveToSpotify action.
//  - use thunk middleware to dispatch appropriate actions for logging saved state
//  - use thunk middleware to work enable async actions
export function saveToSpotify(playlistName, trackURIs) {

    return dispatch => {
        let token = accessToken;
        let headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let userID = '';
        let playlistID = '';


        if (!playlistName || trackURIs.length === 0 || !trackURIs) { return }

        // get userID
        dispatch(saveNeeded(playlistName));
        fetch('https://api.spotify.com/v1/me', { headers: headers })
            .then(response => response.json())
            .then(jsonResponse => {
                userID = jsonResponse.id;
                // use userID to fetch the user's playlists
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, { headers: headers });
            })
            .then(response => response.json())
            .then(jsonResponse => {
                let currentPlaylists = jsonResponse.items.map(playlist => ({name: playlist.name, id: playlist.id }));
                // if there is a playlist under the same name, update with PUT.
                if (currentPlaylists.map(obj => obj.name).includes(playlistName)) {

                    let playlistID = currentPlaylists.filter(obj => {
                       return obj.name === playlistName
                    })[0].id;
                    
                    //dispatch saveFinished action
                    dispatch(saveFinished(playlistName, playlistID));

                    fetch(
                        `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                        {
                            method: 'PUT',
                            headers: headers,
                            body: JSON.stringify({
                                uris: trackURIs
                            })
                        }
                    );
                }
                else {
                    // else create new playlist
                    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
                        {
                            method: 'POST',
                            headers: headers,
                            body: JSON.stringify({
                                name: playlistName
                            })
                        }
                    )
                        .then(response => response.json())
                        .then(jsonResponse => {
                            playlistID = jsonResponse.id;

                            // dispatch saveFinished action
                            dispatch(saveFinished(playlistName, playlistID));

                            // use playlistID to add tracks to the newly created playlist
                            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                                {
                                    method: 'POST',
                                    headers: headers,
                                    body: JSON.stringify({
                                        uris: trackURIs
                                    })
                                }
                            )
                        })
                }
            }
            );
    }

}

// this action does not absolutely need to pass dispatch as an argument, but we need to use thunk middleware to dispatch the
// saveNeeded action - idea being that the playlist name has changed so a save is needed.
export function updatePlaylistName(name) {
    return dispatch => {
        dispatch(saveNeeded(name))

        //dispatching an "updatePlaylistName" action below. return does not work since using thunk
        dispatch({
            type: UPDATE_PLAYLIST_NAME,
            name: name
        })

    }
}


export function playlistsRequest() {
    return {
        type: PLAYLISTS_REQUEST
    }
}

export function playlistsRecieved(jsonResponse) {
    return {
        type: PLAYLISTS_RECIEVED,
        currentPlaylists: jsonResponse.items.map(
            playlist => ({
                 name: playlist.name,
                 id: playlist.id
         })
      )
    }
}

export function loadPlaylists() {
    return dispatch => {
        dispatch(playlistsRequest())

            //if(!playlistName || trackURIs.length===0 || !trackURIs) return;
            let token = accessToken;
            let headers = {
                Authorization: `Bearer ${token}`
            };
            let userID = '';
           return fetch('https://api.spotify.com/v1/me',
             {headers: headers})
             .then(response => response.json())
             .then(jsonResponse => {
                //console.log(jsonResponse.id);
                //console.log(token);
                userID = jsonResponse.id
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {headers:headers})
        })
        .then(response => response.json())
        .then(jsonResponse => dispatch(playlistsRecieved(jsonResponse)));
        }
}


export function playlistTracksRequest() {
    return {
        type: PLAYLIST_TRACKS_REQUEST
    };
}

// helper function gor playlistTracksRecieved
function getTracks(jsonResponse) {
    if(jsonResponse.items) {
        //console.log(jsonResponse.items);
        return jsonResponse.items.map(
            item => ({
                id: item.track.id,
                name: item.track.name,
                artist: item.track.artists[0].name,
                album: item.track.album.name,
                uri: item.track.uri
            })
        );
    }
}
export function playlistTracksReceived(jsonResponse) {
    return {
        type: PLAYLIST_TRACKS_RECEIVED,
        tracks: getTracks(jsonResponse),
        //trackURIs: getTracks(jsonResponse).map(track => track.uri)
    };
}

export function getPlaylistTracks(playlistID) {
    return dispatch => {
        dispatch(playlistTracksRequest());
        let headers = {Authorization: `Bearer ${accessToken}`};
        let userID = '';

        // make a request to get the userID and use that with the playlistID argument to get the tracks
        return fetch('https://api.spotify.com/v1/me',{headers: headers})
        .then(response => response.json())
        .then(jsonResponse => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {headers: headers});
        })
        .then(response => response.json())
        .then(jsonResponse =>  dispatch(playlistTracksReceived(jsonResponse))
    );
    };
}