import React from 'react';
import styled from 'styled-components';

import WeatherIcon from './weatherIcon';
import Icon from './icon';
import iconHelper from '../util/iconHelper';

const MiniCard = ({
  city, description, mainTemp, minTemp, maxTemp,
}) => {
  const iconName = iconHelper(description);

  return (
    <CardWrapper>
      <CardHeader>
        { city }
      </CardHeader>
      <CardBody>
        <WeatherIcon name={iconName} height="180px" width="auto" />
        <MainTemp>
          { mainTemp }
&deg;
        </MainTemp>
        <Description>{ description }</Description>
        <CardRow>
          <MiniTemp>
            <Icon name="min-arrow" />
            <MiniTempValue>
              { minTemp }
            </MiniTempValue>
            <MiniTempLabel color="#00ff9f">
            Min
            </MiniTempLabel>
          </MiniTemp>
          <MiniTemp>
            <Icon name="max-arrow" />
            <MiniTempValue>
              { maxTemp }
            </MiniTempValue>
            <MiniTempLabel color="#ff0000">
            Max
            </MiniTempLabel>
          </MiniTemp>
        </CardRow>
      </CardBody>
    </CardWrapper>
  );
};

export const CardWrapper = styled.div`
font-family: "Segoe UI Light";
font-size: 16px;
padding: 20px;
box-shadow: 0 0 30px rgba(0, 17, 255, 0.1);
background-color: #ffffff;
border-radius: 20px;
color: #020202;
line-height: 1;
height: 480px;
`;

export const CardHeader = styled.div`
text-align: center;
text-transform: uppercase;
letter-spacing: 3px;
margin-bottom: 30px;
`;

export const CardBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const MainTemp = styled.h1`
font-size: 60px;
font-weight: 500;
margin: 0px;
margin-bottom: 20px;
`;

const Description = styled.div`
text-transform: uppercase;
color: #432c85;
margin-bottom: 20px;
`;

const CardRow = styled.div`
display: flex;
justify-content: space-between;
align-self: baseline;
width: 100%;
`;

const MiniTemp = styled.div`
text-align: center;
`;

const MiniTempValue = styled.div`
font-size: 30px;
padding: 5px 0;
`;

const MiniTempLabel = styled.div`
color: ${({ color }) => color};
`;

export default MiniCard;
