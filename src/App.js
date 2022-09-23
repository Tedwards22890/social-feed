import React, { useState } from 'react';
import PostEntry from './Components/PostText/PostEntry'

function App() {

  const [entries, setEntries] = useState([{name: 'test1', post: 'message1'}, {name: 'test', post: 'message2'}])

  function addNewPost(entry){
    let tempPost = [posts, post];

    setPost(tempPost);
  }

  return (
    <div>
      <PostEntry />

    </div>
  );
}

export default App;
