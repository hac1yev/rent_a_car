import React from "react";
import ContactInner from "../../components/Contacts/ContactInner";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [tabsOpen, setTabOpens] = useState(true);
  return (
    <div className="container-md contact-container">
       <h1>Bizimle Elaqe</h1>
      <div className="contact-tabs">
        <div className="tab1">
          <button className={`${tabsOpen ? 'activee' : ''}`} onClick={() => setTabOpens(true)}>
          Sualınız var? <br />
          <p className={`${tabsOpen ? 'activee' : ''}`}>Sualınıza ən qısa zamanda cavab alın</p>
          </button>
        </div>
        <div className="tab2">
          <button className={`${tabsOpen ? '' : 'activee'} `} onClick={() => setTabOpens(false)}>
          Şikayətiniz var? <br />
          <p className={`${tabsOpen ? '' : 'activee'}`}>Yaranan problemi aradan qalxsın</p>
          </button>
        </div>
      </div>
      <div className="contactDetails">
        <ContactInner tabsOpen={tabsOpen} />
      </div>
    </div>
  );
};

export default Contact;
