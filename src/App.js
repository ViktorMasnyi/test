import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import Blog from './containers/Blog/Blog';
import HomePage from './containers/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HomePage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
