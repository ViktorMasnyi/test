import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import {createStore} from 'redux';
//import reducer from './reducers';

//const store = createStore(reducer);

const render = () => ReactDOM.render(
  <App />, document.getElementById('root'));

render();
registerServiceWorker();
