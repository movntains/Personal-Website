import React from 'react';

import ProgressBar from '../../ProgressBar';

const otherCourses = [
  { type: 'Practical JavaScript', percentage: 100 }
];

const OtherCoursesBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">JavaScript</h2>
        <div className="bar-container">
          <p className="skill-title">Practical JavaScript</p>
          <ProgressBar percentage={otherCourses[0].percentage} />
        </div>
      </div>
    </div>
  );
};

export default OtherCoursesBars;