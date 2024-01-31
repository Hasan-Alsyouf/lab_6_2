// src/components/Post.js
import React from 'react';

const Post = ({ id, title, author, onClick }) => {
  return (
    <div className="post" onClick={() => onClick(id)}>
        <h3>Id: {id}</h3>
      <h3>Title: {title}</h3>
      <h3>Author: {author}</h3>
    </div>
  );
};

export default Post;

/*
const Post=(Props)=>{

    return (
        <div classname="Content">
<h3>Name: {Props.id}</h3>
<h3>Name: {Props.title}</h3>
<h3>Name: {Props.author}</h3>

        </div>
    )
}

export default Post;

*/