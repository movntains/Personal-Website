import React from 'react';

import renderBars from '../../../utils/renderBars';
import ProgressBar from '../../ProgressBar';

const UDEMY_WEB = [
  { type: 'The Complete Developer\'s Guide to MongoDB', percentage: 100 },
  { type: 'Modern React with Redux', percentage: 100 },
  { type: 'Node with React: Fullstack Web Development', percentage: 100 },
  { type: 'The Web Developer Bootcamp', percentage: 100 }
];

const UDEMY_PROGRAMMING_LANGUAGES = [
  { type: 'ES6 JavaScript: The Complete Developer\'s Guide', percentage: 100 },
  { type: 'JavaScript: Understanding the Weird Parts', percentage: 100 }
];

const UDEMY_ALGORITHMS = [
  { type: 'The Coding Interview Bootcamp: Algorithms + Data Structures', percentage: 100 }
];

const UdemyBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">Web Development</h2>
        {renderBars(UDEMY_WEB)}
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Programming Languages</h2>
        {renderBars(UDEMY_PROGRAMMING_LANGUAGES)}
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Data Structures & Algorithms</h2>
        {renderBars(UDEMY_ALGORITHMS)}
      </div>
    </div>
  );
};

export default UdemyBars;