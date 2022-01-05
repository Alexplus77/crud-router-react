import React, { useContext } from "react";
import { ContextValue } from "hocs/ContextProvaider";
import { Link, useNavigate } from "react-router-dom";
import { Errors } from "components/Errors";

const Posts = () => {
  const { dataGet, error, loading } = useContext(ContextValue);
  const navigate = useNavigate();
  const handleClickPost = (id) => navigate(`/posts/${id}`);

  return (
    <>
      {error ? (
        <Errors />
      ) : (
        <div className="container-posts">
          <Link className="link" to="/posts/new">
            Создать пост
          </Link>
          {loading ? (
            <i>Loading...</i>
          ) : dataGet?.length ? (
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
      )}
    </>
  );
};

export { Posts };
