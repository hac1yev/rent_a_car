import React from "react";
import "./vip.css";
import flame from "../../../assets/images/vip-slider/flame.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VipCars = () => {
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            <div className="vip-card">
                <div>
                    <h1>1</h1>
                </div>
            </div>
            <div className="vip-card">
                <div>
                    <h1>2</h1>
                </div>
            </div>
            <div className="vip-card">
                <div>
                    <h1>3</h1>
                </div>
            </div>
            <div className="vip-card">
                <div>
                    <h1>4</h1>
                </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VipCars;
