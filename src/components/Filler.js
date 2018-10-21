import React from 'react';
import PropTypes from 'prop-types';

const Filler = props => {
  const { percentage } = props;

  return <div className="filler" style={{ width: `${percentage}%` }} />;
};

Filler.propTypes = {
  percentage: PropTypes.number
};

export default Filler;
