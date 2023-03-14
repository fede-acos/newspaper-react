import React from "react";
import BtnDarkModeToggle from "../navbar/BtnDarkModeToggle";
import Logo from "../navbar/Logo";

function NavbarAuth() {
  return (
    <nav className="flex w-full justify-end bg-base-200 pb-4 sm:pb-0">
      <BtnDarkModeToggle style={"mr-3 mt-3"} />
    </nav>
  );
}

export default NavbarAuth;
