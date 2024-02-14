import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const formattedDate = new Date(post.date * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className="card">
      <div className="image-container">
        <img src={post.image} alt={post.title} onClick={handleLearnMore} />
        <div className="overlay">
          <button className="learn-more-button" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
        <div className="card-color-spot"></div>
        <div className="card-color-spot2"></div>
      </div>
      <div className="card-content">
        <h2>{post.title}</h2>
        <p className="passage">{post.content}</p>
        <div className="author-info">
          <p>
            <strong></strong> {post.author.name}{" "}
            {post.author.role && `-${post.author.role}`}
          </p>
        </div>
        <p className="date">{formattedDate}</p>
      </div>

      {showModal && <Modal post={post} onClose={handleCloseModal} />}
    </div>
  );
};

export default Card;
