import React from 'react';

import './Header.css'
import logo from '../../../images/top_nav.png';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <div className="logo">
        <img src={logo} className="logo__image" alt="logo" />
      </div>
    </div>
  </header>
);

export default Header;
