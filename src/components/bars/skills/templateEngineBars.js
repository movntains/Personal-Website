import React from 'react';

import ProgressBar from '../../ProgressBar';

const templateEngines = [
  { type: 'EJS', percentage: 30 },
  { type: 'Pug', percentage: 70 }
];

const TemplateEngineBars = () => {
  return (
    <div className="container">
      <div className="bar-container">
        <p className="skill-title">EJS</p>
        <ProgressBar percentage={templateEngines[0].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Pug</p>
        <ProgressBar percentage={templateEngines[1].percentage} />
      </div>
    </div>
  );
};

export default TemplateEngineBars;