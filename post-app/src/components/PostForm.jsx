import React, {useState, useRef} from "react";
import '../stylesheets/PostForm.css';

function PostForm(props) {

  const [input, setInput] = useState({});
  const formRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target

    setInput(prevState => ({
      ...prevState,
      [name]: value
    })) // En esta linea, se cambiara el estado inicial agregandole primero el name y luego el description al array
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      name: input.name,
      description: input.description
    }

    props.onSubmit(newPost)
    setInput({});
    formRef.current.reset();
  }

  return (
    <form className='post-form' onSubmit={handleSubmit} ref={formRef}>
      <input
        className='post-input'
        type='text'
        placeholder='Post name'
        name='name'
        onChange={handleChange}
      />
      <input
        className='post-input'
        type='text'
        placeholder='Post description'
        name='description'
        onChange={handleChange}
      />
      <button className='post-button' type='submit'>
        Create Post
      </button>
    </form>
  );

}

export default PostForm;
