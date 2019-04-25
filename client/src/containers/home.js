import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MiniCard from '../components/miniCard';
import AddCard from '../components/addCard';
import Search from './search';
import { toggleSearchUI as toggleSearchUIAction } from '../actions/searchActionCreators';
import { addCity as addCityAction } from '../actions/cityActionCreators';
import { weatherForecast } from '../api/weatherApi';

const { Content } = Layout;

class Home extends Component {
  constructor() {
    super();
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  async componentDidMount() {
    try {
      const { addCity, cities } = this.props;
      if (cities.length < 1) {
        const response = await weatherForecast('Lusaka');
        const jsonData = await response.json();

        const { list, city, weather } = jsonData;
        const data = Object.assign({}, list[0], city, weather);

        addCity(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  toggleSearch() {
    const { toggleSearchUI } = this.props;
    toggleSearchUI();
  }

  render() {
    const { cities } = this.props;
    const cards = cities && cities.map(({ main, name, weather }) => {
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
          { (cities.length < 4)
            ? (
              <Col span={6}>
                <AddCard toggleSearch={this.toggleSearch} />
              </Col>
            )
            : undefined
          }
        </Row>
        <Search />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.city.cities,
});

const mapDispatchToProps = dispatch => ({
  toggleSearchUI() {
    return dispatch(toggleSearchUIAction());
  },
  addCity(city) {
    return dispatch(addCityAction(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
