import React from "react";
import items from "./itemsNavbar";

function NavBarDesktop({
  handleClickLogIn,
  handleClickSignUp,
  user,
  handleSectionChange,
}) {
  return (
    <>
      {items.map((item) => (
        <li key={item.name} className="bg-base-200 xl:bg-base-100">
          <a
            className="cursor-pointer"
            onClick={() => handleSectionChange(item.value)}
          >
            {item.name}
          </a>
        </li>
      ))}

      <div className=" flex gap-1 bg-base-200 md:hidden  xl:bg-base-100">
        {user ? (
          <li className="bg-base-300 xl:bg-base-100">
            <a> {user.email}</a>
          </li>
        ) : (
          <>
            <li className="rounded-lg bg-primary pl-2 text-primary-content xl:bg-base-100">
              <a onClick={handleClickSignUp} className="cursor-pointer">
                Subscribe
              </a>
            </li>
            <li className="rounded-lg bg-neutral text-neutral-content xl:bg-base-100">
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

export default NavBarDesktop;
