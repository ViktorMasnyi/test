import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state= {
    ingridients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
  };

  addIngridientHandler = (type) => {
    const newIngridients = {...this.state.ingridients};
    let newIngridientValue = newIngridients[type] += 1;
    newIngridients[type] = newIngridientValue;
    let newPrice  = (this.state.totalPrice * 100 + INGRIDIENTS_PRICES[type] * 100) / 100;
    this.setState({ingridients: newIngridients, totalPrice: newPrice})
  };

  removeIngridientHandler = (type) => {
    const newIngridients = {...this.state.ingridients};    
    let newIngridientValue = newIngridients[type] -= 1;
    if (this.state.ingridients[type] <= 0) return;
    newIngridients[type] = newIngridientValue;
    let newPrice  = (this.state.totalPrice * 100 - INGRIDIENTS_PRICES[type] * 100) / 100;
    this.setState({ingridients: newIngridients, totalPrice: newPrice})
  };

  render () {
    const disabledInfo = {...this.state.ingridients};
    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls 
          addIngridientHandler={this.addIngridientHandler} 
          removeIngridientHandler={this.removeIngridientHandler}
          disabledInfo={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
