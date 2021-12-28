import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const Posts = ({ dataGet }) => {
  return (
    <div>
      <Link to="/posts/new">Добавить пост</Link>
      {dataGet?.map(({ content }) => (
        <div key={nanoid()}>{content}</div>
      ))}
    </div>
  );
};

export { Posts };
