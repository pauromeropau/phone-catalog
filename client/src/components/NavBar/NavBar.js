import React from "react";

import cartBlack from "./icons/cartBlack.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogoContainer">
        <a className="navbarLogo" href="/">
          The boutique
        </a>
      </div>
      <ul className="navbarList">
        <li className="navbarListOpt">
          <a className="navbarListOptText" href="/">
            iPhone
          </a>
        </li>
        <li className="navbarListOpt">
          <a className="navbarListOptText" href="/">
            Samsung
          </a>
        </li>
        <li className="navbarListOpt">
          <img className="navbarBuyIcon" src={cartBlack} alt="Cart icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
