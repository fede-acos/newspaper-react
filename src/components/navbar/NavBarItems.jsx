import React from "react";
import { useDispatch } from "react-redux";
import { saveSection } from "../../features/section/sectionSlice";

function NavBarItems({ handleClickLogIn, handleClickSignUp, user }) {
  const dispatch = useDispatch();

  function handleSectionChange(section) {
    dispatch(saveSection(section));
  }

  return (
    <>
      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("world")}
        >
          World
        </a>
      </li>
      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("politics")}
        >
          Politics
        </a>
      </li>

      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("business")}
        >
          Business
        </a>
      </li>
      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("technology")}
        >
          Technology
        </a>
      </li>

      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("science")}
        >
          Science
        </a>
      </li>
      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("sports")}
        >
          Sports
        </a>
      </li>

      <li className="bg-base-200">
        <a
          className="cursor-pointer"
          onClick={() => handleSectionChange("movies")}
        >
          Movies
        </a>
      </li>
      <div className=" flex gap-1 bg-base-200  md:hidden">
        {user ? (
          <li className="bg-base-300">
            <a> {user.email}</a>
          </li>
        ) : (
          //need to create a dropdown to logout
          <>
            <li className="rounded-lg bg-primary pl-2 text-primary-content">
              <a onClick={handleClickSignUp} className="cursor-pointer">
                Subscribe
              </a>
            </li>
            <li className="rounded-lg bg-neutral text-neutral-content">
              <a onClick={handleClickLogIn} className="cursor-pointer">
                Login
              </a>
            </li>
          </>
        )}
      </div>
    </>
  );
}

export default NavBarItems;
