import React from 'react';
import Filter from '../components/Home/Filter/Filter';
import OtherCars from '../components/Home/OtherCars/OtherCars';
import MainSlider from '../components/Home/MainSlider/MainSlider';
import VipCars from '../components/Home/VipCars/VipCars';

const Home = () => {
    return (
        <div>
            <MainSlider />
            <Filter />
            <VipCars />
            <OtherCars />
        </div>
    );
};

export default Home;