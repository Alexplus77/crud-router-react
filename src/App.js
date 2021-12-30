import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Posts } from "./components/Posts";
import { PostNewItem } from "./components/PostNewItem";
import { PostItem } from "./components/PostItem";

import "App.css";

function App() {
  const [dataGet, setDataGet] = useState(null);
  const [sendPost, setSendPost] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then(({ data }) => setDataGet(data));
  }, []);

  const handleChange = ({ target: { value } }) => {
    setSendPost({ ...sendPost, content: value });
  };

  const handleSendPost = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/posts", sendPost).then((data) => data);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Posts dataGet={dataGet} />} />
        <Route
          path="/posts/new"
          element={
            <PostNewItem
              handleChange={handleChange}
              handleSendPost={handleSendPost}
            />
          }
        />
        <Route path="/posts/:id" element={<PostItem dataGet={dataGet} />} />
      </Routes>
    </div>
  );
}

export default App;
