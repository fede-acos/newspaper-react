import React, { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import NavBarItems from "./NavBarItems";
import BtnDarkModeToggle from "./BtnDarkModeToggle";
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
        <div className="navbar-start w-[100%] place-content-center md:justify-start md:w-[50%]">
          <div className="dropdown ">
            <button
              className="btn btn-ghost 2xl:hidden xl:pl-4 xl:pr-4 xl:h-12 pl-2 pr-2 h-8"
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
              <ul className="menu text-  mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52 absolute z-10">
                <NavBarItems />
              </ul>
            ) : (
              <div />
            )}
          </div>
          <a className="btn btn-ghost normal-case text-3xl 2xl:text-5xl sm:text-4xl ml-[2%] xl:pl-4 xl:pr-4  pl-3 pr-3 ">
            The News Times
          </a>
          <BtnDarkModeToggle
            style={"pr-2 hover:opacity-90 md:hidden relative top-1 "}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
        </div>
        <div className="navbar-center hidden 2xl:flex">
          <ul className="menu menu-horizontal px-1">
            <NavBarItems />
          </ul>
        </div>
        <div className="navbar-end hidden md:flex pr-4 ">
          <a className="btn">Subscribe</a>
        </div>

        <BtnDarkModeToggle
          style={"pr-2 hover:opacity-90 hidden md:block"}
          theme={theme}
          handleThemeChange={handleThemeChange}
        />
      </nav>
    </>
  );
};

export default Navbar;
