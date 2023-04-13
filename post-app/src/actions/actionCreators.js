import { LOAD_POSTS, ADD_POST, DELETE_POST } from '../actions/actionTypes'

export function loadPosts(posts) {
  return { type: LOAD_POSTS, posts: posts }
}

export function addPost(id, name, description) {
  return { type: ADD_POST, id: id, name: name, description: description }
}

export function deletePost(id) {
  return { type: DELETE_POST, id: id }
}
