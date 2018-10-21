import React from 'react';

import renderBars from '../../../utils/renderBars';

const DATABASES = [
  { type: 'Microsoft SQL Server', percentage: 50 },
  { type: 'MongoDB', percentage: 70 },
  { type: 'MySQL', percentage: 50 },
  { type: 'Oracle', percentage: 75 }
];

const DatabaseBars = () => (
  <div className="container">{renderBars(DATABASES)}</div>
);

export default DatabaseBars;
