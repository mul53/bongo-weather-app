import React, { Component } from 'react';
import { Layout } from 'antd';

import LargeCard from '../components/largeCard';
import filterWeatherData from '../util/dataFilter';

const { Content } = Layout;

class CardDetail extends Component {
  constructor() {
    super();
    this.state = {
      city: {},
    };
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

  render() {
    const { city } = this.state;
    const { name, dailyData } = city;
    return (
      <Content style={{ padding: '0 200px' }}>
        {dailyData && <LargeCard dailyData={dailyData} name={name} />}
      </Content>
    );
  }
}

export default CardDetail;
