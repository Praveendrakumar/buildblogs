import {React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import './PostDetail.css';

const Post = () => {
  const [post, setPost] = useState({});
  const {postId} = useParams();
  
  useEffect(()=>{
    firestore.collection('posts').doc(postId).get().then((snapshot) =>{
      setPost(snapshot.data());
    })
  },[postId])

  return (
    <div className='post-detail'>
    <h1 className='text-center'>{post.title}</h1>
    <p className='post-content'>{post.content}</p>
    </div>
  )
}

export default Post