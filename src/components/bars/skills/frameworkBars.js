import React from 'react';

import renderBars from '../../../utils/renderBars';

const FRAMEWORKS_FRONTEND = [
  { type: 'Bootstrap', percentage: 90 },
  { type: 'jQuery', percentage: 70 },
  { type: 'Next.js', percentage: 50 },
  { type: 'React', percentage: 75 },
  { type: 'Redux', percentage: 70 }
];

const FRAMEWORKS_BACKEND = [
  { type: 'Express.js', percentage: 65 },
  { type: 'Node.js', percentage: 70 }
];

const FRAMEWORKS_TEST = [{ type: 'Mocha', percentage: 50 }];

const FrameworkBars = () => (
  <div className="container">
    <div className="secondary-container">
      <h2 className="secondary-title">Front-End</h2>
      {renderBars(FRAMEWORKS_FRONTEND)}
    </div>

    <div className="secondary-container">
      <h2 className="secondary-title">Back-End</h2>
      {renderBars(FRAMEWORKS_BACKEND)}
    </div>

    <div className="secondary-container">
      <h2 className="secondary-title">Test</h2>
      {renderBars(FRAMEWORKS_TEST)}
    </div>
  </div>
);

export default FrameworkBars;
