import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const PostChange = ({ item, setItem, handleChangePost, handleSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts?id=${id}`)
      .then(({ data }) => setItem(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <form className="form" onSubmit={(e) => handleSave(e, id)}>
      <i
        onClick={() => navigate("/")}
        className="fa fa-times-circle-o"
        aria-hidden="true"
      />
      <label>
        Измените текст
        <textarea
          className="input-change-post"
          onChange={(e) => handleChangePost(e)}
          value={item?.content}
        />
      </label>
      <button className="button-submit" onSubmit={(e) => handleSave(e, id)}>
        Сохранить
      </button>
    </form>
  );
};
export default PostChange;
