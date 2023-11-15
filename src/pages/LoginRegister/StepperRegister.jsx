import React from 'react';
import { Button, MobileStepper } from '@mui/material';
import './LoginRegister.css';

const StepperRegister = () => {
    const [activeStep, setActiveStep] = React.useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div style={{ background: '#060b1f' }}>
            <div className='stepper-register-wrapper'>
            <div className='container stepper-register-container'>
                <div className="row d-flex justify-content-center pt-5">
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
                    steps={6}
                    position="static"
                    activeStep={activeStep}
                    sx={{ width: '100%', flexGrow: 1, marginTop: '20px' }}
                />
                {activeStep === 1 && <p>AAAAAAAAAAAAAAAAAA</p>}
                {activeStep === 2 && <p>BBBBBBBBBBBBBBBBBB</p>}
                {activeStep === 3 && <p>CCCCCCCCCCCCCCCCCC</p>}
                {activeStep === 4 && <p>DDDDDDDDDDDDDDDDDD</p>}
                {activeStep === 5 && <p>FFFFFFFFFFFFFFFFFF</p>}
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                        </Button>
                <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
                        Back
                        </Button>
            </div>
        </div>
        </div>
    );
};

export default StepperRegister;