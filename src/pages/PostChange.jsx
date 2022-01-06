import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextValue } from "hocs/ContextProvaider";

const PostChange = () => {
  const { item, handleChangePost, handleSave } = useContext(ContextValue);
  const { id } = useParams();
  return (
    <form className="form" onSubmit={(e) => handleSave(e, id)}>
      <Link to={"/"} className="fa fa-times-circle-o">
        <i aria-hidden="true" />{" "}
      </Link>
      <label>
        Измените текст
        <textarea
          className="input-change-post"
          onChange={(e) => handleChangePost(e)}
          value={item?.content}
        />
      </label>
      <div className="button-group">
        <Link className="link" to={`/posts/${id}`}>
          Назад
        </Link>
        <button className="button-submit" onSubmit={(e) => handleSave(e, id)}>
          Сохранить
        </button>
      </div>
    </form>
  );
};
export { PostChange };
