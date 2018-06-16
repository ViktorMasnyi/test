import React, { Component } from 'react';
import Day from '../Day/Day';
import Task from '../Task/Task';

import './Week.css';

class Week extends Component {
  state = {
    startWeek: 1,
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
          length: 5, // task duration  - days
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 5,
        },
      ],
    ],
  };

  render () {
    //console.log(this.props)
    let days = this.state.days.map((day, i) => {
      return (
        <Day
          key={`dayId${i}`}
          weekday={this.props.startDate + 4 - i}
          dayTasks={day}  
        />          
      );
    });
    //console.log(days);
    return (
      <div className="container">
        <div className="week">
          {days}
        </div>
      </div>
    );
  }
}

export default Week;
