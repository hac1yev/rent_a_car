import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stepSliceAction } from '../../store/step-slice';

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
        <div>
            SecondStep
            <div className="step-buttons">
                <button className='step-cancel-button' onClick={backStep}>Öncəkinə qayıt</button>
                <button className='step-continue-button' onClick={submitForm}>Tamamla</button>
            </div>
        </div>
    );
};

export default SecondStep;