import React from 'react';
import './userPlaylist.css';

class UserPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let playlistID = this.props.playlistObj.id;
        let playlistName = this.props.playlistObj.name;

        // call the getPlaylistTracks function
        this.props.getPlaylistTracks(playlistID);
        this.props.onNameChange(playlistName);

        // close the modal
        this.props.closeModal();
    }
    render() {
        return (
            <li onClick={this.handleClick} className="modalListItem">
                <h3>{this.props.playlistObj.name}</h3>
            </li>
        );
    }
}

export default UserPlaylist;