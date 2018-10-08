import React from 'react';

import renderBars from '../../../utils/renderBars';
import ProgressBar from '../../ProgressBar';

const TEMPLATE_ENGINES = [
  { type: 'EJS', percentage: 30 },
  { type: 'Pug', percentage: 70 }
];

const TemplateEngineBars = () => {
  return (
    <div className="container">
      {renderBars(TEMPLATE_ENGINES)}
    </div>
  );
};

export default TemplateEngineBars;