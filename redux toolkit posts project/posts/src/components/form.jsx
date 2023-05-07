import React from "react";
import "../styles/form.css";
import { useSelector, useDispatch } from "react-redux";
import {
  titleinputchange,
  authorinputchange,
  contentinputchange,
  submit,
} from "../store/slices/formslice";
function form() {

    const handlesubmit=(state)=>
    {
        state.preventDefault();
        dispatch(submit());
    }

  const dispatch = useDispatch();
  const { title, author, content } = useSelector((state) => {
    return state.form;
  });
  return (
    <form className="form" onSubmit={handlesubmit}>
      <h1>Add a New Post</h1>
      <div>
        <h2>Post Title</h2>
        <input
          type="text"
          placeholder="Enter Your Title"
          onChange={(event) => {
            dispatch(titleinputchange(event.target.value));
          }}
          value={title}
        />
      </div>

      <div>
        <h2>Author</h2>
        <input
          type="text"
          placeholder="Author"
          onChange={(event) => {
            dispatch(authorinputchange(event.target.value));
          }}
          value={author}
        />
      </div>
      <div>
        <h2>Content</h2>
        <input
          type="text"
          placeholder="Enter Your Content"
          onChange={(event) => {
            dispatch(contentinputchange(event.target.value));
          }}
          value={content}
        />
      </div>
      <button>
        Save Post
      </button>
      <hr />
      <hr />
    </form>
  );
}

export default form;
