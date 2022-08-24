import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import { Home, Post } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default Router;
