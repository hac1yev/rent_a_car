import React, { useState } from 'react';
import porsche_logo from '../../assets/images/detail/porshce.svg';
import porsche_car from '../../assets/images/detail/main.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { stepSliceAction } from '../../store/step-slice';
import { Link } from 'react-router-dom';
import { rentCarSliceAction } from '../../store/rent_car-slice';
import { Autocomplete, FormControl, TextField } from '@mui/material';

const FirstStep = () => {
    const [validation,setValidation] = useState(false);
    const isTakeOverDelivery = useSelector(state => state.rentCarReducer.isTakeOverDelivery);
    const dispatch = useDispatch();
    const rentCarData = useSelector(state => state.rentCarReducer.rent_car_data);

    const continueStep = () => {
        dispatch(rentCarSliceAction.getIsTakeOverDelivery());
        setValidation(true);
        window.scrollTo(0,550);

        if(rentCarData[0].takeDate && rentCarData[0].deliveryDate && rentCarData[0].takePlace && rentCarData[0].deliveryPlace) {
            if(rentCarData[0].deliveryDate >= rentCarData[0].takeDate){
                dispatch(stepSliceAction.continueStep(1));
            }
        }else{
            return;
        }
    };

    const handleTakeDate = (date) => {
        dispatch(rentCarSliceAction.getTakeDate(date));
    };

    const cancelStepForm = () => {
        window.scrollTo(0,0);
        dispatch(rentCarSliceAction.resetStepForm());
    };

    const options = ['ilkin','shggdsd','shydgysd','sdhusfhs'];

    return (
        <>
            <div className="row firststep-row">
                <div className="col-lg-6">
                    <div className='car-info-first'>
                        <img src={porsche_logo} alt="porsche-logo" />
                        <div>
                            <h2>Porsche Panamera</h2>
                            <span>2023</span>
                        </div>
                    </div>
                    <div className='car-perday'>
                        <span>150₼/</span>günlük
                    </div>
                </div>
                <div className="col-lg-6 firststep-col">
                    <div className='firststep-car'>
                        <img src={porsche_car} alt="porsche-car" />
                    </div>
                </div>
                <div className='col-lg-6 first-input-col'>
                    <div className='first-input-group'>
                        <label htmlFor="">Götürülmə tarixi</label>
                        <DatePicker
                            className={(!rentCarData[0].takeDate && validation) || (isTakeOverDelivery) ? 'first-datepicker error' : 'first-datepicker'}
                            selected={rentCarData[0].takeDate}
                            onChange={handleTakeDate}
                            selectsStart
                            startDate={rentCarData[0].takeDate}
                            endDate={rentCarData[0].deliveryDate}
                        />
                        {!rentCarData[0].takeDate && validation && <p className='validation-error'>Götürülmə tarixini daxil edin!!!</p>}
                        {isTakeOverDelivery && <p className='validation-error'>Avtomobilin götürülmə və qaytarılma tarixini düzgün daxil edin!!!</p>}
                    </div>
                </div>
                <div className="col-lg-6 first-input-col">
                    <div className='first-input-group'>
                        <label htmlFor="">Qaytarılma tarixi</label>
                        <DatePicker
                            className={(!rentCarData[0].deliveryDate && validation) || (isTakeOverDelivery) ? 'first-datepicker error' : 'first-datepicker'} 
                            selected={rentCarData[0].deliveryDate}
                            onChange={(date) => dispatch(rentCarSliceAction.getDeliveryDate(date))}
                            selectsEnd
                            startDate={rentCarData[0].takeDate}
                            endDate={rentCarData[0].deliveryDate}
                            minDate={rentCarData[0].takeDate}
                        />
                        {!rentCarData[0].deliveryDate && validation && <p className='validation-error'>Qaytarılma tarixini daxil edin!!!</p>}
                        {isTakeOverDelivery && <p className='validation-error'>Avtomobilin götürülmə və qaytarılma tarixini düzgün daxil edin!!!</p>}
                    </div>
                </div>
                <div className={(!rentCarData[0].takePlace && validation) ? "col-lg-6 error-input-col first-input-col" : "col-lg-6 first-input-col"}>
                    <FormControl sx={{ m: 1, minWidth: 80 }} className='first-input-group'>
                        <label htmlFor="">Götürülmə yeri</label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo1"
                            value={rentCarData[0].takePlace}
                            onChange={(e) => dispatch(rentCarSliceAction.getTakePlace(e.target.innerText))}
                            options={options}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        {!rentCarData[0].takePlace && validation && <p className='validation-error'>Götürülmə yerini daxil edin!!!</p>}
                    </FormControl>
                </div>
                <div className={(!rentCarData[0].deliveryPlace && validation) ? "col-lg-6 error-input-col first-input-col" : "col-lg-6 first-input-col"}>
                    <FormControl sx={{ m: 1, minWidth: 80 }} className='first-input-group'>
                        <label htmlFor="">Qaytarılma yeri</label>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo2"
                            value={rentCarData[0].deliveryPlace}
                            onChange={(e) => dispatch(rentCarSliceAction.getDeliveryPlace(e.target.innerText))}
                            options={options}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        {!rentCarData[0].deliveryPlace && validation && <p className='validation-error'>Qaytarılma yerini daxil edin!!!</p>}    
                    </FormControl>
                </div>
                <div className="col-lg-12">
                    <div className='firststep-bottom'>
                        <div className='daily-rent'>
                            <p>Günlük icarə haqqı</p>
                            <span>150₼ x {rentCarData[0].dayCount} gün</span>
                        </div>
                        <div className='service-fee'>
                            <p>Servis haqqı</p>
                            <span>30₼</span>
                        </div>
                        {rentCarData[0].plusThreeDay && <div className='service-fee'>
                            <p style={{ color: 'rgba(4, 176, 0, 0.50)' }}>+3 gün endirimi</p>
                            <span>-30₼</span>
                        </div>}
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="first-total-price">
                        <span>Ümumi qiymət</span>
                        <span>{rentCarData[0].plusThreeDay ? rentCarData[0].dayCount * 150 : rentCarData[0].dayCount * 150 + 30}₼</span>
                    </div>
                </div>
            </div>
            <div className="step-buttons">
                <Link to='/detail' onClick={cancelStepForm} className='step-cancel-button'>Ləgv et</Link>
                <button type='button' className='step-continue-button' onClick={continueStep}>Davam et</button>
            </div>
        </>
    );
};

export default FirstStep;