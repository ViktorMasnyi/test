import React, { Component } from 'react';
import Week from '../../components/Week/Week';

import './Calendar.css';

class Calendar extends Component {
  state = {
    startDate: 1,
    days: [],
  };
  render() {
    return (
      <div className="container">
        <Week startDate={this.state.startDate} weekTasks={this.state.days}/>
      </div>
    );
  }
}

export default Calendar;
