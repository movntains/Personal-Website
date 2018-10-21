import React from 'react';

import renderBars from '../../../utils/renderBars';

const OTHER_TOOLS = [
  { type: 'Git', percentage: 85 },
  { type: 'Gulp', percentage: 50 },
  { type: 'Heroku', percentage: 70 },
  { type: 'npm', percentage: 85 }
];

const OtherToolsBars = () => (
  <div className="container">{renderBars(OTHER_TOOLS)}</div>
);

export default OtherToolsBars;
