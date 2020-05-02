import React from 'react';
// import Post from './Post';
// import './App.css';
import {Link} from 'react-router-dom';

const PostSnippet = (props) => {
  return (
    <div>
       <div className="card">
  <div className="card-header">
    title: {props.title}
  </div>
  <div className="card-body">
    
    <p className="card-text">
    content: {props.content}
    </p>
    {/* { console.log('inside post')} */}
    {/* {props.pid} */}
    <Link to={`post/${props.pid}`}>Go somewhere</Link>
  </div>
</div>
    </div>
  );
}

export default PostSnippet;