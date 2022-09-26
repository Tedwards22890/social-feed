import React, { useState } from 'react';

const PostEntry = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        if (name===''|| post==='')
        {
            alert('Please be sure all fields are filled out!')
        }
        else 
        {
            console.log({newPost});
            props.addNewPostProperty(newPost);
            setName("")
            setPost("")
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <center>
            <label>Name</label>
            <br/>
            <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            <br/>
            <label>Post</label>
            <br/>
            <textarea placeholder="Message" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
            <br/>
            <button type="submit">Create</button>
            </center>
        </form>
     );
}
 
export default PostEntry;

