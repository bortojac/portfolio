import React from 'react';
import '../CurrentPlaylists/CurrentPlaylists.css';


class CurrentPlaylists extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // this function will handle the click on a playlist div and update the state of playlistTracks
    // will need to pass a function down from App.js? new fetch to get tracks from selected playlist?
    handleClick() {
        console.log('create this function');
    }

    // this component will render a list of the current playlists in the user's spotify. It will render Playlist
    render() {

        let playlistNames = this.props.currentPlaylists.map(obj => obj.name);
        console.log(playlistNames);
        return (
            <div className="">
            <h1>Select a Playlist to edit</h1>
                {playlistNames.map(
                    name => {
                     return (
                     <div className="playlist">
                        <div onClick={this.handleClick}className="playlist-information">
                          <h3>{name}</h3>
                        </div>
                        </div>
                        );}
                    )
                    }
                </div>
        );
    }

}

export default CurrentPlaylists;