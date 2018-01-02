import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
      this.props.onAdd(this.props.track); 
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    renderAction() {
        if(this.props.isRemoval) {
            return (<a onClick={this.removeTrack} className='Track-action'>-</a>);
        } else {
            //console.log(this.props.playlistTracks.map(playlistTrack => playlistTrack.id));
            // if the track is already in the playlist, don't put a + sign. For now we are not allowing duplicate tracks.
            // It makes it difficult to remove tracks separately by their ID.
            // Creating a unique key is probably outside the scope of this project, given the limited use cases for duplicates
            if(this.props.playlistTracks.map(playlistTrack => playlistTrack.id).includes(this.props.track.id)) {
                return (<a className="Track-action" onClick={this.addTrack} className='Track-action'></a>);
            }
            return (<a className="Track-action" onClick={this.addTrack} className='Track-action'>+</a>)
            
        }
    }

    render() {
        return (
            <div className="Track">
            <div className="Track-information">
              <h3>{this.props.track.name}</h3>
              <p>{`${this.props.track.artist} | ${this.props.track.album}`}</p>
            </div>
           {this.renderAction()}
          </div>
        );
    }
}

export default Track;