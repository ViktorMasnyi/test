import React from 'react';

import './BottomMenu.css';
import plus from '../../../images/plus.png';

const BottomMenu = () => (
  <nav className="bottomMenu__wrapper">
    <div className="bottomMenu__item">      
      <div className="bottomMenu__title">support</div>
      <button className="bottomMenu__button">+</button>
    </div>
    <div className="bottomMenu__item">
      <div className="bottomMenu__title">account</div>
      <button className="bottomMenu__button">+</button>
    </div>
    <div className="bottomMenu__item">
      <div className="bottomMenu__title">about</div>
      <button className="bottomMenu__button">+</button>
    </div>    
  </nav>
);

export default BottomMenu;
