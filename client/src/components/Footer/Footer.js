import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerList">
        <li className="footerListOpt">
          <h3 className="footerListOptTitle">Home Office Shop</h3>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            MacBook
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Laptop
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Desktop
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Computers
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Tablets
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Computer accessories
          </a>
        </li>
      </ul>
      <ul className="footerList">
        <li className="footerListOpt">
          <h3 className="footerListOptTitle">Audio</h3>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Micro Hi-Fi System
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Dock & Docking Station
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Headphones & Earphones
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            Speakers
          </a>
        </li>
        <li className="footerListOpt">
          <a className="footerListOptText" href="/">
            MP3 & MP4 Player
          </a>
        </li>
      </ul>

      {/* <div className="footerSign">
        <p>
          Made with
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
