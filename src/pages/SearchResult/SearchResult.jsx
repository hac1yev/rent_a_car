import React from 'react';
import './SearchResult.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RxCountdownTimer } from 'react-icons/rx';
import { BiDroplet } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import Select from 'react-select';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { carApis } from '../../assets/api/dummyCarsApi';
import { PiEngineBold } from 'react-icons/pi';
import { MdUpdate } from 'react-icons/md';
import { BsBookmarks } from 'react-icons/bs';

const SearchResult = () => {
    const options = [
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate', label: 'Chocolate' },
    ];

    return (
        <div className='search-result-wrapper'>
            <div className="search-result-top">
                <div style={{ padding: '0 1.6%' }}>
                    <div className="row">
                        <div className="col-12">
                            <h2 className='search-result-title'>
                                Axtarış nəticələri
                                <AiOutlineSearch />
                            </h2>
                        </div>
                    </div>
                    <div className="row inputs-row">
                        <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className='takeplace-result'>
                                <p>Götürülmə yeri</p>
                                <div className='takeplace-content'>
                                    H. Aliyev Int Airport
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
                            <div className='takeplace-result'>
                                <p>Təhvil yeri</p>
                                <div className='delivery-content'>
                                    Baş ofis
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div className='takeplace-result'>
                                <p>Götürülmə və təhvil tarixi</p>
                                <div className='takeplace-content'>
                                    <FaRegCalendarAlt className='takeplace-icon' />
                                    11 Okt 2023 - 11 Okt 2023  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
                            <div className='takeplace-result'>
                                <p>Götürülmə saatı</p>
                                <div className='takeplace-content'>
                                    <RxCountdownTimer className='takeplace-icon' />
                                    16:00
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mt-3">
                            <div className='takeplace-result'>
                                <p>Təhvil saatı</p>
                                <div className='takeplace-content'>
                                    <RxCountdownTimer className='takeplace-icon' />
                                    21:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row result-row ms-0">
                <div className="col-lg-3 px-0">
                    <div className='result-high-filter'>
                        <div className='high-filter-top'>
                            <h3>Yüksək filtr</h3>
                            <p>Filtri sıfırla</p>
                        </div>
                        <div className='select-group-high mt-5'>
                            <label className='select-group-high-label' htmlFor="surqut">Marka</label>
                            <div className="select2-icon-wrap">
                                <FiChevronDown className='select2-icon' />
                                <Select
                                    defaultValue={options[0].value}
                                    name="colors"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                        <div className='select-group-high mt-3'>
                            <label className='select-group-high-label' htmlFor="surqut">Model</label>
                            <div className="select2-icon-wrap">
                                <FiChevronDown className='select2-icon' />
                                <Select
                                    defaultValue={options[0].value}
                                    name="colors"
                                    options={options}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                        <div className='input-group-high mt-3'>
                            <label className='input-group-high-label' htmlFor="">Qiymət aralığı</label>
                            <div className='filter-inputs-wrap'>
                                <input type="number" placeholder='Min' />
                                <span></span>
                                <input type="number" placeholder='Max' />
                            </div>
                            <div className='mt-5'>
                                <Accordion className="result-accordion">
                                    <AccordionSummary
                                        expandIcon={<FiChevronDown className='plus-icon' />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="result-text">Oturacaq sayı</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="result-detail">
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="result-accordion">
                                    <AccordionSummary
                                        expandIcon={<FiChevronDown className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="result-text">Buraxılış ili</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="result-detail">
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="result-accordion">
                                    <AccordionSummary
                                        expandIcon={<FiChevronDown className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="result-text">Yanacaq növü</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="result-detail">
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="result-accordion">
                                    <AccordionSummary
                                        expandIcon={<FiChevronDown className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="result-text">Sürət qutusu</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="result-detail">
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className="result-accordion">
                                    <AccordionSummary
                                        expandIcon={<FiChevronDown className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className="result-text">Motor həcmi</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className="result-detail">
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className='result-all-cars row'>
                        <div className="row">
                            <div className="col-12">
                                <h4 className='result-cars-title'>Tapılan nəticələr <span>(4)</span></h4>
                            </div>
                        </div>
                        <div className="row">
                        {carApis.map((item) => (
                            <div className="col-md-6 col-xl-4 car-card-col" key={item.id}>
                                <div className="card car-card mt-4">
                                    <div className='car-imgs'>
                                        <img className="card-img-top" src={item.car_img.default} alt={item.car_name} />
                                        <div className="car-logo">
                                            <img src={item.logo.default} alt="logo" />
                                        </div>
                                        <div className='car-save'>
                                            <BsBookmarks />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className='car-info'>
                                            <p>{item.car_name}</p>
                                            <div className='car-statistics'>
                                                <div className='car-year'>
                                                    <MdUpdate />
                                                    <span>{item.year}</span>
                                                </div>
                                                <div className='car-engine'>
                                                    <PiEngineBold />
                                                    <span>{item.car_engine}</span>
                                                </div>
                                                <div className='car-gasoline'>
                                                    <BiDroplet />
                                                    <span>{item.gasoline}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='car-price'>
                                            <span>{item.price_per_day}/</span>günlük
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;