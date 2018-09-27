import React from 'react';

import Gallery from '../Gallery';
import mountainCalling from '../../assets/images/projects/mountainCalling.png';
import lyricFinder from '../../assets/images/projects/lyricFinder.png';

const projectImages = [
  {
    id: '1',
    src: '/web/mountainCallingInfo',
    thumbnail: mountainCalling,
    caption: 'Mountain Calling',
    description: 'A React and Node.js web app for reviewing ski resorts'
  },
  {
    id: '2',
    src: '/web/lyricFinderInfo',
    thumbnail: lyricFinder,
    caption: 'Lyric Finder',
    description: 'A React web app for finding song lyrics'
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