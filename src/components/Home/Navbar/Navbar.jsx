import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import menupng from "../../../assets/images/main-slider/menu.png";
import closepng from "../../../assets/images/main-slider/close.png";
// import { MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
// import google_icon from '../../../assets/images/login-register/google-icon.svg';

const Navbar = () => {
  const [showSec, setShowSec] = useState(false);

  const handleAuth = () => {
    setShowSec(!showSec);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="container nav-second-container">
          <div className="logo-sec">
            <Link to='/'><h1 style={{color: '#fff'}}>Logo</h1></Link>
          </div>

          <div className="right-sec">
            <Link to='/rent-it' className="rent"><span style={{fontSize: '25px'}}>+</span>&nbsp;&nbsp;İcarəyə ver</Link>
            <button onClick={() => setShowSec(!showSec)} className="menu">
              <img src={menupng} alt="" />
            </button>
          </div>
        </div>

        <div
          className={showSec ? "hidden-sec show-menu" : "hidden-sec hide-menu"}
        >
          <button onClick={() => setShowSec(!showSec)} className="close-btn">
            <img src={closepng} alt="" />
          </button>

          <div className="hidden-inner">
            <div className="nav-first-sec">
              <li>
                <Link to='/login' onClick={handleAuth}>Daxil ol</Link>
              </li>
              <li>
                <Link to='/register'  onClick={handleAuth}>Qeydiyyatdan keç</Link>
              </li>
              <li>
                <Link className="rent-mobile" to='/rent-it' onClick={() => setShowSec(!showSec)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="22"
                    viewBox="0 0 25 22"
                    fill="none"
                  >
                    <path
                      d="M3.2959 21.0723C3.2959 21.5844 3.704 21.9999 4.20757 21.9999H6.7249C7.22891 21.9999 7.63701 21.5844 7.63701 21.0723V19.1636H3.2959V21.0723Z"
                      fill=""
                    />
                    <path
                      d="M17.3619 21.0723C17.3619 21.5844 17.7701 21.9999 18.2744 21.9999H20.7918C21.2949 21.9999 21.7031 21.5844 21.7031 21.0723V19.1636H17.3619V21.0723Z"
                      fill=""
                    />
                    <path
                      d="M22.0621 9.03507L20.7823 4.31323C20.0904 1.76502 17.8131 0 15.2168 0H9.78281C7.18604 0 4.90928 1.76507 4.21807 4.31323L2.93794 9.03507C1.21997 9.70478 0 11.3988 0 13.383C0 15.9541 2.04746 18.0387 4.57324 18.0387H20.4255C22.9513 18.0387 25 15.9541 25 13.383C25 11.3988 23.7796 9.70562 22.0621 9.03507ZM4.57324 15.386C3.48599 15.386 2.60518 14.489 2.60518 13.383C2.60518 12.2758 3.48599 11.3788 4.57324 11.3788C5.66055 11.3788 6.54214 12.2759 6.54214 13.383C6.54214 14.489 5.66055 15.386 4.57324 15.386ZM17.9972 6.8582C17.9222 6.95816 17.806 7.01735 17.6824 7.01735H7.31753C7.1936 7.01735 7.07734 6.95816 7.00278 6.8582C6.92783 6.7578 6.90254 6.62803 6.93623 6.5064L7.40205 4.7883C7.7709 3.42642 8.99771 2.47514 10.3853 2.47514H14.6146C16.0017 2.47514 17.2285 3.42647 17.5978 4.78745L18.0632 6.5064C18.097 6.62807 18.0725 6.75785 17.9972 6.8582ZM20.4255 15.386C19.3391 15.386 18.457 14.489 18.457 13.383C18.457 12.2758 19.3391 11.3788 20.4255 11.3788C21.5132 11.3788 22.3944 12.2759 22.3944 13.383C22.3944 14.489 21.5132 15.386 20.4255 15.386Z"
                      fill=""
                    />
                  </svg>&nbsp;
                  İcarəyə ver
                </Link>
              </li>
            </div>
            <hr />
            <div className="nav-second-sec">
              <li>
                <Link onClick={() => setShowSec(!showSec)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.4883 15.2496 11.6283 15.4016 11.8589 15.652C11.9551 15.7565 12.0672 15.8781 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876L5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C19.1708 2 22 4.81767 22 8.29344ZM15.681 10.4889C16.8984 10.4889 17.8853 9.50601 17.8853 8.29353C17.8853 7.08105 16.8984 6.09814 15.681 6.09814C14.4635 6.09814 13.4766 7.08105 13.4766 8.29353C13.4766 9.50601 14.4635 10.4889 15.681 10.4889Z"
                      fill=""
                    />
                  </svg>&nbsp;
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowSec(!showSec)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="26"
                    viewBox="0 0 23 26"
                    fill="none"
                  >
                    <path
                      d="M6.25 9.79932H16.75"
                      stroke="#8C8E99"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.25 14.9321H13.4688"
                      stroke="#8C8E99"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 12.7322V20.0649C22 22.4948 20.2372 24.4645 18.0625 24.4645H4.9375C2.76288 24.4645 1 22.4948 1 20.0649V1H18.0625C20.2372 1 22 2.96977 22 5.39959V6.86612"
                      stroke="#8C8E99"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>&nbsp;
                  Qaydalar və Təlimatlar
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowSec(!showSec)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M17.7692 11.25C16.7007 11.25 15.7597 11.7383 15.1717 12.4808L11.3327 10.5L15.1717 8.51925C15.7597 9.26175 16.6998 9.75 17.7692 9.75C19.5534 9.75 21 8.40675 21 6.75C21 5.09325 19.5534 3.75 17.7692 3.75C15.985 3.75 14.5385 5.09325 14.5385 6.75C14.5385 7.1445 14.6257 7.5195 14.7743 7.86525L10.9038 9.8625V5.9625C12.495 5.77575 13.7308 4.5285 13.7308 3C13.7308 1.34325 12.2842 0 10.5 0C8.71581 0 7.26923 1.34325 7.26923 3C7.26923 4.5285 8.505 5.77575 10.0962 5.9625V9.8625L6.22488 7.86525C6.37431 7.5195 6.46154 7.1445 6.46154 6.75C6.46154 5.09325 5.01496 3.75 3.23077 3.75C1.44658 3.75 0 5.09325 0 6.75C0 8.40675 1.44658 9.75 3.23077 9.75C4.30015 9.75 5.24031 9.26175 5.82831 8.51925L9.66727 10.5L5.8275 12.4808C5.24031 11.7383 4.30015 11.25 3.23077 11.25C1.44658 11.25 0 12.5933 0 14.25C0 15.9067 1.44658 17.25 3.23077 17.25C5.01496 17.25 6.46154 15.9067 6.46154 14.25C6.46154 13.8555 6.37431 13.4805 6.22488 13.1348L10.0962 11.1375V15.0375C8.505 15.2242 7.26923 16.4715 7.26923 18C7.26923 19.6567 8.71581 21 10.5 21C12.2842 21 13.7308 19.6567 13.7308 18C13.7308 16.4715 12.495 15.2242 10.9038 15.0375V11.1375L14.7751 13.1348C14.6257 13.4798 14.5385 13.8547 14.5385 14.25C14.5385 15.9067 15.985 17.25 17.7692 17.25C19.5534 17.25 21 15.9067 21 14.25C21 12.5933 19.5534 11.25 17.7692 11.25Z"
                      fill=""
                    />
                  </svg>&nbsp;
                  Partnyorlar
                </Link>
              </li>
              <li>
                <Link onClick={() => setShowSec(!showSec)} to='/contact'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M0.000847912 4.74343C0.000847912 5.53881 0.292529 6.41304 0.663067 7.3407C1.0336 8.26835 1.51098 9.14259 1.88236 9.80484C2.88968 11.5542 4.18783 13.2763 5.67168 14.7068C7.15553 16.1373 8.90477 17.3304 10.8651 18.0461C12.0047 18.4963 13.1443 19 14.4162 19C15.0521 19 15.9535 18.7617 16.7742 18.4166C17.5696 18.0723 18.2844 17.5424 18.5498 16.9064C18.6557 16.6681 18.788 16.3502 18.8677 15.9788C18.9474 15.6345 19 15.2894 19 15.0511C19 14.9188 19 14.7857 18.9737 14.7594C18.894 14.6 18.7083 14.4677 18.4963 14.3354C18.019 14.0972 17.9401 14.0175 17.2245 13.5935C16.4825 13.1695 15.7143 12.6921 15.0513 12.3478C14.7333 12.1621 14.5213 12.0824 14.4416 12.0824C14.0177 12.0824 13.4877 12.6658 13.0375 13.3018C12.5601 13.9377 12.0302 14.5211 11.6596 14.5211C11.4739 14.5211 11.2882 14.4414 11.0763 14.3091C10.8643 14.1769 10.6523 14.0709 10.52 13.9912C8.18828 12.6658 6.62473 11.103 5.30029 8.79747C5.14089 8.53207 4.77035 7.97581 4.77035 7.68412C4.77035 7.33985 5.24772 6.94216 5.72425 6.51819C6.17449 6.1205 6.65187 5.64395 6.65187 5.06056C6.65187 4.98085 6.59845 4.74258 6.49246 4.39831C6.2542 3.70893 5.93623 2.9144 5.67083 2.14616C5.53856 1.77476 5.43257 1.5102 5.40544 1.37792C5.35202 1.29821 5.32573 1.19222 5.29945 1.05994C5.27316 0.927657 5.21974 0.821663 5.19346 0.715669C5.11375 0.477395 4.98148 0.291694 4.84921 0.185701C4.71693 0.13228 4.39896 0.0534205 4.081 0.0262861C3.76303 0.0262861 3.39165 0 3.23309 0C3.15338 0 3.04739 -2.87456e-07 2.9414 0.0262861H2.59715C1.74924 0.397688 1.13959 1.13964 0.689352 2.01388C0.265396 2.88812 0 3.86919 0 4.74343H0.000847912Z"
                      fill=""
                    />
                  </svg>&nbsp;
                  Əlaqə
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>


      {/* LOGİN MODAL */}

      {/* <div className="auth-overlay modal" role="dialog">
        <div className="modal-dialog">
          <div className="log-reg-form auth-modal modal-content">
            <h2 className="mb-0">Daxil ol</h2>
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
              <button type="submit">Davam et</button>
              <div className="auth-or-buttons">
                <span></span>
                ve ya
                <span></span>
              </div>
              <button className="auth-google-button">
                <img src={google_icon} alt="google-icon" />
                Google hesabı ilə davam et
              </button>
            </form>
            <div className="modal-no-account">
              <p>Hesabınız yoxdur?</p>
              <span>Qeydiyyatdan keç</span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
