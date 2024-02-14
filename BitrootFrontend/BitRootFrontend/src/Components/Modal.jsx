import React from "react";

const Modal = ({ post, onClose }) => {
  const formattedDate = new Date(post.date * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <div className="modal-body">
          <p>{post.content}</p>
          <div className="author-info">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="author-avatar"
            />
            <br />
            <p>{post.author.name}</p>
            {post.author.role && <p>{post.author.role}</p>}
          </div>
          <p className="date">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
