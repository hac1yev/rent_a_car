import React from 'react';
import { CiExport } from "react-icons/ci";
import styled from 'styled-components';

const ŞəxsiyyətVəsiqə = ({ handleNext }) => {
    const Input = styled.input`
        width: 100%;
        line-height: 56px!important;
        padding: 0 20px!important;
    
        &::-webkit-file-upload-button {
            display: none;
        }
    `;

    return (
        <>
            <div className='şexs-sürücü-div'>
                <label htmlFor="">Şəxsiyyət vəsiqəsinin fin kodu</label>
                <input type="password" placeholder="" />
            </div>
            <div className='şexs-sürücü-div'>
                <label htmlFor="">Şəxsiyyət vəsiqəsinin fotosu</label>
                <div className="step-file-div">
                    <Input type="file" />
                    <CiExport />
                </div>
            </div>
            <button className='btn btn-lg btn-primary' onClick={handleNext}>Növbəti</button>
        </>
    );
};

export default ŞəxsiyyətVəsiqə;