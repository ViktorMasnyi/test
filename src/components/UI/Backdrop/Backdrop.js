import React from 'react';

import './Backdrop.css'

const Backdrop = (props) => (
  props.isShown ? <div className="backdrop" onClick={props.postDismissHandler}></div> : null
);

export default Backdrop;
