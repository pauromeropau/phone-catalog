import React from "react";
// import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogoContainer">
        <h1 className="navbarLogo" href="/">
          The boutique
        </h1>
      </div>
      <ul className="navbarList">
        <li className="navbarListOpt">
          <a className="navbarListOptText" href="/">
            iPhone
          </a>
        </li>
        <li className="navbarListOpt">
          <a className="navbarListOptText" href="/">
            Xiaomi
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
