import React, { Component } from 'react';

class MountainCallingInfo extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Mountain Calling</h2>
        <a
          className="button"
          href="https://github.com/movntains/Mountain-Calling-React"
          target="_blank"
        >
          View Code
        </a>
        {/* <a
          className="button"
          href="#"
          target="_blank"
        >
          Live Demo
        </a> */}
        <div className="container">
          <h2 className="secondary-title">Background</h2>
          <p>
            Mountain Calling is a web application that is meant for reviewing ski resorts. Registered users can add, edit, and delete their own resorts, as well as comment on their own resorts or on resorts posted by other users.
          </p>
          <p>
            I originally created this project with Pug, but I'm currently recreating it with React, as well as with additional features (e.g., OAuth) and a new design.
          </p>
          <p>
            A live demo of the original version can be viewed <a href="https://mountaincalling.herokuapp.com/" target="_blank">here</a>, and the code for the original version can be found <a href="https://github.com/movntains/Mountain-Calling" target="_blank">here</a>.
          </p>
        </div>

        <div className="container">
          <h2 className="secondary-title">Tech Stack</h2>
          <p>
            This project uses the following technologies:
          </p>
          <ul>
            <li>React & Redux</li>
            <li>Sass</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB & Mongoose</li>
            <li>Passport.js</li>
            <li>OAuth & cookies</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MountainCallingInfo;