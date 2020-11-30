import React, { Component } from 'react';
import Statistics from './Components/Statistics';
import LeaveFeedback from './Components/LeaveFeedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const name = event.target.name;
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <LeaveFeedback onLeaveFeedback={this.onLeaveFeedback} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
