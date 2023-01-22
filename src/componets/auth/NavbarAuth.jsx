import React from "react";
import BtnDarkModeToggle from "../navbar/BtnDarkModeToggle";

function NavbarAuth() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case xl:text-2xl">The News Times</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <BtnDarkModeToggle />
        </button>
      </div>
    </div>
  );
}

export default NavbarAuth;
