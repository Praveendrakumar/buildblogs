import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setPosts(posts);
      });
  }, []);
  return (
    <div className="Home text-align-center">
      <h1 className="d-flex justify-content-center align-items-center">Tech blog</h1>
      <br/>
      <div id="blog-by" className="text-center">Praveendra</div>
      <br />
      {posts?.map((post, index) => (
        <div className="posts" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <br />
            <h3>{post.title}</h3>
            <br />
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
