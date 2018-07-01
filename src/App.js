import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import HomePage from './containers/HomePage/HomePage';
import rootReducer from './containers/Blog/reducers'

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk)));

class App extends Component {
  componentDidMount() {
    //store.dispatch({ type: 'FETCH_DATA' })
  }
  render() {
    //console.log('store content from App', store.getState());
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <HomePage />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
