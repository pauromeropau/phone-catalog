import React from "react";
// import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbarLogoContainer">
        <h1 className="navbarLogo" href="/">
          Phone Market
        </h1>
      </div> */}
      <ul className="navbarList">
        <li className="navbarListOpt">
          <a className="navbarListOptFlash" href="/">
            Flash Sales!
          </a>
        </li>
        <li className="navbarListOpt">
          <a className="navbarListOptText" href="/">
            Tablets
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
