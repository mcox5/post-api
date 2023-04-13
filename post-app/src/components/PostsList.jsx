import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from './PostForm';
import { getPosts } from '../redux/actions/posts';
import axios from 'axios';
import update from 'immutability-helper';
import '../stylesheets/PostsList.css';

function PostsList() {
  const dispatch = useDispatch();
  const { posts, filterValue } = useSelector(state => state.posts);

  const addPost = post => {
    if (post.name.trim() && post.description.trim()) {
      post.name = post.name.trim();
      post.description = post.description.trim();
      axios
        .post('/api/v1/posts', {
          post: { name: post.name, description: post.description },
        })
        .then(response => {
          const postsUpdate = update(posts, {
            $splice: [[0, 0, response.data]],
          });
          dispatch({ type: 'ADD_POST', payload: postsUpdate });
        });
    }
  };

  const deletePost = id => {
    axios
      .delete(`/api/v1/posts/${id}`)
      .then(response => {
        const postIndex = posts.findIndex(post => post.id === id);
        const postsUpdate = update(posts, {
          $splice: [[postIndex, 1]],
        });
        dispatch({ type: 'DELETE_POST', payload: postsUpdate });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const filterPosts = (posts, filterValue) => {
    return posts.filter(post => {
      return post.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const handleFilterChange = event => {
    dispatch({ type: 'SET_FILTER_VALUE', payload: event.target.value });
  };

  const filteredPosts = filterPosts(posts, filterValue);

  return (
    <div>
      <input
        className="post-input"
        placeholder="Filtro"
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <table className="post-table">
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
      <PostForm onSubmit={addPost} />
    </div>
  );
}

export default PostsList;
