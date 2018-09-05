import React from 'react';

import Gallery from '../Gallery';
import slackClone from '../../assets/images/projects/slackClone.png';

const projectImages = [
  {
    id: '1',
    src: '/macOS/slackCloneInfo',
    thumbnail: slackClone,
    caption: 'Slack Clone',
    description: 'A macOS Slack clone written in Swift'
  }
];

const MacOSProjects = () => {
  return (
    <div className="container">
      <Gallery
        images={projectImages.map(({ id, src, thumbnail, caption, description }) => ({
            src,
            thumbnail,
            caption,
            description
          })
        )}
      />
    </div>
  );
};

export default MacOSProjects;