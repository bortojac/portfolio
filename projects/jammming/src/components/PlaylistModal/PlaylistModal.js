import React from 'react';
import Modal from 'react-modal';
import CurrentPlaylists from '../CurrentPlaylists/CurrentPlaylists';
import './PlaylistModal.css';

class PlaylistModal extends React.Component {
    constructor(props) {
        super(props);
        
    }

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
        closeTimeoutMS={200}
        >
        <CurrentPlaylists
        loadPlaylists={this.props.loadPlaylists}
        currentPlaylists={this.props.currentPlaylists}/>
        
        </Modal>
    </div>
        );
    }
}

export default PlaylistModal;