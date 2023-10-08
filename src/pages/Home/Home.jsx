import React from 'react';
import Filter from '../../components/Home/Filter/Filter';
import OtherCars from '../../components/Home/OtherCars/OtherCars';
import MainSlider from '../../components/Home/MainSlider/MainSlider';
import VipCars from '../../components/Home/VipCars/VipCars';
import Services from '../../components/Home/Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <MainSlider />
            <Filter />
            <div className="other-card-wrap">
                <VipCars />
                <OtherCars />
            </div>
            <Services />
        </div>
    );
};

export default Home;