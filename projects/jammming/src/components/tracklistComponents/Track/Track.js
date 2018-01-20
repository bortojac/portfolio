import React from 'react';
import './track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        if (!this.props.playlistTracks.map(playlistTrack => playlistTrack.id).includes(this.props.track.id)) {
            this.props.onAdd(this.props.track);
        } else { return }
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    addOrRemove() {
        if (this.props.isRemoval) {
            return (<a onClick={this.removeTrack} className='Track-action'>-</a>);
        } else {
            // if the track is already in the playlist, don't put a + sign. For now we are not allowing duplicate tracks.
            // It makes it difficult to remove tracks separately by their ID.
            // Creating a unique key is probably outside the scope of this project, given the limited use cases for duplicates
            if (this.props.playlistTracks.map(playlistTrack => playlistTrack.id).includes(this.props.track.id)) {
                // return a checkmark
                return (<a onClick={this.addTrack} className='Track-action'>&#10003;</a>);
            }
            return (<a onClick={this.addTrack} className='Track-action'>+</a>)

        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{`${this.props.track.artist} | ${this.props.track.album}`}</p>
                </div>
                {this.addOrRemove()}
            </div>
        );
    }
}
export default Track;