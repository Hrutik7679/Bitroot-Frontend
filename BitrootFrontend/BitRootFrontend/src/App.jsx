import "./App.css";
import React, { useState, useEffect } from "react";
import PostList from "./Components/PostList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend Test by Bitroot Org</h1>
      </header>
      <div className="container">
        <PostList />
      </div>
    </div>
  );
}

export default App;
