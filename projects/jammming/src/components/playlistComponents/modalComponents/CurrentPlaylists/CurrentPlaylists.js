import React from 'react';
import './currentPlaylists.css';
import UserPlaylist from '../UserPlaylist';
import { RiseLoader } from 'react-spinners';


const CurrentPlaylists = ({ currentPlaylists, loading, closeModal}) => {

    return (
        <div className="playlistDiv">
            <h1 className="modalContentHeader">Select a Playlist to edit</h1>
            <RiseLoader
                color={'#123abc'}
                loading={loading}
            />
            <ul className="playlists">
                {currentPlaylists.map(
                    playlistObj => {
                        return <UserPlaylist
                            key={playlistObj.id}
                            playlistObj={playlistObj}
                            closeModal={closeModal}
                        />;
                    })
                }
            </ul>
        </div>
    );
}

export default CurrentPlaylists;