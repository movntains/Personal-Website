import React, { Component } from 'react';

class LingoInfo extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Lingo</h2>
        <a
          className="button"
          href="https://github.com/movntains/Lingo"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Code
        </a>
        <a
          className="button"
          href="https://lingo.surge.sh/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Live Demo
        </a>
        <div className="container">
          <h2 className="secondary-title">Background</h2>
          <p>
            Lingo is a React web application that uses the Yandex Translate API
            to translate words and/or phrases. HTTP GET requests are made with
            Axios.
          </p>
        </div>

        <div className="container">
          <h2 className="secondary-title">Tech Stack</h2>
          <p>This project uses the following technologies:</p>
          <ul>
            <li>React</li>
            <li>SCSS</li>
            <li>Flexbox</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LingoInfo;
