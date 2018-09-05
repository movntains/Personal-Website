import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import WebProjects from '../projects/webProjects';
import MacOSProjects from '../projects/macOSProjects';

const options = [
  'Web',
  'macOS',
  'iOS'
];

class ProjectsDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Web'
    };

    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  renderContent() {
    switch(this.state.selected.label) {
      case null:
        return;
      case 'Web':
        return <WebProjects />;
      case 'macOS':
        return <MacOSProjects />;
      case 'iOS':
        return <div className="container">iOS projects coming soon.</div>;
      default:
        return <WebProjects />;
    }
  }

  render() {
    const defaultOption = this.state.selected;

    return(
      <div>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} />
        <div className="dropdown-results">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default ProjectsDropdownMenu;