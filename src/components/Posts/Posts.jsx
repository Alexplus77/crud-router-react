import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Link to="/posts/new">Добавить пост</Link>
    </div>
  );
};

export { Posts };
