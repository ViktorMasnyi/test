import React, { Component } from 'react';
import Week from '../../components/Week/Week';

// const tasks = [
//   {
//     id: 1,
//     author: 'Test Author',
//     content: 'test content',
//     start: '',
//     finish: '',
//   },
// ];

class Calendar extends Component {
  state = {
    startDate: 1,
    week: [
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
    ],
  };
  render() {
    return (
      <Week startDate={this.state.startDate} weekTasks={this.props.weekTasks}/>
    );
  }
}

export default Calendar;
