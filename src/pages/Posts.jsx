import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Posts = ({ dataGet }) => {
  const navigate = useNavigate();
  const handleClickPost = (id) => navigate(`/posts/${id}`);

  return (
    <div className="container-posts">
      <Link className="link" to="/posts/new">
        Создать пост
      </Link>
      {dataGet?.length ? (
        dataGet?.map(({ content, id }) => (
          <div
            onClick={() => handleClickPost(id)}
            key={id}
            className="post-list"
          >
            {content}
          </div>
        ))
      ) : (
        <p style={{ color: "red" }}>
          Нет ни одного поста, вы можете создать пост первым!!!
        </p>
      )}
    </div>
  );
};

export { Posts };
