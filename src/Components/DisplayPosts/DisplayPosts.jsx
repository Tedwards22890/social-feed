import "./DisplayPosts.css";
import React from 'react';
import MediaButtons from "./MediaButtons";

const current = new Date();
const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
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
                    {date}
                    <br />
                    {posts.post}                    
                </div>
                <div className="like">
                    <MediaButtons />
                </div>
            
            </center>
            </div>
        </div>
     ))
}
 
export default DisplayPosts;