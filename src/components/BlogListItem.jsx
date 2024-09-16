import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BlogListItem(props) {
  const [editBtnClicked, setEditBtn] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);
  const [isExpanded, setIsExpanded] = useState(false);

  const params = useParams();

  function handleEdit(event) {
    setEditBtn(!editBtnClicked);
    if (event.target.innerText === "Submit") {
      props.onEdit(props.id, editedTitle, editedContent);
    }
  }

  function handleDelete() {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Blog ?"
    );
    if (isConfirmed) {
      props.onDelete(props.id);
    }
  }

  function handleTitleChange(event) {
    setEditedTitle(event.target.value);
  }

  function handleContentChange(event) {
    setEditedContent(event.target.value);
  }

  function toggleShowMore() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="blog">
      {editBtnClicked ? (
        <input type="text" value={editedTitle} onChange={handleTitleChange} />
      ) : (
        <h2>
          <Link to={`/BlogPage/${props.id}`}>{props.title}</Link>
        </h2>
      )}
      {editBtnClicked ? (
        <textarea
          type="text"
          value={editedContent}
          onChange={handleContentChange}
        />
      ) : (
        <div>
          <p>{isExpanded ? props.content : props.content.slice(0, 400)}</p>
          {props.content.length > 400 && (
            <button onClick={toggleShowMore}>
              {isExpanded ? "Show-Less" : "Show-More"}
            </button>
          )}
        </div>
      )}
      <p>{"Publish At " + props.publishDate}</p>
      <button onClick={handleEdit}>{editBtnClicked ? "Submit" : "Edit"}</button>
      <button onClick={handleDelete}> Delete </button>
    </div>
  );
}
