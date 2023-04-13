import React, { Component } from 'react';
import './App.css';
import PostsList from './components/PostsList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Posts List</h1>
          <PostsList/>
        </div>
      </div>

    );
  }
}

export default App;
