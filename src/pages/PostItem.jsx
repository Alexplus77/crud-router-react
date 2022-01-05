import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchItemId } from "hooks/useFetchItemId";
import { ContextValue } from "hocs/ContextProvaider";

const PostItem = () => {
  const { handleDelete, setItem } = useContext(ContextValue);
  const { id } = useParams();
  const [dataItem] = useFetchItemId("http://localhost:8080/posts", id, setItem);

  return (
    <div className="post-item">
      <>
        {" "}
        <Link to={"/"} className="fa fa-times-circle-o">
          {" "}
          <i aria-hidden="true" />{" "}
        </Link>
        <p className="text-item">{dataItem?.content}</p>
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
