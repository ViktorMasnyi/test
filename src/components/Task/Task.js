import React from 'react';

import './Task.css';

const Task = props => {
  let taskItem = props.placeHolder
    ? <div className="placeholder" />
    : (
      <div
        style={{
          'top': `calc(50px + 50px * ${props.slot})`,
          'width': `calc((100%) *
            ${(props.taskLengh > 6 - props.weekday)
              ? (6.1 - props.weekday)
              : props.taskLengh} - 4px)`,
        }}
        className={`
          task ${(props.taskLengh > 6 - props.weekday)
            ? 'ltask'
            : ''}          
            `}
        >
          len: {props.taskLengh},
          slot: {props.slot},
          day: {props.weekday}
        </div>
      )
  return taskItem;
};

export default Task;
