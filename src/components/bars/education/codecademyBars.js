import React from 'react';

import ProgressBar from '../../ProgressBar';

const codecademyCourses = [
  { type: 'Intro to JavaScript', percentage: 100 },
  { type: 'Intro to jQuery', percentage: 100 },
  { type: 'Learn React 1', percentage: 100 },
  { type: 'Learn React 2', percentage: 100 },
  { type: 'Learn CSS', percentage: 100 },
  { type: 'Learn HTML', percentage: 100 },
  { type: 'Learn Responsive Design', percentage: 100 },
  { type: 'Learn Ruby', percentage: 5 }
];

const CodecademyBars = () => {
  return (
    <div className="container">
      <div className="secondary-container">
        <h2 className="secondary-title">JavaScript</h2>
        <div className="bar-container">
          <p className="skill-title">Introduction to JavaScript</p>
          <ProgressBar percentage={codecademyCourses[0].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Introduction to jQuery</p>
          <ProgressBar percentage={codecademyCourses[1].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Learn ReactJS: Part I</p>
          <ProgressBar percentage={codecademyCourses[2].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Learn ReactJS: Part II</p>
          <ProgressBar percentage={codecademyCourses[3].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">HTML & CSS</h2>
        <div className="bar-container">
          <p className="skill-title">Learn CSS</p>
          <ProgressBar percentage={codecademyCourses[4].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Learn HTML</p>
          <ProgressBar percentage={codecademyCourses[5].percentage} />
        </div>
        <div className="bar-container">
          <p className="skill-title">Learn Responsive Design</p>
          <ProgressBar percentage={codecademyCourses[6].percentage} />
        </div>
      </div>

      <div className="secondary-container">
        <h2 className="secondary-title">Ruby</h2>
        <div className="bar-container">
          <p className="skill-title">Learn Ruby</p>
          <ProgressBar percentage={codecademyCourses[7].percentage} />
        </div>
      </div>
    </div>
  );
};

export default CodecademyBars;