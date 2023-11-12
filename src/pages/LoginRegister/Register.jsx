import React from 'react';
import { TextField } from '@mui/material';
import './LoginRegister.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='log-reg-section'>
            <div className="row w-100 ms-0">
                <div className='reg-img col-lg-6'>
                    <h2>Hesabın var ?</h2>
                    <p>Qaldığın yerdən davam et</p>
                    <Link to="/login">Daxil ol</Link>
                </div>
                <div className='log-reg-form col-lg-6'>
                    <h2>Bizə qatıl</h2>
                    <p>İndi icarəyə ver daha çox qazan</p>
                    <form action="">
                        <div>
                            <label htmlFor="email">Email</label>
                            <TextField
                                placeholder='Email daxil et'
                                id="email"
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Əlaqə nömrəsi</label>
                            <TextField
                                id="phone"
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Şifrə</label>
                            <TextField
                                placeholder='***********'
                                type='password'
                                id="password"
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <label htmlFor="new_password">Şifrəni təkrarla</label>
                            <TextField
                                placeholder='***********'
                                type='password'
                                id="new_password"
                                maxRows={4}
                            />
                        </div>
                        <div>
                            <p>Fiziki şəxs</p>

                        </div>
                        <button>
                            Davam et
                        </button>
                        <Link to="/login">Daxil ol</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;