//import {Spotify} from '../util/spotify';

export const ADD_TRACK = 'ADD_TRACK'
export const REMOVE_TRACK = 'REMOVE_TRACK'
export const SEARCH = 'SEARCH'
export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
//export const GET_AUTH = 'GET_AUTH'
export const AUTH_RECEIVED = 'AUTH_RECEIVED'

let accessToken = '';
let expireTime = '';
const clientID = '889519bd940a428087d936a46da18350';
const redirectURI = 'http://localhost:3000';
//const redirectURI = 'https://jammming.now.sh';
const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=playlist-modify-public&response_type=token`;


export function addTrack(track) {
    return {
        type: ADD_TRACK,
        track: track
    };
}

export function removeTrack(track) {
    return {
        type: REMOVE_TRACK,
        track: track
    };
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