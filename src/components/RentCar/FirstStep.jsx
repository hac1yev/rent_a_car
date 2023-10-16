import React, { useState } from 'react';
import porsche_logo from '../../assets/images/detail/porshce.svg';
import porsche_car from '../../assets/images/detail/main.svg';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { stepSliceAction } from '../../store/step-slice';
import { Link } from 'react-router-dom';

const FirstStep = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    const options = [
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate', label: 'Chocolate' },
    ];

    const continueStep = () => {
        dispatch(stepSliceAction.continueStep(1));
        window.scrollTo(0,0);
    };

    return (
        <>
            <div className="row firststep-row">
                <div className="col-lg-6">
                    <div className='car-info'>
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
                        <DatePicker className='first-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="col-lg-6 first-input-col">
                    <div className='first-input-group'>
                        <label htmlFor="">Qaytarılma tarixi</label>
                        <DatePicker className='first-datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="col-lg-6 first-input-col">
                    <div className='first-input-group'>
                        <label htmlFor="">Götürülmə yeri</label>
                        <Select
                            defaultValue={options[0].value}
                            name="colors"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                </div>
                <div className="col-lg-6 first-input-col">
                    <div className='first-input-group'>
                        <label htmlFor="">Götürülmə yeri</label>
                        <Select
                            defaultValue={options[0].value}
                            name="colors"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
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
                <Link to='/detail' onClick={() => window.scrollTo(0,0)} className='step-cancel-button'>Ləgv et</Link>
                <button className='step-continue-button' onClick={continueStep}>Davam et</button>
            </div>
        </>
    );
};

export default FirstStep;