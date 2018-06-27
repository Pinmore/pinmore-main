import React, { Component } from 'react';
import Header from './Header/Header';
import Leaderboard from './Leaderboard/Leaderboard';

class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Leaderboard />
      </div>
    )
  }
}

export default Home;