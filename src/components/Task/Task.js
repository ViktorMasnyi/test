import React from 'react';

import './Task.css';

const Task = props => (
  <div
    style={{
      'top': `calc(22px + 22px * ${props.slot})`,
      'width': `calc((100%) * ${props.taskLengh} - 4px)`,
    }}
    className="task"
  >
    len: {props.taskLengh},
    slot: {props.slot}
  </div>
);

export default Task;
