import React, {useState} from 'react';
import db from '../firebase';
// import {Router} from 'react-router-dom';
// import Posts from '';
// import './App.css';

const CreatePost = (props) => {

    // console.log('create',props.user.uid)
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userid,setUserid] = useState('');

    

    const onTitleChange = (event) => setTitle(event.target.value);
    const onContentChange = (event) =>{ setContent(event.target.value);
        setUserid(props.user.uid);
        // console.log('insid ecreate post ',userid);
    }
    
    const onCreatePost = () => {
        
        // console.log(content);
        let postRef = db.collection('post_msrt');
        let payload = {title,content,userid}
        // console.log(payload)
        postRef.add(payload)
        .then(function(file){
            console.log("doc",file)
        })
        setTitle('')
        setContent('')
        setUserid('')
        // navigate('/')
    }

  return (
    <div>
        <h5>Title</h5>
        <input type="text" value={title} onChange={onTitleChange} />
        <h5>Content</h5>
        <input type="text" value={content} onChange={onContentChange} />
        <button onClick={onCreatePost}>Submit</button>
    </div>
  );
}

export default CreatePost;