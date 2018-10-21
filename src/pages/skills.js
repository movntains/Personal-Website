import React, { Component } from 'react';

import SkillsDropdownMenu from '../components/dropdowns/SkillsDropdownMenu';

class Skills extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Skills</h2>
        <SkillsDropdownMenu />
      </div>
    );
  }
}

export default Skills;
