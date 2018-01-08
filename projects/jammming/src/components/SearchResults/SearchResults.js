import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className='SearchResults'>
                <h2>Results</h2>
                <div className="searchResultsContainer">
                    <TrackList
                        onAdd={this.props.onAdd}
                        tracks={this.props.searchResults}
                        isRemoval={false}
                        playlistTracks={this.props.playlistTracks} 
                        />
                </div>
            </div>
        );
    }
}

export default SearchResults;