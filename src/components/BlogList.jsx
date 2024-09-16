import React, { useContext, useState } from "react";
import BlogsContextProvider, { BlogsContext } from "./BlogsContext.jsx";
import { Link } from "react-router-dom";
import BlogListItem from "./BlogListItem.jsx";

function BlogList() {
  const { blogsList, setBlogsList } = useContext(BlogsContext);
  const currentDate = new Date().toDateString();

  function editBlog(id, newTitle, newContent) {
    setBlogsList((prevItems) =>
      prevItems.map((blogItem) =>
        blogItem.id === id
          ? {
              ...blogItem,
              title: newTitle,
              content: newContent,
              publishDate: currentDate,
            }
          : blogItem
      )
    );
  }

  function deleteBlog(id) {
    //request a use confirmation

    setBlogsList((prevBlogs) => {
      return prevBlogs.filter((blogItem) => {
        return blogItem.id !== id;
      });
    });
  }

  const blogs = blogsList.map((blog) => (
    <li className="list-group-item" key={blog.id}>
      <BlogListItem
        id={blog.id}
        title={blog.title}
        content={blog.content}
        publishDate={blog.publishDate}
        onEdit={editBlog}
        onDelete={deleteBlog}
      />
    </li>
  ));

  return (
    <div>
      <h2>Blogs List</h2>
      {/* <Link to={`/BlogPage`}>First Blog</Link> */}
      <ul className="list-group">{blogs}</ul>
    </div>
  );
}

export default BlogList;
