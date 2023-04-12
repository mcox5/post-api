
import React, { Component } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer'
import PostsList from './components/PostsList'

import PostForm from './components/PostsContainer'


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
