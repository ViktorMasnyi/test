import React, { Component } from 'react';
import Day from '../Day/Day';
import Task from '../Task/Task';

import './Week.css';

class Week extends Component {
  state = {
    startWeek: 1,
    days: [
      [ // Fr
        
      ],
      [ // Th
        {
          id: 3,
          onwer: 'Test Owner',
          content: 'test content',
          start: 2,
          length: 1,
        },
        {
          id: 4,
          owner: 'Test Owner',
          content: 'test content',
          start: 2,
          length: 2,
        },
      ],
      [], // We
      [], // Tu
      [ // Mo
        {
          id: 1,
          onwer: 'Test Owner',
          content: 'test content',
          start: 1,
          length: 1,
        },
        {
          id: 2,
          owner: 'Test Owner',
          content: 'test content',
          start: 2,  // starting day of a week
          length: 2, // task duration  - days
        },
      ],
    ],
  };



  render () {
    let days = this.state.days.map((day, i) => {
      return (
        <Day weekday={this.props.startDate + 4 - i}>
          {
            day.map((task, id) => {
              return (
                <Task
                  key={task.id}
                  taskLengh={task.length}
                  slot={id}
                  owner={task.owner}
                  content={task.content}
                />
              );
            })
          }
        </Day>
      );
    });
    console.log(days);
    return (
      <div className="container">
        <div className="week">
          {days}
          {/* <Day weekday={this.props.startDate + 4}>
          </Day>
          <Day weekday={this.props.startDate + 3}>
            <Task taskWidth="taskWidth1" slot="slot3" />
            <Task taskWidth="taskWidth2" slot="slot4" />
            <Task taskWidth="taskWidth1" slot="slot5" />
          </Day>
          <Day weekday={this.props.startDate + 2}>
          </Day>
          <Day weekday={this.props.startDate + 1}>
            <Task taskWidth="taskWidth1" slot="slot2" />
          </Day>
          <Day weekday={this.props.startDate}>
            <Task taskWidth="taskWidth5" slot="slot1" />
            <Task taskWidth="taskWidth1" slot="slot2" />
            <Task taskWidth="taskWidth3" slot="slot3" />
            <Task taskWidth="taskWidth2" slot="slot4" />
            <Task taskWidth="taskWidth1" slot="slot5" />
          </Day> */}
        </div>
      </div>
    );
  }
}

export default Week;
