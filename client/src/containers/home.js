import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import MiniCard from '../components/miniCard';
import AddCard from '../components/addCard';

const { Content } = Layout;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cities: ['ndola'],
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=new york&units=metric&appid=849648ec9f395dbb3891efabbf3f3070');
      const jsonData = await response.json();

      const {
        list,
        city,
        weather,
      } = jsonData;

      const data = Object.assign({}, list[0], city, weather);

      this.setState({
        data: [data],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { data } = this.state;
    const cards = data.map(({ main, name, weather }) => {
      const { main: weatherDescription } = weather[0];
      const { temp: mainTemp, temp_min: minTemp, temp_max: maxTemp } = main;

      return (
        <Col span="6">
          <Link to={`location/${name}`}>
            <MiniCard
              city={name}
              description={weatherDescription}
              mainTemp={mainTemp}
              minTemp={minTemp}
              maxTemp={maxTemp}
            />
          </Link>
        </Col>
      );
    });


    return (
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={30} type="flex">
          { cards }
          <Col span={6}>
            <AddCard />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Home;
