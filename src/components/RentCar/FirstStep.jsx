import React, { useState } from 'react';
import porsche_logo from '../../assets/images/detail/porshce.svg';
import porsche_car from '../../assets/images/detail/main.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { stepSliceAction } from '../../store/step-slice';
import { Link } from 'react-router-dom';
import { rentCarSliceAction } from '../../store/rent_car-slice';
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material';

const FirstStep = () => {
    const [validation,setValidation] = useState(false);
    const isTakeOverDelivery = useSelector(state => state.rentCarReducer.isTakeOverDelivery);
    const dispatch = useDispatch();
    const rentCarData = useSelector(state => state.rentCarReducer.rent_car_data);

    const continueStep = () => {
        var timeDifference = rentCarData[0].deliveryDate - rentCarData[0].takeDate;
        var dayCount = timeDifference / (24 * 60 * 60 * 1000);
        let per_day_rent = dayCount * 150;

        let plus_three_day = dayCount >= 3 ? true : false;

        let total_fee = plus_three_day ? per_day_rent : per_day_rent + 30;

        const car_Data = {
            perDayRent: per_day_rent,
            totalFee: total_fee,
            plusThreeDay: plus_three_day
        }

        setValidation(true);
        window.scrollTo(0,550);

        if(rentCarData[0].takeDate > rentCarData[0].deliveryDate){
            dispatch(rentCarSliceAction.getIsTakeOverDelivery());
        }

        if(rentCarData[0].takeDate && rentCarData[0].deliveryDate && rentCarData[0].takePlace && rentCarData[0].deliveryPlace) {
            if(rentCarData[0].deliveryDate >= rentCarData[0].takeDate){
                dispatch(stepSliceAction.continueStep(1));
                dispatch(rentCarSliceAction.getCarData(car_Data));
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
                            className={(!rentCarData[0].takeDate && validation) || (isTakeOverDelivery) ? 'first-datepicker error-first-datepicker' : 'first-datepicker'}
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
                            className={(!rentCarData[0].deliveryDate && validation) || (isTakeOverDelivery) ? 'first-datepicker error-first-datepicker' : 'first-datepicker'} 
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
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={rentCarData[0].takePlace}
                            onChange={(e) => dispatch(rentCarSliceAction.getTakePlace(e.target.value))}
                            autoWidth
                            input={<OutlinedInput />}
                            displayEmpty
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Twenty'>Twenty</MenuItem>
                            <MenuItem value='Twenty one'>Twenty one</MenuItem>
                            <MenuItem value='Twenty one and a half'>Twenty one and a half</MenuItem>
                        </Select>
                        {!rentCarData[0].takePlace && validation && <p className='validation-error'>Götürülmə yerini daxil edin!!!</p>}
                    </FormControl>
                </div>
                <div className={(!rentCarData[0].deliveryPlace && validation) ? "col-lg-6 error-input-col first-input-col" : "col-lg-6 first-input-col"}>
                    <FormControl sx={{ m: 1, minWidth: 80 }} className='first-input-group'>
                        <label htmlFor="">Qaytarılma yeri</label>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={rentCarData[0].deliveryPlace}
                            onChange={(e) => dispatch(rentCarSliceAction.getDeliveryPlace(e.target.value))}
                            autoWidth
                            input={<OutlinedInput />}
                            displayEmpty
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='Twenty'>Twenty</MenuItem>
                            <MenuItem value='Twenty one'>Twenty one</MenuItem>
                            <MenuItem value='Twenty one and a half'>Twenty one and a half</MenuItem>
                        </Select>
                        {!rentCarData[0].deliveryPlace && validation && <p className='validation-error'>Qaytarılma yerini daxil edin!!!</p>}    
                    </FormControl>
                </div>
                <div className="col-lg-12">
                    <div className='firststep-bottom'>
                        <div className='daily-rent'>
                            <p>Günlük icarə haqqı</p>
                            <span>150₼ x 0 gün</span>
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
                        <span>30₼</span>
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