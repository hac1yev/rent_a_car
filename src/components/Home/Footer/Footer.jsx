import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-big-cont">
      <div className="footer-container container">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="footer-info">
          <div className="platform">
            <h2>Platformalar</h2>
            <li>
              <Link>Bütün elanlar</Link>
            </li>
            <li>
              <Link>Partnyorlar</Link>
            </li>
            <li>
              {" "}
              <Link>Önəçıxanlar</Link>
            </li>
            <li>
              <Link>E-xidmətlər</Link>
            </li>
          </div>
          <div className="other">
            <h2>Digər</h2>
            <li>
              <Link>Qaydalar</Link>
            </li>
            <li>
              <Link>Qanun</Link>
            </li>
            <li>
              {" "}
              <Link>Məxfilik</Link>
            </li>
            <li>
              <Link>Əlaqə</Link>
            </li>
          </div>
          <div className="email">
            <li>
              Email: <Link></Link>
            </li>
            <li>Unvan: </li>

            <div className="newssettler">
              <div className="newssettler-inner">
                <input type="email" placeholder="Email daxil et" />
                <button className="newssettler-btn">Abonə ol</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
