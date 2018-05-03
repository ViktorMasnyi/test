import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './Burgeringridient/Burgeringridient'

const burger = ( props ) => {
  let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey => {
      return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />
      })
    }).reduce((arr, el) => arr.concat(el), []);

  if (transformedIngridients.length === 0) 
    transformedIngridients = <p>Please add ingridients</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIngridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
