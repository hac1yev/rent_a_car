import React from 'react';
import { MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import './LoginRegister.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='log-reg-section'>
            <div className="row w-100 ms-0">
                <div className='log-reg-form col-lg-6'>
                    <h2>Daxil ol</h2>
                    <p>İndi icarəyə ver daha çox qazan</p>
                    <form action="">
                        <div>
                            <label htmlFor="">Ölkə kodu</label>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                onChange={(e) => console.log('ilkin')}
                                autoWidth
                                input={<OutlinedInput />}
                                displayEmpty
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='Twenty'>
                                    <div className="country-code-li">
                                        <span>(+994)</span>  
                                        <p>Azərbaycan</p>  
                                    </div>
                                </MenuItem>
                                <MenuItem value='Twenty one'>Twenty one</MenuItem>
                                <MenuItem value='Twenty one and a half'>Twenty one and a half</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="phone">Nömrə</label>
                            <TextField
                                id="phone"
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Parol</label>
                            <TextField
                                type='password'
                                id="password"
                                maxRows={4}
                            />
                        </div>
                        <button>
                            Davam et
                        </button>
                        <Link to="/register">Qeydiyyatdan keç</Link>
                    </form>
                </div>
                <div className='log-reg-img col-lg-6'>
                    <h2>Yenisiniz ?</h2>
                    <p>O zaman qeydiyyatdan keç</p>
                    <Link to="/register">Qeydiyyat</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;