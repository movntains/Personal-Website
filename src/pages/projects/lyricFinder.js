import React, { Component } from 'react';

class LyricFinderInfo extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Lyric Finder</h2>
        <a
          className="button"
          href="https://github.com/movntains/Lyric-Finder"
          target="_blank"
        >
          View Code
        </a>
        <a
          className="button"
          href="https://lyricfinder.surge.sh/"
          target="_blank"
        >
          Live Demo
        </a>
        <div className="container">
          <h2 className="secondary-title">Background</h2>
          <p>
            Lyric Finder is a React web application that uses the Musixmatch API to search for song lyrics. As there is little application state to manage, the Context API is used in lieu of Redux. HTTP GET requests are made with Axios, and Moment.js is used to format the release date of an album.
          </p>
        </div>

        <div className="container">
          <h2 className="secondary-title">Tech Stack</h2>
          <p>
            This project uses the following technologies:
          </p>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>Moment.js</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LyricFinderInfo;