import React, { useState, useEffect } from 'react';
import PostSnippet from './PostSnippet';
import db from '../firebase'
// import './App.css';

const Posts = (props) => {

    const [posts,setPosts] = useState([])

    useEffect(()=> {

        db.collection('post_msrt')
        .onSnapshot(async posts =>{
            let postsData = await posts.docs.map(post =>{
                let data = post.data()
                let {id} = post
                let payload ={
                    id,
                    ...data
                }
                return payload
            });
            setPosts(postsData)
        })

    //     let postRef = db.collection('post_msrt')

    //     postRef.get().then(posts =>{
    //         posts.forEach(post =>{
    //         let data = post.data()
    //         let {id} = post
    //         // console.log('this is the post')
    //         // console.log(data);

    //         let payload = {
    //             id,
    //             ...data
    //         }
    //         // console.log(payload);
    //         setPosts((posts) => [...posts,payload])
    //     })
    // })
},[])

  return (
    <div>
            {posts.map(post =>  (
                <PostSnippet key={post.id} pid={post.id} title={post.title} content={post.content} /> 
            ))}
    </div>
  );
}

export default Posts;