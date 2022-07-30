import React, { useState } from "react";
import { firestore } from "../firebase";
import "./createpost.css";
import { useFormInput } from "./customHooks";

const CreatePost = () => {
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  };
  return (
    <div className="post d-flex justify-content-center mt-3 w-100">
      <div className="create-post">
        <form onSubmit={handleSubmit}>
          <h3 className="d-flex justify-content-center">Create Post</h3>
          <div className="form-field w-100">
            <label id="fieldTitle font-weight-bold" className="mt-1">
              Title
            </label>
            <br />
            <input
              {...title}
              className="form-control w-100 mb-1"
              placeholder="Please write your blog title"
            />
          </div>

          <div className="form-field w-100">
            <label id="fieldTitle">Sub Title</label>
            <br />
            <input
              {...subTitle}
              className="form-control w-100 mb-1"
              placeholder="Please write your blog sub-title"
            />
          </div>

          <div className="form-field w-100">
            <label>Content</label>
            <br />
            <textarea
              {...content}
              className="form-control w-100 h-100"
              placeholder="Please write your blog content"
              rows="10"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success mt-2">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
