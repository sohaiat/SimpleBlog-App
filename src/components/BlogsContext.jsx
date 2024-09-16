import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const BlogsContext = createContext(null);

function BlogsContextProvider({ children }) {
  const [blogsList, setBlogsList] = useState([
    {
      id: 1,
      title: "lets have some blogs",
      content: "yes lets do it ",
      publishDate: "don't know when ",
    },
  ]);

  return (
    <BlogsContext.Provider value={{ blogsList, setBlogsList }}>
      {children}
    </BlogsContext.Provider>
  );
}

export default BlogsContextProvider;
