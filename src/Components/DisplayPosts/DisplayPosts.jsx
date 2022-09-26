import "./DisplayPosts.css";
import React from 'react';
import MediaButtons from "./MediaButtons";

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
                    <MediaButtons />
                    
                </div>
            
            </center>
            </div>
        </div>
     ))
}
 
export default DisplayPosts;