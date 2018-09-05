import React from 'react';

import ProgressBar from '../../ProgressBar';

const programmingLanguages = [
  { type: 'HTML', percentage: 75 },
  { type: 'CSS/Sass', percentage: 75 },
  { type: 'Java', percentage: 50 },
  { type: 'JavaScript', percentage: 70 },
  { type: 'SQL', percentage: 60 },
  { type: 'Swift', percentage: 50 }
];

const  ProgrammingLanguageBars = () => {
  return (
    <div className="container">
      <div className="bar-container">
        <p className="skill-title">HTML</p>
        <ProgressBar percentage={programmingLanguages[0].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">CSS/Sass</p>
        <ProgressBar percentage={programmingLanguages[1].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Java</p>
        <ProgressBar percentage={programmingLanguages[2].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">JavaScript</p>
        <ProgressBar percentage={programmingLanguages[3].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">SQL</p>
        <ProgressBar percentage={programmingLanguages[4].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Swift</p>
        <ProgressBar percentage={programmingLanguages[5].percentage} />
      </div>
    </div>
  );
};

export default ProgrammingLanguageBars;