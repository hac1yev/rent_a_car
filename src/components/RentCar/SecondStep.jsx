import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stepSliceAction } from '../../store/step-slice';
import rent_car_cart from '../../assets/images/rent-car/step-form-cart.svg';

const SecondStep = () => {
    const step = useSelector(state => state.stepReducer.step);
    const dispatch = useDispatch();

    const submitForm = () => {
        dispatch(stepSliceAction.continueStep(1));
    };

    const backStep = () => {
        if(step > 0) {
            dispatch(stepSliceAction.backStep(1));
        }
        window.scrollTo(0,0);
    };

    return (
        <>
            <div className='secondstep-row row'>
                <div className='paycart-img'>
                    <img src={rent_car_cart} alt="rent-car-cart" />
                </div>
                <div className="secondstep-total-price row">
                    <div className="col-12 d-flex justify-content-between">
                        <h3>Ümumi qiymət</h3>
                        <h3>1050₼</h3>
                    </div>
                </div>
                <div className="row paycart-info-row">
                    <div className="col-lg-5">
                        <h4>Kart məlumatları</h4>
                    </div>
                    <div className="col-lg-7">
                        <div className='second-step-group col-12'>
                            <label htmlFor="fullName">Kartın üzərindəki ad və soyad</label>
                            <input type="text" id="fullName" value="Mahammad Ahmadzada" className='form-control' />
                        </div>
                        <div className='row'>
                            <div className='second-step-group col-xl-9 col-md-8 mt-4'>
                                <label htmlFor="cartNumbers">Kartın üzərindəki rəqəmlər</label>
                                <input type="number" id="cartNumbers" className='form-control' />
                            </div>
                            <div className='second-step-group col-xl-3 col-md-4 col-6 mt-4'>
                                <label htmlFor="usageDate">İstifadə tarixi</label>
                                <input type="number" id="usageDate" className='form-control' />
                            </div>
                            <div className='second-step-group col-xl-3 col-md-4 col-6 mt-4'>
                                <label htmlFor="CVV">CVV</label>
                                <input type="password" value="123" id="CVV" className='form-control' />
                            </div>
                            <div className='second-step-group col-xl-9 col-md-8 mt-4'>
                                <label style={{ visibility: 'hidden' }} htmlFor="cartNumbers">Digər Kartlar</label>
                                <div className='other-paycarts'>
                                    <label htmlFor="otherCarts">Digər Kartlar</label>
                                    <button>Kartı yadda saxla</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row paycart-info-row2">
                    <div className="col-lg-5">
                        <h4>
                            Məlumatın 
                            yönləndirilməsi üçün
                        </h4>
                    </div>
                    <div className="col-lg-7">
                        <div className='second-step-group col-12'>
                            <label htmlFor="cartEmail">Email</label>
                            <input type="text" id="cartEmail" value="Ahmadovm@gmail.com" className='form-control' />
                        </div>
                        <div className='second-step-group col-12 mt-4'>
                            <label htmlFor="contactNumber">Əlaqə nömrəsi</label>
                            <input type="text" id="contactNumber" value="+994 51 545 3432" className='form-control' />
                        </div>
                        <div className='row'>
                            
                        </div>
                    </div>
                    <div className='paycart-terms-conditions'>
                        <div className='d-flex align-items-center'>
                            <h4 className='mb-0'>Şərtlər və qaydalar</h4>
                        </div>
                        <div className='second-step-group'>
                            <label htmlFor="acceptCondition">Bütün şərtlərlə razıyam</label>
                            <input type="checkbox" id="acceptCondition" className='paycart-check' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="step-buttons">
                <button className='step-cancel-button' onClick={backStep}>Öncəkinə qayıt</button>
                <button type='submit' className='step-continue-button' onClick={submitForm}>Tamamla</button>
            </div>
        </>
    );
};

export default SecondStep;