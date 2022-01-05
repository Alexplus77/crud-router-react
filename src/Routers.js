import { Routes, Route } from "react-router-dom";
import { Posts } from "pages/Posts";
import { PostNewItem } from "pages/PostNewItem";
import { PostItem } from "pages/PostItem";
import { PostChange } from "pages/PostChange";

const Routers = () => (
  <Routes>
    <Route path="/" index element={<Posts />} />
    <Route path="/postChange/:id" element={<PostChange />} />
    <Route path="/posts/new" element={<PostNewItem />} />
    <Route path="/posts/:id" element={<PostItem />} />
  </Routes>
);
export { Routers };
