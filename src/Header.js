import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <a href="#">Logo</a>
      </header>
      <div className="container">
        <div className="main">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
