import React, { useState, useEffect } from "react";
import NavBarItems from "./NavBarItems";
import BtnDarkModeToggle from "./BtnDarkModeToggle";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, logOut }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setToggleNavbar((prev) => !prev);
  }

  const handleClickLogIn = () => navigate("/login");
  const handleClickSignUp = () => navigate("/signup");

  return (
    <>
      <nav className="navbar space-between bg-base-100 pt-6">
        <div className="navbar-start w-[100%] justify-between md:justify-start md:w-[50%]">
          <div className="dropdown ">
            <button
              className="btn btn-ghost 2xl:hidden xl:pl-4 xl:pr-4 xl:h-12 pl-2 pr-2 h-8"
              onClick={handleClick}
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
            <h1> The News Times</h1>
          </a>
          <BtnDarkModeToggle
            style={"pr-2 hover:opacity-90 md:hidden relative top-1 "}
          />
        </div>
        <div className="navbar-center hidden 2xl:flex">
          <ul className="menu menu-horizontal px-1">
            <NavBarItems />
          </ul>
        </div>
        {user ? (
          <div className="dropdown dropdown-hover dropdown-end  dropdown-bottom navbar-end hidden md:flex mr-4  ">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z"
                fill="#000000"
              />
              <path
                d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z"
                fill="#000000"
              />
            </svg>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a onClick={logOut}>Log out</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-end hidden md:flex pr-4 ">
            <a onClick={handleClickSignUp} className=" btn btn-primary  mr-2">
              Subscribe
            </a>
            <a onClick={handleClickLogIn} className="btn ">
              Log In
            </a>
          </div>
        )}

        <BtnDarkModeToggle
          style={"pr-2 hover:opacity-90 hidden md:block relative top-1"}
        />
      </nav>
    </>
  );
};

export default Navbar;
