import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    isOrderable: false,
    isPurchasing: false,
  };

  isPurchasingHandler = () => {
    this.setState({isPurchasing: true})
  };

  isPurchasingCancelHandler = () => {
    this.setState({isPurchasing: false})
  };

  isPurchasingContinueHandler = () => {
    alert('continue!')
  };

  checkIsOrderable = (newIngridients) => {
    let isOrderButtonActive = Object.keys({...newIngridients});
    let isOrderble = isOrderButtonActive.map((ing, index) => isOrderButtonActive[index] = newIngridients[ing])
    .reduce((acc, elem) => acc + elem, 0);
    this.setState({isOrderable: isOrderble > 0})
  };

  addIngridientHandler = (type) => {
    const newIngridients = {...this.state.ingridients};
    let newIngridientValue = newIngridients[type] += 1;
    newIngridients[type] = newIngridientValue;
    let newPrice  = (this.state.totalPrice * 100 + INGRIDIENTS_PRICES[type] * 100) / 100;
    this.setState({ingridients: newIngridients, totalPrice: newPrice})
    this.checkIsOrderable(newIngridients)
  };

  removeIngridientHandler = (type) => {
    const newIngridients = {...this.state.ingridients};    
    let newIngridientValue = newIngridients[type] -= 1;
    if (this.state.ingridients[type] <= 0) return;
    newIngridients[type] = newIngridientValue;
    let newPrice  = this.state.totalPrice - INGRIDIENTS_PRICES[type];
    this.setState({ingridients: newIngridients, totalPrice: newPrice})
    this.checkIsOrderable(newIngridients)
  };

  render () {
    const disabledInfo = {...this.state.ingridients};
    // const modalComponent = this.state.isPurchasing ?
    //   (<Modal>
    //     <OrderSummary ingridients={this.state.ingridients}/>
    //   </Modal>) :
    //   null;

    for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

    return (
      <Hoc>
        <Modal isShowed={this.state.isPurchasing} modalClosed={this.isPurchasingCancelHandler}>
          <OrderSummary 
            ingridients={this.state.ingridients} 
            cancelHandler={this.isPurchasingCancelHandler}
            continueHandler={this.isPurchasingContinueHandler}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls 
          addIngridientHandler={this.addIngridientHandler} 
          removeIngridientHandler={this.removeIngridientHandler}
          disabledInfo={disabledInfo}
          totalPrice={this.state.totalPrice}
          isOrderable={this.state.isOrderable}
          isPurchasingHandler={this.isPurchasingHandler}
        />
      </Hoc>
    );
  }
}

export default BurgerBuilder;
