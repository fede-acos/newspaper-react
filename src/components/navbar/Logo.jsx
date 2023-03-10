import React from "react";
import { useSelector } from "react-redux";

function Logo() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <img src={`${theme === "dark" ? "/logoWhite.png" : "/logoDark.png"}`} />
  );
}

export default Logo;
