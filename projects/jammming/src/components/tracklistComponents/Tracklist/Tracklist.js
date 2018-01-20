import React from 'react';
import './tracklist.css';
import Track from '../Track';

// Tracklist receives props from Playlist or SearchResults depending on where it is rendered
const Tracklist = ({ tracks, isRemoval }) => {
    return (
        <div className="Tracklist">
            {tracks.map((track, index) => {
                return <Track
                    key={index}
                    track={track}
                    isRemoval={isRemoval}
                />;
            })}
        </div>
    );
}

export default Tracklist;
