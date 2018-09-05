import React from 'react';

import ProgressBar from '../../ProgressBar';

const databases = [
  { type: 'Microsoft SQL Server', percentage: 50 },
  { type: 'MongoDB', percentage: 70 },
  { type: 'MySQL', percentage: 50 },
  { type: 'Oracle', percentage: 75 }
];

const DatabaseBars = () => {
  return (
    <div className="container">
      <div className="bar-container">
        <p className="skill-title">Microsoft SQL Server</p>
        <ProgressBar percentage={databases[0].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">MongoDB</p>
        <ProgressBar percentage={databases[1].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">MySQL</p>
        <ProgressBar percentage={databases[2].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Oracle</p>
        <ProgressBar percentage={databases[3].percentage} />
      </div>
    </div>
  );
};

export default DatabaseBars;