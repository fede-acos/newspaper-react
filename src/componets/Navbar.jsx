import React, { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import NavBarItems from "./NavBarItems";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  useEffect(() => {
    themeChange(false);
  }, []);

  function handleClick() {
    setToggleNavbar((prev) => !prev);
  }
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => handleClick()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {toggleNavbar ? (
              <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                <NavBarItems />
              </ul>
            ) : (
              <div />
            )}
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavBarItems />
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </nav>

      <select data-choose-theme>
        <option value="">Default</option>
        <option value="light">light</option>
        <option value="night">night</option>
        <option value="business">business</option>
        <option value="corporate">corporate</option>nav
      </select>
    </>
  );
};

export default Navbar;
