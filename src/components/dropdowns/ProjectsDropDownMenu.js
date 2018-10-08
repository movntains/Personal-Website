import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import ReactProjects from '../projects/reactProjects';
import NodeProjects from '../projects/nodeProjects';
import MongoProjects from '../projects/mongoProjects';

const options = [
  'React',
  'Node.js',
  'MongoDB'
];

class ProjectsDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'React'
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
      case 'React':
        return <ReactProjects />;
      case 'Node.js':
        return <NodeProjects />;
      case 'MongoDB':
        return <MongoProjects />;
      default:
        return <ReactProjects />;
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