import React from "react";
import { useNavigate } from "react-router-dom";

const PostNewItem = ({ handleSendPost, handleChange }) => {
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleSendPost} className="form">
        <i
          onClick={() => navigate("/")}
          className="fa fa-times-circle-o"
          aria-hidden="true"
        />
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
