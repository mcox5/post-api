import React from 'react';
import '../stylesheets/Post.css';
import { AiOutlineCloseCircle } from "react-icons/ai";


function Post({ id, name, description, deletePost }) {
  return (
    <div className='post-contenedor'>
      <div
        className='post-name'>
        {name}
      </div>
      <div
        className='post-description'>
        {description}
      </div>
      <div
        className='post-contenedor-iconos'
        onClick={() => deletePost(id)}>
        <AiOutlineCloseCircle className='post-icono' />
      </div>
    </div>
  );
}

export default Post;
