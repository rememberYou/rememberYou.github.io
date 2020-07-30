import * as React from 'react';
import Header from '../components/Header';
import { HEADER } from '../constants/header';

const HomePage = () => {
  return <Header title={HEADER.title} subtitle={HEADER.subtitle} />;
};

export default HomePage;
