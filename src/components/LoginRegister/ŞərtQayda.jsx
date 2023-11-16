import React from 'react';
import { TbDownload } from "react-icons/tb";

const ŞərtQayda = () => {
    return (
        <>
            <div>
                <input type="file" download placeholder='Şərtlər və qaydalar' />
                <TbDownload />
            </div>
            <div>
                <input type="checkbox" id='condition' />
                <label htmlFor="condition">Oxudum və təsdiq edirəm</label>
            </div>
            <button type='submit'>Qeydiyyatı tamamla</button>
        </>
    );
};

export default ŞərtQayda;