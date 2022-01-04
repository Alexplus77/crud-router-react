import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostItem = ({ handleDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

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
        <div className="button-group">
          <Link className="link" to={`/postChange/${id}`}>
            Изменить
          </Link>
          <Link className="link" to={"/"} onClick={() => handleDelete(id)}>
            Удалить
          </Link>
        </div>
      </>
    </div>
  );
};
export { PostItem };
