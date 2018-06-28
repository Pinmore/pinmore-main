import React, { Component } from 'react';
import Header from './Header/Header';
import Leaderboard from './Leaderboard/Leaderboard';
import Rules from './Rules/Rules';

class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Leaderboard />
        <Rules />
      </div>
    )
  }
}

export default Home;