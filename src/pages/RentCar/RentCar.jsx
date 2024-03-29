import React from 'react';
import FirstStep from '../../components/RentCar/FirstStep';
import './RentCar.css';
import SecondStep from '../../components/RentCar/SecondStep';
import ThirdStep from '../../components/RentCar/ThirdStep';
import { Stepper, StepLabel, Step } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import { rentCarSchema } from '../../assets/schema/rentCarSchema';
import { stepSliceAction } from '../../store/step-slice';
import { rentCarSliceAction } from '../../store/rent_car-slice';

const RentCar = () => {
    const step = useSelector(state => state.stepReducer.step);
    const dispatch = useDispatch();

    const rentCarData = useSelector(state => state.rentCarReducer.rent_car_data);

    let handleSubmitForm = async (e) => {
        dispatch(rentCarSliceAction.getAllCartData({
            fullName: values.fullName,
            email: values.email,
            phone: values.phone
        }));
        dispatch(stepSliceAction.continueStep(1));
        console.log(rentCarData);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          phone: "",
          email: "",
          fullName: "",
          CVV: "",
          usageDate: "",
          cartNumbers: ""
        },
        validationSchema: rentCarSchema,
        onSubmit: handleSubmitForm
    });

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
                <div>
                    <form className='container step-container mt-5' onSubmit={handleSubmit}>
                        {step === 0 && <FirstStep />}
                        {step === 1 && 
                            <SecondStep 
                                values={values} 
                                handleBlur={handleBlur} 
                                handleChange={handleChange} 
                                errors={errors}
                                touched={touched}
                            />}
                    </form>
                    {step === 2 && <ThirdStep />}
                </div>
            </div>
        </div>
    );
};

export default RentCar;