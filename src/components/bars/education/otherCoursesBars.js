import React from 'react';

import renderBars from '../../../utils/renderBars';

const OTHER_JAVASCRIPT = [{ type: 'Practical JavaScript', percentage: 100 }];

const OtherCoursesBars = () => (
  <div className="container">
    <div className="secondary-container">
      <h2 className="secondary-title">JavaScript</h2>
      {renderBars(OTHER_JAVASCRIPT)}
    </div>
  </div>
);

export default OtherCoursesBars;
