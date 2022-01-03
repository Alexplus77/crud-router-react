import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostItem = ({ handleDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isChangePost, setIsChangePost] = useState(false);
  const [dataItem, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts?id=${id}`)
      .then(({ data }) => setItem(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="post-item">
      <>
        {" "}
        <i
          onClick={() => navigate("/")}
          className="fa fa-times-circle-o"
          aria-hidden="true"
        />
        <p>{dataItem?.content}</p>
        <button onClick={() => navigate(`/postChange/${id}`)}>Изменить</button>
        <button onClick={() => handleDelete(id)}>Удалить</button>
      </>
    </div>
  );
};
export { PostItem };
