import React from 'react';


class UserPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let playlistID = this.props.playlistObj.id;
        let playlistName = this.props.playlistObj.name;
        //console.log(playlistID);
        //console.log(playlistName);

        // call the getPlaylistTracks function
        this.props.getPlaylistTracks(playlistID);
        //console.log(typeof(this.props.onNameChange));
        this.props.onNameChange(playlistName);
        
        // close the modal
        this.props.closeModal();
        //this.props.getPlaylistTracks(playlistID);
    }
    render() {
        return (
            <li onClick={this.handleClick} className="playlist">
            {//console.log(this.props.playlistObj.id)
            }
              <h3>{this.props.playlistObj.name}</h3>
            </li> 
        );
    }

}

export default UserPlaylist;