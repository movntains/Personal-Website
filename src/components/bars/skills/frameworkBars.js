import React from 'react';

import renderBars from '../../../utils/renderBars';
import ProgressBar from '../../ProgressBar';

const FRAMEWORKS_FRONTEND = [
  { type: 'Bootstrap', percentage: 90 },
  { type: 'jQuery', percentage: 70 },
  { type: 'React & Redux', percentage: 65 }
];

const FRAMEWORKS_BACKEND = [
  { type: 'Express.js', percentage: 65 },
  { type: 'Node.js', percentage: 70 }
];

const FRAMEWORKS_TEST = [
  { type: 'Mocha', percentage: 50 }
];

const FrameworkBars = () => {
  return (
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
};

export default FrameworkBars;