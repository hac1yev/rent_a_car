import React from 'react';

const ŞəxsiyyətVəsiqə = ({ handleNext }) => {
    return (
        <>
            <div className='şexs-sürücü-div'>
                <label htmlFor="">Şəxsiyyət vəsiqəsinin fin kodu</label>
                <input type="password" placeholder="" />
            </div>
            <div className='şexs-sürücü-div'>
                <label htmlFor="">Şəxsiyyət vəsiqəsinin fotosu</label>
                <input type="file" />
            </div>
            <button className='btn btn-lg btn-primary' onClick={handleNext}>Növbəti</button>
        </>
    );
};

export default ŞəxsiyyətVəsiqə;