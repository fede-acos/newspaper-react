import React from "react";
const Navbar = ({ setCategory }) => {
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
