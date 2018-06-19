import React, { Component } from 'react';
import Day from '../Day/Day';

import './Week.css';

class Week extends Component {
  state = {
    startWeek: 1,
    occ: [],
    days: [
      [ // Fr
        {
          id: 3,
          placeHolder: true,
          owner: 'Test Owner1111',
          content: 'test content',
          start: 2,
          length: 1,
        },
        {
          id: 3,
          owner: 'Test Owner',
          content: 'test content',
          start: 2,
          length: 2,
        },
        {
          id: 4,
          owner: 'Test Owner',
          content: 'test content',
          start: 2,
          length: 1,
        },
      ],
      [ // Th
        {
          id: 3,
          onwer: 'Test Owner',
          content: 'test content',
          start: 2,
          length: 10,
        },
      ],
      [  // We
      ],
      [  // Tu
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
          length: 3,
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
          length: 3,
        },
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 2,
        },      
      ],
    ],
  };

  getOccupiedSlots = () => {    
    let occ = this.state.days.map((day, dayIdx) => {
      return day.map((task,) => task.length)
        .sort((lenA, lenB) => lenB - lenA)
    });
    this.setState({occ: occ})
  }

  componentWillMount() {
    this.getOccupiedSlots();
  }

  render () {
    let days = this.state.days.map((day, i) => {
      return (
        <Day
          key={`dayId${i}`}
          weekday={this.props.startDate + 4 - i}
          dayTasks={day}
        />          
      );
    });
    return (      
      <div className="week">
        {days}        
      </div>
    );
  }
}

export default Week;
