import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

const TrackList = ({ onRemove, onAdd, isRemoval, playlistTracks }) => {

        let tracks = this.props.tracks;
        //console.log(tracks);
        return (
        <div className="TrackList">
        {//console.log(tracks.map(track => track.id))
        }
        {tracks.map((track,index) => {
            //console.log(track);
            //console.log(track[0]);
            //console.log(track.name);
           return <Track 
             onRemove={onRemove}
             onAdd={onAdd}
             key={index}
             track={track}
             isRemoval={isRemoval}
             playlistTracks = {playlistTracks}
             />;
        })}
        </div>
        );
}

export default TrackList;