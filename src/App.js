import React, { useState } from 'react';
import PostEntry from './Components/PostText/PostEntry'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/DisplayPosts/Post';
import "./App.css";

function App() {

  const [posts, setPosts] = useState([{name: 'Admin', post: 'Be sure to keep messages clean!'}])

  function addNewPost(post){
    let tempPost = [...posts, post];

    setPosts(tempPost);
  }

  return (
    <div className="parent">   
      <PostEntry addNewPostProperty={addNewPost} />   
      <DisplayPosts parentPosts={posts}/>
    </div>
  );
}

export default App;
