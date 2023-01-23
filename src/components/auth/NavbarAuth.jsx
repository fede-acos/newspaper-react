import React from "react";
import BtnDarkModeToggle from "../navbar/BtnDarkModeToggle";

function NavbarAuth() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case xl:text-3xl">
          The News Times
        </a>
      </div>
      <div className="flex-none">
        <div className="btn btn-square btn-ghost">
          <BtnDarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default NavbarAuth;
