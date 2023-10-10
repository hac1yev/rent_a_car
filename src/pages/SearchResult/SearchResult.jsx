import React from 'react';
import './SearchResult.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RxCountdownTimer } from 'react-icons/rx';
import { BiDroplet, BiPlus } from 'react-icons/bi';
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
                <div className="container-xl">
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
                <div className="col-lg-4 px-0">
                    <div className='result-high-filter'>
                        <div className='high-filter-top'>
                            <h3>Yüksək filtr</h3>
                            <p>Filtri sıfırla</p>
                        </div>
                        <div className='select-group-high mt-5'>
                            <label className='select-group-high-label' htmlFor="surqut">Marka</label>
                            <div className="select2-icon-wrap">
                                <svg className='select2-icon' xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                                    <path d="M0.421688 0.412833C-0.140562 0.956456 -0.140562 1.83795 0.421688 2.38157L7.46558 9.18547C8.59036 10.2719 10.4129 10.2715 11.5371 9.18451L18.5783 2.37656C19.1406 1.83294 19.1406 0.951445 18.5783 0.407822C18.016 -0.135941 17.1044 -0.135941 16.5421 0.407822L10.5155 6.23468C9.95315 6.7783 9.0416 6.7783 8.47935 6.23468L2.45788 0.412833C1.89563 -0.13079 0.983938 -0.13079 0.421688 0.412833Z" fill="#0F0F0F"/>
                                </svg>
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
                                <svg className='select2-icon' xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                                    <path d="M0.421688 0.412833C-0.140562 0.956456 -0.140562 1.83795 0.421688 2.38157L7.46558 9.18547C8.59036 10.2719 10.4129 10.2715 11.5371 9.18451L18.5783 2.37656C19.1406 1.83294 19.1406 0.951445 18.5783 0.407822C18.016 -0.135941 17.1044 -0.135941 16.5421 0.407822L10.5155 6.23468C9.95315 6.7783 9.0416 6.7783 8.47935 6.23468L2.45788 0.412833C1.89563 -0.13079 0.983938 -0.13079 0.421688 0.412833Z" fill="#0F0F0F"/>
                                </svg>
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
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiPlus className='plus-icon' />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiPlus className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiPlus className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiPlus className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<BiPlus className='plus-icon' />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControlLabel control={<Checkbox />} label="2-4 nəfərlik" />
                                        <FormControlLabel control={<Checkbox />} label="5 nəfərdən çox" />
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className='result-all-cars row'>
                        <div className="row">
                            <div className="col-12">
                                <h4 className='result-cars-title'>Tapılan nəticələr <span>(4)</span></h4>
                            </div>
                        </div>
                        <div className="row">
                        {carApis.map((item) => (
                            <div className="col-md-6 car-card-col" key={item.id}>
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