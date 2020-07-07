import * as React from 'react';

import Header from '../components/Header';
import { subtitle, title } from '../constants/header';

class Home extends React.Component {
  render() {
    return <Header title={title} subtitle={subtitle} />;
  }
}

export default Home;
