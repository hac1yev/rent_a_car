import React from 'react';
import { MobileStepper } from '@mui/material';
import './LoginRegister.css';
import ŞəxsiyyətVəsiqəsi from '../../components/LoginRegister/ŞəxsiyyətVəsiqəsi';
import SürücülükVəsiqəsi from '../../components/LoginRegister/SürücülükVəsiqəsi';
import ŞərtQayda from '../../components/LoginRegister/ŞərtQayda';
import CompleteRegister from '../../components/LoginRegister/CompleteRegister';

const StepperRegister = () => {
    const [activeStep, setActiveStep] = React.useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    return (
        <div style={{ background: '#060b1f' }}>
            <div className='stepper-register-wrapper'>
            <div className='container stepper-register-container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <h2>Qeydiyyatı tamamla</h2>
                        <p className='mt-4'>
                            10 dəqiqə ərzində fiziki şəxs kimi qeydiyyatı tamamla və avtomobilini 
                            icarə etməyə başla
                        </p>
                    </div>
                </div>
                <MobileStepper
                    variant="progress"
                    steps={5}
                    position="static"
                    activeStep={activeStep}
                    sx={{ width: '100%', flexGrow: 1, marginTop: '20px' }}
                />
                <form onSubmit={handleSubmit} className='step-register-form'>
                    {activeStep === 1 && <ŞəxsiyyətVəsiqəsi handleNext={handleNext} />}
                    {activeStep === 2 && <SürücülükVəsiqəsi handleNext={handleNext} />}
                    {activeStep === 3 && <ŞərtQayda />}
                    {activeStep === 4 && <CompleteRegister />}
                </form>
            </div>
        </div>
        </div>
    );
};

export default StepperRegister;