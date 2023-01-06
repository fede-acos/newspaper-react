import React, { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import NavBarItems from "./NavBarItems";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    themeChange(false);
  }, []);

  function handleClick() {
    setToggleNavbar((prev) => !prev);
  }
  function handleThemeChange() {
    setTheme((prevTheme) => {
      if (prevTheme === "light") {
        return "business";
      }
      return "light";
    });
  }

  return (
    <>
      <nav className="navbar justify-between bg-base-100 pt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost 2xl:hidden"
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
              <ul className="menu menu-compact mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52 absolute z-10">
                <NavBarItems />
              </ul>
            ) : (
              <div />
            )}
          </div>
          <a className="btn btn-ghost normal-case text-3xl 2xl:text-5xl sm:text-4xl">
            The News Times
          </a>
        </div>
        <div className="navbar-center hidden 2xl:flex">
          <ul className="menu menu-horizontal px-1">
            <NavBarItems />
          </ul>
        </div>
        <div className="navbar-end hidden md:flex pr-4 ">
          <a className="btn">Subscribe</a>
        </div>
        <div className="pr-2 hover:opacity-90">
          <button
            onClick={() => handleThemeChange()}
            data-set-theme={theme}
            data-act-class="ACTIVECLASS"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
