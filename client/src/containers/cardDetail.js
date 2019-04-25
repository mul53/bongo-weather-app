import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import LargeCard from '../components/largeCard';
import filterWeatherData from '../util/dataFilter';

import ArrowIcon from '../images/Group_29.svg';

const { Content } = Layout;

class CardDetail extends Component {
  constructor() {
    super();
    this.state = {
      city: {},
    };
    this.goBack = this.goBack.bind(this);
  }

  async componentDidMount() {
    try {
      const { match } = this.props;
      const { params: { city } } = match;
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=849648ec9f395dbb3891efabbf3f3070`);
      const jsonData = await response.json();

      const {
        list,
        city: { name },
      } = jsonData;

      console.log(jsonData);


      const data = {
        name,
        dailyData: filterWeatherData(list),
      };

      this.setState({
        city: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { city } = this.state;
    const { name, dailyData } = city;
    return (
      <Content style={{ padding: '0 100px' }}>
        {dailyData
          && (
          <Main>
            <Button onClick={this.goBack} />
            <LargeCard dailyData={dailyData} name={name} />
          </Main>
          )}
      </Content>
    );
  }
}

const Main = styled.div`
display: flex;
`;

const Button = styled.button`
width: 70px;
height: 70px;
background-color: #542c85;
border: 0px;
border-radius: 50%;
background-image: url(${ArrowIcon});
background-repeat: no-repeat;
background-position: center;
margin-right: 50px;

&:hover {
  cursor: pointer;
}
`;

export default CardDetail;
