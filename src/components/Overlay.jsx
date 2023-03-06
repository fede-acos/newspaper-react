import React from "react";
import NavBarItems from "./navbar/NavBarItems";

function Overlay({ handleClick, dropdownRef, isDropDownOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 z-10 h-full w-[50%]  -translate-x-full bg-slate-900 md:w-[40%] lg:w-[30%] xl:w-[20%] ${
        isDropDownOpen ? "translate-x-0" : ""
      } `}
    >
      <button
        className="absolute top-4 right-9 text-4xl text-white"
        onClick={() => handleClick()}
        ref={dropdownRef}
      >
        X
      </button>
      <ul className="relative w-full text-center">
        <NavBarItems />
      </ul>
    </div>
  );
}

export default Overlay;
