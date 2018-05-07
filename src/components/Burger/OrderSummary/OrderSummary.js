import React from 'react';
import Hoc from '../../../hoc/Hoc';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingridientSummary = Object.keys(props.ingridients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingridients[igKey]}
        </li>);
    })
  return (
    <Hoc>
      <h3>your order</h3>
      <p>burger contains:</p>
      <ul>
        {ingridientSummary}
      </ul>
      <p><strong>Price: {props.price}USD</strong></p>
      <Button btnType="Success" clicked={props.continueHandler}>Proceed</Button>
      <Button btnType="Danger" clicked={props.cancelHandler}>CANCEL</Button>
    </Hoc>
  )
};

export default orderSummary;
