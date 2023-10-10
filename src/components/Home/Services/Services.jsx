import React from 'react';
import './Services.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings_app from '../../../assets/images/home/settings-app.svg';
import settings_google from '../../../assets/images/home/settings-google.svg';
import settings_phone from '../../../assets/images/home/settings-phone.svg';

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-5 settings-col1">
                    <div>
                        <h1>Müştərilərimizin düşüncələri</h1>
                        <span>Yüksək xidmət, yüksək məmnuniyyət gətirər</span>
                    </div>
                </div>
                <div className="col-lg-7 settings-col2">
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
                    </Slider>
                </div>
            </div> 
            <div className="row settings-bottom-row">
                <div className="col-lg-4 settings-col3">
                    <div className='settings-bottom-left'>
                        <h2>Tezliklə bütün platformalarda</h2>
                        <p>
                            Qısa müddət ərzində xidmətlərimizdən mobil tətbiqlərimiz
                            üzərindən faydalana biləcəksiniz.
                        </p>
                        <div>
                            <a href="https://youtube.com" target='_blank' rel='noreferrer'>                            
                                <img className='img-fluid' src={settings_app} alt="app-store" />
                            </a>
                            <a href="https://youtube.com" target='_blank' rel='noreferrer' className='settings-app-link'>
                                <img className='img-fluid' src={settings_google} alt="google-play" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className='settings-phone' src={settings_phone} alt="settings-phone" />
                </div>
            </div>
        </div>
    );
};

export default Services;