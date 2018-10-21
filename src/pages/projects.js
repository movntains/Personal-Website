import React, { Component } from 'react';

import ProjectsDropdownMenu from '../components/dropdowns/ProjectsDropDownMenu';

class Projects extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Projects</h2>
        <ProjectsDropdownMenu />
      </div>
    );
  }
}

export default Projects;
