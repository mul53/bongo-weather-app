import React from 'react';
import { Layout } from 'antd';
import LargeCard from '../components/largeCard';

const { Content } = Layout;

const CardDetail = ({ match }) => {
  const { params: { city } } = match;

  return (
    <Content style={{ padding: '0 200px' }}>
      <LargeCard />
    </Content>
  );
};

export default CardDetail;
