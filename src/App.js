import React, { useState } from 'react';
import PostEntry from './Components/PostText/PostEntry'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState([{name: 'Testingo', post: 'Testing Message'}, {name: 'test', post: 'message2'}])

  function addNewPost(post){
    let tempPost = [posts, post];

    setPosts(tempPost);
  }

  return (
    <div className="border-box">      
      <DisplayPosts parentPosts={posts}/>
      <PostEntry addNewPostProperty={addNewPost} />

    </div>
  );
}

export default App;
