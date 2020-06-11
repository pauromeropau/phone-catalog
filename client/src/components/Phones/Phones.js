import React from "react";
import { connect } from "react-redux";

import Phone from "../Phone/Phone";

import "./Phones.css";

const Phones = ({ phones }) => {

  return (
    <div className="phones">
      {phones.length === 8 ? (
        <div>
          <h1 className="phonesTitle">The smartphone's boutique</h1>
          <div className="phonesContainer">
            {phones.map((phone, i) => (
              <Phone key={i} phone={phone} />
            ))}
          </div>
        </div>
      ) : (
        <div className="LoadingWindow">
          <div className="LoadingWindowTextContainer">
            <h1 className="LoadingWindowText">We are looking for the best smartphones for you...</h1>
          </div>
          <div className="circles">
            <span className="circle c1"></span>
            <span className="circle c2"></span>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  phones: state.phones,
});

export default connect(mapStateToProps)(Phones);
