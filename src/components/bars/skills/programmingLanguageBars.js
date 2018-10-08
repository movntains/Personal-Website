import React from 'react';

import renderBars from '../../../utils/renderBars';
import ProgressBar from '../../ProgressBar';

const PROGRAMMING_LANGUAGES = [
  { type: 'HTML', percentage: 75 },
  { type: 'CSS/Sass', percentage: 75 },
  { type: 'Java', percentage: 50 },
  { type: 'JavaScript', percentage: 70 },
  { type: 'SQL', percentage: 60 },
  { type: 'Swift', percentage: 50 }
];

const ProgrammingLanguageBars = () => {
  return (
    <div className="container">
      {renderBars(PROGRAMMING_LANGUAGES)}
    </div>
  );
};

export default ProgrammingLanguageBars;