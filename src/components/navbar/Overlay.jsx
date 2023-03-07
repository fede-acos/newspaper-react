import React from "react";

import items from "./itemsNavbar";

function Overlay({
  handleClick,
  dropdownRef,
  isDropDownOpen,
  handleSectionChange,
}) {
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
      <ul className=" absolute top-20 flex w-full flex-col items-center gap-2 ">
        {items.map((item) => (
          <li
            key={item.name}
            className="w-full text-center text-xl text-white sm:text-2xl"
          >
            <a
              className="cursor-pointer"
              onClick={() => handleSectionChange(item.value)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overlay;
