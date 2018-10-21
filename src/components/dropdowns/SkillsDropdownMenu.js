import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import ProgrammingLanguageBars from '../bars/skills/programmingLanguageBars';
import FrameworkBars from '../bars/skills/frameworkBars';
import DatabaseBars from '../bars/skills/databaseBars';
import TemplateEngineBars from '../bars/skills/templateEngineBars';
import DesignToolsBars from '../bars/skills/designToolsBars';
import OtherToolsBars from '../bars/skills/otherToolsBars';

const options = [
  'Programming Languages',
  'Frameworks & Libraries',
  'Databases',
  'Template Engines',
  'Design Tools',
  'Other Tools'
];

class SkillsDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Programming Languages'
    };

    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  renderContent() {
    const { selected } = this.state;

    switch (selected.label) {
      case null:
        return;
      case 'Programming Languages':
        return <ProgrammingLanguageBars />;
      case 'Frameworks & Libraries':
        return <FrameworkBars />;
      case 'Databases':
        return <DatabaseBars />;
      case 'Template Engines':
        return <TemplateEngineBars />;
      case 'Design Tools':
        return <DesignToolsBars />;
      case 'Other Tools':
        return <OtherToolsBars />;
      default:
        return <ProgrammingLanguageBars />;
    }
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={selected}
        />
        <div className="dropdown-results">{this.renderContent()}</div>
      </div>
    );
  }
}

export default SkillsDropdownMenu;
