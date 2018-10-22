import React from 'react';

import Gallery from '../Gallery';
import mountainCalling from '../../assets/images/projects/mountainCalling.svg';
import lyricFinder from '../../assets/images/projects/lyricFinder.svg';
import workIt from '../../assets/images/projects/workIt.svg';
import lingo from '../../assets/images/projects/lingo.svg';

const projectImages = [
  {
    id: '1',
    src: '/projects/mountainCalling',
    thumbnail: mountainCalling,
    caption: 'Mountain Calling',
    description: 'A React and Node.js app for reviewing ski resorts'
  },
  {
    id: '2',
    src: '/projects/lyricFinder',
    thumbnail: lyricFinder,
    caption: 'Lyric Finder',
    description: 'A React app for finding song lyrics'
  },
  {
    id: '3',
    src: '/projects/workIt',
    thumbnail: workIt,
    caption: 'Work It',
    description: 'A React Pomodoro timer'
  },
  {
    id: '4',
    src: '/projects/lingo',
    thumbnail: lingo,
    caption: 'Lingo',
    description: 'A React translation app'
  }
];

const ReactProjects = () => (
  <div className="container">
    <Gallery
      images={projectImages.map(
        ({ id, src, thumbnail, caption, description }) => ({
          id,
          src,
          thumbnail,
          caption,
          description
        })
      )}
    />
  </div>
);

export default ReactProjects;
