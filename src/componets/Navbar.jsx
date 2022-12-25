import React from "react";
import { saveSection } from "../features/section/sectionSlice";
import { useSelector } from "react-redux";

const Navbar = ({ setCategory }) => {
  const { section } = useSelector((state) => state.section);
  console.log(section);

  function handleSectionChange(section) {
    saveSection(section);
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="#" onClick={() => setCategory("world")}>
            World
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("politics")}>
            Politics
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("business")}>
            Business
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
