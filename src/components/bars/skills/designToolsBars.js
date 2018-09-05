import React from 'react';

import ProgressBar from '../../ProgressBar';

const designTools = [
  { type: 'Adobe Illustrator', percentage: 40 },
  { type: 'Adobe Photoshop', percentage: 50 },
  { type: 'Adobe XD', percentage: 60 },
  { type: 'Lucidchart', percentage: 90 },
  { type: 'Microsoft Viseo Professional', percentage: 85 },
  { type: 'Sketch', percentage: 65 }
];

const  DesignToolsBars = () => {
  return (
    <div className="container">
      <div className="bar-container">
        <p className="skill-title">Adobe Illustrator</p>
        <ProgressBar percentage={designTools[0].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Adobe Photoshop</p>
        <ProgressBar percentage={designTools[1].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Adobe XD</p>
        <ProgressBar percentage={designTools[2].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Lucidchart</p>
        <ProgressBar percentage={designTools[3].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Microsoft Viseo Professional</p>
        <ProgressBar percentage={designTools[4].percentage} />
      </div>
      <div className="bar-container">
        <p className="skill-title">Sketch</p>
        <ProgressBar percentage={designTools[5].percentage} />
      </div>
    </div>
  );
};

export default DesignToolsBars;