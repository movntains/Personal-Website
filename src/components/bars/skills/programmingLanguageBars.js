import React from 'react';

import renderBars from '../../../utils/renderBars';

const PROGRAMMING_LANGUAGES = [
  { type: 'HTML', percentage: 75 },
  { type: 'CSS/Sass', percentage: 75 },
  { type: 'GraphQL', percentage: 50 },
  { type: 'Java', percentage: 50 },
  { type: 'JavaScript', percentage: 70 },
  { type: 'SQL', percentage: 60 }
];

const ProgrammingLanguageBars = () => (
  <div className="container">{renderBars(PROGRAMMING_LANGUAGES)}</div>
);

export default ProgrammingLanguageBars;
