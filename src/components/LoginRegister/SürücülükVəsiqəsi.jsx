import React from 'react';

const SürücülükVəsiqəsi = ({ handleNext }) => {
    return (
        <>
            <div className='şexs-sürücü-div'>
                <label htmlFor="">Sürücülük vəsiqəsinin fotosu</label>
                <input type="file" placeholder='Jpg, png və ya pdf format' />
            </div>
            <button type='button' onClick={handleNext}>Növbəti</button>
        </>
    );
};

export default SürücülükVəsiqəsi;