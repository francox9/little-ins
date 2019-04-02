import React, { Component } from 'react';
import './App.css';

import StoryList from './components/StoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoryList></StoryList>
      </div>
    );
  }
}

export default App;
