import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchData } from "hooks/useFetchData";

const ContextValue = React.createContext("");

const ContextProvider = (props) => {
  const [sendPost, setSendPost] = useState({});
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const [dataGet, sendData, error, loading] = useFetchData(
    process.env.REACT_APP_URL
  );

  const handleChange = ({ target: { value } }) => {
    setSendPost({ ...sendPost, content: value });
  };

  const handleSendPost = (e) => {
    e.preventDefault();
    sendData(process.env.REACT_APP_URL, "post", sendPost);
    navigate("/");
  };

  const handleChangePost = (e) => {
    setItem({ ...item, content: e.target.value });
  };

  const handleSave = (e, id) => {
    e.preventDefault();
    sendData(process.env.REACT_APP_URL, "put", {
      id: `${id}`,
      content: `${item.content}`,
    });
    navigate("/");
  };

  const handleDelete = (id) => {
    sendData(`${process.env.REACT_APP_URL}?id=${id}`, "delete");
    navigate("/");
  };

  const value = {
    dataGet,
    setItem,
    item,
    error,
    loading,
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
