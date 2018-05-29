import React from 'react';
import { Link } from 'react-router-dom';

const TaskSelector = () => (
  <div>
    <Link to="/club" className="">Visit CLUB task page</Link>
    <Link to="/blog" className="">Visit BLOG task page</Link>
  </div>
);

export default TaskSelector;
