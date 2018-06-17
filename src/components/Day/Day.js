import React, { Component } from 'react';
import Task from '../Task/Task';

import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props)
    let sortedTasks = [...this.props.dayTasks.sort(
      (taskA, taskB) => taskA.placeHolder ? false : taskB.length - taskA.length      
    )];
    this.state = {
      dayTasks: sortedTasks
    };
  }

  render() {
    let tasks = this.state.dayTasks.map((task, id) => {
        return (
          <Task
            key={`taskId${id}`}
            placeHolder={task.placeHolder}
            weekday={this.props.weekday}
            taskLengh={task.length} // 1...20
            slot={id}
            owner={task.owner}
            content={task.content}
          />
        );
      })
    
    return (
      <div className="day">
        <div className="dayLabel">{this.props.weekday}</div>
        {tasks}     
      </div>
    );
  }
}

export default Day;
