import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import menupng from '../../../assets/images/main-slider/menu.png'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="container nav-second-container">
        <div className="logo-sec">
          <h1>Logo</h1>
        </div>
        <div className="middle-sec">
          <li>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5927 0.745068C11.3992 -0.248356 9.60077 -0.248356 8.40724 0.745068L0.352435 7.44962C-0.0809941 7.81037 -0.120033 8.43187 0.265233 8.83775C0.650498 9.24352 1.31417 9.2801 1.74759 8.91935L2.10001 8.62606V14.1486C2.09996 15.0202 2.09992 15.7712 2.18626 16.3726C2.27879 17.0171 2.48748 17.635 3.02262 18.136C3.55777 18.6372 4.21753 18.8326 4.90583 18.9193C5.54807 19.0001 6.35007 19 7.28088 19H13.7191C14.6499 19 15.4519 19.0001 16.0942 18.9193C16.7824 18.8326 17.4423 18.6372 17.9773 18.136C18.5125 17.635 18.7212 17.0171 18.8138 16.3726C18.9001 15.7712 18.9001 15.0202 18.9 14.1487V8.62606L19.2524 8.91935C19.6858 9.2801 20.3495 9.24352 20.7347 8.83775C21.12 8.43187 21.081 7.81037 20.6476 7.44962L12.5927 0.745068ZM10.5 13.1006C9.92008 13.1006 9.44999 13.5408 9.44999 14.0839V16.0503C9.44999 16.5934 8.97991 17.0335 8.39999 17.0335C7.8201 17.0335 7.34999 16.5934 7.34999 16.0503V14.0839C7.34999 12.4547 8.76025 11.1342 10.5 11.1342C12.2397 11.1342 13.65 12.4547 13.65 14.0839V16.0503C13.65 16.5934 13.1799 17.0335 12.6 17.0335C12.0201 17.0335 11.55 16.5934 11.55 16.0503V14.0839C11.55 13.5408 11.0799 13.1006 10.5 13.1006Z"
                  fill=""
                />
              </svg>{" "}
              &nbsp; Ana Sehife
            </Link>
          </li>
          <li>
            <Link>
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
              </svg>
              &nbsp; Partnyorlar
            </Link>
          </li>
          <li>
            <Link>
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
              </svg>
              &nbsp; Əlaqə
            </Link>
          </li>
        </div>
        <div className="right-sec">
          <button className="rent">+ İcarəyə ver</button>
          <button className="menu">
            <img src={menupng} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
