import _ from 'lodash';
import React from 'react';

import ProgressBar from '../components/ProgressBar';

export default barsObject => {
  return _.map(barsObject, element => {
    return (
      <div className="bar-container">
        <p className="skill-title">
          {element.type}
        </p>
        <ProgressBar percentage={element.percentage} />
      </div>
    );
  });
};