import React from 'react';
import TrackList from '../TrackList/TrackList';
import PlaylistModal from '../PlaylistModal/PlaylistModal';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            saved: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.modalOpenFuncs = this.modalOpenFuncs.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.renderCheckMark = this.renderCheckMark.bind(this);
    }

            
    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
        this.setState({saved: false});

    }

    modalOpenFuncs() {
        // update the currentPlaylists state. 
        //TO DO: this could update earlier than onclick. maybe on a timer?? Need this or progress bar
        this.props.loadPlaylist();
        //console.log(this.props.currentPlaylists)
        this.openModal();
    }    
    handleSave() {
        // save to spotify
        this.props.onSave();
        // change the saved state to render the checkmark
        this.setState({saved: true});

    }

    renderCheckMark() {
        // if saved state is true, render the checkmark
        if(this.state.saved) {
        return (
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>);
        } 
        else {
            return 'SAVE PLAYLIST';
        }
    }

    componentWillReceiveProps(nextProps) {
        // if the tracks in the playlist change do not render the checkmark
        if(nextProps.playlistTracks !== this.props.playlistTracks) {
            
            this.setState({saved: false})
        }

    }

    
    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} value={this.props.playlistName} />
                <div className="playlistContainer">
                    <TrackList onRemove={this.props.onRemove} tracks={this.props.playlistTracks} isRemoval={true} />
                </div>
                <div className="buttonContainer">
                    <a onClick={this.handleSave} className="Playlist-button">{this.renderCheckMark()}</a>
                    <a onClick={this.modalOpenFuncs} className="Playlist-button">LOAD A PLAYLIST</a>
                </div>
                <PlaylistModal
                    //loadPlaylist={this.props.loadPlaylist}
                    onNameChange={this.props.onNameChange}
                    //openModal={this.modelOpenFuncs}
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