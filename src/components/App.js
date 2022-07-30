import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navebar, Home, PostDetail } from "./index";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="Container">
      <Navebar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetail/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
