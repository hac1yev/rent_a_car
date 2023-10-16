import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ThirdStep = () => {
    const [isSent,setIsSent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsSent(true);
        }, 3000);

        return () => {
            clearTimeout();
        }
    }, []);

    return (
        <div className='container step-loading'>
            {!isSent && <>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
                <h4>Məlumatlar yoxlanılır...</h4>
            </>}
            {isSent && <div className='wave-wrapper'>
                <h2 className='wave__title'>Ödəniş və məlumatlar sistemə yerləşdirildi</h2>
                <p className='wave__desc'>Tezliklə təsdiq haqqında məlumat sizin telefon nömrəsinə və emailinizə yönləndiriləcək</p>
                <div class="wave">
                    <div className='wave__icon'>
                        <svg className='wave__btn' xmlns="http://www.w3.org/2000/svg" width="119" height="79" viewBox="0 0 119 79" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M116.95 1.99713C119.683 4.66004 119.683 8.97736 116.95 11.6403L51.8995 75.0057C46.4322 80.3318 37.5679 80.3311 32.1006 75.0057L2.05023 45.7337C-0.683411 43.071 -0.683411 38.7534 2.05023 36.0907C4.78395 33.428 9.21607 33.428 11.9498 36.0907L42.0001 65.3627L107.05 1.99713C109.784 -0.66571 114.216 -0.66571 116.95 1.99713Z" fill="white"/>
                        </svg>
                    </div>
                    <div class="wave__container">
                        <div class="wave__circle"></div>
                        <div class="wave__circle"></div>
                        <div class="wave__circle"></div>
                        <div class="wave__circle"></div>
                        <div class="wave__circle"></div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ThirdStep;