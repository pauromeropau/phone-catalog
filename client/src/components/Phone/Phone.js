import React from "react";
import { Link } from "react-router-dom";

import "./Phone.css";

const Phone = ({ phone }) => {
  let oldPrice = (phone.price + 199.99).toFixed(2);

  return (
    <div className="phone">
      <div className="phoneTitleContainer">
        <Link to={`/${phone.id}`} className="Link">
          <p className="phoneTitle">
            Smartphone - {phone.manufacturer} {phone.name} {phone.color}{" "}
            {phone.processor}
          </p>
        </Link>
      </div>
      <Link to={`/${phone.id}`} className="Link">
        <img
          className="phonePic"
          alt="phone"
          src={`/images/${phone.imageFileName}`}
        />
      </Link>
      <p className="phonePriceOld">£{oldPrice}</p>
      <h1 className="phonePrice">£{phone.price}</h1>
      <div className="phoneButtonsContainer">
        <Link to={`/${phone.id}`} className="Link">
          <button className="phoneButtonView">View more</button>
        </Link>
        <Link to={`/${phone.id}`} className="Link">
          <button className="phoneButtonBuy">Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default Phone;
