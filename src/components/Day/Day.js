import React, { Component } from 'react';
import Task from '../Task/Task';

import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props)
    let sortedTasks = this.props.dayTasks.sort(
      function sort(taskA, taskB) { // don't work  - clean up!
        //console.log(taskB.length);
        //console.log(taskA.props.taskLengh > taskB.props.taskLengh);
        return taskA.length - taskB.length}
    );
    console.log(sortedTasks);
  }
  render() {
    let tasks = this.props.dayTasks.map((task, id) => {
        return (
          <Task
            key={`taskId${id}`}
            weekday={this.props.weekday}
            taskLengh={task.length} // 1...20
            slot={this.props.dayTasks.length - id}
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
