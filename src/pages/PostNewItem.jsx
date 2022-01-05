import React, { useContext } from "react";
import { ContextValue } from "hocs/ContextProvaider";
import { Link } from "react-router-dom";

const PostNewItem = () => {
  const { handleSendPost, handleChange } = useContext(ContextValue);

  return (
    <div>
      <form onSubmit={handleSendPost} className="form">
        <Link to={"/"} className="fa fa-times-circle-o">
          {" "}
          <i aria-hidden="true" />{" "}
        </Link>
        <label>
          Добавьте новый пост
          <textarea
            className="input-change-post"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className="button-send" onSubmit={(e) => handleChange(e)}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export { PostNewItem };
