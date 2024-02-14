import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Card from "./Card";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8087/items")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.items[0]);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="post-list">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <Card key={post.id} post={post} openModal={openModal} />
          ))}
        </div>
      )}
      {selectedPost && <Modal post={selectedPost} closeModal={closeModal} />}
    </div>
  );
};

export default PostList;
