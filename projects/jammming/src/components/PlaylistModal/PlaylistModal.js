import React from 'react';
import Modal from 'react-modal';
import CurrentPlaylists from '../CurrentPlaylists/CurrentPlaylists';
import './PlaylistModal.css';

Modal.setAppElement('#root');

class PlaylistModal extends React.Component {

    render() {
        return (
    <div>
        <Modal 
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.props.closeModal}
            className="myModalDialog"
            overlayClassName="myOverlay"
        //style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={300}
        >

        <CurrentPlaylists
        //loadPlaylists={this.props.loadPlaylists}
        currentPlaylists={this.props.currentPlaylists}
        getPlaylistTracks={this.props.getPlaylistTracks}
        closeModal={this.props.closeModal}
        onNameChange={this.props.onNameChange}
        />
        
        </Modal>
    </div>
        );
    }
}

export default PlaylistModal;