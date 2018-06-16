import React, { Component } from 'react';
import Task from '../Task/Task';

import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: this.props.weekday,
      tasks: [
        {
          id: 1,
          author: 'Test Author',
          content: 'test content',
          start: 1,
          length: 1,
        },
        {
          id: 2,
          author: 'Test Author',
          content: 'test content',
          start: 2,
          length: 2,
        },
      ]
    };
  }
  
  render() {
    return (
      <div className="day">
        <div className="dayLabel">{this.state.day}</div>
        {this.props.children}     
      </div>
    );
  }
}

export default Day;
