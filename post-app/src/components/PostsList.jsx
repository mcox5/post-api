import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import axios from 'axios'
import update from 'immutability-helper'


// import Post from './Post';
import '../stylesheets/PostsList.css';

function PostsList(props) {

  const posts = props.posts

  return (

    <div>
    <table className='post-table'>
      <thead>
        <tr>
          <th>Nombre Post</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td>
              <button onClick={() => props.deletePost(post.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <PostForm onSubmit={props.addPost}/>
    </div>
  )
}

export default PostsList
