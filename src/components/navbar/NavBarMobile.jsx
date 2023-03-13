import React, { memo } from "react";

import items from "./itemsNavbar";

import { useSelector } from "react-redux";

function NavBarMobile({
  handleClick,
  isDropDownOpen,
  handleSectionChange,
  dropdownRef,
  user,
  handleClickLogIn,
  handleClickSignUp,
}) {
  const { section } = useSelector((state) => state.section);
  return (
    <div
      ref={dropdownRef}
      className={`fixed top-0 left-0 z-10 h-full w-[50%] -translate-x-full rounded  bg-base-100 shadow-sm shadow-base-content transition-transform duration-200 md:w-[40%] lg:w-[30%] xl:w-[20%] ${
        isDropDownOpen ? "translate-x-0" : ""
      } `}
    >
      <button
        className="absolute top-6 right-4  opacity-90"
        onClick={() => handleClick()}
      >
        <svg
          viewBox="0 0 38 38"
          width="20px"
          height="20px"
          aria-hidden="true'"
          className="fill-base-content hover:opacity-90"
        >
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <polygon
              fillRule="nonzero"
              points="33.4 0 19 14.4 4.601 0 0 4.6 14.4 19 0 33.4 4.6 38 19 23.6 33.4 38 38 33.399 23.6 18.999 38 4.6"
            ></polygon>
          </g>
        </svg>
      </button>
      <ul className=" absolute top-20 flex w-full flex-col items-center gap-2 p-2 ">
        <span className="mb-4 h-[1px] w-[90%] bg-base-content opacity-20"></span>
        {items.map((item) => (
          <li
            key={item.name}
            className={` w-full rounded-md  p-2 pl-4 text-left text-xl text-base-content sm:text-2xl ${
              section === item.value
                ? "text-base-50 bg-base-300"
                : "hover:text-base-50 hover:bg-base-200 active:bg-base-200"
            }`}
          >
            <a
              className="cursor-pointer"
              onClick={() => handleSectionChange(item.value)}
            >
              {item.name}
            </a>
          </li>
        ))}
        {user ? (
          <li className="text-base-50 w-full bg-base-300 p-2 text-center text-lg sm:text-2xl md:hidden">
            {user.email}
          </li>
        ) : (
          <>
            <li
              onClick={handleClickLogIn}
              className="btn-primary btn mt-10  w-full  cursor-pointer  rounded-md p-1  text-center text-xl  sm:text-2xl md:hidden"
            >
              Log In
            </li>
            <li
              onClick={handleClickSignUp}
              className=" btn w-full  rounded-md  p-1 text-center text-xl  sm:text-2xl md:hidden"
            >
              Subscribe
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBarMobile;
