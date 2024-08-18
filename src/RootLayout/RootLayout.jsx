import Navbar from "../components/menubar";
import { Outlet } from "react-router-dom";
import NavRenderHandler from "../components/NavRenderHandler";

const RootLayout = () => {
  return (
    <>
      <NavRenderHandler>
        <Navbar />
      </NavRenderHandler>
      <Outlet />
    </>
  );
};

export default RootLayout;
