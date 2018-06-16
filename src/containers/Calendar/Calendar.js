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
    days: [
      [ // Fr
        // {
        //   id: 3,
        //   onwer: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
        // {
        //   id: 4,
        //   owner: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
      ],
      [ // Th
        // {
        //   id: 3,
        //   onwer: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
        // {
        //   id: 4,
        //   owner: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 2,
        // },
      ],
      [  // We
        // {
        //   id: 3,
        //   onwer: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
        // {
        //   id: 4,
        //   owner: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
      ],
      [  // Tu
        // {
        //   id: 3,
        //   onwer: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
        // {
        //   id: 4,
        //   owner: 'Test Owner',
        //   content: 'test content',
        //   start: 2,
        //   length: 1,
        // },
      ],
      [ // Mo
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 1,
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 1,
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 1,
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 1,
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 2,
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 3,
        },
        {
          id: 2,
          owner: 'Test Owner',
          content: 'test content',
          start: 2,  // starting day of a week
          length: 4, // task duration  - days
        },
      ],
    ],
  };
  render() {
    return (
      <Week startDate={this.state.startDate} weekTasks={this.state.days}/>
    );
  }
}

export default Calendar;
