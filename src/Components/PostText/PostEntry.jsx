import React, { useState } from 'react';
import "./PostEntry.css"

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
        <form onSubmit={handleSubmit} className="form-grid">
            <center>
                <div className="form-group">
                    <label><h3>Name</h3></label>
                    <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='form-group'>
                    <label><h3>Post</h3></label>
                    <textarea placeholder="Message" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
                <br/>
                    <button type="submit" className="btn btn-primary" style={{"margin-right": "1em"}}>Create</button>
                </div>
            </center>
        </form>
     );
}
 
export default PostEntry;

