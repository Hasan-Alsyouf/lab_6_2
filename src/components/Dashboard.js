// src/components/Dashboard.js
import React, { useState } from 'react';
import Posts from './Posts';
import PostDetails from './PostDetails';
import './Dashboard.css';

const Dashboard = () => {
  const [posts, setPosts] = useState([
 { id: 111, title: 'Happiness', author: 'MIU' },
    { id: 112, title: 'Post 2', author: 'Enjoy Life' },
    { id: 113, title: 'Post 3', author: 'Author 3' },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const updateFirstPostTitle = (newTitle) => {
    if (posts.length > 0) {
      const updatedPosts = [...posts];
      updatedPosts[0].title = newTitle;
      setPosts(updatedPosts);;
    }
  };

  const handlePostClick = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  const handleEditPost = (editedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === editedPost.id ? editedPost : post
    );
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="update-section">
        <input
          type="text"
          placeholder="New Title"
          value={selectedPost ? selectedPost.title : ''}
          onChange={(e) => updateFirstPostTitle(e.target.value)}
        />
        <button onClick={() => updateFirstPostTitle(selectedPost.title)}>
          Update First Post Title
        </button>
      </div>
      <Posts posts={posts} onPostClick={handlePostClick} />
      {selectedPost && (
        <PostDetails
          post={selectedPost}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
      )}
    </div>
  );
};

export default Dashboard;
