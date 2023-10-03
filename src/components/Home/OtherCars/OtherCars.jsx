import React from 'react';
import './OtherCars.css';
import { BsBookmarks } from 'react-icons/bs';
import { BsBookmarksFill } from 'react-icons/bs';
import { carApis } from '../../assets/api/dummyCarsApi';

const OtherCars = () => {
    return (
        <div className='container'>
            <div className="row">
                {carApis.map((item) => (
                    <div className="col-xl-3 col-md-2">
                        <div className="card">
                            <img className="card-img-top" src={item.car_img.default} alt={item.car_name} />
                            <img className="car-logo" src={item.logo.default} alt="logo" />
                            <BsBookmarks />
                            <div className="card-body">
                                <h5 className="card-title">{item.car_name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherCars;