import React, { Component } from 'react';
import './App.css';

import PictureGrid from './containers/PictureGrid.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PictureGrid/>
      </div>
    );
  }
}

export default App;
