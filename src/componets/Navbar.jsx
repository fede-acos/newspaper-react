import React from "react";
import { useDispatch } from "react-redux";
import { saveSection } from "../features/section/sectionSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  function handleSectionChange(section) {
    dispatch(saveSection(section));
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={() => handleSectionChange("world")}>
            World
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleSectionChange("politics")}>
            Politics
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleSectionChange("business")}>
            Business
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
