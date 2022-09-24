import React, { useState } from 'react';
import PostEntry from './Components/PostText/PostEntry'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState([{name: 'test1', post: 'message1'}, {name: 'test', post: 'message2'}])

  function addNewPost(post){
    let tempPost = [posts, post];

    setPosts(tempPost);
  }

  return (
    <div>
      <PostEntry addNewPostProperty={addNewPost} />
      <DisplayPosts parentPosts={posts}/>

    </div>
  );
}

export default App;
