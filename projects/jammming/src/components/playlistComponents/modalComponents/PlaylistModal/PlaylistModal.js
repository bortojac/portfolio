import React from 'react';
import Modal from 'react-modal';
import CurrentPlaylists from '../CurrentPlaylists';
import './playlistModal.css';

Modal.setAppElement('#root');

const PlaylistModal = ({ modalIsOpen, closeModal, currentPlaylists, getPlaylistTracks, onNameChange }) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="myModalDialog"
                overlayClassName="myOverlay"
                contentLabel="Example Modal"
                closeTimeoutMS={300}
            >
                <CurrentPlaylists
                    closeModal={closeModal}
                />
            </Modal>
        </div>
    );
}

export default PlaylistModal;