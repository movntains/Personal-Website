import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Filler from './Filler';

class ProgressBar extends Component {
  render() {
    const { percentage } = this.props;

    return (
      <div className="progress-bar">
        <div className="percentage">{`${percentage}%`}</div>
        <Filler percentage={percentage} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percentage: PropTypes.number
};

ProgressBar.defaultProps = {
  percentage: 0
};

export default ProgressBar;
