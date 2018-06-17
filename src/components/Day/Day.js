import React, { Component } from 'react';
import Task from '../Task/Task';

import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props)
    let sortedTasks = [...this.props.dayTasks.sort(
      function sort(taskA, taskB) { // don't work  - clean up!
        //console.log(taskB.length);
        //console.log(taskA.props.taskLengh > taskB.props.taskLengh);
        
        return taskA.placeHolder ? false : taskB.length - taskA.length
      }
    )];
    //console.log(sortedTasks);
    this.state = {
      dayTasks: sortedTasks
    };
  }

  getOccSlots = () => {
    return true;
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
