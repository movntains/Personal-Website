import React from 'react';

import ProgressBar from '../../ProgressBar';

const udemyCourses = [
  { type: 'CDGM', percentage: 100 },
  { type: 'MRWR', percentage: 100 },
  { type: 'NWR', percentage: 66 },
  { type: 'WDB', percentage: 100 },
  { type: 'ES6 JavaScript', percentage: 100 },
  { type: 'JavaScript Weird', percentage: 100 },
  { type: 'CIB', percentage: 100 }
];

const UdemyBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">Web Development</h2>
        <div className="bar-container">
          <p className="skill-title">The Complete Developer's Guide to MongoDB</p>
          <ProgressBar percentage={udemyCourses[0].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Modern React with Redux</p>
          <ProgressBar percentage={udemyCourses[1].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Node with React: Fullstack Web Development</p>
          <ProgressBar percentage={udemyCourses[2].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">The Web Developer Bootcamp</p>
          <ProgressBar percentage={udemyCourses[3].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Programming Languages</h2>
        <div className="bar-container">
          <p className="skill-title">ES6 JavaScript: The Complete Developer's Guide</p>
          <ProgressBar percentage={udemyCourses[4].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">JavaScript: Understanding the Weird Parts</p>
          <ProgressBar percentage={udemyCourses[5].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Data Structures & Algorithms</h2>
        <div className="bar-container">
          <p className="skill-title">The Coding Interview Bootcamp: Algorithms + Data Structures</p>
          <ProgressBar percentage={udemyCourses[6].percentage} />
        </div>
      </div>
    </div>
  );
};

export default UdemyBars;