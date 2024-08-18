import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", src: "/" },
    { name: "Notes", src: "/notes" },
    { name: "Contact", src: "/contact" },
  ];
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu((prev) => !prev);
  };
  return (
    <header className="">
      <nav className="fixed top-0 left-0 w-full h-[3.5rem] bg-neutral-300 z-[1000]">
        <div className="container h-full flex justify-between items-center">
          <h4 className="text-[1.5rem] font-semibold">
            <a href="">TakeNotes</a>
          </h4>
          {/* Desktop Menu */}
          <ul className="hidden sm:flex sm:gap-x-6">
            {navItems.map((item, index) => (
              <li className="text-[1.125rem] font-semibold" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-page" : "pending-page"
                  }
                  to={item.src}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Hamburger Btn */}
          <button className="sm:hidden" onClick={menuHandler}>
            {menu ? <X size={28} /> : <Menu size={28} />}
          </button>
          {/* Mobile Menu */}
          <ul
            className={`sm:hidden fixed ${
              menu ? `top-[3.5rem]` : `top-[-100%]`
            } left-0 w-full h-fit px-4 py-4 bg-neutral-300 transition-all duration-500`}
          >
            {navItems.map((item, index) => (
              <li className="text-[1.125rem] font-semibold" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-page" : "pending-page"
                  }
                  to={item.src}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
