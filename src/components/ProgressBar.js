import React, { Component } from 'react';

const Filler = props => {
  return (
    <div
      className="filler"
      style={{ width: `${props.percentage}%`}}
    />
  );
};

class ProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0
    };
  }

  render() {
    return (
      <div className="progress-bar">
        <div className="percentage">{`${this.props.percentage}%`}</div>
        <Filler percentage={this.props.percentage} />
      </div>
    );
  }
}

export default ProgressBar;