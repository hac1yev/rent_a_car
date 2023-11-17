import React from 'react';

const SürücülükVəsiqəsi = ({ handleNext }) => {
    return (
        <>
            <div className='şexs-sürücü-div'>
                <label htmlFor="">Sürücülük vəsiqəsinin fotosu</label>
                <input type="file" placeholder='Jpg, png və ya pdf format' />
            </div>
            <button className='btn btn-lg btn-primary' type='button' onClick={handleNext}>Növbəti</button>
        </>
    );
};

export default SürücülükVəsiqəsi;