import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ContextValue = React.createContext("");

const ContextProvider = (props) => {
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
  const value = {
    dataGet,
    setItem,
    item,
    handleChange,
    handleChangePost,
    handleDelete,
    handleSave,
    handleSendPost,
  };

  return (
    <ContextValue.Provider value={value}>
      {props.children}
    </ContextValue.Provider>
  );
};

export { ContextProvider, ContextValue };
