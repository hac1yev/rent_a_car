import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stepSliceAction } from '../../store/step-slice';
import rent_car_cart from '../../assets/images/rent-car/step-form-cart.svg';
import cart_numbers from '../../assets/images/rent-car/cart-numbers.svg';
import { rentCarSliceAction } from '../../store/rent_car-slice';

const SecondStep = ({ values,handleBlur,handleChange,errors,touched }) => {
    const step = useSelector(state => state.stepReducer.step);
    const rentCarData = useSelector(state => state.rentCarReducer.rent_car_data);

    const dispatch = useDispatch();

    const backStep = () => {
        if(step > 0) {
            dispatch(stepSliceAction.backStep(1));
        }
        window.scrollTo(0,0);
    };

    const handleCardNumberChange = (e) => {
        let input = e.target.value;
        const cursorPosition = e.target.selectionStart;

        // Remove non-digit characters and spaces
        const formattedValue = input.replace(/[^\d]/g, '').replace(/\s/g, '');

        // Limit the card number to 16 digits
        const truncatedCardNumber = formattedValue.substring(0, 16);

        // Insert a space after every 4 digits except for the last 4
        const formattedCardNumber = truncatedCardNumber.replace(/(\d{4})(?!$)/g, '$1 ');

        dispatch(rentCarSliceAction.getCardNumber(formattedCardNumber));
        values.cartNumbers = formattedCardNumber;

        // Restore the cursor position
        e.target.setSelectionRange(cursorPosition, cursorPosition);
    };

    const handleCVVChange = (e) => {
        const input = e.target.value;
        // Limit the CVV to 3 digits
        const truncatedCVV = input.substring(0, 3); 
        dispatch(rentCarSliceAction.getCvvValue(truncatedCVV));
        
        if(truncatedCVV.length === 3) {
            values.CVV = truncatedCVV;
        }else{
            values.CVV = "";
        }
    };
    
    const handleExpiryChange = (e) => {
        const input = e.target.value;
        const cursorPosition = e.target.selectionStart;

        // Limit the expiry date to 5 characters (MM/YY)
        const truncatedExpiry = input.substring(0, 5);

        // Automatically add a "/" between the month and year if not already present
        const formattedExpiry = truncatedExpiry.replace(/^(\d{2})([^\d]?)(\d{0,2})/, '$1/$3');

        dispatch(rentCarSliceAction.getExpiryValue(formattedExpiry));
        
        if(formattedExpiry.length === 5) {
            values.usageDate = formattedExpiry;
        }else{
            values.usageDate = "";
        }

        // Restore the cursor position
        e.target.setSelectionRange(cursorPosition, cursorPosition);
    };

    // Input icine herf yazmagin qarsisini alir
    const handleKeyPress = (e) => {
        const keyCode = e.which || e.keyCode;
        if (keyCode < 48 || keyCode > 57) {
        e.preventDefault();
        }
    };

    // Input icine reqem yazmagin qarsisini alir
    const handleKeyPressNumber = (e) => {
        const keyCode = e.which || e.keyCode;
        if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode === 32)) {
            e.preventDefault(); 
        }
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
                        <h3>{rentCarData[0].totalFee}₼</h3>
                    </div>
                </div>
                <div className="row paycart-info-row">
                    <div className="col-lg-5">
                        <h4>Kart məlumatları</h4>
                    </div>
                    <div className="col-lg-7">
                        <div className='second-step-group col-12'>
                            <label htmlFor="fullName">Kartın üzərindəki ad və soyad</label>
                            <input 
                                type="text" 
                                id="fullName" 
                                value={values.fullName} 
                                placeholder='Ad və Soyadınızı daxil edin...'
                                className={errors.fullName && touched.fullName ? 'form-control error' : 'form-control'}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                onKeyPress={handleKeyPressNumber}
                            />
                            {errors.fullName && touched.fullName && <p className='validation-error'>{errors.fullName}</p>}
                        </div>
                        <div className='row'>
                            <div className='second-step-group col-xl-9 col-md-8 mt-4'>
                                {/* <label htmlFor="cartNumbers">Kartın üzərindəki rəqəmlər</label> */}
                                {/* <div className='paycart-numbers'>
                                    <input 
                                        type="number" 
                                        id="cartNumbers" 
                                        placeholder='Kart nömrəsini daxil edin...'
                                        value={values.cartNumbers} 
                                        className={errors.cartNumbers && touched.cartNumbers ? 'form-control error' : 'form-control'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <img src={cart_numbers} alt="cart-numbers" />
                                </div> */}
                                {/* {errors.cartNumbers && touched.cartNumbers && <p className='validation-error'>{errors.cartNumbers}</p>} */}

                                <label htmlFor="cardNumber">Kartın üzərindəki rəqəmlər</label>
                                <div className="paycart-numbers">
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        value={rentCarData[1].cartNumber}
                                        className={errors.cartNumbers && touched.cartNumbers ? 'form-control error' : 'form-control'}
                                        onChange={handleCardNumberChange}
                                        onBlur={handleBlur}
                                        placeholder="Kart nömrəsini daxil edin!"
                                        maxLength={19}
                                    />
                                    <img src={cart_numbers} alt="cart-numbers" />
                                </div>
                                {errors.cartNumbers && touched.cartNumbers && <p className='validation-error'>{errors.cartNumbers}</p>}
                            </div>
                            <div className='second-step-group col-xl-3 col-md-4 col-6 mt-4'>
                                <label htmlFor="usageDate">İstifadə tarixi</label>
                                <input 
                                    type="text" 
                                    id="usageDate" 
                                    value={rentCarData[1].expiry} 
                                    className={errors.usageDate && touched.usageDate ? 'form-control error' : 'form-control'}
                                    onChange={handleExpiryChange}
                                    maxLength={5}
                                    placeholder="MM/YY"
                                    onBlur={handleBlur}  
                                    onKeyPress={handleKeyPress}                               
                                />
                                {errors.usageDate && touched.usageDate && <p className='validation-error'>{errors.usageDate}</p>}
                            </div>
                            <div className='second-step-group col-xl-3 col-md-4 col-6 mt-4'>
                                <label htmlFor="CVV">CVV</label>
                                <input 
                                    type="text" 
                                    id="CVV" 
                                    value={rentCarData[1].cvv} 
                                    placeholder='CVV daxil edin...'
                                    className={errors.CVV && touched.CVV ? 'form-control error' : 'form-control'}
                                    onChange={handleCVVChange}
                                    onBlur={handleBlur} 
                                    maxLength={3}
                                    onKeyPress={handleKeyPress}                               
                                />
                                {errors.CVV && touched.CVV && <p className='validation-error'>{errors.CVV}</p>}
                            </div>
                            <div className='second-step-group col-xl-9 col-md-8 mt-4'>
                                <label style={{ visibility: 'hidden' }} htmlFor="cartNumbers">Digər Kartlar</label>
                                <div className='other-paycarts'>
                                    <label htmlFor="otherCarts">Digər Kartlar</label>
                                    <button type='button'>Kartı yadda saxla</button>
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
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder='Email-nizi daxil edin...'
                                className={errors.email && touched.email ? 'form-control error' : 'form-control'}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && <p className='validation-error'>{errors.email}</p>}
                        </div>
                        <div className='second-step-group col-12 mt-4'>
                            <label htmlFor="phone">Əlaqə nömrəsi</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                placeholder='+994*********'
                                value={values.phone} 
                                className={errors.phone && touched.phone ? 'form-control error' : 'form-control'}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                            {errors.phone && touched.phone && <p className='validation-error'>{errors.phone}</p>}
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
                <button type='submit' className='step-continue-button'>Tamamla</button>
            </div>
        </>
    );
};

export default SecondStep;