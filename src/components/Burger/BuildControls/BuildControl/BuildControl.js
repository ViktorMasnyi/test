import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button 
      className={classes.Less}
      onClick={props.removeIngridientHandler}
      disabled={props.isDisabled}
    >Less</button>
    <button
      className={classes.More}
      onClick={props.addIngridientHandler}
    >More</button>
  </div>
);

export default buildControl;
