// src/components/PostDetails.js
const PostDetails = ({ post, onEdit, onDelete }) => {
    return (
      <div className="post-details">
        <h3>{post.title}</h3>
        <p>Author: {post.author}</p>
        <div>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      </div>
    );
  };
  
  export default PostDetails;
  