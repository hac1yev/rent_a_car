import React from 'react';
import './Services.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-5">
                    <div>
                        <h1>Müştərilərimizin düşüncələri</h1>
                        <span>Yüksək xidmət, yüksək məmnuniyyət gətirər</span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <Slider {...settings} className='settings-slider'>
                        <div className='settings-card'>
                            <div className='settings-stars'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#E7D000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#E7D000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#E7D000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#E7D000"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#E7D000"/>
                                </svg>
                            </div>
                            <h3>
                                “Platformadan istifadə etdikdən sonra artıq səyahət 
                                planalaması zamanı avtomobil problemi ilə qarşılaşmıram.
                                Rahatlığı bu platforma ilə kəşf etdim”
                            </h3>
                            <div className='settings-card-footer'>
                                <div className='settings-card-avatar'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="avatar" />
                                </div>
                                <div className='avatar-information'>
                                    <h4>Elnur Quliyev</h4>
                                    <p>Səyahətçi</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            406958756
                        </div>
                        <div>
                            dfgkhkty
                        </div>
                        <div>
                            tgbktknkty
                        </div>
                        <div>
                            23435
                        </div>                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Services;