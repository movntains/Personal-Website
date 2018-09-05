import React, { Component } from 'react';
import Link from 'gatsby-link';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;