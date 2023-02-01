import React from "react";
import BtnDarkModeToggle from "../navbar/BtnDarkModeToggle";

function NavbarAuth() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn-ghost btn normal-case xl:text-3xl">
          The News Times
        </a>
      </div>
      <div className="flex-none">
        <div className="btn-ghost btn-square btn">
          <BtnDarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default NavbarAuth;
