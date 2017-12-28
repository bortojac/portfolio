import React from 'react';
import TrackList from '../TrackList/TrackList';
import PlaylistModal from '../PlaylistModal/PlaylistModal';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.modalOpenFuncs = this.modalOpenFuncs.bind(this);
    }

            
    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    modalOpenFuncs() {
        // update the currentPlaylists state. 
        //TO DO: this could update earlier than onclick. maybe on a timer?? Need this or progress bar
        this.props.loadPlaylist();
        //console.log(this.props.currentPlaylists)
        this.openModal();
    }    

    
    render() {
        return (
            <div className="Playlist">
            <input onChange={this.handleNameChange} value={this.props.playlistName}
             />
            <TrackList onRemove={this.props.onRemove} tracks={this.props.playlistTracks} isRemoval={true}/>
            <a onClick={this.props.onSave} className="Playlist-button">SAVE TO SPOTIFY</a>
            <a onClick={this.modalOpenFuncs} className="Playlist-button">LOAD A PLAYLIST</a>
            <PlaylistModal 
            loadPlaylist={this.props.loadPlaylist}
            onNameChange={this.props.onNameChange}
            openModal={this.modelOpenFuncs} 
            closeModal={this.closeModal}
            modalIsOpen={this.state.modalIsOpen} 
            currentPlaylists={this.props.currentPlaylists}
            getPlaylistTracks={this.props.getPlaylistTracks}
            />
          </div>
        );
    }
}

export default Playlist;