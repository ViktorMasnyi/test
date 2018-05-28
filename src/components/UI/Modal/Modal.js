import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Hoc from '../../../helpers/hoc';

import './Modal.css';

const Modal = (props) => (
  <Hoc>
    <Backdrop
      isShown={props.isShown}
      postDismissHandler={props.postDismissHandler}
    />
    <div      
      style={{
        transform: props.isShown ? 'translateY(0)' : 'translateY(-100vh)'
      }}
      className="modal"
    >
      {props.children}
    </div>
  </Hoc>
);

export default Modal;
