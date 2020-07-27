import * as React from 'react';
import Header from '../components/Header';
import { HEADER } from '../constants/header';

const Home = () => {
  return <Header title={HEADER.title} subtitle={HEADER.subtitle} />;
};

export default Home;
