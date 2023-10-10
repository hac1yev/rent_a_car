import React, { useState } from "react";
import "./cardetail.css";
import rentlogo from "../../assets/images/detail/rent-logo.svg";
import porshce from "../../assets/images/detail/porshce.svg";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const CarDetail = () => {
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  console.log(rating);

  // Optinal callback functions
  //   const onPointerEnter = () => console.log("Enter");
  //   const onPointerLeave = () => console.log("Leave");
  //   const onPointerMove = (value, index) =>
  //     console.log(value, index);
  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <div className="container detail-inner-container">
          <div className="row">
            <div className="col-lg-8 col-12">
                <h1>Under Construction</h1>
            </div>
            <div className="col-lg-4 col-12 detail-right-side-cont">
              <div className="detail-right-side">
                <img className="rentlogo" src={rentlogo} alt="" />
                <div className="detail-middle">
                  <div className="rating-div">
                    <Rating
                      onClick={handleRating}
                      // onPointerEnter={onPointerEnter}
                      // onPointerLeave={onPointerLeave}
                      // onPointerMove={onPointerMove}
                      /* Available Props */
                    />{" "}
                    <span>(134)</span>
                  </div>
                  <h1>Bakusat RC</h1>
                  <span className="detail-premium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                    >
                      <path
                        d="M20.3556 0.196785H3.55292L0 6.01478L12 22L24 6.01478L20.3556 0.196785ZM11.9992 21.8298L7.29041 6.1222L11.9992 0.279492L16.708 6.1222L11.9992 21.8298ZM6.92909 6.11174H16.9864V6.65742H6.92909V6.11174Z"
                        fill="#475EE9"
                      />
                    </svg>{" "}
                    Premium partnyor
                  </span>
                </div>
                <Link>Maşınlara bax</Link>
              </div>
              <div className="detail-right-side-brand">
                <img src={porshce} alt="" />
                <div className="detail-brand-name">
                  <p>Porsche Panamera</p>
                  <span>2023</span>
                </div>
              </div>
              <div className="rent-infos">
                <p>
                  <b>150₼/</b>günlük
                </p>
                <div className="rent-btns">
                  <Link className="apply-now">İndi icarə et</Link> <br />
                  <Link className="discount">+3 Gün endirimi</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row middle-side">
            <div className="col-lg-8 col-12 middle-left-side">
              <h1>Avtomobil haqqında</h1>
              <p>
                Porsche Panamera 2023 sürəti və rahatlığı ilə bütün yollara
                meydan oxuyur. Uzun məsafələri daha qısa və mükəmməl şəkildə
                başa vurmaq üçün ən çox seçilən avtomobillərdən biridir....
              </p>
            </div>
            <div className="col-lg-4 col-12">
              <div className="middle-right-side">
                <h1>Təhvil və təslim nöqtələri</h1>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="28"
                    viewBox="0 0 23 28"
                    fill="none"
                  >
                    <path
                      d="M15.5714 11.3344L7.42857 11.3333M21 11.6C21 16.9019 16.25 21.2 11.5 26C6.75 21.2 2 16.9019 2 11.6C2 6.29807 6.2533 2 11.5 2C16.7467 2 21 6.29807 21 11.6Z"
                      stroke="#475EE9"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  &nbsp; Nərimanov Rayonu, Ə. Rəcəbli
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="28"
                    viewBox="0 0 23 28"
                    fill="none"
                  >
                    <path
                      d="M15.5714 11.3344L7.42857 11.3333M21 11.6C21 16.9019 16.25 21.2 11.5 26C6.75 21.2 2 16.9019 2 11.6C2 6.29807 6.2533 2 11.5 2C16.7467 2 21 6.29807 21 11.6Z"
                      stroke="#475EE9"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  &nbsp; Baş ofis
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="28"
                    viewBox="0 0 23 28"
                    fill="none"
                  >
                    <path
                      d="M15.5714 11.3344L7.42857 11.3333M21 11.6C21 16.9019 16.25 21.2 11.5 26C6.75 21.2 2 16.9019 2 11.6C2 6.29807 6.2533 2 11.5 2C16.7467 2 21 6.29807 21 11.6Z"
                      stroke="#475EE9"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  &nbsp; H.Aliyev Aeroport
                </p>
              </div>
            </div>
          </div>

          <div className="row auto-situation">
            <div className="col-12 auto-situation-inner">
              <h1>Avtomobilin vəziyyəti</h1>
              <hr />
              <div className="row auto-situation-pad">
                <div className="col-lg-6 col-12">
                  <div className="auto-situ-inner">
                    <div className="auto-left-side">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="9.5"
                          stroke="#475EE9"
                          stroke-width="2"
                        />
                      </svg>
                      Motor həcmi
                    </div>
                    <p>4.4</p>
                  </div>

                  <div className="auto-situ-inner">
                    <div className="auto-left-side">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="9.5"
                          stroke="#475EE9"
                          stroke-width="2"
                        />
                      </svg>
                      Sürət qutusu
                    </div>
                    <p>Avtomat</p>
                  </div>

                  <div className="auto-situ-inner">
                    <div className="auto-left-side">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="9.5"
                          stroke="#475EE9"
                          stroke-width="2"
                        />
                      </svg>
                      GPS
                    </div>
                    <p>Var</p>
                  </div>
                  
                </div>
                <div className="col-lg-6 col-12">

                <div className="auto-situ-inner">
                    <div className="auto-left-side">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="9.5"
                          stroke="#475EE9"
                          stroke-width="2"
                        />
                      </svg>
                      Oturacaq sayı
                    </div>
                    <p>4 nəfərlik</p>
                  </div>

                  <div className="auto-situ-inner">
                    <div className="auto-left-side">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="9.5"
                          stroke="#475EE9"
                          stroke-width="2"
                        />
                      </svg>
                      Yanacaq növü
                    </div>
                    <p>Benzin</p>
                  </div>

                  <div className="auto-situ-inner">
                    <div className="auto-left-side">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="9.5"
                          stroke="#475EE9"
                          stroke-width="2"
                        />
                      </svg>
                      Bluetooth/AUX
                    </div>
                    <p>Var</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
