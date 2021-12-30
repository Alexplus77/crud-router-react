import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isChangePost, setIsChangePost] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts?id=${id}`)
      .then(({ data }) => setItem(data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/posts?id=${id}`)
      .then()
      .catch((e) => console.log(e));
  };
  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/posts`, {
        id: `${id}`,
        content: `${item.content}`,
      })
      .then()
      .catch((e) => console.log(e));
    setIsChangePost(false);
  };
  const handleChangePost = (e) => {
    setItem({ ...item, content: e.target.value });
  };

  return (
    <div className="post-item">
      {isChangePost ? (
        <form onSubmit={handleSave}>
          <label>
            Измените текст
            <textarea
              className="input-change-post"
              onChange={(e) => handleChangePost(e)}
              value={item?.content}
            />
            <button onSubmit={(e) => handleSave(e)}>Сохранить</button>
          </label>
        </form>
      ) : (
        <>
          {" "}
          <i className="fa fa-times-circle-o" aria-hidden="true" />
          <p>{item?.content}</p>
          <button onClick={() => setIsChangePost(true)}>Изменить</button>
          <button onClick={handleDelete}>Удалить</button>
        </>
      )}
    </div>
  );
};
export { PostItem };
