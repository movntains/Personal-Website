import React, { Component } from 'react';

import EducationDropdownMenu from '../components/dropdowns/EducationDropdownMenu';

class Education extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="page-title">Education</h2>
        <EducationDropdownMenu />
      </div>
    );
  }
}

export default Education;
