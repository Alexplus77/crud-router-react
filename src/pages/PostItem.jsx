import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchItemId } from "hooks/useFetchItemId";
import { ContextValue } from "hocs/ContextProvaider";

const PostItem = () => {
  const { handleDelete, setItem } = useContext(ContextValue);
  const { id } = useParams();
  const { dataItem, loading } = useFetchItemId(
    process.env.REACT_APP_URL,
    id,
    setItem
  );

  return (
    <div className="post-item">
      {loading ? (
        <i>Loading...</i>
      ) : (
        <>
          <Link to={"/"} className="fa fa-times-circle-o">
            {" "}
            <i aria-hidden="true" />{" "}
          </Link>
          <p className="text-item">{dataItem?.content}</p>
          <div className="button-group">
            <Link className="link" to={`/postChange/${id}`}>
              Изменить
            </Link>
            <button className="btn-delete" onClick={() => handleDelete(id)}>
              Удалить
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export { PostItem };
