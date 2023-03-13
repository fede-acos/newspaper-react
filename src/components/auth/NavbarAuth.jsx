import React from "react";
import BtnDarkModeToggle from "../navbar/BtnDarkModeToggle";
import Logo from "../navbar/Logo";

function NavbarAuth() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn-ghost btn w-60 pb-4 text-2xl">
          <Logo />
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
