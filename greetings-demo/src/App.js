import React, { Component } from 'react';
import './App.css';

import GreetingsPage from './components/containers/GreetingsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Greetings Demo</h1>
        </header>
        <div>
          <GreetingsPage />          
        </div>
      </div>
    );
  }
}

export default App;
