import React from 'react';
import classes from './Modal.css';
import Hoc from '../../../hoc/Hoc';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Hoc>    
    <Backdrop show={props.isShowed} modalClosed={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.isShowed ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.isShowed ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Hoc>
);

export default modal;
