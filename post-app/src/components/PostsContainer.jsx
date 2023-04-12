import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

class PostsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      inputValue: ''
    }
  }

  getPosts() {
    axios.get('/api/v1/posts')
    .then(response => {
      this.setState({posts: response.data})
    })
    .catch(error => console.log(error))
  }



  createPost = (e) => {
    if (e.key === 'Enter') {
      axios.post('/api/v1/posts', {post: {name: e.target.value}})
      .then(response => {
        const posts = update(this.state.posts, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          posts: posts,
          inputValue: ''
        })
      })
      .catch(error => console.log(error))
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  deletePost = (id) => {
    axios.delete(`/api/v1/posts/${id}`)
    .then(response => {
      const postIndex = this.state.posts.findIndex(x => x.id === id)
      const posts = update(this.state.posts, {
        $splice: [[postIndex, 1]]
      })
      this.setState({
        posts: posts
      })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getPosts()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="postInput" type="text"
            placeholder="Add a post" maxLength="50"
            onKeyPress={this.createPost}
            value={this.state.inputValue} onChange={this.handleChange} />
        </div>
        <div className="listWrapper">
          <ul className="postList">
            {this.state.posts.map((post) => {
		          return(
		            <li className="post" post={post.name} key={post.id}>
                  <p>Post Name: {post.name}</p>
                  <p>Post Description: {post.description}</p>


                  <span className="deletePostBtn"
                    onClick={(e) => this.deletePost(post.id)}>
                    BOTON
                  </span>

		            </li>
		    )
		  })}
          </ul>
        </div>
      </div>
    )
  }
}


export default PostsContainer
