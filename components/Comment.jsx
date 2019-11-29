import React from "react";
function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  console.log("This Props", props.comment);
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.comment.author.avatarUrl}
          alt={props.comment.author.name}
        />
        <div className="UserInfo-name">{props.comment.author.name}</div>
      </div>
      <div className="Comment-text">{props.comment.text}</div>
      <div className="Comment-date">{formatDate(props.comment.date)}</div>
    </div>
  );
}

export default Comment;
