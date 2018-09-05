import React from 'react';

import Gallery from '../Gallery';
import mountainCalling from '../../assets/images/projects/mountainCalling.png';

const projectImages = [
  {
    id: '1',
    src: '/web/mountainCallingInfo',
    thumbnail: mountainCalling,
    caption: 'Mountain Calling',
    description: 'A React and Node.js web app for reviewing ski resorts'
  }
];

const WebProjects = () => {
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

export default WebProjects;