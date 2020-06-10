import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./PhoneDetails.css";
import cart from "./icons/cart.svg";

const PhoneDetails = () => {
  const { phones } = useSelector((state) => {
    return {
      phones: state.phones,
    };
  });
  const params = useParams().phoneId;
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(phones.filter((el) => (el.id === +params ? el : null))[0]);
  }, [phone, phones, params]);

  console.log(phone);

  if (!phone)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  const oldPrice = (phone.price + 199.99).toFixed(2);

  return (
    <div className="phoneDetails">
      <div className="phoneDetailsA">
        <img
          className="phoneDetailsNameImg"
          src={`/images/${phone.imageFileName}`}
          alt="phone"
        />
      </div>
      <div className="phoneDetailsB">
        <span className="phoneDetailsName">
          {phone.manufacturer} {phone.name} - {phone.color}
        </span>
        <br />
        <span className="phoneDetailsPriceOld">£${oldPrice}</span>
        <span className="phoneDetailsPrice">£{phone.price}</span>
        <br />
        <span className="phoneDetailsDes"> {phone.description}</span>
        <ul>
          <li className="phoneDetailsScreen"> {phone.screen} Screen</li>
          <li className="phoneDetailsProc"> {phone.processor} Processor</li>
          <li className="phoneDetailsRAM"> {phone.ram}GB RAM</li>
        </ul>
        <button className="phoneDetailsBuy">
          <img className="phoneDetailsBuyIcon" src={cart} alt="Cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PhoneDetails;
