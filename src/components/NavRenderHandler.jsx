import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavRenderHandler = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavBar] = useState(false);
  useEffect(() => {
    if (location.key === "default" && location.pathname !== "/") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);
  return <>{showNavbar && children}</>;
};

export default NavRenderHandler;
