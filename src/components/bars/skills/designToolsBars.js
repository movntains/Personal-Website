import React from 'react';

import renderBars from '../../../utils/renderBars';

const DESIGN_TOOLS = [
  { type: 'Adobe Illustrator', percentage: 40 },
  { type: 'Adobe Photoshop', percentage: 50 },
  { type: 'Adobe XD', percentage: 60 },
  { type: 'Lucidchart', percentage: 90 },
  { type: 'Microsoft Viseo Professional', percentage: 85 },
  { type: 'Sketch', percentage: 65 }
];

const DesignToolsBars = () => (
  <div className="container">{renderBars(DESIGN_TOOLS)}</div>
);

export default DesignToolsBars;
