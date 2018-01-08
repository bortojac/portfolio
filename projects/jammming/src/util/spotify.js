// we are using implicit grant flow. See spotify dev docs
// future update: add state to the spotify URL. This is more secure. create a variable that is radomized for each client state that we can use to check the request.
// see https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow

let accessToken = '';
let expireTime = '';
const clientID = '889519bd940a428087d936a46da18350';
//const redirectURI = 'http://localhost:3000';
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

        let token = accessToken;
        let headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        let userID = '';
        let playlistID = '';


        if (!playlistName || trackURIs.length === 0 || !trackURIs) { return }

        // get userID
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
                //console.log(jsonResponse);
                //console.log(currentPlaylists);
                // if there is a playlist under the same name, update with PUT.
                if (currentPlaylists.map(obj => obj.name).includes(playlistName)) {

                    let playlistID = currentPlaylists.filter(obj => {
                       return obj.name === playlistName
                    })[0].id;
                    //console.log(playlistID);
                    //console.log(playlistID);
                    //console.log('PUT');
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
    },

    loadPlaylist() {
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
    .then(jsonResponse => {
        //console.log(jsonResponse);
        return jsonResponse.items.map(
                   playlist => ({
                        name: playlist.name,
                        id: playlist.id
                })
             );
    });
    },

    getPlaylistTracks(playlistID) {
    
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
        .then(jsonResponse => {
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
            });
    }

    // this is a test for the get request to get a list of playlists from the user
    /*test() {
        fetch(`https://api.spotify.com/v1/users/bortojac/playlists`,
        {
            headers: {
            'Authorization': `Bearer ${accessToken}`
            }//,
            //body: JSON.stringify({
           //     name: playlistName
            })
       .then(response => {
           return response.json();
        //response.json()
    })
       .then(jsonResponse =>  {
           console.log(jsonResponse.items); 
           let temp = jsonResponse.items.map(playlist => ({
                   name: playlist.name,
                   id: playlist.id
           })
        );
        return temp;
       })
    }*/
};

export default Spotify;

