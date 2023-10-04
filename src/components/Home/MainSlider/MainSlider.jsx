import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
import element from "../../../assets/images/main-slider/1.png";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-cont">
      <Slider {...settings}>
        <div className="slick-div-cont">
          <img src={element} alt="" />
          <p>
            Avtomobil{" "}
            <span>
              rahatlığı <br /> səyahətinizi mükəmməlləşdirsin!
            </span>
          </p>
        </div>
        <div className="slick-div-cont">
          <img src={element} alt="" />
          <p>
            Avtomobil{" "}
            <span>
              rahatlığı <br /> səyahətinizi mükəmməlləşdirsin!
            </span>
          </p>
        </div>
        <div className="slick-div-cont">
          <img src={element} alt="" />
          <p>
            Avtomobil{" "}
            <span>
              rahatlığı <br /> səyahətinizi mükəmməlləşdirsin!
            </span>
          </p>
        </div>
        <div className="slick-div-cont">
          <img src={element} alt="" />
          <p>
            Avtomobil{" "}
            <span>
              rahatlığı <br /> səyahətinizi mükəmməlləşdirsin!
            </span>
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
