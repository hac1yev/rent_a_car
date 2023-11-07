import React from "react";

const ContactInner = ({ tabsOpen }) => {
  return (
    <div className="contact-inner-container">
      <div className={`${tabsOpen ? "showw" : "hidee"}`}>
      <div className="social-side">
          <div>
            <div className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.8632 36.8565C24.2707 35.9565 16.9161 33.4189 10.2485 26.7514C3.58108 20.084 1.04355 12.7294 0.143447 9.13681C-0.373821 7.07223 0.557657 5.07997 2.13708 3.9518L6.27767 0.994232C8.70036 -0.73625 12.0706 -0.149037 13.7653 2.29884L16.372 6.06418C17.4786 7.6625 17.0969 9.85315 15.515 10.9831L13.4365 12.4677C13.7511 13.671 14.7295 16.1421 17.7937 19.2063C20.8579 22.2705 23.329 23.2488 24.5323 23.5634L26.0169 21.4848C27.1469 19.9031 29.3375 19.5213 30.9358 20.6278L34.7012 23.2346C37.149 24.9294 37.7363 28.2995 36.0057 30.7223L33.0482 34.8629C31.92 36.4423 29.9278 37.3739 27.8632 36.8565ZM12.7636 24.2364C18.827 30.2997 25.5181 32.6022 28.7276 33.4064C29.1967 33.5238 29.7638 33.3415 30.1538 32.7955L33.1115 28.6549C33.6883 27.8475 33.4926 26.724 32.6765 26.159L28.9113 23.5522L27.318 25.7829C26.6669 26.6945 25.4627 27.4094 24.0606 27.1069C22.3107 26.7294 19.0758 25.5184 15.2787 21.7214C11.4816 17.9243 10.2706 14.6894 9.89305 12.9394C9.59055 11.5373 10.3055 10.3332 11.2171 9.68203L13.4477 8.08875L10.8409 4.32341C10.276 3.50744 9.15259 3.31171 8.34504 3.88854L4.20445 6.84611C3.65841 7.23613 3.4761 7.80327 3.59364 8.27237C4.3978 11.482 6.70031 18.1731 12.7636 24.2364Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="con-number">+994 51 631 62 65</p>
          </div>

          <div>
            <div className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="33"
                viewBox="0 0 42 33"
                fill="none"
              >
                <path
                  d="M3.46973 11.7315L16.9744 20.6956C19.2979 22.2378 22.4924 22.2378 24.8159 20.6956L38.3206 11.7314"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12.8692C2 11.5286 2.83131 10.2934 4.17172 9.64231L18.9495 2.46454C20.2248 1.84515 21.7752 1.84515 23.0505 2.46454L37.8283 9.64231C39.1686 10.2934 40 11.5286 40 12.8692V27.3086C40 29.3473 38.1097 31 35.7778 31H6.22222C3.89035 31 2 29.3473 2 27.3086V12.8692Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <a href="mailto:support@rentacar.az" className="con-mail">
              support@rentacar.az
            </a>
          </div>

          <div>
            <div className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="48"
                viewBox="0 0 42 48"
                fill="none"
              >
                <path
                  d="M21 45C30 36.6 39 29.0783 39 19.8C39 10.5216 30.9411 3 21 3C11.0589 3 3 10.5216 3 19.8C3 29.0783 12 36.6 21 45Z"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="con-place">Bakı ş Gənclik</p>
          </div>
        </div>
        <div className="form-side">
          <form action="">
            <input type="text" placeholder="Ad və soyad" /> <br />
            <input type="email" placeholder="Email" /> <br />
            <input type="number" placeholder="Əlaqə nömrəsi" /> <br />
            <input type="text" placeholder="Mövzu" /> <br />
            <div className="send-form">
              <button type="submit">Daxil Et</button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${tabsOpen ? "hidee" : "showw"}`}>
      <div className="form-side">
          <form action="">
            <input type="text" placeholder="Ad və soyad" /> <br />
            <input type="email" placeholder="Email" /> <br />
            <input type="number" placeholder="Əlaqə nömrəsi" /> <br />
            <input type="text" placeholder="Şikayət mövzusu" /> <br />
            <div className="send-form">
              <button type="submit">Şikayəti bildir</button>
            </div>
          </form>
        </div>
      <div className="social-side">
          <div>
            <div className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.8632 36.8565C24.2707 35.9565 16.9161 33.4189 10.2485 26.7514C3.58108 20.084 1.04355 12.7294 0.143447 9.13681C-0.373821 7.07223 0.557657 5.07997 2.13708 3.9518L6.27767 0.994232C8.70036 -0.73625 12.0706 -0.149037 13.7653 2.29884L16.372 6.06418C17.4786 7.6625 17.0969 9.85315 15.515 10.9831L13.4365 12.4677C13.7511 13.671 14.7295 16.1421 17.7937 19.2063C20.8579 22.2705 23.329 23.2488 24.5323 23.5634L26.0169 21.4848C27.1469 19.9031 29.3375 19.5213 30.9358 20.6278L34.7012 23.2346C37.149 24.9294 37.7363 28.2995 36.0057 30.7223L33.0482 34.8629C31.92 36.4423 29.9278 37.3739 27.8632 36.8565ZM12.7636 24.2364C18.827 30.2997 25.5181 32.6022 28.7276 33.4064C29.1967 33.5238 29.7638 33.3415 30.1538 32.7955L33.1115 28.6549C33.6883 27.8475 33.4926 26.724 32.6765 26.159L28.9113 23.5522L27.318 25.7829C26.6669 26.6945 25.4627 27.4094 24.0606 27.1069C22.3107 26.7294 19.0758 25.5184 15.2787 21.7214C11.4816 17.9243 10.2706 14.6894 9.89305 12.9394C9.59055 11.5373 10.3055 10.3332 11.2171 9.68203L13.4477 8.08875L10.8409 4.32341C10.276 3.50744 9.15259 3.31171 8.34504 3.88854L4.20445 6.84611C3.65841 7.23613 3.4761 7.80327 3.59364 8.27237C4.3978 11.482 6.70031 18.1731 12.7636 24.2364Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="con-number">+994 51 631 62 65</p>
          </div>

          <div>
            <div className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="33"
                viewBox="0 0 42 33"
                fill="none"
              >
                <path
                  d="M3.46973 11.7315L16.9744 20.6956C19.2979 22.2378 22.4924 22.2378 24.8159 20.6956L38.3206 11.7314"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12.8692C2 11.5286 2.83131 10.2934 4.17172 9.64231L18.9495 2.46454C20.2248 1.84515 21.7752 1.84515 23.0505 2.46454L37.8283 9.64231C39.1686 10.2934 40 11.5286 40 12.8692V27.3086C40 29.3473 38.1097 31 35.7778 31H6.22222C3.89035 31 2 29.3473 2 27.3086V12.8692Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <a href="mailto:support@rentacar.az" className="con-mail">
              support@rentacar.az
            </a>
          </div>

          <div>
            <div className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="48"
                viewBox="0 0 42 48"
                fill="none"
              >
                <path
                  d="M21 45C30 36.6 39 29.0783 39 19.8C39 10.5216 30.9411 3 21 3C11.0589 3 3 10.5216 3 19.8C3 29.0783 12 36.6 21 45Z"
                  stroke="white"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="con-place">Bakı ş Gənclik</p>
          </div>
      </div>
        
      </div>
    </div>
  );
};

export default ContactInner;
