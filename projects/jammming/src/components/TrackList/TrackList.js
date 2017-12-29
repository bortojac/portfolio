import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {

    render() {
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
             onRemove={this.props.onRemove}
             onAdd={this.props.onAdd}
             key={index}
             track={track}
             isRemoval={this.props.isRemoval}
             playlistTracks = {this.props.playlistTracks}
             />;
        })}
        </div>
        );
    }
}

export default TrackList;