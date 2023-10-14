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
            {isSent && <>
                <img src="" alt="" />
            </>}
        </div>
    );
};

export default ThirdStep;