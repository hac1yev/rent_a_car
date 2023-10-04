import React from 'react';
import Filter from '../components/Home/Filter/Filter';
import OtherCars from '../components/Home/OtherCars/OtherCars';
import MainSlider from '../components/Home/MainSlider/MainSlider';

const Home = () => {
    return (
        <div>
            <MainSlider />
            <Filter />
            <OtherCars />
        </div>
    );
};

export default Home;