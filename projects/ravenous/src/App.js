import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import Search from '../src/components/SearchBar/SearchBar';
import Yelp from './util/Yelp';


// create app component that renders search component and BusinessList component, as well as passes the businesses array
//to the BusinessList component
class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term,location,sortBy).then(
      businesses => {
        this.setState({'businesses': businesses})
      }
    );
    }

  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <Search searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/> 
    </div>
    );  }
}

export default App;
