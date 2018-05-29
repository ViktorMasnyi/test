import React from 'react';

import './Contacts.css'
import logo from '../../../images/logo-l.gif';

const Contacts = () => (
  <div className="contacts__wrapper">
    <div className="contacts__logo">      
      <img src={logo} className="logo__image" alt="logo" />
    </div>
    <a className="contacts__email" href="mailto:sales@2minuteclub.com">
      sales@2minuteclub.com
    </a>
    <p className="contacts__phone">1-844-896-6462</p>
  </div>
);

export default Contacts;
