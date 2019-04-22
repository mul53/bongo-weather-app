import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import WeatherIcon from './weatherIcon';

const LargeCard = () => (
  <CardWrapper>
    <CardHeader>
      <Row gutter="16" type="flex" align="middle">
        <Col span="12">
          <LeftCol>
            <WeatherIcon name="cloudy" width="140px" />
            <div style={{ paddingLeft: '10px' }}>
              <MainTemp>
                15&deg;
              </MainTemp>
              <MainDescription>
                cloudy
              </MainDescription>
            </div>
          </LeftCol>
        </Col>
        <Col span="12">
          <RightCol>
            <Location>
              moscow
            </Location>
            <Rectangle />
          </RightCol>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <FiveDayTemp>
        <Row gutter="16" type="flex" justify="center">
          <Col span="4">
            <DayTemp>
              <DayTempDay>
                Mon
              </DayTempDay>
              <WeatherIcon style={{ marginBottom: '10px' }} name="rain" height="80px" width="auto" />
              <DayTempValue>
                9&deg;
              </DayTempValue>
              <DayTempDescription>
                raining
              </DayTempDescription>
            </DayTemp>
          </Col>
          <Col span="4">
            <DayTemp>
              <DayTempDay>
                tue
              </DayTempDay>
              <WeatherIcon name="sun" height="80px" width="auto" style={{ marginBottom: '10px' }} />
              <DayTempValue>
                15&deg;
              </DayTempValue>
              <DayTempDescription>
                sunny
              </DayTempDescription>
            </DayTemp>
          </Col>
          <Col span="4">
            <DayTemp>
              <DayTempDay>
                wed
              </DayTempDay>
              <WeatherIcon name="cloudy" height="80px" width="auto" style={{ marginBottom: '10px' }} />
              <DayTempValue>
                11&deg;
              </DayTempValue>
              <DayTempDescription>
                cloudy
              </DayTempDescription>
            </DayTemp>
          </Col>
          <Col span="4">
            <DayTemp>
              <DayTempDay>
                thu
              </DayTempDay>
              <WeatherIcon name="storm" height="80px" width="auto" style={{ marginBottom: '10px' }} />
              <DayTempValue>
                7&deg;
              </DayTempValue>
              <DayTempDescription>
                storm
              </DayTempDescription>
            </DayTemp>
          </Col>
          <Col span="4">
            <DayTemp>
              <DayTempDay>
                Fri
              </DayTempDay>
              <WeatherIcon name="snow" height="80px" width="auto" style={{ marginBottom: '10px' }} />
              <DayTempValue>
                -18&deg;
              </DayTempValue>
              <DayTempDescription>
                snowing
              </DayTempDescription>
            </DayTemp>
          </Col>
        </Row>
      </FiveDayTemp>
    </CardBody>
  </CardWrapper>
);

const Rectangle = styled.div`
width: 90px;
height: 3px;
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
font-family: "Segoe UI SemiBold";
letter-spacing: 3px;
color: #371662;
text-transform: uppercase;
`;

const CardWrapper = styled.div`
font-family: "Segoe UI Light";
font-size: 16px;
color: white;
margin: 20px 0;
border-radius: 10px;
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
`;

const RightCol = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const MainTemp = styled.div`
font-family: "Segoe UI SemiBold";
font-size: 60px;
letter-spacing: 9.5px;
`;

const MainDescription = styled.div`
font-family: "Segoe UI SemiBold";
font-size: 24px;
letter-spacing: 3px;
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
