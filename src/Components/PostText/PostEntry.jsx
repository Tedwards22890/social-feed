import React, { useState } from 'react';

const PostEntry = (props) => {
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" rows="12" cols="50" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type="submit">Create</button>
        </form>
     );
}
 
export default PostEntry;

