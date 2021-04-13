import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./PhoneDetails.css";
import cartWhite from "./icons/cartWhite.svg";
import NYT from "./icons/NYT.png";

const PhoneDetails = () => {
  const { phones } = useSelector((state) => {
    return {
      phones: state.phones,
    };
  });

  const [phone, setPhone] = useState("");
  const idx = useParams().phoneId;

  useEffect(() => {
    setPhone(phones.filter((phone) => (phone.id === +idx ? phone : null))[0]);
  }, [phone, phones, idx]);

  return phone ? (
    <div className="phoneDetails">
      <div className="phoneDetailsA">
        <img
          className="phoneDetailsNameImg"
          src={`/images/${phone.imageFileName}`}
          alt="phone"
        />
      </div>
      <div className="phoneDetailsB">
        <div className="phoneDetailsNameContainer">
          <span className="phoneDetailsName">
            {phone.manufacturer} {phone.name}
          </span>
          <br />
          <div className="phoneDetailsColorContainer">
            <span>Color</span>
            <div
              className="phoneDetailsColor"
              style={{ backgroundColor: `${phone.color}` }}
            ></div>
          </div>
        </div>
        <div className="phoneDetailsPriceContainer">
          <span className="phoneDetailsPrice">{phone.price}€</span>
        </div>
        <div className="phoneDetailsDesContainer">
          <span className="phoneDetailsDes">
            <i>"{phone.description}"</i>
          </span>{" "}
          <br />
          <img className="phoneDetailsDesAuthor" src={NYT} alt="NYT logo" />
        </div>
        <div className="phoneDetailsListContainer">
          <span> {phone.screen} Screen</span>
          <br />
          <span> {phone.processor} Processor</span>
          <br />
          <span> {phone.ram}GB RAM</span>
        </div>

        <div className="phoneDetailsButtonsContainer">
          <Link to={`/`} className="Link">
            <button className="phoneButtonNo">Not for me</button>
          </Link>
          <Link to={`/`} className="Link">
            {" "}
            <button className="phoneDetailsBuy">
              <img
                className="phoneDetailsBuyIcon"
                src={cartWhite}
                alt="Cart icon"
              />
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="LoadingDetails">
      <div className="LoadingDetailsTextContainer">
        <h1 className="LoadingDetailsText">Preparing smartphones details...</h1>
      </div>
      <div className="circles">
        <span className="circle c1"></span>
        <span className="circle c2"></span>
      </div>
    </div>
  );
};

export default PhoneDetails;
