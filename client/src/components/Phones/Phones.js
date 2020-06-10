import React from "react";
import { connect } from "react-redux";

import Phone from "../Phone/Phone";

import "./Phones.css";

const Phones = ({ phones }) => {

  if (!phones)
  return (
    <div className="loadingPhones">
      <h1>Loading...</h1>
    </div>
  );

  return (
    <div className="phones">
      <h1 className="phonesTitle">The smartphone's boutique</h1>
      <div className="phonesContainer">
        {phones.map((phone, i) => (
          <Phone key={i} phone={phone} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  phones: state.phones,
});

export default connect(mapStateToProps)(Phones);
