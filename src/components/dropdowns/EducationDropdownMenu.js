import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import BostonUniversity from '../education/formal/BostonUniversity';
import UMDNJ from '../education/formal/UMDNJ';
import RiderUniversity from '../education/formal/RiderUniversity';
import UdemyBars from '../bars/education/UdemyBars';
import CodecademyBars from '../bars/education/CodecademyBars';
import OtherCoursesBars from '../bars/education/OtherCoursesBars';
import BooksBars from '../bars/education/BooksBars';

const options = [
  'Formal Education',
  'Udemy Courses',
  'Codecademy Courses',
  'Other Courses',
  'Books'
];

class EducationDropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'Formal Education'
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
      case 'Formal Education':
        return (
          <div>
            <BostonUniversity />
            <UMDNJ />
            <RiderUniversity />
          </div>
        );
      case 'Udemy Courses':
        return <UdemyBars />;
      case 'Codecademy Courses':
        return <CodecademyBars />;
      case 'Other Courses':
        return <OtherCoursesBars />;
      case 'Books':
        return <BooksBars />;
      default:
        return (
          <div>
            <BostonUniversity />
            <UMDNJ />
            <RiderUniversity />
          </div>
        );
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

export default EducationDropdownMenu;