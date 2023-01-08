import React from "react";
import { useDispatch } from "react-redux";
import { saveSection } from "../../features/section/sectionSlice";

function NavBarItems() {
  const dispatch = useDispatch();

  function handleSectionChange(section) {
    dispatch(saveSection(section));
  }

  return (
    <>
      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("world")}
        >
          World
        </a>
      </li>
      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("politics")}
        >
          Politics
        </a>
      </li>

      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("business")}
        >
          Business
        </a>
      </li>
      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("technology")}
        >
          Technology
        </a>
      </li>

      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("science")}
        >
          Science
        </a>
      </li>
      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("sports")}
        >
          Sports
        </a>
      </li>

      <li>
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("movies")}
        >
          Movies
        </a>
      </li>
    </>
  );
}

export default NavBarItems;
