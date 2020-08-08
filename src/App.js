import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
      </div>
    );
  }
}

export default App;
