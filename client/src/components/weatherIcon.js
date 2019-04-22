import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import cloudy from '../images/cloudy_icon.svg';
import rain from '../images/Rain_Icon.png';
import storm from '../images/Strom_icon.svg';
import sun from '../images/Sun_Icon.svg';
import snow from '../images/Snowing_Icon.png';

const getIcon = (name) => {
  switch (name) {
    case 'cloudy':
      return cloudy;
    case 'rain':
      return rain;
    case 'snow':
      return snow;
    case 'storm':
      return storm;
    case 'sun':
      return sun;
    default:
      return sun;
  }
};

const WeatherIcon = ({ name, width, ...props }) => (
  <Icon src={getIcon(name)} width={width} {...props} />
);

WeatherIcon.defaultProps = {
  width: '180px',
};

WeatherIcon.propTypes = {
  name: PropTypes.oneOf(['cloudy', 'rain', 'snow', 'storm', 'sun']).isRequired,
  width: PropTypes.string,
};

const Icon = styled.img`
margin-bottom: 20px;
`;

export default WeatherIcon;
