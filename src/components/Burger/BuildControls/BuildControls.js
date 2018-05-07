import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>{props.totalPrice.toFixed(2)} USD</p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addIngridientHandler={() => props.addIngridientHandler(ctrl.type)}
        removeIngridientHandler={() => props.removeIngridientHandler(ctrl.type)}
        isDisabled={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.isOrderable}
      onClick={props.isPurchasingHandler}
    >Order NOW</button>
  </div>
);

export default buildControls;