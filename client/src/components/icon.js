import React from 'react';
import PropTypes from 'prop-types';

import maxArrow from '../images/Max_Arrow.svg';
import minArrow from '../images/Min_Arrow.svg';

const getIcon = (name) => {
  switch (name) {
    case 'min-arrow':
      return minArrow;
    case 'max-arrow':
      return maxArrow;
    default:
      return '';
  }
};

const Icon = ({ name }) => <img src={getIcon(name)} alt={name} />;

Icon.propTypes = {
  name: PropTypes.oneOf(['min-arrow', 'max-arrow']).isRequired,
};


export default Icon;
