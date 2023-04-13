import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import axios from 'axios'
import update from 'immutability-helper'


// import Post from './Post';
import '../stylesheets/PostsList.css';

function PostsList() {

  const [posts, setPosts] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const addPost = post => {
    if (post.name.trim() && post.description.trim()) {
      post.name = post.name.trim();
      post.description = post.description.trim();
      axios.post('/api/v1/posts', {post: {name: post.name, description: post.description}})
      .then(response => {
        const postsUpdate = update(posts, {
          $splice: [[0, 0, response.data]]
        });
        setPosts(postsUpdate);
      })
    }
  }

  const deletePost = id => {
    axios.delete(`/api/v1/posts/${id}`)
    .then(response => {
      const postIndex = posts.findIndex(post => post.id === id)
      const postsUpdate = update(posts, {
        $splice: [[postIndex, 1]]
      })
      setPosts(postsUpdate);
    })
    .catch(error => console.log(error));
  }

  const getPosts = () => {
    axios.get(`/api/v1/posts`)
    .then(response => {
      setPosts(response.data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getPosts();
  }, [])

  // Función para filtrar los posts según el valor del filtro
  const filterPosts = (posts, filterValue) => {
    return posts.filter(post => {
      return post.name.toLowerCase().includes(filterValue.toLowerCase())
    })
  }
  //Funcion para actualizar el valor del filtro cada vez que el input del usuario cambie
  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  }

  // Para obtener el valor de los posts filtrados
  const filteredPosts = filterPosts(posts, filterValue);

  return (

    <div>
    <input className='post-input' placeholder='Filtro' type="text" value={filterValue} onChange={handleFilterChange} />
    <table className='post-table'>
      <thead>
        <tr>
          <th>Nombre Post</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map(post => (
          <tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.description}</td>
            <td>
              <button onClick={() => deletePost(post.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <PostForm onSubmit={addPost}/>
    </div>
  )
}

export default PostsList
