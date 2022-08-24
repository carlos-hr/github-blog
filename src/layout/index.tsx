import { Outlet } from "react-router-dom";
import { Header, PageInfo } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <PageInfo />
      <Outlet />
    </>
  );
};

export default Layout;
