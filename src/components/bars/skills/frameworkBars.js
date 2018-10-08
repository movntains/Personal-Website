import React from 'react';

import ProgressBar from '../../ProgressBar';

const frameworks = [
  { type: 'Bootstrap', percentage: 90 },
  { type: 'jQuery', percentage: 70 },
  { type: 'React & Redux', percentage: 65 },
  { type: 'Express', percentage: 65 },
  { type: 'Node', percentage: 70 },
  { type: 'Mocha', percentage: 50 }
];

const FrameworkBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">Front-End</h2>
        <div className="bar-container">
          <p className="skill-title">Bootstrap</p>
          <ProgressBar percentage={frameworks[0].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">jQuery</p>
          <ProgressBar percentage={frameworks[1].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">React & Redux</p>
          <ProgressBar percentage={frameworks[2].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Back-End</h2>
        <div className="bar-container">
          <p className="skill-title">Express</p>
          <ProgressBar percentage={frameworks[3].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Node.js</p>
          <ProgressBar percentage={frameworks[4].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Test</h2>
        <div className="bar-container">
          <p className="skill-title">Mocha</p>
          <ProgressBar percentage={frameworks[5].percentage} />
        </div>
      </div>
    </div>
  );
};

export default FrameworkBars;