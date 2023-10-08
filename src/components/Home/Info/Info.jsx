import React from "react";
import "./info.css";
import line1 from "../../../assets/images/main-slider/line1.svg";
import line2 from "../../../assets/images/main-slider/line2.svg";

const Info = () => {
  return (
    <div className="info-container">
      <div className="container">
        <h1 className="info-header">İstifadə təlimatı</h1>
        <div className="info-bottom">
          <div className="bottom-1">
            <div>
            <h1>01 Arzuladığın avtomobili seç</h1>
              <p>
                Səyahətinizə və ya rahatlığınıza ən uyğun avtomobili geniş
                imkanlı filter və axtarış sistemimiz ilə tapın
              </p>
            </div>
            <img src={line1} alt="" />
          </div>
          <div className="bottom-2">
            <div></div>
            <div className="bottom-2-info">
              <h1>02 Qeydiyyatdan keç və ödəniş et</h1>
              <p>Tələb olunan şəxsi məlumatları doldurduqdan sonra ödəniş sisteminə keçid edərək, ödənişi tamamlayın</p>
              <img src={line2} alt="" />
            </div>
          </div>
          <div className="bottom-3">
            <h1>03 Təhvil al və ya ünvana gəlsin</h1>
            <p>Seçdiyiniz avtomobil dəqiqələr içərisində hazılanaraq, qeyd etdiyiniz ünvana yönləndirilsin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
