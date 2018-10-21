import React from 'react';

import renderBars from '../../../utils/renderBars';

const TEMPLATE_ENGINES = [
  { type: 'EJS', percentage: 30 },
  { type: 'Pug', percentage: 70 }
];

const TemplateEngineBars = () => (
  <div className="container">{renderBars(TEMPLATE_ENGINES)}</div>
);

export default TemplateEngineBars;
