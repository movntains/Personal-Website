import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import ProgrammingLanguageBars from '../bars/skills/ProgrammingLanguageBars';
import FrameworkBars from '../bars/skills/FrameworkBars';
import DatabaseBars from '../bars/skills/DatabaseBars';
import TemplateEngineBars from '../bars/skills/TemplateEngineBars';
import DesignToolsBars from '../bars/skills/DesignToolsBars';
import OtherToolsBars from '../bars/skills/OtherToolsBars';

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
    switch(this.state.selected.label) {
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

export default SkillsDropdownMenu;