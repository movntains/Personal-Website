import React from 'react';

import renderBars from '../../../utils/renderBars';

const BOOKS_JAVASCRIPT = [
  {
    type: 'JavaScript & jQuery: Interactive Front-End Web Development',
    percentage: 50
  },
  { type: "You Don't Know JS: Up & Going", percentage: 100 },
  { type: "You Don't Know JS: Scope & Closures", percentage: 36 }
];

const BOOKS_SECURITY = [
  {
    type:
      "The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws",
    percentage: 18
  }
];

const BooksBars = () => (
  <div className="container">
    <div className="secondary-container">
      <h2 className="secondary-title">JavaScript</h2>
      {renderBars(BOOKS_JAVASCRIPT)}
    </div>

    <div className="secondary-container">
      <h2 className="secondary-title">Security</h2>
      {renderBars(BOOKS_SECURITY)}
    </div>
  </div>
);

export default BooksBars;
