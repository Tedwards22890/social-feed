import React, { useState } from 'react';
import PostEntry from './Components/PostText/PostEntry'

function App() {

  const [posts, setPosts] = useState([{name: 'test1', post: 'message1'}, {name: 'test', post: 'message2'}])

  function addNewPost(post){
    let tempPost = [posts, post];

    setPosts(tempPost);
  }

  return (
    <div>
      <PostEntry addNewPostProperty={addNewPost} />

    </div>
  );
}

export default App;
