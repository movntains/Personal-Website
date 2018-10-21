import React, { Component } from 'react';

class WorkItInfo extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Work It</h2>
        <a
          className="button"
          href="https://github.com/movntains/Work-It"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Code
        </a>
        <a
          className="button"
          href="https://work-it.surge.sh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Live Demo
        </a>
        <div className="container">
          <h2 className="secondary-title">Background</h2>
          <p>
            Work It is a React web application that functions as a Pomodoro
            timer. It utilizes styled components and has the functionality for
            increasing/decreasing the session time, break time, and session goal
            number, as well as pausing and resetting the timer.
          </p>
        </div>

        <div className="container">
          <h2 className="secondary-title">Tech Stack</h2>
          <p>This project uses the following technologies:</p>
          <ul>
            <li>React</li>
            <li>Styled components</li>
            <li>Flexbox</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WorkItInfo;
