import React from 'react';
import TrackList from '../../tracklistComponents/Tracklist/Tracklist';
import './searchResults.css';

const SearchResults = ({ searchResults }) => {
    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <div className="searchResultsContainer">
                <TrackList
                    tracks={searchResults}
                    isRemoval={false}
                />
            </div>
        </div>
    );
}

export default SearchResults;