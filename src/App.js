import React, { useEffect, useState } from "react";
import "App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Posts } from "./pages/Posts";
import { PostNewItem } from "./pages/PostNewItem";
import { PostItem } from "./pages/PostItem";
import PostChange from "./pages/PostChange";

function App() {
  const [dataGet, setDataGet] = useState(null);
  const [sendPost, setSendPost] = useState({});
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

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
    axios
      .post("http://localhost:8080/posts", sendPost)
      .then(({ data }) => setDataGet(data));
    navigate("/");
  };

  const handleChangePost = (e) => {
    setItem({ ...item, content: e.target.value });
  };

  const handleSave = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/posts`, {
        id: `${id}`,
        content: `${item.content}`,
      })
      .then(({ data }) => setDataGet(data))
      .catch((e) => console.log(e));
    navigate("/", { replace: true });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/posts?id=${id}`)
      .then(({ data }) => setDataGet(data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Posts dataGet={dataGet} />} />
        <Route
          path="/postChange/:id"
          element={
            <PostChange
              item={item}
              setItem={setItem}
              handleChangePost={handleChangePost}
              handleSave={handleSave}
            />
          }
        />
        <Route
          path="/posts/new"
          element={
            <PostNewItem
              handleChange={handleChange}
              handleSendPost={handleSendPost}
            />
          }
        />
        <Route
          path="/posts/:id"
          element={<PostItem handleDelete={handleDelete} />}
        />
      </Routes>
    </div>
  );
}

export default App;
