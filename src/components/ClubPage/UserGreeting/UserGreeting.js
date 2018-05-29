import React from 'react';

import './UserGreeting.css'

const UserGreeting = ({userName}) => (
    <div className="UserGreeting">
      {`welcome, ${userName || 'username'}!`}
    </div>
);

export default UserGreeting;
