import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Posts = ({ dataGet }) => {
  const navigate = useNavigate();
  const handleClickPost = (id) => navigate(`/posts/${id}`);

  return (
    <div className="container-posts">
      <Link to="/posts/new">Добавить пост</Link>
      {dataGet?.map(({ content, id }) => (
        <div onClick={() => handleClickPost(id)} key={id} className="post-list">
          {content}
        </div>
      ))}
    </div>
  );
};

export { Posts };
