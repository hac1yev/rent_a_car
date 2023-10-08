import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { AiOutlineSearch } from 'react-icons/ai';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import filterIcon from '../../../assets/images/home/menu.png';
import './Filter.css';

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [filterIsVisible,setFilterIsVisible] = useState(false);

  const [isDateVisible,setIsDateVisible] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start.toDateString());
    setEndDate(end.toDateString());
    setIsDateVisible(false);
  };

  const handleDatePicker = () => {
    setIsDateVisible(prev => !prev); 
  }

  const showHideFilter = () => {
    setFilterIsVisible(prev => !prev);
  };

  const options = [
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'chocolate', label: 'Chocolate' },
  ];

  return (
    <div className="filter-wrapper my-5">
      <div className="container">
        <h2 className='filter-title'>Özünə ən uyğun avtomobili seç</h2>
          <form action="" className='filter-form row'>
            <div className='filter-parametr' onClick={showHideFilter}>
              {filterIsVisible ? 'Sade Filtr' : 'Yüksək Filtr'} &nbsp;
              <img src={filterIcon} alt="filter-icon" />
            </div>
            <div className='filter-selects col-md-12'>
              <div className="row w-100">
                <div className={filterIsVisible ? 'select-group col-lg-4 col-md-6' : 'select-group col-lg-3 col-md-6'}>
                  <label htmlFor="marka">Götürümə yeri</label>
                  <div className="select2-icon-wrap">
                    <svg className='select2-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                      <path d="M12 14.7778V7.11111M16.2857 10.9455L7.71429 10.9444M22 11.2C22 16.281 17 20.4 12 25C7 20.4 2 16.281 2 11.2C2 6.11898 6.47716 2 12 2C17.5229 2 22 6.11898 22 11.2Z" stroke="#475EE9" strokeWidth="2.5" strokeLinejoin="round" />
                    </svg>
                    <Select
                      defaultValue={options[0].value}
                      isMulti
                      name="colors"
                      options={options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className={filterIsVisible ? 'select-group col-lg-4 col-md-6' : 'select-group col-lg-3 col-md-6'}>
                  <label htmlFor="model">Təhvil yeri</label>
                  <div className='select2-icon-wrap'>
                    <svg className='select2-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                      <path d="M16.2857 10.9455L7.71429 10.9444M22 11.2C22 16.281 17 20.4 12 25C7 20.4 2 16.281 2 11.2C2 6.11898 6.47716 2 12 2C17.5229 2 22 6.11898 22 11.2Z" stroke="#475EE9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Select
                      defaultValue={options[0].value}
                      isMulti
                      name="colors"
                      options={options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
                <div className={filterIsVisible ? 'filter-date-wrap col-lg-4 col-md-6' : 'filter-date-wrap col-lg-4 col-md-6'}>
                  
                  <div className='filter-datepicker'>
                    <label htmlFor="">Götürülmə və təhvil tarixi</label>
                    <span className="filter-date-div" onClick={handleDatePicker}>
                      <svg className='datepicker-icon' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M6.88889 10.5556H19.1111M6.88889 15.4444H13M6.88889 2V4.44444M19.1111 2V4.44444M5.91111 24H20.0889C21.4579 24 22.1425 24 22.6653 23.7336C23.1253 23.4993 23.4993 23.1253 23.7336 22.6653C24 22.1425 24 21.4579 24 20.0889V8.35556C24 6.98653 24 6.30203 23.7336 5.77914C23.4993 5.31918 23.1253 4.94523 22.6653 4.71088C22.1425 4.44444 21.4579 4.44444 20.0889 4.44444H5.91111C4.5421 4.44444 3.85758 4.44444 3.33469 4.71088C2.87473 4.94523 2.50078 5.31918 2.26643 5.77914C2 6.30203 2 6.98653 2 8.35556V20.0889C2 21.4579 2 22.1425 2.26643 22.6653C2.50078 23.1253 2.87473 23.4993 3.33469 23.7336C3.85758 24 4.54209 24 5.91111 24Z" stroke="#475EE9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {endDate === null ? 'Tarixi seç' : `${startDate}, ${endDate}`}
                    </span>
                    {isDateVisible && <DatePicker
                      selected={startDate}
                      onChange={onChange}
                      onClickOutside={() => setIsDateVisible(false)}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />}
                  </div>
                </div>
                
                {filterIsVisible && <>
                  <div className="col-lg-4 col-md-6 high-filter-col">
                    <div className='select-group-high'>
                      <label htmlFor="otrsay">Oturacaq sayı</label>
                      <select name="otrsay" id="otrsay">
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 high-filter-col">
                    <div className='select-group-high'>
                      <label htmlFor="relyear">Buraxılış ili</label>
                      <select name="relyear" id="relyear">
                        <option value="2000">2000</option>
                        <option value="2010">2010</option>
                        <option value="2020">2020</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 high-filter-col">
                    <div className='input-group-high'>
                      <label htmlFor="">Qiymət aralığı</label>
                      <div className='filter-inputs-wrap'>
                        <input type="number" placeholder='Min' />
                        <span></span>
                        <input type="number" placeholder='Max' />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 high-filter-col">
                    <div className='select-group-high'>
                      <label htmlFor="surqut">Sürət qutusu</label>
                      <select name="surqut" id="surqut">
                        <option value="">2</option>
                        <option value="">5</option>
                        <option value="">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 high-filter-col">
                    <div className='select-group-high'>
                      <label htmlFor="mothecm">Motor həcmi</label>
                      <select name="mothecm" id="mothecm">
                        <option value="">2</option>
                        <option value="">5</option>
                        <option value="">10</option>
                      </select>
                    </div>
                  </div>
                </>}

                <div className="filter-search-button col-lg-2 col-md-4">
                  <button>
                    Axtar
                    <AiOutlineSearch />
                  </button>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Filter;