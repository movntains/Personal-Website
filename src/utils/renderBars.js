import _ from 'lodash';
import React from 'react';

import ProgressBar from '../components/ProgressBar';

export default barsObject =>
  _.map(barsObject, element => (
    <div className="bar-container">
      <p className="skill-title">{element.type}</p>
      <ProgressBar percentage={element.percentage} />
    </div>
  ));
