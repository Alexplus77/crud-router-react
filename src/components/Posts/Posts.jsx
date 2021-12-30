import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ dataGet }) => {
  return (
    <div className="container-posts">
      <Link to="/posts/new">Добавить пост</Link>
      {dataGet?.map(({ content, id }) => (
        <Link to={`/posts/${id}`} key={id}>
          {" "}
          <div className="post-item">{content}</div>
        </Link>
      ))}
    </div>
  );
};

export { Posts };
