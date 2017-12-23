import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        let tracks = this.props.tracks;
        //console.log(tracks);
        return (
        <div className="TrackList">
        {console.log(tracks)
        }
        {tracks.map(track => {
            //console.log(track);
            //console.log(track[0]);
            //console.log(track.name);
           return <Track onRemove={this.props.onRemove} onAdd={this.props.onAdd} key={track.id} track={track} isRemoval={this.props.isRemoval}/>;
        })}
        </div>
        );
    }
}

export default TrackList;