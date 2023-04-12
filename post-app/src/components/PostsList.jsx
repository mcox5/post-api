import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import axios from 'axios'
import update from 'immutability-helper'


// import Post from './Post';
import '../stylesheets/PostsList.css';

function PostsList() {

  const [posts, setPosts] = useState([]);

  const addPost = post => {
    if (post.name.trim() && post.description.trim()) {
      post.name = post.name.trim();
      post.description = post.description.trim();
      axios.post('/api/v1/posts', {post: {name: post.name, description: post.description}})
      .then(response => {
        const postsUpdate = update(posts, {
          $splice: [[0, 0, response.data]]
        })
        setPosts(postsUpdate)
      })
      // const postsUpdate = [post, ...posts];
      // setPosts(postsUpdate);
    }
  }

  const getPosts = () => {
    axios.get('/api/v1/posts')
    .then(response => {
      setPosts(response.data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <PostForm onSubmit={addPost}/>
    </>
  )
}

export default PostsList
