import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveSection } from "../../features/section/sectionSlice";
import BtnDarkModeToggle from "./BtnDarkModeToggle";
import NavBarItems from "./NavBarItems";
import Overlay from "./Overlay";

const Navbar = ({ user, logOut }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const btnDropdownRef = useRef(null);

  const dispatch = useDispatch();

  function handleSectionChange(section) {
    dispatch(saveSection(section));
    setIsDropDownOpen(false);
  }
  function handleClick() {
    setIsDropDownOpen((prev) => !prev);
  }

  const handleClickOutside = (event) => {
    console.log("trigger");
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (
        event.target === btnDropdownRef.current ||
        event.target.parentElement === btnDropdownRef.current
        // if we are clicking  the close dropdown btn returns
      )
        return;
      setIsDropDownOpen(false);
    }
  };

  /*   useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []); */

  const handleClickLogIn = () => navigate("/login");
  const handleClickSignUp = () => navigate("/signup");

  return (
    <>
      <nav className="space-between navbar content-center items-center bg-base-100 pt-6">
        <Overlay
          handleSectionChange={handleSectionChange}
          handleClick={handleClick}
          dropdownRef={dropdownRef}
          isDropDownOpen={isDropDownOpen}
        />
        <div className="navbar-start w-full justify-between md:w-[50%] md:justify-start">
          <div className="dropdown relative ">
            <button
              className="btn-ghost btn h-8 pl-2 pr-2 xl:h-12 xl:pl-4 xl:pr-4 2xl:hidden"
              onClick={handleClick}
            >
              <svg
                ref={btnDropdownRef}
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
          </div>
          <a className="btn-ghost btn ml-[2%] pl-3 pr-3 text-3xl normal-case sm:text-4xl xl:pl-4  xl:pr-4 2xl:text-5xl ">
            <h1> The News Times</h1>
          </a>

          <BtnDarkModeToggle style={"pr-2 hover:opacity-90 md:hidden   "} />
        </div>
        <div className="navbar-center hidden 2xl:flex">
          <ul ref={dropdownRef} className="menu menu-horizontal px-1">
            <NavBarItems
              handleSectionChange={handleSectionChange}
              user={user}
              handleClickLogIn={handleClickLogIn}
              handleClickSignUp={handleClickSignUp}
            />
          </ul>
        </div>
        {user ? (
          <div className="dropdown-bottom dropdown-end dropdown-hover  dropdown navbar-end mr-4 hidden md:flex ">
            <label className="  btn-ghost btn-square btn  ">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" />
                <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" />
              </svg>
            </label>
            <ul className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
              <li>
                <a>{user.email}</a>
              </li>
              <li>
                <a onClick={logOut}>Log out</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar-end hidden pr-4 md:flex ">
            <a onClick={handleClickSignUp} className=" btn-primary btn  mr-2">
              Subscribe
            </a>
            <a onClick={handleClickLogIn} className="btn ">
              Log In
            </a>
          </div>
        )}

        <BtnDarkModeToggle
          style={"pr-2 hover:opacity-90 hidden md:block relative  "}
        />
      </nav>
    </>
  );
};

export default Navbar;
