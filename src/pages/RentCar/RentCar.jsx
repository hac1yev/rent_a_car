import React from 'react';
import FirstStep from '../../components/RentCar/FirstStep';
import './RentCar.css';
import SecondStep from '../../components/RentCar/SecondStep';
import ThirdStep from '../../components/RentCar/ThirdStep';
import { Stepper, StepLabel, Step } from '@mui/material';
import { useSelector } from 'react-redux';

const RentCar = () => {
    const step = useSelector(state => state.stepReducer.step);

    // function showStep(step) {
    //     switch(step){
    //         case 0: 
    //             return <FirstStep />
    //         case 1:
    //             return <SecondStep />
    //         case 2:
    //             return <ThirdStep />
    //     }
    // };

    return (
        <div className='rent-car-wrapper'>
            <div className="rent-car-section">
                <div className='stepper-wrap'>
                    <div className="container-md stepper-container align-items-center">
                        <h3>Avtomobil icarəsi bir neçə addımlığında</h3>
                        <p>
                            Zəhmət olmasa aşağıda qeyd olunan məlumatları doldurun və avtomobil
                            icarə prossesina başlanılsın
                        </p>
                        <Stepper className='w-50' activeStep={step}>
                            <Step>
                                <StepLabel></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </div>
                <form className='container step-container mt-5'>
                    {step === 0 && <FirstStep />}
                    {step === 1 && <SecondStep />}
                    {step === 2 && <ThirdStep />}
                </form>
            </div>
        </div>
    );
};

export default RentCar;