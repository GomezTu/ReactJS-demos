import React, { Component } from 'react';
import './App.css';

import CountriesContainer from './components/containers/countries-container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Welcome to React</h1>
        </header>
        <div className="App__container">
          <CountriesContainer />
        </div>
      </div>
    );
  }
}

export default App;
