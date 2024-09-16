import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogsContext } from "./BlogsContext";

export function Blog(props) {
  const { blogsList, setBlogsList } = useContext(BlogsContext);
  const currentBlog = blogsList.find((blog) => blog.id === Number(props.id));

  return (
    <div className="blog">
      <h2>{currentBlog.title}</h2>

      <p>{currentBlog.content}</p>
      <footer>{currentBlog.publishDate}</footer>
    </div>
  );
}

function BlogPage() {
  const { blogId } = useParams();

  return (
    <div>
      <h1>This is the Blog ID: {blogId}</h1>
      <Blog id={blogId} />
      <Link to="/">back</Link>
    </div>
  );
}

export default BlogPage;
