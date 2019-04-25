import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import WeatherIcon from './weatherIcon';
import iconHelper from '../util/iconHelper';

const LargeCard = ({ name, dailyData }) => {
  const [current, ...forecast] = dailyData;
  const { mainTemp, description } = current;

  const dailyCards = forecast.map((
    {
      day,
      mainTemp: dailyMainTemp,
      description: dailyDescription,
    },
  ) => (
    <Col span="4">
      <DayTemp>
        <DayTempDay>
          { day }
        </DayTempDay>
        <WeatherIcon style={{ marginBottom: '10px' }} name={iconHelper(dailyDescription)} height="65px" width="auto" />
        <DayTempValue>
          {dailyMainTemp}
&deg;
        </DayTempValue>
        <DayTempDescription>
          { dailyDescription }
        </DayTempDescription>
      </DayTemp>
    </Col>
  ));

  return (
    <CardWrapper>
      <CardHeader>
        <Row gutter="16" type="flex" align="middle" justify="center">
          <Col span="14">
            <LeftCol>
              <WeatherIcon name={iconHelper(description)} width="auto" height="140px" />
              <div style={{ paddingLeft: '30px' }}>
                <MainTemp>
                  { mainTemp }
&deg;
                </MainTemp>
                <MainDescription>
                  { description }
                </MainDescription>
              </div>
            </LeftCol>
          </Col>
          <Col span="10">
            <RightCol>
              <Location>
                { name }
              </Location>
              <Rectangle />
            </RightCol>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <FiveDayTemp>
          <Row gutter="16" type="flex" justify="center">
            { dailyCards }
          </Row>
        </FiveDayTemp>
      </CardBody>
    </CardWrapper>
  );
};

const Rectangle = styled.div`
width: 60px;
height: 6px;
border-radius: 90px;
background-color: #ffffff;
`;

const CardBody = styled.div`
padding: 20px 0;
background-color: white;
color: black;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
`;

const FiveDayTemp = styled.div`
padding: 10px 0;
line-height: 1;
`;

const DayTemp = styled.div`
text-align: center;
`;

const DayTempDay = styled.div`
font-family: "Segoe UI SemiBold";
font-size: 22px;
color: #707070;
margin-bottom: 10px;
text-transform: uppercase;
`;

const DayTempValue = styled.div`
font-size: 30px;
color: #371662;
margin-bottom: 10px;
`;

const DayTempDescription = styled.div`
font-size: 14px;
letter-spacing: 3px;
color: #371662;
text-transform: uppercase;
`;

const CardWrapper = styled.div`
font-family: "Segoe UI Light";
font-size: 16px;
color: white;
border-radius: 10px;
width: 70%;
`;

const CardHeader = styled.div`
padding: 40px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
background: rgb(133,133,255);
background: linear-gradient(180deg, rgba(133,133,255,.75) 0%, rgba(255,255,255,.75) 100%); 
`;

const LeftCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
line-height: 1;
`;

const RightCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const MainTemp = styled.div`
font-family: "Segoe UI Regular";
font-size: 65px;
letter-spacing: 8px;
margin-bottom: 5px;
`;

const MainDescription = styled.div`
font-size: 20px;
letter-spacing: 3px;
text-transform: uppercase;
`;

const Location = styled.div`
font-family: "Segoe UI SemiBold";
text-align: center;
font-size: 26px;
letter-spacing: 3px;
margin-bottom: 10px;
text-transform: uppercase;
`;

export default LargeCard;
