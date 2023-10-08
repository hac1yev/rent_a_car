import React from "react";
import "./vip.css";
import flame from "../../../assets/images/vip-slider/flame.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import opel from "../../../assets/images/home/opel-car.svg";
import opellogo from "../../../assets/images/home/opel-logo.svg";
import rent from "../../../assets/images/vip-slider/rent.png";
import formaltick from "../../../assets/images/vip-slider/formal.svg";

const VipCars = () => {
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
          pauseOnHover: false,
          infinite: true
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="vip-container">
        <div className="vip-container-1">
          <h1>
            Önə Çıxan avtomobillər <img src={flame} alt="" />{" "}
          </h1>
        </div>
        <div className="vip-slider-cards">
          <Slider {...settings2}>
            <div className="vip-cards">
              <div>
                <div className="vip-card">
                  <div className="vip-img">
                    <img className="vip-car-img" src={opel} alt="vip" />
                    <div className="car-brand">
                      <img src={opellogo} alt="" />
                      <div className="vip-car-brand">
                        <p className="vip-brand-name">Mercedes-Benz S 500</p>
                        <p className="vip-model-name">4 Matic - 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="vip-info">
                    <div className="vipcar-info">
                      <img src={rent} alt="" />
                      <div className="vipcar-info-2">
                        <p className="rent-store">212 Rent a car</p>
                        <div className="formal-part">
                          <img src={formaltick} alt="" /> &nbsp;
                          <p>Rəsmi partnyor</p>
                        </div>
                      </div>
                    </div>
                    <div className="vipcar-price">
                      <b>120₼</b>
                      <span>/günlük</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vip-cards">
              <div>
                <div className="vip-card">
                  <div className="vip-img">
                    <img className="vip-car-img" src={opel} alt="vip" />
                    <div className="car-brand">
                      <img src={opellogo} alt="" />
                      <div className="vip-car-brand">
                        <p className="vip-brand-name">Mercedes-Benz S 500</p>
                        <p className="vip-model-name">4 Matic - 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="vip-info">
                    <div className="vipcar-info">
                      <img src={rent} alt="" />
                      <div className="vipcar-info-2">
                        <p className="rent-store">212 Rent a car</p>
                        <div className="formal-part">
                          <img src={formaltick} alt="" /> &nbsp;
                          <p>Rəsmi partnyor</p>
                        </div>
                      </div>
                    </div>
                    <div className="vipcar-price">
                      <b>120₼</b>
                      <span>/günlük</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vip-cards">
              <div>
                <div className="vip-card">
                  <div className="vip-img">
                    <img className="vip-car-img" src={opel} alt="vip" />
                    <div className="car-brand">
                      <img src={opellogo} alt="" />
                      <div className="vip-car-brand">
                        <p className="vip-brand-name">Mercedes-Benz S 500</p>
                        <p className="vip-model-name">4 Matic - 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="vip-info">
                    <div className="vipcar-info">
                      <img src={rent} alt="" />
                      <div className="vipcar-info-2">
                        <p className="rent-store">212 Rent a car</p>
                        <div className="formal-part">
                          <img src={formaltick} alt="" /> &nbsp;
                          <p>Rəsmi partnyor</p>
                        </div>
                      </div>
                    </div>
                    <div className="vipcar-price">
                      <b>120₼</b>
                      <span>/günlük</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vip-cards">
              <div>
                <div className="vip-card">
                  <div className="vip-img">
                    <img className="vip-car-img" src={opel} alt="vip" />
                    <div className="car-brand">
                      <img src={opellogo} alt="" />
                      <div className="vip-car-brand">
                        <p className="vip-brand-name">Mercedes-Benz S 500</p>
                        <p className="vip-model-name">4 Matic - 2022</p>
                      </div>
                    </div>
                  </div>
                  <div className="vip-info">
                    <div className="vipcar-info">
                      <img src={rent} alt="" />
                      <div className="vipcar-info-2">
                        <p className="rent-store">212 Rent a car</p>
                        <div className="formal-part">
                          <img src={formaltick} alt="" /> &nbsp;
                          <p>Rəsmi partnyor</p>
                        </div>
                      </div>
                    </div>
                    <div className="vipcar-price">
                      <b>120₼</b>
                      <span>/günlük</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VipCars;
