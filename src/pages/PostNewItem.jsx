import React from "react";

const PostNewItem = ({ handleSendPost, handleChange }) => {
  return (
    <div>
      <form onSubmit={handleSendPost}>
        <label>
          Новый пост
          <input onChange={(e) => handleChange(e)} />
        </label>
        <button onSubmit={(e) => handleChange(e)}>Send</button>
      </form>
    </div>
  );
};

export { PostNewItem };
