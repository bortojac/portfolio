import React from 'react';
import Modal from 'react-modal';
import CurrentPlaylists from '../CurrentPlaylists/CurrentPlaylists';
import './PlaylistModal.css';

Modal.setAppElement('#root');

const PlaylistModal = ({ modalIsOpen, closeModal, currentPlaylists, getPlaylistTracks, onNameChange }) => {
        return (
    <div>
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="myModalDialog"
            overlayClassName="myOverlay"
        //style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={300}
        >

        <CurrentPlaylists
        //loadPlaylists={this.props.loadPlaylists}
        currentPlaylists={currentPlaylists}
        getPlaylistTracks={getPlaylistTracks}
        closeModal={closeModal}
        onNameChange={onNameChange}
        />
        
        </Modal>
    </div>
        );
}

export default PlaylistModal;