import React from "react";
import RentUp from "../../components/RentIT/RentUp";
import RentServices from "../../components/RentIT/RentServices";
import RentQuest from "../../components/RentIT/RentQuest";
import "./RentIt.css";
import RentOnly from "../../components/RentIT/RentOnly";

const RentIt = () => {
  return (
    <div className="rentcar-container">
      <div className="rentcar-wrapper">
        <div className=" container rentcar-container-inner">
          <RentUp />
        </div>
        <RentOnly />
        <div className="container  rentcar-container-inner">
          <RentServices />
          <RentQuest />
        </div>
      </div>
    </div>
  );
};

export default RentIt;
