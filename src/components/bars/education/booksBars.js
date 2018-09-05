import React from 'react';

import ProgressBar from '../../ProgressBar';

const books = [
  { type: 'JavaScript & jQuery', percentage: 50 },
  { type: 'YDKJS: Up & Going', percentage: 100 },
  { type: 'YDKJS: Scope & Closures', percentage: 36 },
  { type: 'WAHH', percentage: 18 }
];

const BooksBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">JavaScript</h2>
        <div className="bar-container">
          <p className="skill-title">JavaScript & jQuery: Interactive Front-End Web Development</p>
          <ProgressBar percentage={books[0].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">You Don't Know JS: Up & Going</p>
          <ProgressBar percentage={books[1].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">You Don't Know JS: Scope & Closures</p>
          <ProgressBar percentage={books[2].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Security</h2>
        <div className="bar-container">
          <p className="skill-title">The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws</p>
          <ProgressBar percentage={books[3].percentage} />
        </div>
      </div>
    </div>
  );
};

export default BooksBars;