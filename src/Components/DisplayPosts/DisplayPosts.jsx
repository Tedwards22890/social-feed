import "./DisplayPosts.css";
import React from 'react';


const DisplayPosts = (props) => {
    return ( 
        props.parentPosts.map((posts, i) =>
        <div key={i}>
            <div className="parent">

            <center>
                <div className="name">
                    {posts.name}
                </div>
            
                <div className="posts">
                    {posts.post}
                </div>
            
            </center>
            </div>
        </div>
     ))
}
 
export default DisplayPosts;