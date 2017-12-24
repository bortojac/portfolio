// we are using implicit grant flow. See spotify dev docs
// future update: add state to the spotify URL. This is more secure. create a variable that is radomized for each client state that we can use to check the request.
// see https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow

let accessToken = '';
let expireTime = '';
const clientID = '889519bd940a428087d936a46da18350';
const redirectURI = 'https://jammming.now.sh';
const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=playlist-modify-public&response_type=token`;


let Spotify = {
        
    getAccessToken() {
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
    },
    
    //search returns a promise that will resolve to a list of tracks from the spotify api
    search(term) {
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
                return response.json();
            }
            throw new Error('The Request to Spotify API failed');
        },
        networkError => console.log(networkError.message)
    ).then(
        jsonResponse => {
            if(jsonResponse.tracks) {
                //console.log(jsonResponse.tracks.items);
                return jsonResponse.tracks.items.map(
                    track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    })
                );
            }
        }
        );
    },

    savePlaylist(playlistName, trackURIs) {
        if(!playlistName || trackURIs.length===0 || !trackURIs) return;
        let token = accessToken;
        let headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let userID = '';
        let playlistID = '';
        fetch('https://api.spotify.com/v1/me',
         {headers: headers})
         .then(response => response.json())
         .then(jsonResponse => userID = jsonResponse.id)
         .then(() => {
             //this post request makes the playlist
            fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    name: playlistName
                })
            }
           )
           .then(response => response.json())
           .then(jsonResponse => playlistID = jsonResponse.id)
           .then(() => {
             //this post request adds tracks to the playlist
             fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
             {
                 method: 'POST',
                 headers: headers,
                 body: JSON.stringify({
                 uris: trackURIs
                })
                }
            )
         });
        });
    }

};

export default Spotify;

