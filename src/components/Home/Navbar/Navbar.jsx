import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import menupng from "../../../assets/images/main-slider/menu.png";

const Navbar = () => {
  const [showSec, setShowSec] = useState(false);

  return (
    <nav className="nav-container">
      <div className="container nav-second-container">
        <div className="logo-sec">
          <h1>Logo</h1>
        </div>

        <div className="right-sec">
          <button className="rent">+ İcarəyə ver</button>
          <button onClick={() => setShowSec(!showSec)} className="menu">
            <img src={menupng} alt="" />
          </button>
        </div>
      </div>

      <div
        className={showSec ? "hidden-sec show-menu" : "hidden-sec hide-menu"}
      >
        <div className="nav-first-sec">1</div>
        <div className="nav-second-sec">2</div>
        <button onClick={() => setShowSec(!showSec)}>X</button>
      </div>
    </nav>
  );
};

export default Navbar;
