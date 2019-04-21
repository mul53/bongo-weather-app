import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout, Row, Col } from 'antd';

import MiniCard from './components/miniCard';
import LargeCard from './components/largeCard';

const { Content } = Layout;

const App = () => (
  <Content style={{ padding: '0 50px' }}>
    <Row gutter="30">
      <Col span="6">
        <MiniCard />
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
    <Row>
      <LargeCard />
    </Row>
  </Content>
);

export default hot(App);
