import React, { Component } from 'react';
import './App.css';

import CountriesContainer from './components/containers/countries-container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <CountriesContainer />
        </div>
      </div>
    );
  }
}

export default App;
