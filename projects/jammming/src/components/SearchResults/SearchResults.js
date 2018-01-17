import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = ({ onAdd, searchResults, playlistTracks }) =>  {
        return (
            <div className='SearchResults'>
                <h2>Results</h2>
                <div className="searchResultsContainer">
                    <TrackList
                        onAdd={onAdd}
                        tracks={searchResults}
                        isRemoval={false}
                        playlistTracks={playlistTracks} 
                        />
                </div>
            </div>
        );
}

export default SearchResults;