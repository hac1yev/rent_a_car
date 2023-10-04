import React from 'react';
import './OtherCars.css';
import { BsBookmarks } from 'react-icons/bs';
import { BsBookmarksFill } from 'react-icons/bs';
import { carApis } from '../../../assets/api/dummyCarsApi';
import { MdUpdate } from 'react-icons/md';
import { PiEngineBold } from 'react-icons/pi';
import { BiDroplet } from 'react-icons/bi';

const OtherCars = () => {
    return (
        <div className='container'>
            <h2 className='other-cars-title'>Digər Avtomobillər</h2>
            <div className="row">
                {carApis.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 car-card-col">
                        <div className="card car-card">
                            <div className='car-imgs'>
                                <img className="card-img-top" src={item.car_img.default} alt={item.car_name} />
                                <div className="car-logo">
                                    <img src={item.logo.default} alt="logo" />
                                </div>
                                <div className='car-save'>
                                    <BsBookmarks />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className='car-info'>
                                    <p>{item.car_name}</p>
                                    <div className='car-statistics'>
                                        <div className='car-year'>
                                            <MdUpdate />
                                            <span>{item.year}</span>
                                        </div>
                                        <div className='car-engine'>
                                            <PiEngineBold />
                                            <span>{item.car_engine}</span>
                                        </div>
                                        <div className='car-gasoline'>
                                            <BiDroplet />
                                            <span>{item.gasoline}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='car-price'>
                                    <span>{item.price_per_day}/</span>günlük
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button>Hamısını göstər</button>
            </div>
        </div>
    );
};

export default OtherCars;