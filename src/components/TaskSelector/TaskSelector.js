import React from 'react';
import { Link } from 'react-router-dom';

import './TaskSelector.css';

const TaskSelector = () => (
  <div className="taskSelector__wrapper">
    <div className="taskSelector__container">
      <Link to="/club" className="taskSelector__task">CLUB task</Link>
    </div>
    <div className="taskSelector__container">
      <Link to="/blog" className="taskSelector__task">BLOG task</Link>
    </div>
    <div className="taskSelector__container">
      <Link to="/calendar" className="taskSelector__task">calendar</Link>
    </div>
  </div>
);

export default TaskSelector;
