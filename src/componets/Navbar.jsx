import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSection } from "../features/section/sectionSlice";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  function handleSectionChange(section) {
    dispatch(saveSection(section));
  }
  console.log(isOpen);
  return (
    <nav className="">
      <div>
        <div className="w-12 h-12 z-40 relative text-black">
          <Hamburger
            size={30}
            duration={0.5}
            toggled={isOpen}
            toggle={setOpen}
            rounded
            label="Show menu"
          />
        </div>

        {isOpen && (
          <ul className=" absolute w-[80vw] h-[100vh] top-0 z-20 bg-gray-50 pt-16 pl-[11px] rounded-lg flex flex-col border-gray-700 gap-2">
            <li className="py-2 pl-3 pr-4 text-white bg-blue-700 rounded ">
              <a href="#" onClick={() => handleSectionChange("world")}>
                World
              </a>
            </li>
            <li className="p-3 rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-200">
              <a href="#" onClick={() => handleSectionChange("politics")}>
                Politics
              </a>
            </li>
            <li className="p-3  rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-200">
              <a href="#" onClick={() => handleSectionChange("business")}>
                Business
              </a>
            </li>
            <li className="p-3  rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-200">
              <a href="#" onClick={() => handleSectionChange("technology")}>
                Technology
              </a>
            </li>
            <li className="p-3  rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-200">
              <a href="#" onClick={() => handleSectionChange("science")}>
                Science
              </a>
            </li>
            <li className="p-3  rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-200">
              <a href="#" onClick={() => handleSectionChange("sports")}>
                Sports
              </a>
            </li>
            <li className="p-3  rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-200">
              <a href="#" onClick={() => handleSectionChange("movies")}>
                Movies
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="flex pl-2 pr-2">
        <a href="#">
          <img src="./src/assets/img/The-News-Times-3.svg" alt="logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
