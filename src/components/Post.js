import React, { useState,useEffect } from 'react';
// import './App.css';
import db from '../firebase'
import {useParams} from 'react-router-dom';

const Post = (props) => {
  // console.log("post")
  // console.log(props);
  let { id } = useParams();
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  // const [count,setCount] = useState('')

  useEffect(() => {
    // console.log("use effect post")
    // console.log(props)
      
    // if (id !== null && id !== undefined) {  
    let postRef = db.collection('post_msrt').doc(id)
  
    postRef.get().then(doc =>{
        let {content,title} = doc.data()
        setTitle(title);
        setContent(content);
        // setCount(count);
        // let {id} = post
        // console.log('this is the post')
        // console.log(title);
        // console.log(content);
        
  })
  })
  return (
   
    <div>
     {/* <h1>{count}</h1> */}
    <h1>{title}</h1>
    <h1>{content}</h1>
    </div>
  );
}

export default Post;