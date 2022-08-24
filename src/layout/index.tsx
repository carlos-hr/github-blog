import { Outlet } from "react-router-dom";
import { Header, PageInfo } from "../components";
import { OutletContainer } from "./styled";

const Layout = () => {
  return (
    <>
      <Header />
      <OutletContainer>
        <PageInfo />
        <Outlet />
      </OutletContainer>
    </>
  );
};

export default Layout;
