import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    // update the searchTerm state when the input changes
    handleTermChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    // search Spotify API with onSearch passed down from App.js
    search() {
        if (this.state.searchTerm) {
            this.props.onSearch(this.state.searchTerm);
        }
        else {
            return;
        }
    }

    // we want enter to trigger search
    handleKeyDown(event) {
        if (event.keyCode == 13 && this.state.searchTerm) {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input
                    onChange={this.handleTermChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder="Enter A Song, Album, or Artist"
                />
                <a onClick={this.search} >SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;