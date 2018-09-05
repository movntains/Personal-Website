import React from 'react';

import ProgressBar from '../../ProgressBar';

const otherTools = [
  { type: 'Git', percentage: 85 },
  { type: 'Gulp', percentage: 50 },
  { type: 'Heroku', percentage: 70 },
  { type: 'npm', percentage: 85 }
];

const  OtherToolsBars = () => {
  return (
    <div className="container">
      <div className="bar-container">
        <p className="skill-title">Git</p>
        <ProgressBar percentage={otherTools[0].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Gulp</p>
        <ProgressBar percentage={otherTools[1].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Heroku</p>
        <ProgressBar percentage={otherTools[2].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">npm</p>
        <ProgressBar percentage={otherTools[3].percentage} />
      </div>
    </div>
  );
};

export default OtherToolsBars;