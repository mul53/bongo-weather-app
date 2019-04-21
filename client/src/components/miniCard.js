import React from 'react';
import styled from 'styled-components';

import minArrow from '../images/Min_Arrow.png';
import WeatherIcon from './weatherIcon';

const MiniCard = () => (
  <CardWrapper>
    <CardHeader>
      tunisia
    </CardHeader>
    <CardBody>
      <WeatherIcon name="cloudy" />
      <MainTemp>20&deg;</MainTemp>
      <Description>cloudy</Description>
      <CardRow>
        <MiniTemp>
          <img src={minArrow} alt="min arrow" />
          <MiniTempValue>
            -18
          </MiniTempValue>
          <MiniTempLabel>
            Min
          </MiniTempLabel>
        </MiniTemp>
        <MiniTemp>
          <img src={minArrow} alt="max arrow" />
          <MiniTempValue>
            25
          </MiniTempValue>
          <MiniTempLabel>
            Max
          </MiniTempLabel>
        </MiniTemp>
      </CardRow>
    </CardBody>
  </CardWrapper>
);

const CardWrapper = styled.div`
font-family: "Segoe UI Light";
font-size: 16px;
padding: 20px;
box-shadow: 0 0 30px rgba(0, 17, 255, 0.1);
background-color: #ffffff;
border-radius: 20px;
line-height: 1;
`;

const CardHeader = styled.div`
text-align: center;
text-transform: uppercase;
letter-spacing: 3px;
color: #020202;
margin-bottom: 30px;
`;

const CardBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const MainTemp = styled.h1`
font-size: 64px;
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
color: #ff0000;
`;

export default MiniCard;