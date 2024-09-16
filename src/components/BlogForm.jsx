import React, { useContext, useState } from "react";
import BlogsContextProvider, { BlogsContext } from "./BlogsContext.jsx";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { blogsList, setBlogsList } = useContext(BlogsContext);

  function handleTitleChange(event) {
    const currentTitle = event.target.value;
    setTitle(currentTitle);
  }

  function handleContentChange(event) {
    const currentContent = event.target.value;
    setContent(currentContent);
  }

  function addBlog(newBlog) {
    setBlogsList((prevBlogsList) => {
      return [newBlog, ...prevBlogsList];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();

    const newBlog = {
      id: blogsList.length + 1,
      title: title,
      content: content,
      publishDate: date.toDateString(),
    };
    addBlog(newBlog);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="witting-title"
          type="text"
          placeholder="title"
          value={title}
          onChange={handleTitleChange}
          required
          maxLength={1000}
        />

        <textarea
          id="writting-body"
          type="text"
          placeholder="What's on your mind?"
          value={content}
          onChange={handleContentChange}
          required
          maxLength={1000}
          rows={3}
        />
        <button id="submitBtn">Add</button>
      </form>
    </div>
  );
}

export default BlogForm;
