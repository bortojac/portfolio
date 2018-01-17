import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = ({searchResults}) =>  {
    console.log(searchResults);
        return (
            <div className='SearchResults'>
                <h2>Results</h2>
                <div className="searchResultsContainer">
                    <TrackList
                        //onAdd={onAdd}
                        tracks={searchResults}
                        isRemoval={false}
                        //playlistTracks={playlistTracks} 
                        />
                </div>
            </div>
        );
}

export default SearchResults;