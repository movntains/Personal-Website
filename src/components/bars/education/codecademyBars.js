import React from 'react';

import renderBars from '../../../utils/renderBars';
import ProgressBar from '../../ProgressBar';

const CODECADEMY_JAVASCRIPT = [
  { type: 'Introduction to JavaScript', percentage: 100 },
  { type: 'Introduction to jQuery', percentage: 100 },
  { type: 'Learn ReactJS: Part I', percentage: 100 },
  { type: 'Learn ReactJS: Part II', percentage: 100 }
];

const CODECADEMY_HTML_CSS = [
  { type: 'Learn CSS', percentage: 100 },
  { type: 'Learn HTML', percentage: 100 },
  { type: 'Learn Responsive Design', percentage: 100 }
];

const CODECADEMY_RUBY = [
  { type: 'Learn Ruby', percentage: 5 }
];

const CodecademyBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">JavaScript</h2>
        {renderBars(CODECADEMY_JAVASCRIPT)}
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">HTML & CSS</h2>
        {renderBars(CODECADEMY_HTML_CSS)}
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Ruby</h2>
        {renderBars(CODECADEMY_RUBY)}
      </div>
    </div>
  );
};

export default CodecademyBars;