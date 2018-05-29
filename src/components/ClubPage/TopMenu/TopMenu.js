import React from 'react';

import './TopMenu.css'
import subscription from '../../../images/subscription.gif';
import acc_details from '../../../images/acc_details.gif';
import order_hist from '../../../images/order_hist.gif';
import log_out from '../../../images/log_out.gif';

const TopMenu = () => (
  <nav className="topMenu__wrapper">
    <div className="topMenu__item">
      <a href="#" className="topMenu__link">        
        <img className="topMenu__image" src={subscription} alt="subscription"/>              
      </a>
      <div className="top__menu-title">subscription</div>
    </div>
    <div className="topMenu__item">
      <a href="#" className="topMenu__link">        
        <img className="topMenu__image" src={acc_details} alt="account details"/>              
      </a>
      <div className="top__menu-title">account details</div>
    </div>
    <div className="topMenu__item">
      <a href="#" className="topMenu__link">        
        <img className="topMenu__image" src={order_hist} alt="accont details"/>              
      </a>
      <div className="top__menu-title">order history</div>
    </div>
    <div className="topMenu__item">
      <a href="#" className="topMenu__link">        
        <img className="topMenu__image" src={log_out} alt="log out"/>              
      </a>
      <div className="top__menu-title">log out</div>
    </div>
  </nav>
);

export default TopMenu;
