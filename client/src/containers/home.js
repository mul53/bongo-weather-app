import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import MiniCard from '../components/miniCard';

const { Content } = Layout;

const Home = () => (
  <Content style={{ padding: '0 50px' }}>
    <Row gutter="30">
      <Col span="6">
        <Link to="/detail">
          <MiniCard />
        </Link>
      </Col>
      <Col span="6">
        <MiniCard />
      </Col>
      <Col span="6">
        <MiniCard />
      </Col>
      <Col span="6">
        <MiniCard />
      </Col>
    </Row>
  </Content>
);

export default Home;
