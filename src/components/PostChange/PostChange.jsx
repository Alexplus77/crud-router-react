import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const PostChange = ({ item, setItem, handleChangePost, handleSave }) => {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts?id=${id}`)
      .then(({ data }) => setItem(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <form onSubmit={(e) => handleSave(e, id)}>
      <label>
        Измените текст
        <textarea
          className="input-change-post"
          onChange={(e) => handleChangePost(e)}
          value={item?.content}
        />
        <button onSubmit={(e) => handleSave(e, id)}>Сохранить</button>
      </label>
    </form>
  );
};
export default PostChange;
